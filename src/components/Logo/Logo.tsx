import styles from "./Logo.module.css";

type Props = {
  variant?: "dark" | "light";
  size?: "md" | "lg";
  className?: string;
};

export function Logo({ variant = "dark", size = "md", className }: Props) {
  return (
    <span
      className={`${styles.brand} ${styles[variant]} ${size === "lg" ? styles.lg : ""} ${className ?? ""}`.trim()}
      aria-label="Stam Textile"
    >
      <svg
        className={styles.mark}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M8 32c6-10 10-18 12-24 1.2-3.6 2.8-5.4 5-5.4 2.8 0 4.2 2.4 4.2 5.8 0 4.6-2.6 9.4-7.8 14.4"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M14 28c4.5-6.2 8.2-12.4 10.8-18.6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="3 4"
        />
        <circle cx="30" cy="10" r="2.2" fill="currentColor" />
      </svg>
      <span className={styles.wordmark}>Stam Textile</span>
    </span>
  );
}
