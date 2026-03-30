import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/site";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bg}>
        <Image
          src={images.hero}
          alt="Швейное производство: цех и оборудование"
          fill
          priority
          sizes="100vw"
          className={styles.bgImage}
        />
        <div className={styles.overlay} aria-hidden />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>Швейное производство для вашего бренда</h1>
        <p className={styles.subtitle}>
          Полный цикл: от образца и лекал до серийного пошива, контроля качества
          и отгрузки. Работаем с брендами, маркетплейсами и мерчем.
        </p>
        <Link href="#contact" className={styles.cta}>
          Обсудить проект
        </Link>
      </div>
    </section>
  );
}
