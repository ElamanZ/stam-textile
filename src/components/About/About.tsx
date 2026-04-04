"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn/FadeIn";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import { DURATION, transitionPreset } from "@/lib/motion";
import { site } from "@/lib/site";
import directorUmida from "@/assets/images/director_Umida.webp";
import styles from "./About.module.css";

export function About() {
  const reduce = useReducedMotion();

  return (
    <section
      id="about"
      className={styles.section}
      aria-labelledby="about-heading"
    >
      <div className={styles.inner}>
        <FadeIn className={styles.visual}>
          <div className={styles.portrait}>
            <Image
              src={directorUmida}
              alt="Умида — руководитель производства Stam Textile"
              fill
              sizes="(max-width: 1023px) min(100vw, 526px), 526px"
              className={styles.portraitImg}
            />
            <div className={styles.overlay}>
              <p className={styles.name}>Умида</p>
              <p className={styles.role}>Руководитель производства</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className={styles.copy}>
          <h2 id="about-heading" className={styles.title}>
            О производстве Stam Textile
          </h2>
          <div className={styles.prose}>
            <p>
              Меня зовут Умида, я модельер-конструктор и основатель швейного
              производства.
            </p>
            <p>
              Точная конструкция, продуманные детали и высокий стандарт качества
              — основа моей работы. Я разрабатываю изделия с учётом посадки,
              технологии и функциональности, контролируя процесс от идеи до
              готового результата.
            </p>
            <p>
              Производство выстроено системно: каждый этап под контролем, каждая
              модель соответствует заданному уровню. Я лично вовлечена в работу,
              чтобы обеспечить качество, соблюдение сроков и предсказуемый
              результат для клиента.
            </p>
          </div>
          <motion.a
            href={site.instagram}
            className={styles.btn}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduce ? undefined : { y: -2 }}
            whileTap={reduce ? undefined : { scale: 0.985 }}
            transition={transitionPreset(DURATION.fast, 0, reduce)}
          >
            <span className={styles.btnIcon} aria-hidden>
              <InstagramIcon size={40} />
            </span>
            <span className={styles.btnLabel}>Наш Instagram</span>
          </motion.a>
        </FadeIn>
      </div>
    </section>
  );
}
