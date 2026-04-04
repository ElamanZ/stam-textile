import { FadeIn } from "@/components/FadeIn/FadeIn";
import styles from "./Benefits.module.css";

const ITEM_STAGGER = 0.07;

export function Benefits() {
  return (
    <section
      id="benefits"
      className={styles.section}
      aria-labelledby="benefits-heading"
    >
      <div className={styles.container}>
        <FadeIn>
          <h2 id="benefits-heading" className={styles.title}>
            Почему выбирают Stam Textile?
          </h2>
        </FadeIn>

        <div className={styles.columns}>
          <div className={styles.column}>
            <FadeIn delay={ITEM_STAGGER * 0} className={styles.item}>
              <article>
                <h3 className={styles.itemTitle}>Полный цикл</h3>
                <p className={styles.itemText}>
                  От разработки образца до упаковки готовой продукции
                </p>
              </article>
            </FadeIn>

            <FadeIn delay={ITEM_STAGGER * 1} className={styles.item}>
              <article>
                <h3 className={styles.itemTitle}>Соблюдение сроков</h3>
                <p className={styles.itemText}>
                  Работаем по согласованному плану без срывов
                </p>
              </article>
            </FadeIn>
          </div>

          <div className={styles.column}>
            <FadeIn delay={ITEM_STAGGER * 2} className={styles.item}>
              <article>
                <h3 className={styles.itemTitle}>Контроль качества</h3>
                <p className={styles.itemText}>
                  3 этапа ОТК на каждом этапе производства
                </p>
              </article>
            </FadeIn>

            <FadeIn delay={ITEM_STAGGER * 3} className={styles.item}>
              <article>
                <h3 className={styles.itemTitle}>Прозрачный процесс</h3>
                <p className={styles.itemText}>
                  Понятная работа и контроль на каждом этапе
                </p>
              </article>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
