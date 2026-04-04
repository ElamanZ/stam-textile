"use client";

import { FadeIn } from "@/components/FadeIn/FadeIn";
import TelegramIcon from "@/components/Icons/TelegramIcon";
import WhatsAppIcon from "@/components/Icons/WhatsAppIcon";
import WkIcon from "@/components/Icons/WkIcon";
import { site } from "@/lib/site";
import styles from "./ContactCTA.module.css";

export function ContactCTA() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
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
          <a
            href={site.telegram}
            className={`${styles.btn} ${styles.btnPrimary}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.iconSlot} aria-hidden>
              <TelegramIcon size={40} />
            </span>
            <span className={styles.btnLabel}>Написать в Telegram</span>
          </a>
          <a
            href={site.whatsapp}
            className={`${styles.btn} ${styles.btnOutline}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.iconSlot} aria-hidden>
              <WhatsAppIcon size={40} />
            </span>
            <span className={styles.btnLabel}>Написать в WhatsApp</span>
          </a>
          <a
            href={site.vk}
            className={`${styles.btn} ${styles.btnOutline}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.iconSlot} aria-hidden>
              <WkIcon size={40} />
            </span>
            <span className={styles.btnLabel}>Написать ВКонтакте</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
