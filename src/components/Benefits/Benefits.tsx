import { FadeIn } from "@/components/FadeIn/FadeIn";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import styles from "./Benefits.module.css";

const items = [
  {
    title: "Низкая цена",
    text: "Оптимизируем раскрой и загрузку линий, чтобы предложить конкурентную себестоимость без потери качества.",
  },
  {
    title: "Высокое качество",
    text: "Три этапа ОТК, понятные критерии приёмки и согласованные стандарты финишной обработки.",
  },
  {
    title: "Соблюдение сроков",
    text: "Планируем производственный цикл с учётом ваших отгрузок и пиков спроса.",
  },
  {
    title: "Гарантия заказа",
    text: "Работаем по договору: фиксируем объёмы, этапы и ответственность сторон.",
  },
] as const;

export function Benefits() {
  return (
    <section id="benefits" className={styles.section} aria-labelledby="benefits-heading">
      <div className={styles.container}>
        <SectionHeading
          id="benefits-heading"
          title="Почему выбирают Stam Textile?"
          subtitle="Сочетаем аккуратный пошив, дисциплину сроков и честную коммуникацию на всех этапах."
        />
        <div className={styles.grid}>
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.07} className={styles.card}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
