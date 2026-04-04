"use client";

import { FadeIn } from "@/components/FadeIn/FadeIn";
import LogoColumnWhite from "../Icons/LogoColumnWhite";
import styles from "./Footer.module.css";

const PETRIKOR_URL =
  "https://www.instagram.com/petrikor.lab?igsh=emE0Zng5eWk2cms3";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <FadeIn variant="fadeUpSm" className={styles.credit}>
        <p className={styles.creditTitle}>
          Сайт разработан студией—
          <a
            href={PETRIKOR_URL}
            className={styles.creditLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Petrikor.lab
          </a>
        </p>
        <p className={styles.creditSub}>
          Разработка сайтов для брендов и бизнеса
        </p>
      </FadeIn>
      <FadeIn variant="fadeUpSm" delay={0.06} className={styles.bar}>
        <div className={styles.barLogo}>
          <LogoColumnWhite className={styles.barLogoSvg} />
        </div>
      </FadeIn>
    </footer>
  );
}
