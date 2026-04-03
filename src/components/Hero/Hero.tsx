import Image from "next/image";
import Link from "next/link";
import heroBg from "@/assets/images/heroBg.webp";
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
            <Link href="#contact" className={styles.cta}>
              Обсудить заказ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
