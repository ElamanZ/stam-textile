import { Logo } from "@/components/Logo/Logo";
import { site } from "@/lib/site";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.meta}>
        <p className={styles.metaText}>
          © {year} {site.name}. {site.address}
        </p>
      </div>
      <div className={styles.bar}>
        <Logo variant="light" size="lg" />
      </div>
    </footer>
  );
}
