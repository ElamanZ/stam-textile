import { FadeIn } from "@/components/FadeIn/FadeIn";
import styles from "./Stats.module.css";

const items = [
  { value: "300+", label: "клиентов ежемесячно" },
  { value: "100 000+", label: "изделий в месяц" },
  { value: "40+", label: "сотрудников" },
  { value: "3 этапа ОТК", label: "контроля качества" },
] as const;

export function Stats() {
  return (
    <section id="stats" className={styles.section} aria-label="Показатели">
      <div className={styles.inner}>
        {items.map((item, i) => (
          <FadeIn key={item.value} delay={i * 0.06} className={styles.item}>
            <p className={styles.value}>{item.value}</p>
            <p className={styles.label}>{item.label}</p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
