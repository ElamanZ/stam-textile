import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn/FadeIn";
import { images } from "@/lib/site";
import styles from "./About.module.css";

export function About() {
  return (
    <section id="about" className={styles.section} aria-labelledby="about-heading">
      <div className={styles.inner}>
        <FadeIn className={styles.visual}>
          <div className={styles.portrait}>
            <Image
              src={images.founder}
              alt="Умида — руководитель производства Stam Textile"
              fill
              sizes="(max-width: 900px) 100vw, 42vw"
              className={styles.portraitImg}
            />
          </div>
          <p className={styles.caption}>Умида · руководитель производства</p>
        </FadeIn>

        <FadeIn delay={0.1} className={styles.copy}>
          <h2 id="about-heading" className={styles.title}>
            О производстве Stam Textile
          </h2>
          <div className={styles.prose}>
            <p>
              Мы выросли из небольшой мастерской в команду швейников, технологов
              и контролёров, которые говорят на одном языке с брендами и
              закупкой.
            </p>
            <p>
              Наша цель — предсказуемый результат: понятные сроки, стабильная
              посадка изделия в серии и аккуратная отделка. На каждом этапе вы
              понимаете, что происходит с заказом.
            </p>
            <p>
              Работаем с трикотажем и лёгким кэжуалом, делаем мерч и корпоративные
              линейки, помогаем стартовать новым маркам с нуля — от первого
              образца до регулярных поставок.
            </p>
          </div>
          <Link href="#contact" className={styles.btn}>
            <svg
              className={styles.btnIcon}
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M8 5v14l11-7-11-7Z"
                fill="currentColor"
              />
            </svg>
            Связаться с производством
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
