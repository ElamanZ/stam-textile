export const site = {
  name: "Stam Textile",
  legalName: "Stam Textile",
  defaultTitle:
    "Stam Textile — швейное производство и пошив одежды на заказ в Бишкеке",
  shortTitle: "Швейное производство на заказ в Бишкеке",
  description:
    "Контрактное швейное производство полного цикла в Бишкеке: пошив одежды на заказ для брендов, маркетплейсов (Wildberries, Ozon) и мерча. Разработка лекал, образцы, массовый пошив, контроль качества ОТК.",
  keywords: [
    "швейное производство под заказ Бишкек",
    "пошив одежды Бишкек",
    "швейный цех Бишкек",
    "контрактное производство одежды Кыргызстан",
    "пошив на заказ Wildberries Ozon",
    "фабрика одежды Бишкек",
    "Stam Textile",
  ],
  locale: "ru_KG",
  regionIso: "KG",
  address: {
    locality: "Бишкек",
    country: "Кыргызстан",
    countryCode: "KG",
    streetAddress: "Бишкек",
  },
  geo: {
    latitude: 42.8746,
    longitude: 74.5698,
  },
  telegram: "https://t.me/+996709807698",
  whatsapp: "https://wa.me/+996709807698",
  vk: "https://vk.ru/id1102900725",
  instagram: "https://www.instagram.com/stam_textile?igsh=b3g4YmZidDc4NWlw",
  phone: "+996 709 807698",
  phoneHref: "tel:+996709807698",
  email: "hello@stamtextile.ru",
} as const;

export const navLinks = [
  { href: "#hero", label: "Главная", id: "hero" as const },
  { href: "#workflow", label: "Этапы Работы", id: "workflow" as const },
  { href: "#services", label: "Услуги", id: "services" as const },
  { href: "#contact", label: "Контакты", id: "contact" as const },
  { href: "#about", label: "О Нас", id: "about" as const },
] as const;
