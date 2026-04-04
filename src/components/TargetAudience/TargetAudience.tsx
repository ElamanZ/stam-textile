import { FadeIn } from "@/components/FadeIn/FadeIn";
import BoxIcon from "@/components/Icons/BoxIcon";
import CartIcon from "@/components/Icons/CartIcon";
import HangerIcon from "@/components/Icons/HangerIcon";
import RocketIcon from "@/components/Icons/RocketIcon";
import styles from "./TargetAudience.module.css";

const ICONS = {
  hanger: HangerIcon,
  cart: CartIcon,
  box: BoxIcon,
  rocket: RocketIcon,
} as const;

type IconName = keyof typeof ICONS;

const cards: readonly { title: string; text: string; icon: IconName }[] = [
  {
    title: "Бренды Одежды",
    text: "Производство для стабильных коллекций и роста бренда",
    icon: "hanger",
  },
  {
    title: "Локальные Бренды",
    text: "Для небольших проектов, готовых масштабироваться",
    icon: "cart",
  },
  {
    title: "Wildberries / Ozon",
    text: "Массовое производство и стабильные поставки для маркетплейсов",
    icon: "box",
  },
  {
    title: "Стартапы",
    text: "Запуск бренда с нуля — от идеи до первой партии",
    icon: "rocket",
  },
];

function AudienceIcon({ name }: { name: IconName }) {
  const Icon = ICONS[name];
  return <Icon size={100} />;
}

export function TargetAudience() {
  return (
    <section className={styles.section} aria-labelledby="audience-heading">
      <div className={styles.inner}>
        <FadeIn variant="fadeUpSm">
          <h2 id="audience-heading" className={styles.heading}>
            Кому Подойдёт Наше Производство
          </h2>
        </FadeIn>
        <div className={styles.grid}>
          {cards.map((card, i) => (
            <FadeIn
              key={card.title}
              variant="scaleIn"
              delay={i * 0.08}
              className={styles.card}
            >
              <div className={styles.iconWrap}>
                <AudienceIcon name={card.icon} />
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
