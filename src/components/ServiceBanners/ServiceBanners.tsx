import Image from "next/image";
import { FadeIn } from "@/components/FadeIn/FadeIn";
import { images } from "@/lib/site";
import styles from "./ServiceBanners.module.css";

export function ServiceBanners() {
  return (
    <section id="services" className={styles.section} aria-labelledby="services-heading">
      <h2 id="services-heading" className={styles.visuallyHidden}>
        Услуги и специализация
      </h2>
      <div className={styles.grid}>
        <FadeIn className={styles.banner}>
          <div className={styles.media}>
            <Image
              src={images.services}
              alt="Швейная машина и ткань"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.image}
            />
            <div className={styles.tint} aria-hidden />
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>Услуги</h3>
            <ul className={styles.list}>
              <li>Конструирование и лекала</li>
              <li>Разработка образца и тестовая партия</li>
              <li>Серийный пошив и доотделка</li>
              <li>Контроль качества и упаковка</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className={styles.banner}>
          <div className={`${styles.media} ${styles.mediaAlt}`}>
            <Image
              src={images.specialization}
              alt="Манекен в изделии"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.image}
            />
            <div className={`${styles.tint} ${styles.tintAlt}`} aria-hidden />
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>Специализация</h3>
            <ul className={styles.list}>
              <li>Трикотаж и кэжуал</li>
              <li>Корпоративная одежда и униформа</li>
              <li>Мерч и промо-коллекции</li>
              <li>Работа с вашими или нашими тканями</li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
