import styles from "./Footer.module.css";
import LogoColumnWhite from "../Icons/LogoColumnWhite";

const PETRIKOR_URL =
  "https://www.instagram.com/petrikor.lab?igsh=emE0Zng5eWk2cms3";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.credit}>
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
      </div>
      <div className={styles.bar}>
        <div className={styles.barLogo}>
          <LogoColumnWhite className={styles.barLogoSvg} />
        </div>
      </div>
    </footer>
  );
}
