import styles from "./Benefits.module.css";

export function Benefits() {
  return (
    <section
      id="benefits"
      className={styles.section}
      aria-labelledby="benefits-heading"
    >
      <div className={styles.container}>
        <h2 id="benefits-heading" className={styles.title}>
          Почему выбирают Stam Textile?
        </h2>

        <div className={styles.columns}>
          <div className={styles.column}>
            <article className={styles.item}>
              <h3 className={styles.itemTitle}>Полный цикл</h3>
              <p className={styles.itemText}>
                От разработки образца до упаковки готовой продукции
              </p>
            </article>

            <article className={styles.item}>
              <h3 className={styles.itemTitle}>Соблюдение сроков</h3>
              <p className={styles.itemText}>
                Работаем по согласованному плану без срывов
              </p>
            </article>
          </div>

          <div className={styles.column}>
            <article className={styles.item}>
              <h3 className={styles.itemTitle}>Контроль качества</h3>
              <p className={styles.itemText}>
                3 этапа ОТК на каждом этапе производства
              </p>
            </article>

            <article className={styles.item}>
              <h3 className={styles.itemTitle}>Прозрачный процесс</h3>
              <p className={styles.itemText}>
                Понятная работа и контроль на каждом этапе
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
