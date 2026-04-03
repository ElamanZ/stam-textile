"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "@/components/Icons/Logo";
import LogoColumn from "@/components/Icons/LogoColumn";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import { navLinks, site } from "@/lib/site";
import styles from "./Header.module.css";

type NavSectionId = (typeof navLinks)[number]["id"];

const sectionIds = navLinks.map((l) => l.id) as NavSectionId[];

function isNavSectionId(value: string): value is NavSectionId {
  return (sectionIds as readonly string[]).includes(value);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<NavSectionId>(
    sectionIds[0] ?? "hero",
  );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const syncActive = () => {
      const anchor = window.location.hash.replace(/^#/, "");
      if (anchor && isNavSectionId(anchor)) {
        setActiveId(anchor);
        return;
      }

      const viewportLine = window.scrollY + window.innerHeight * 0.28;
      let current = sectionIds[0] ?? "hero";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= viewportLine) current = id;
      }
      setActiveId(current);
    };

    syncActive();
    window.addEventListener("scroll", syncActive, { passive: true });
    window.addEventListener("hashchange", syncActive);
    window.addEventListener("resize", syncActive);
    return () => {
      window.removeEventListener("scroll", syncActive);
      window.removeEventListener("hashchange", syncActive);
      window.removeEventListener("resize", syncActive);
    };
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        className={`${styles.header} ${open ? styles.headerDrawerOpen : ""}`.trim()}
      >
        <div className={styles.inner}>
          <nav className={styles.nav} aria-label="Основная навигация">
            <ul className={styles.links}>
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    className={styles.link}
                    data-active={activeId === item.id}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

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

          <Link
            href="#hero"
            className={styles.logoLink}
            onClick={closeMenu}
            aria-label={`${site.name} — на главную`}
          >
            <span className={styles.logoMark}>
              <Logo width={212} height={67} />
            </span>
          </Link>
        </div>
      </header>

      <div
        className={`${styles.menuRoot} ${open ? styles.menuRootOpen : ""}`.trim()}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={styles.backdrop}
          tabIndex={open ? 0 : -1}
          aria-label="Закрыть меню"
          onClick={closeMenu}
        />
        <div
          id="mobile-menu"
          className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`.trim()}
          role="dialog"
          aria-modal={open}
          aria-label="Меню"
          aria-hidden={!open}
          inert={!open ? true : undefined}
        >
          <div className={styles.drawerInner}>
            <div className={styles.drawerLogo}>
              <LogoColumn width={172} height={107} />
            </div>

            <nav className={styles.drawerNav} aria-label="Мобильная навигация">
              <ul className={styles.drawerList}>
                {navLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      className={styles.drawerLink}
                      data-active={activeId === item.id}
                      href={item.href}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href={site.instagram}
              className={styles.instaBtn}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              <span className={styles.instaBtnIcon} aria-hidden>
                <InstagramIcon size={32} />
              </span>
              <span className={styles.instaBtnLabel}>Наш Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
