import { FadeIn } from "@/components/FadeIn/FadeIn";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import styles from "./TargetAudience.module.css";

const cards = [
  {
    title: "Бренды одежды",
    text: "От лекал и образца до стабильных партий под ваши коллекции.",
    icon: "hanger",
  },
  {
    title: "Маркетплейсы и магазины",
    text: "Серийный пошив, упаковка и сроки под ваши поставки.",
    icon: "cart",
  },
  {
    title: "Опт и мерч",
    text: "Единый стиль, нанесение, комплектация и отгрузка.",
    icon: "box",
  },
  {
    title: "Стартапы",
    text: "Помогаем запустить линейку: консультация, образец, первые партии.",
    icon: "rocket",
  },
] as const;

function Icon({ name }: { name: (typeof cards)[number]["icon"] }) {
  const common = { className: styles.iconSvg, "aria-hidden": true as const };
  switch (name) {
    case "hanger":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...common}>
          <path
            d="M12 6a3 3 0 1 0-3-3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M4 14 10.3 9.6a2 2 0 0 1 2.2 0L20 14v2H4v-2Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "cart":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...common}>
          <path
            d="M6 6h15l-1.5 9h-12L6 6Zm0 0L5 3H2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="20" r="1.6" fill="currentColor" />
          <circle cx="18" cy="20" r="1.6" fill="currentColor" />
        </svg>
      );
    case "box":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...common}>
          <path
            d="m12 3 8 4v10l-8 4-8-4V7l8-4Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="m12 12 8-4M12 12v9M12 12 4 8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    case "rocket":
      return (
        <svg viewBox="0 0 24 24" fill="none" {...common}>
          <path
            d="M14 11c3-6 4-9 4-9s-3 1-9 4l-2 2-3 7 4 4 7-3 2-2Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M7 17 4 20M10 14l-2 2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

export function TargetAudience() {
  return (
    <section className={styles.section} aria-labelledby="audience-heading">
      <div className={styles.container}>
        <SectionHeading
          id="audience-heading"
          title="Кому подойдёт наше производство"
          subtitle="Масштабируем процесс под ваш формат — от единичного образца до регулярных отгрузок."
        />
        <div className={styles.grid}>
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.08} className={styles.card}>
              <div className={styles.iconWrap}>
                <Icon name={card.icon} />
              </div>
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardText}>{card.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
