"use client";

import { FadeIn } from "@/components/FadeIn/FadeIn";
import LogoColumnWhite from "../Icons/LogoColumnWhite";
import styles from "./Footer.module.css";

const PETRIKOR_URL =
  "https://www.instagram.com/petriikor?igsh=dTh3dWM1ZGxtZjk0";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <FadeIn variant="fadeUpSm" className={styles.credit}>
        <p className={styles.creditTitle}>
          <a
            href={PETRIKOR_URL}
            className={styles.creditLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Разработка сайта
          </a>
        </p>
        <p className={styles.creditSub}>Сделаем сайт под ваш бизнес</p>
      </FadeIn>
      <FadeIn variant="fadeUpSm" delay={0.06} className={styles.bar}>
        <div className={styles.barLogo}>
          <LogoColumnWhite className={styles.barLogoSvg} />
        </div>
      </FadeIn>
    </footer>
  );
}
