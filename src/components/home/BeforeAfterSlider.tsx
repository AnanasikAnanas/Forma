"use client";

import { ChevronsLeftRight } from "lucide-react";
import { useRef, useState } from "react";

export function BeforeAfterSlider() {
  const [position, setPosition] = useState(58);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const update = (clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition(
      Math.min(94, Math.max(6, ((clientX - rect.left) / rect.width) * 100)),
    );
  };
  return (
    <>
      <div
        ref={ref}
        className="comparison"
        style={{ "--position": `${position}%` } as React.CSSProperties}
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          update(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && update(e.clientX)}
        onPointerUp={() => {
          dragging.current = false;
        }}
      >
        <div className="comparison-pane comparison-before">
          <span className="comparison-label before">ДО / НЕЯСНО</span>
          <div className="comparison-site">
            <div className="old-nav">
              <b>Салон красоты «Людмила»</b>
              <span>Главная | Услуги | Галерея | Контакты</span>
            </div>
            <div className="old-hero">
              <h3>Добро пожаловать на наш сайт!</h3>
              <p>
                Мы оказываем широкий спектр качественных услуг. Звоните нам.
              </p>
              <button>Подробнее</button>
            </div>
          </div>
        </div>
        <div className="comparison-pane comparison-after">
          <span className="comparison-label after">ПОСЛЕ / ПОНЯТНО</span>
          <div className="comparison-site">
            <div className="new-nav">
              <b>FORMA BEAUTY</b>
              <span>УСЛУГИ&nbsp;&nbsp; МАСТЕРА&nbsp;&nbsp; ЗАПИСЬ</span>
            </div>
            <div className="new-hero">
              <small>BEAUTY STUDIO / TOGLIATTI</small>
              <h3>КРАСОТА В ВАШЕМ РИТМЕ</h3>
              <button>ВЫБРАТЬ ВРЕМЯ ↗</button>
            </div>
          </div>
        </div>
        <div
          className="comparison-handle"
          role="slider"
          tabIndex={0}
          aria-label="Сравнение старого и нового дизайна"
          aria-valuemin={6}
          aria-valuemax={94}
          aria-valuenow={Math.round(position)}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPosition((p) => Math.max(6, p - 3));
            if (e.key === "ArrowRight") setPosition((p) => Math.min(94, p + 3));
          }}
        >
          <ChevronsLeftRight size={18} />
        </div>
      </div>
      <div className="comparison-caption">
        <p>Редизайн — это не смена цветов. Это пересборка пути пользователя.</p>
      </div>
    </>
  );
}
