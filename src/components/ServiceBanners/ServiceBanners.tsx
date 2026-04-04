import Image from "next/image";
import { FadeIn } from "@/components/FadeIn/FadeIn";
import serviceImg from "@/assets/images/1.png";
import specImg from "@/assets/images/2.png";
import styles from "./ServiceBanners.module.css";

const servicesItems = [
  "Пошив под заказ",
  "Разработка образца",
  "Подбор тканей",
  "Упаковка продукции",
] as const;

const specializationItems = [
  "Женская одежда (2 слой)",
  "Детская одежда",
  "Базовые модели",
  "Массовое производство",
] as const;

export function ServiceBanners() {
  return (
    <section
      id="services"
      className={styles.section}
      aria-labelledby="services-heading"
    >
      <h2 id="services-heading" className={styles.visuallyHidden}>
        Услуги и специализация
      </h2>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <FadeIn
            variant="scaleIn"
            className={styles.bannerSlot}
          >
            <article
              className={`${styles.banner} ${styles.bannerServices}`}
              aria-labelledby="services-card-title"
            >
              <div className={styles.text}>
                <h3 id="services-card-title" className={styles.title}>
                  Услуги
                </h3>
                <ul className={styles.list}>
                  {servicesItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.figure}>
                <Image
                  src={serviceImg}
                  alt="Иллюстрация услуг швейного производства Stam Textile в Бишкеке: пошив на заказ и полный цикл"
                  width={580}
                  height={500}
                  className={styles.figureImg}
                  sizes="(max-width: 479px) 64vw, (max-width: 899px) 58vw, (max-width: 1199px) 64vw, 580px"
                />
              </div>
            </article>
          </FadeIn>

          <FadeIn variant="scaleIn" delay={0.08} className={styles.bannerSlot}>
            <article
              className={`${styles.banner} ${styles.bannerSpec}`}
              aria-labelledby="spec-card-title"
            >
              <div className={styles.text}>
                <h3 id="spec-card-title" className={`${styles.title} ${styles.titleDark}`}>
                  Специализация
                </h3>
                <ul className={`${styles.list} ${styles.listDark}`}>
                  {specializationItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.figure}>
                <Image
                  src={specImg}
                  alt="Специализация швейного производства: женская и детская одежда, базовые модели, Бишкек"
                  width={580}
                  height={500}
                  className={styles.figureImg}
                  sizes="(max-width: 479px) 64vw, (max-width: 899px) 58vw, (max-width: 1199px) 64vw, 580px"
                />
              </div>
            </article>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
