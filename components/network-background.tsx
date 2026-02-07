"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseX: number;
  baseY: number;
}

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const isMobile = window.innerWidth < 768;
    const nodeCount = isMobile ? 50 : 80;
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      nodes.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        baseX: x,
        baseY: y,
      });
    }
    nodesRef.current = nodes;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("resize", resizeCanvas);

    let lastTime = 0;
    const targetFPS = 45;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;

      if (deltaTime >= frameInterval) {
        lastTime = currentTime - (deltaTime % frameInterval);

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        nodes.forEach((node) => {
          const dx = mouseRef.current.x - node.x;
          const dy = mouseRef.current.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const force = (150 - distance) / 150;
            node.x -= (dx / distance) * force * 2;
            node.y -= (dy / distance) * force * 2;
          }

          const returnForceX = (node.baseX - node.x) * 0.01;
          const returnForceY = (node.baseY - node.y) * 0.01;
          node.vx += returnForceX;
          node.vy += returnForceY;

          node.vx *= 0.98;
          node.vy *= 0.98;

          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0) node.x = canvas.width;
          if (node.x > canvas.width) node.x = 0;
          if (node.y < 0) node.y = canvas.height;
          if (node.y > canvas.height) node.y = 0;
        });

        nodes.forEach((node, i) => {
          nodes.forEach((otherNode, j) => {
            if (i === j) return;

            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 140) {
              const mouseDistance = Math.sqrt(
                Math.pow(mouseRef.current.x - (node.x + otherNode.x) / 2, 2) +
                  Math.pow(mouseRef.current.y - (node.y + otherNode.y) / 2, 2)
              );

              let opacity = 0.25 * (1 - distance / 140);
              if (mouseDistance < 150) {
                opacity = Math.min(0.6, opacity + (150 - mouseDistance) / 150 * 0.35);
              }

              const gradient = ctx.createLinearGradient(
                node.x,
                node.y,
                otherNode.x,
                otherNode.y
              );
              gradient.addColorStop(0, `rgba(37, 99, 235, ${opacity})`);
              gradient.addColorStop(1, `rgba(6, 182, 212, ${opacity})`);

              ctx.strokeStyle = gradient;
              ctx.lineWidth = 0.8;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.stroke();
            }
          });
        });

        nodes.forEach((node) => {
          const mouseDistance = Math.sqrt(
            Math.pow(mouseRef.current.x - node.x, 2) +
              Math.pow(mouseRef.current.y - node.y, 2)
          );

          let nodeSize = 2;
          let glowIntensity = 4;

          if (mouseDistance < 100) {
            nodeSize = 2 + (100 - mouseDistance) / 100;
            glowIntensity = 8 + (100 - mouseDistance) / 10;
          }

          ctx.shadowBlur = glowIntensity;
          ctx.shadowColor = "#06B6D4";

          const nodeGradient = ctx.createRadialGradient(
            node.x,
            node.y,
            0,
            node.x,
            node.y,
            nodeSize * 2
          );
          nodeGradient.addColorStop(0, "rgba(6, 182, 212, 1)");
          nodeGradient.addColorStop(0.5, "rgba(37, 99, 235, 0.8)");
          nodeGradient.addColorStop(1, "rgba(37, 99, 235, 0)");

          ctx.fillStyle = nodeGradient;
          ctx.beginPath();
          ctx.arc(node.x, node.y, nodeSize, 0, Math.PI * 2);
          ctx.fill();

          ctx.shadowBlur = 0;
        });
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
      style={{ background: "transparent" }}
    />
  );
}
