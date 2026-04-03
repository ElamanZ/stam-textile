"use client";

import { useCallback, useRef, useState } from "react";
import { FadeIn } from "@/components/FadeIn/FadeIn";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import styles from "./Workflow.module.css";

const steps = [
  {
    n: "01",
    title: "Оформление заказа",
    text: "Бриф, объёмы, сроки и техническое задание.",
  },
  {
    n: "02",
    title: "Подбор тканей",
    text: "Фурнитура и материалы под ваш бюджет и задачу.",
  },
  {
    n: "03",
    title: "Разработка и лекала",
    text: "Образец, примерка, корректировки перед серией.",
  },
  {
    n: "04",
    title: "Запуск производства",
    text: "Пошив партии на современном оборудовании.",
  },
  {
    n: "05",
    title: "Контроль качества",
    text: "Три этапа ОТК на линии и перед упаковкой.",
  },
  {
    n: "06",
    title: "Отгрузка и выдача",
    text: "Маркировка, упаковка, логистика по договорённости.",
  },
] as const;

export function Workflow() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(1);

  const scrollByDir = useCallback((dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-step]");
    const gap = 16;
    const width = card ? card.offsetWidth + gap : 280;
    el.scrollBy({ left: dir * width * 1.1, behavior: "smooth" });
  }, []);

  return (
    <section
      id="workflow"
      className={styles.section}
      aria-labelledby="workflow-heading"
    >
      <div className={styles.headRow}>
        <SectionHeading
          id="workflow-heading"
          title="Как мы работаем"
          subtitle="Прозрачный процесс от заявки до готовой партии."
          align="left"
          className={styles.heading}
        />
        <div className={styles.arrows}>
          <button
            type="button"
            className={styles.arrow}
            aria-label="Прокрутить назад"
            onClick={() => scrollByDir(-1)}
          >
            ‹
          </button>
          <button
            type="button"
            className={styles.arrow}
            aria-label="Прокрутить вперёд"
            onClick={() => scrollByDir(1)}
          >
            ›
          </button>
        </div>
      </div>

      <FadeIn>
        <div className={styles.scrollerWrap}>
          <div
            ref={scrollerRef}
            className={styles.scroller}
            role="list"
            aria-label="Этапы работы"
          >
            {steps.map((step, i) => (
              <article
                key={step.n}
                data-step
                role="listitem"
                className={`${styles.card} ${active === i ? styles.cardActive : ""}`.trim()}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                tabIndex={0}
              >
                <span className={styles.badge}>{step.n}</span>
                <div className={styles.dot} aria-hidden />
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardText}>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
