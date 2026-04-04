import Image from "next/image";
import heroBg from "@/assets/images/heroBg.webp";
import { ScrollToSectionLink } from "@/components/ScrollToSectionLink/ScrollToSectionLink";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.card}>
          <div className={styles.bg}>
            <Image
              src={heroBg}
              alt="Швейное производство: цех и оборудование"
              fill
              priority
              sizes="(max-width: 899px) 100vw, 1440px"
              className={styles.bgImage}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Швейное Производство Для Вашего Бренда
            </h1>
            <p className={styles.subtitle}>
              Полный цикл: от образца до массового пошива
              <br />
              Контроль качества на каждом этапе
            </p>
            <ScrollToSectionLink href="#contact" className={styles.cta}>
              Обсудить заказ
            </ScrollToSectionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
