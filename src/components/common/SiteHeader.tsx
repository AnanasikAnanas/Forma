"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const nav = [
  ["Проекты", "/work"],
  ["Услуги", "/services"],
  ["Подход", "/about"],
  ["Контакты", "/contact"],
] as const;

function ThemeToggle() {
  const [theme, setTheme] = useState<"day" | "night">("day");
  useEffect(() => {
    const frame = requestAnimationFrame(() =>
      setTheme(
        document.documentElement.dataset.theme === "night" ? "night" : "day",
      ),
    );
    return () => cancelAnimationFrame(frame);
  }, []);
  const toggle = () => {
    const next = theme === "day" ? "night" : "day";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("forma-theme", next);
  };
  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Включить тему ${theme === "day" ? "night" : "day"}`}
      data-cursor="GO"
    >
      <span className={theme === "day" ? "active" : ""}>DAY</span>
      <span>/</span>
      <span className={theme === "night" ? "active" : ""}>NIGHT</span>
    </button>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <Link
        href="/"
        className="wordmark"
        aria-label="FORMA — на главную"
        data-cursor="GO"
      >
        FORMA<span>®</span>
      </Link>
      <nav className="desktop-nav" aria-label="Основная навигация">
        {nav.map(([label, href]) => (
          <Link key={href} href={href} data-cursor="GO">
            {label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <ThemeToggle />
        <Link href="/contact" className="header-cta" data-cursor="GO">
          Обсудить проект
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <div
        className={`mobile-menu${open ? " is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Меню"
      >
        <nav>
          {nav.map(([label, href], index) => (
            <Link key={href} href={href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {label}
            </Link>
          ))}
        </nav>
        <div className="mobile-menu-meta">
          <span>DIGITAL ATELIER</span>
          <span>TOLYATTI / REMOTE</span>
        </div>
      </div>
    </header>
  );
}
