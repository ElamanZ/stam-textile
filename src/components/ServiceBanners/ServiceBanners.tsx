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
          <FadeIn className={`${styles.banner} ${styles.bannerServices}`}>
            <div className={styles.text}>
              <h3 className={styles.title}>Услуги</h3>
              <ul className={styles.list}>
                {servicesItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.figure} aria-hidden>
              <Image
                src={serviceImg}
                alt=""
                width={580}
                height={500}
                className={styles.figureImg}
                sizes="(max-width: 479px) 64vw, (max-width: 899px) 58vw, (max-width: 1199px) 64vw, 580px"
              />
            </div>
          </FadeIn>

          <FadeIn
            delay={0.08}
            className={`${styles.banner} ${styles.bannerSpec}`}
          >
            <div className={styles.text}>
              <h3 className={`${styles.title} ${styles.titleDark}`}>
                Специализация
              </h3>
              <ul className={`${styles.list} ${styles.listDark}`}>
                {specializationItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles.figure} aria-hidden>
              <Image
                src={specImg}
                alt=""
                width={580}
                height={500}
                className={styles.figureImg}
                sizes="(max-width: 479px) 64vw, (max-width: 899px) 58vw, (max-width: 1199px) 64vw, 580px"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
