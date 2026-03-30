"use client";

import styles from "./SectionHeading.module.css";

type Props = {
  id?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  id,
  title,
  subtitle,
  align = "center",
  className,
}: Props) {
  return (
    <header
      className={`${styles.wrap} ${styles[align]} ${className ?? ""}`.trim()}
    >
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
    </header>
  );
}
