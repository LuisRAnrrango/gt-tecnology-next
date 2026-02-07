export const WHATSAPP_NUMBER = "593993273984";

export const WHATSAPP_LINK = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const DEFAULT_MESSAGES = {
  home: "Hola, quiero una web con GT TECNOLOGY.",
  maintenance: "Hola, necesito mantenimiento/reparación de mi PC.",
  streaming: "Hola, deseo contratar/renovar servicio de streaming.",
  sales: "Hola, busco una computadora y repuestos.",
  webDev: "Hola, quiero un sitio web profesional.",
  software: "Hola, necesito software a medida.",
  planInicio: "Hola, quiero cotizar el Plan Inicio ($95).",
  planPro: "Hola, quiero cotizar el Plan Pro ($220).",
  planBusiness: "Hola, quiero cotizar el Plan Business ($420).",
};

export const PHONE_DISPLAY = "+593 99 327 3984";
export const PHONE_LINK = "tel:+593993273984";

export const NAP = {
  name: "GT TECNOLOGY",
  address: "Pimampiro, Ecuador",
  phone: PHONE_DISPLAY,
  whatsapp: WHATSAPP_NUMBER,
  email: "infogttecnology@gmail.com",
  hours: "Lun - Vie: 8:00 - 19:00 | Sáb: 9:00 - 19:00",
};
