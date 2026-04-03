"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn/FadeIn";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import SliderStep1Icon from "@/components/Icons/SliderStep1Icon";
import SliderStep2Icon from "@/components/Icons/SliderStep2Icon";
import SliderStep3Icon from "@/components/Icons/SliderStep3Icon";
import SliderStep4Icon from "@/components/Icons/SliderStep4Icon";
import SliderStep5Icon from "@/components/Icons/SliderStep5Icon";
import SliderStep6Icon from "@/components/Icons/SliderStep6Icon";
import styles from "./Workflow.module.css";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import ArrowLIcon from "../Icons/ArrowLIcon";
import ArrowRIcon from "../Icons/ArrowRIcon";

const steps = [
  {
    Icon: SliderStep1Icon,
    title: "1. Обсуждение Заказа",
    text: "Уточняем модель, объемы и требования",
    accent: false,
  },
  {
    Icon: SliderStep2Icon,
    title: "2. Создание Образца",
    text: "Разрабатываем и отшиваем первый образец",
    accent: true,
  },
  {
    Icon: SliderStep3Icon,
    title: "3. Доработка И Утверждение",
    text: "Вносим правки до полного соответствия",
    accent: false,
  },
  {
    Icon: SliderStep4Icon,
    title: "4. Запуск Производства",
    text: "Запускаем пошив после согласования образца",
    accent: false,
  },
  {
    Icon: SliderStep5Icon,
    title: "5. Контроль Качества",
    text: "Проверка изделий на всех этапах",
    accent: false,
  },
  {
    Icon: SliderStep6Icon,
    title: "6. Упаковка И Отгрузка",
    text: "Подготавливаем и отправляем готовую продукцию",
    accent: false,
  },
] as const;

function useWorkflowIconSize() {
  const [size, setSize] = useState(180);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 899px)");
    const apply = () => {
      setSize(mq.matches ? 110 : 180);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return size;
}

function WorkflowCarouselArrows() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarousel();

  return (
    <div className={styles.arrows}>
      <button
        type="button"
        className={styles.arrow}
        aria-label="Прокрутить назад"
        disabled={!canScrollPrev}
        onClick={scrollPrev}
      >
        <div className={styles.arrowIcon} aria-hidden>
          <ArrowLIcon />
        </div>
      </button>
      <button
        type="button"
        className={styles.arrow}
        aria-label="Прокрутить вперёд"
        disabled={!canScrollNext}
        onClick={scrollNext}
      >
        <div className={styles.arrowIcon} aria-hidden>
          <ArrowRIcon />
        </div>
      </button>
    </div>
  );
}
export function Workflow() {
  const iconSize = useWorkflowIconSize();

  // const autoplay = useRef(
  //   Autoplay({
  //     delay: 3000,
  //     stopOnInteraction: false,
  //   }),
  // );

  return (
    <section
      id="workflow"
      className={styles.section}
      aria-labelledby="workflow-heading"
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
          duration: 18,
        }}
        // plugins={[autoplay.current]}
        className={styles.carouselRoot}
      >
        <div className={styles.inner}>
          <div className={styles.headRow}>
            <h2 id="workflow-heading" className={styles.title}>
              Как Мы Работаем
            </h2>
            <WorkflowCarouselArrows />
          </div>

          <FadeIn>
            <div className={styles.scrollerWrap}>
              <CarouselContent className={styles.carouselContent}>
                {steps.map((step) => {
                  const Icon = step.Icon;
                  return (
                    <CarouselItem
                      key={step.title}
                      className={styles.carouselItem}
                    >
                      <article
                        className={`${styles.card} ${
                          step.accent ? styles.cardAccent : ""
                        }`}
                      >
                        <div className={styles.iconWrap}>
                          <Icon size={iconSize} />
                        </div>
                        <h3 className={styles.cardTitle}>{step.title}</h3>
                        <p className={styles.cardText}>{step.text}</p>
                      </article>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </div>
          </FadeIn>
        </div>
      </Carousel>
    </section>
  );
}
