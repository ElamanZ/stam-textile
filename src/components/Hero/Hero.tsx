"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";
import heroBg from "@/assets/images/heroBg.webp";
import { ScrollToSectionLink } from "@/components/ScrollToSectionLink/ScrollToSectionLink";
import { DURATION, EASE_OUT, staggerVisible, transitionPreset } from "@/lib/motion";
import styles from "./Hero.module.css";

export function Hero() {
  const reduce = useReducedMotion();

  const contentItem = useMemo(
    () => ({
      hidden: { opacity: 0, y: 22 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: reduce ? 0 : DURATION.relaxed,
          ease: EASE_OUT,
        },
      },
    }),
    [reduce],
  );

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroInner}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transitionPreset(DURATION.hero, 0, reduce)}
        >
          <motion.div
            className={styles.bg}
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={transitionPreset(DURATION.bg, 0.06, reduce)}
          >
            <Image
              src={heroBg}
              alt="Швейное производство: цех и оборудование"
              fill
              priority
              sizes="(max-width: 899px) 100vw, 1440px"
              className={styles.bgImage}
            />
          </motion.div>
          <motion.div
            className={styles.content}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: staggerVisible(0.1, 0.14, reduce),
              },
            }}
          >
            <motion.h1 className={styles.title} variants={contentItem}>
              Швейное Производство Для Вашего Бренда
            </motion.h1>
            <motion.p className={styles.subtitle} variants={contentItem}>
              Полный цикл: от образца до массового пошива
              <br />
              Контроль качества на каждом этапе
            </motion.p>
            <motion.div variants={contentItem}>
              <ScrollToSectionLink href="#contact" className={styles.cta}>
                Обсудить заказ
              </ScrollToSectionLink>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
