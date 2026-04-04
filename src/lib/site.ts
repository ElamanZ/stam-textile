
export const site = {
  name: "Stam Textile",
  description:
    "Контрактное швейное производство полного цикла для брендов, маркетплейсов и мерча.",
  telegram: "https://t.me/stamtextile",
  whatsapp: "https://wa.me/79990000000",
  instagram: "https://instagram.com/stamtextile",
  phone: "+7 (999) 000-00-00",
  phoneHref: "tel:+79990000000",
  address: "Россия, г. Москва",
  email: "hello@stamtextile.ru",
} as const;

export const navLinks = [
  { href: "#hero", label: "Главная", id: "hero" as const },
  { href: "#workflow", label: "Этапы Работы", id: "workflow" as const },
  { href: "#services", label: "Услуги", id: "services" as const },
  { href: "#contact", label: "Контакты", id: "contact" as const },
  { href: "#about", label: "О Нас", id: "about" as const },
] as const;
