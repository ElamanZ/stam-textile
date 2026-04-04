export const site = {
  name: "Stam Textile",
  description:
    "Контрактное швейное производство полного цикла для брендов, маркетплейсов и мерча.",
  telegram: "https://t.me/+996709807698",
  whatsapp: "https://wa.me/+996709807698",
  vk: "https://vk.ru/id1102900725",
  instagram: "https://www.instagram.com/stam_textile?igsh=b3g4YmZidDc4NWlw",
  phone: "+996 709 807698",
  phoneHref: "tel:+996709807698",
} as const;

export const navLinks = [
  { href: "#hero", label: "Главная", id: "hero" as const },
  { href: "#workflow", label: "Этапы Работы", id: "workflow" as const },
  { href: "#services", label: "Услуги", id: "services" as const },
  { href: "#contact", label: "Контакты", id: "contact" as const },
  { href: "#about", label: "О Нас", id: "about" as const },
] as const;
