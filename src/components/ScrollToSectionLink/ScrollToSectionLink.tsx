"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

type Props = ComponentProps<typeof Link>;

function hashSectionId(href: Props["href"]): string | null {
  if (typeof href !== "string") return null;
  if (!href.startsWith("#") || href.length < 2) return null;
  return href.slice(1);
}

export function ScrollToSectionLink({
  href,
  onClick,
  scroll = false,
  ...rest
}: Props) {
  const id = hashSectionId(href);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented || !id) return;

    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    const next = `#${id}`;
    if (window.location.hash !== next) {
      history.pushState(null, "", next);
    }
  };

  if (id) {
    return (
      <Link href={href} scroll={scroll} onClick={handleClick} {...rest} />
    );
  }

  return <Link href={href} onClick={onClick} {...rest} />;
}
