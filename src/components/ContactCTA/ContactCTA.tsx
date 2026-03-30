import { FadeIn } from "@/components/FadeIn/FadeIn";
import { site } from "@/lib/site";
import styles from "./ContactCTA.module.css";

function TelegramIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21 5 3 12.5l5.2 1.5L17 8l-7.5 6.5 0.01 3.5L12.5 18 15.8 21 21 5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        fill="currentColor"
        d="M12.04 2c5.46 0 9.9 4.44 9.9 9.9 0 1.74-.45 3.38-1.24 4.81L22 22l-5.45-1.43a9.9 9.9 0 0 1-4.51 1.09c-5.46 0-9.9-4.44-9.9-9.9S6.58 2 12.04 2Zm0 1.8c-4.47 0-8.1 3.63-8.1 8.1 0 1.59.46 3.07 1.26 4.33l-.83 3.04 3.12-.81a8.28 8.28 0 0 0 4.55 1.34c4.47 0 8.1-3.63 8.1-8.1s-3.63-8.1-8.1-8.1Zm4.42 3.58c.12 0 .35.04.51.2.16.16.2.38.22.45.02.07.05.22.02.34-.03.12-.1.19-.13.22-.04.04-.08.08-.15.15-.07.07-.37.36-.43.42-.06.06-.12.1-.02.24.1.14.43.71.93 1.21.64.64 1.18.84 1.35.93.17.1.27.08.37-.02.1-.1.43-.5.54-.67.12-.17.23-.14.39-.08.16.06 1.02.48 1.2.57.17.09.29.14.33.22.04.08.04.46-.1.9-.15.45-.9.87-1.27.98-.36.1-.82.16-1.06.12-.24-.04-1.54-.63-2.18-1.18-.64-.55-1.21-1.23-1.61-1.74-.4-.5-.84-1.41-1.06-1.8-.22-.38-.02-.59.16-.78.17-.18.38-.47.51-.63.13-.16.17-.28.26-.47.09-.19.05-.36-.02-.5-.07-.14-.63-1.52-.89-2.08Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm5.25-3.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ContactCTA() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-heading">
      <div className={styles.inner}>
        <FadeIn className={styles.copy}>
          <h2 id="contact-heading" className={styles.title}>
            Готовы обсудить ваш проект?
          </h2>
          <p className={styles.text}>
            Расскажите о модели, тираже и сроках — подготовим ориентир по стоимости
            и этапам. Ответим в Telegram или WhatsApp.
          </p>
          <p className={styles.note}>
            Телефон:{" "}
            <a href={site.phoneHref} className={styles.link}>
              {site.phone}
            </a>
          </p>
        </FadeIn>

        <FadeIn delay={0.08} className={styles.actions}>
          <a
            href={site.telegram}
            className={`${styles.btn} ${styles.btnPrimary}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramIcon />
            Написать в Telegram
          </a>
          <a
            href={site.whatsapp}
            className={`${styles.btn} ${styles.btnGhost}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
            Написать в WhatsApp
          </a>
          <a
            href={site.instagram}
            className={`${styles.btn} ${styles.btnGhost}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
            Instagram
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
