"use client";

import { useId, useState } from "react";
import { FadeIn } from "@/components/FadeIn/FadeIn";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import styles from "./FAQ.module.css";

const columns: { q: string; a: string }[][] = [
  [
    {
      q: "С какого тиража вы работаете?",
      a: "Обычно стартуем с образца, затем переходим к серии. Минимальный тираж обсуждаем под модель и сложность — напишите, что планируете.",
    },
    {
      q: "Можно ли прислать свою ткань и фурнитуру?",
      a: "Да. Мы также помогаем с закупкой материалов и подбором аналогов под бюджет.",
    },
    {
      q: "Как контролируется качество?",
      a: "Три этапа ОТК: входной контроль материалов, контроль на линии и финальная приёмка перед упаковкой.",
    },
  ],
  [
    {
      q: "Сколько длится разработка лекал и образца?",
      a: "Зависит от изделия и согласований. После брифа даём ориентир по срокам и этапам в коммерческом предложении.",
    },
    {
      q: "Работаете ли с маркетплейсами?",
      a: "Да: серийный пошив, стабильные партии, маркировка и упаковка по вашему регламенту.",
    },
    {
      q: "Где вы находитесь и как доставляете?",
      a: "Реквизиты и адрес производства — по запросу. Логистику согласуем: самовывоз, транспортная компания или ваш курьер.",
    },
  ],
];

export function FAQ() {
  const baseId = useId();
  const [open, setOpen] = useState<string | null>(`${baseId}-0-0`);

  const toggle = (key: string) => {
    setOpen((prev) => (prev === key ? null : key));
  };

  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-heading">
      <div className={styles.container}>
        <SectionHeading
          id="faq-heading"
          title="Ответы на частые вопросы"
          subtitle="Если не нашли ответ — напишите в мессенджер, ответим в рабочее время."
        />
        <FadeIn>
          <div className={styles.grid}>
            {columns.map((col, ci) => (
              <div key={ci} className={styles.col}>
                {col.map((item, ri) => {
                  const key = `${baseId}-${ci}-${ri}`;
                  const expanded = open === key;
                  return (
                    <div
                      key={key}
                      className={`${styles.item} ${expanded ? styles.itemOpen : ""}`.trim()}
                    >
                      <button
                        type="button"
                        className={styles.trigger}
                        aria-expanded={expanded}
                        aria-controls={`${key}-panel`}
                        id={`${key}-btn`}
                        onClick={() => toggle(key)}
                      >
                        <span className={styles.question}>{item.q}</span>
                        <span className={styles.chevron} aria-hidden />
                      </button>
                      <div
                        id={`${key}-panel`}
                        role="region"
                        aria-labelledby={`${key}-btn`}
                        className={styles.panel}
                        data-open={expanded}
                      >
                        <p className={styles.answer}>{item.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
