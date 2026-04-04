"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { FadeIn } from "@/components/FadeIn/FadeIn";
import TelegramIcon from "@/components/Icons/TelegramIcon";
import WhatsAppIcon from "@/components/Icons/WhatsAppIcon";
import WkIcon from "@/components/Icons/WkIcon";
import { DURATION, EASE_OUT, transitionPreset } from "@/lib/motion";
import { site } from "@/lib/site";
import styles from "./ContactCTA.module.css";

function MotionContactLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={reduce ? undefined : { y: -2 }}
      whileTap={reduce ? undefined : { scale: 0.985 }}
      transition={transitionPreset(DURATION.fast, 0, reduce)}
    >
      {children}
    </motion.a>
  );
}

export function ContactCTA() {
  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-heading"
    >
      <div className={styles.inner}>
        <FadeIn className={styles.copy}>
          <h2 id="contact-heading" className={styles.title}>
            Готовы обсудить ваш проект?
          </h2>
          <p className={styles.subtitle}>
            Подберём оптимальное решение под ваш объём и задачи
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className={styles.actions}>
          <MotionContactLink
            href={site.telegram}
            className={`${styles.btn} ${styles.btnPrimary}`}
          >
            <span className={styles.iconSlot} aria-hidden>
              <TelegramIcon size={40} />
            </span>
            <span className={styles.btnLabel}>Написать в Telegram</span>
          </MotionContactLink>
          <MotionContactLink
            href={site.whatsapp}
            className={`${styles.btn} ${styles.btnOutline}`}
          >
            <span className={styles.iconSlot} aria-hidden>
              <WhatsAppIcon size={40} />
            </span>
            <span className={styles.btnLabel}>Написать в WhatsApp</span>
          </MotionContactLink>
          <MotionContactLink
            href={site.vk}
            className={`${styles.btn} ${styles.btnOutline}`}
          >
            <span className={styles.iconSlot} aria-hidden>
              <WkIcon size={40} />
            </span>
            <span className={styles.btnLabel}>Написать ВКонтакте</span>
          </MotionContactLink>
        </FadeIn>
      </div>
    </section>
  );
}
