"use client";

import { useMemo, useState } from "react";
import { calculateEstimate, formatPrice } from "@/lib/cost-calculator";
import type { CalculatorInput } from "@/types";

const initial: CalculatorInput = {
  type: "landing",
  pages: 1,
  cms: false,
  catalog: false,
  form: true,
  booking: false,
  multilingual: false,
  urgent: false,
};
const extras: {
  key: keyof Pick<
    CalculatorInput,
    "cms" | "catalog" | "form" | "booking" | "multilingual" | "urgent"
  >;
  label: string;
}[] = [
  { key: "cms", label: "Админка" },
  { key: "catalog", label: "Каталог" },
  { key: "form", label: "Форма заявки" },
  { key: "booking", label: "Онлайн-запись" },
  { key: "multilingual", label: "Мультиязычность" },
  { key: "urgent", label: "Срочный запуск" },
];

export function CostCalculator() {
  const [value, setValue] = useState(initial);
  const estimate = useMemo(() => calculateEstimate(value), [value]);
  return (
    <div className="calculator">
      <div className="calculator-controls">
        <div className="field">
          <label htmlFor="site-type">Тип сайта</label>
          <select
            id="site-type"
            value={value.type}
            onChange={(e) =>
              setValue({
                ...value,
                type: e.target.value as CalculatorInput["type"],
              })
            }
          >
            <option value="landing">Лендинг</option>
            <option value="multipage">Многостраничный</option>
            <option value="redesign">Редизайн</option>
            <option value="catalog">Сайт с каталогом</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="pages">Страниц</label>
          <input
            id="pages"
            type="number"
            min="1"
            max="30"
            value={value.pages}
            onChange={(e) =>
              setValue({
                ...value,
                pages: Math.min(30, Math.max(1, Number(e.target.value))),
              })
            }
          />
        </div>
        <div className="range-wrap">
          <input
            aria-label="Количество страниц"
            type="range"
            min="1"
            max="30"
            value={value.pages}
            onChange={(e) =>
              setValue({ ...value, pages: Number(e.target.value) })
            }
          />
        </div>
        <div className="feature-toggles">
          {extras.map((item) => (
            <label key={item.key}>
              <span>{item.label}</span>
              <input
                type="checkbox"
                checked={value[item.key]}
                onChange={(e) =>
                  setValue({ ...value, [item.key]: e.target.checked })
                }
              />
            </label>
          ))}
        </div>
      </div>
      <aside className="calculator-result" aria-live="polite">
        <span className="eyebrow">ОРИЕНТИРОВОЧНЫЙ ДИАПАЗОН</span>
        <strong>
          {formatPrice(estimate.min)}
          <br />— {formatPrice(estimate.max)}
        </strong>
        <p>
          Финальная стоимость определяется после обсуждения задачи. Диапазон
          помогает понять порядок бюджета, но не является офертой.
        </p>
      </aside>
    </div>
  );
}
