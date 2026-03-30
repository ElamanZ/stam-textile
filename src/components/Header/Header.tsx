"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo/Logo";
import { navLinks } from "@/lib/site";
import styles from "./Header.module.css";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""}`.trim()}
    >
      <div className={styles.inner}>
        <nav className={styles.nav} aria-label="Основная навигация">
          <ul className={styles.links}>
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link className={styles.link} href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="#hero" className={styles.logoLink}>
          <Logo />
        </Link>

        <button
          type="button"
          className={styles.burger}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.burgerBar} data-open={open} />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`.trim()}
        hidden={!open}
      >
        <ul className={styles.drawerList}>
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link
                className={styles.drawerLink}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="#contact"
          className={styles.drawerCta}
          onClick={() => setOpen(false)}
        >
          Обсудить проект
        </Link>
      </div>
    </header>
  );
}
