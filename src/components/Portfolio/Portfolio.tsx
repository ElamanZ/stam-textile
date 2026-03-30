import Image from "next/image";
import { FadeIn } from "@/components/FadeIn/FadeIn";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { images } from "@/lib/site";
import styles from "./Portfolio.module.css";

const prices = ["1 200 ₽", "1 450 ₽", "980 ₽", "1 100 ₽"] as const;

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className={styles.section}
      aria-labelledby="portfolio-heading"
    >
      <div className={styles.container}>
        <SectionHeading
          id="portfolio-heading"
          title="Примеры наших работ"
          subtitle="Фотографии иллюстративные; финальная стоимость зависит от ткани, тиража и отделки."
        />
        <div className={styles.grid}>
          {images.portfolio.map((src, i) => (
            <FadeIn key={src} delay={i * 0.06} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={src}
                  alt={`Пример изделия ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 25vw"
                  className={styles.image}
                />
                <span className={styles.tag}>{prices[i]}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
