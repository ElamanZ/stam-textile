"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import ArrowLIcon from "@/components/Icons/ArrowLIcon";
import ArrowRIcon from "@/components/Icons/ArrowRIcon";
import slider1 from "@/assets/images/slider1.webp";
import slider2 from "@/assets/images/slider2.webp";
import slider3 from "@/assets/images/slider3.webp";
import slider4 from "@/assets/images/slider4.webp";
import slider5 from "@/assets/images/slider5.webp";
import slider6 from "@/assets/images/slider6.webp";
import { DURATION, VIEWPORT_DEFAULT, transitionPreset } from "@/lib/motion";
import styles from "./Portfolio.module.css";

const slides: { src: StaticImageData; quantity: string; alt: string }[] = [
  {
    src: slider1,
    quantity: "300 000 Шт",
    alt: "Партия пошива одежды на заказ — 300 000 шт, контрактное производство Stam Textile, Бишкек",
  },
  {
    src: slider2,
    quantity: "500 000 Шт",
    alt: "Массовый пошив для маркетплейсов — 500 000 шт, швейное производство в Кыргызстане",
  },
  {
    src: slider3,
    quantity: "450 000 Шт",
    alt: "Пример выпуска швейного цеха Stam Textile — 450 000 изделий",
  },
  {
    src: slider4,
    quantity: "320 000 Шт",
    alt: "Производственная партия одежды 320 000 шт — пошив под заказ",
  },
  {
    src: slider5,
    quantity: "280 000 Шт",
    alt: "Контрактный пошив одежды 280 000 шт для бренда",
  },
  {
    src: slider6,
    quantity: "410 000 Шт",
    alt: "Швейное производство Stam Textile — партия 410 000 шт, Бишкек",
  },
];

function PortfolioCarouselArrows() {
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

export function Portfolio() {
  const reduce = useReducedMotion();
  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    }),
  );

  return (
    <section
      id="portfolio"
      className={styles.section}
      aria-labelledby="portfolio-heading"
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
          duration: 18,
        }}
        plugins={[autoplay.current]}
        className={styles.carouselRoot}
      >
        <div className={styles.inner}>
          <motion.div
            className={styles.headRow}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_DEFAULT}
            transition={transitionPreset(DURATION.relaxed, 0, reduce)}
          >
            <h2 id="portfolio-heading" className={styles.title}>
              Примеры наших работ
            </h2>
            <PortfolioCarouselArrows />
          </motion.div>

          <div className={styles.scrollerWrap}>
            <CarouselContent className={styles.track}>
              {slides.map((item, i) => (
                <CarouselItem key={i} className={styles.slide}>
                  <motion.article
                    className={styles.card}
                    aria-label={item.quantity}
                    whileHover={reduce ? undefined : { y: -4 }}
                    transition={transitionPreset(DURATION.fast, 0, reduce)}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 639px) 255px, 300px"
                      className={styles.image}
                    />
                    <div className={styles.overlay}>{item.quantity}</div>
                  </motion.article>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </div>
      </Carousel>
    </section>
  );
}
