"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    name: "LUNA NAILS",
    note: "NAIL STUDIO / TOGLIATTI",
    color: "#671F2D",
    title: "СТИЛЬ\nВ ДЕТАЛЯХ",
  },
  {
    name: "ELEMENT LASER",
    note: "SKIN / TECHNOLOGY",
    color: "#AAB7A0",
    title: "ТОЧНОСТЬ\nИ ЗАБОТА",
  },
  {
    name: "BORODA 63",
    note: "BARBER / TOGLIATTI",
    color: "#B76B43",
    title: "СВОЙ\nХАРАКТЕР",
  },
];

export function BrowserMockup({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    const id = setInterval(
      () => setActive((value) => (value + 1) % slides.length),
      3200,
    );
    return () => clearInterval(id);
  }, [paused]);
  const slide = slides[active];
  return (
    <div
      className={`browser${compact ? " browser--compact" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      data-cursor="VIEW"
      style={{ "--project-accent": slide.color } as React.CSSProperties}
    >
      <div className="browser-bar">
        <span />
        <span />
        <span />
        <div>forma.demo/{slide.name.toLowerCase().replaceAll(" ", "-")}</div>
        <small>{active + 1}/3</small>
      </div>
      <div className="browser-canvas">
        <div className="browser-nav">
          <strong>{slide.name}</strong>
          <span>УСЛУГИ&nbsp;&nbsp; О НАС&nbsp;&nbsp; ЗАПИСАТЬСЯ</span>
        </div>
        <div className="browser-copy">
          <small>{slide.note}</small>
          <h3>
            {slide.title.split("\n").map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h3>
          <button type="button">ЗАПИСАТЬСЯ ↗</button>
        </div>
        <div className="browser-art">
          <span className="art-orbit" />
          <span className="art-card">
            FORMA
            <br />
            STUDY
            <br />
            №0{active + 1}
          </span>
        </div>
      </div>
      <div className="browser-pagination">
        {slides.map((item, index) => (
          <button
            type="button"
            key={item.name}
            className={index === active ? "active" : ""}
            aria-label={`Показать ${item.name}`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  );
}
