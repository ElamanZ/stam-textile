"use client";

import { Minus, Plus } from "lucide-react";
import { FadeIn } from "@/components/FadeIn/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import styles from "./FAQ.module.css";

const faqItems: { q: string; a: string }[] = [
  {
    q: "1. Как сделать заказ?",
    a: "Напишите нам в WhatsApp или Instagram, отправьте фото или эскиз модели — мы быстро рассчитаем стоимость, сроки и предложим лучшее решение под ваш бюджет.",
  },
  {
    q: "2. Почему стоит выбрать вас?",
    a: "Мы не просто шьём — мы полностью погружаемся в ваш заказ: помогаем с тканями, дорабатываем модель и контролируем качество на каждом этапе.",
  },
  {
    q: "3. Делаете ли вы образец?",
    a: "Да, обязательно. Это гарантия того, что вы получите именно то, что ожидаете.",
  },
  {
    q: "4. А если мне не понравится результат?",
    a: "Мы согласовываем всё заранее и работаем до утверждения, чтобы избежать таких ситуаций.",
  },
  {
    q: "5. Какие сроки производства?",
    a: "В среднем 5–14 дней после утверждения образца.\nМы всегда держим сроки, потому что понимаем, насколько это важно для вашего бизнеса.",
  },
  {
    q: "6. Можно ли срочный заказ?",
    a: "Да, если есть возможность — ставим в приоритет и подключаем дополнительные ресурсы.",
  },
  {
    q: "7. Как вы контролируете качество?",
    a: "Каждое изделие проходит проверку ОТК + дополнительный контроль перед отправкой.",
  },
  {
    q: "8. Работаете ли вы по белому?",
    a: "Да, работаем официально со всеми документами.",
  },
];

function FaqColumn({
  items,
  valueOffset,
}: {
  items: typeof faqItems;
  valueOffset: number;
}) {
  return (
    <>
      {items.map((item, j) => {
        const i = valueOffset + j;
        return (
          <AccordionItem
            key={`faq-${i}`}
            value={`item-${i}`}
            className={styles.item}
          >
            <AccordionTrigger className={styles.trigger}>
              <span className={styles.question}>{item.q}</span>

              <span className={styles.iconWrap} aria-hidden>
                <Plus className={styles.iconPlus} size={18} strokeWidth={3} />
              </span>
            </AccordionTrigger>

            <AccordionContent className={styles.content}>
              <div className={styles.contentInner}>{item.a}</div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </>
  );
}

export function FAQ() {
  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-heading">
      <div className={styles.inner}>
        <FadeIn variant="fadeUpSm">
          <h2 id="faq-heading" className={styles.heading}>
            Ответы на частые вопросы
          </h2>
        </FadeIn>

        <div className={styles.cols}>
          <FadeIn className={styles.col}>
            <Accordion type="single" collapsible className={styles.accordion}>
              <FaqColumn items={faqItems.slice(0, 4)} valueOffset={0} />
            </Accordion>
          </FadeIn>

          <FadeIn delay={0.06} className={styles.col}>
            <Accordion type="single" collapsible className={styles.accordion}>
              <FaqColumn items={faqItems.slice(4, 8)} valueOffset={4} />
            </Accordion>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
