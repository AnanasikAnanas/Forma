"use client";

import { useState } from "react";
import { businessTypes } from "@/data/business-types";
import { formatPrice } from "@/lib/cost-calculator";

export function BusinessSelector() {
  const [activeId, setActiveId] = useState(businessTypes[0].id);
  const active =
    businessTypes.find((item) => item.id === activeId) ?? businessTypes[0];
  return (
    <div
      className="business-selector"
      style={{ "--selector-accent": active.accentColor } as React.CSSProperties}
    >
      <div
        className="business-tabs"
        role="tablist"
        aria-label="Выберите тип бизнеса"
      >
        {businessTypes.map((item, index) => (
          <button
            type="button"
            role="tab"
            aria-selected={active.id === item.id}
            className={active.id === item.id ? "active" : ""}
            key={item.id}
            onClick={() => setActiveId(item.id)}
          >
            <span>0{index + 1}</span>
            <span>{item.title}</span>
          </button>
        ))}
      </div>
      <div className="selector-stage" role="tabpanel">
        <div className="selector-copy">
          <span className="eyebrow">РЕКОМЕНДУЕМЫЙ ФОРМАТ</span>
          <h3>
            Сайт для
            <br />
            {active.title.toLowerCase()}
          </h3>
          <p>{active.description}</p>
          <div className="selector-stats">
            <div>
              <span>СРОК</span>
              <strong>{active.duration}</strong>
            </div>
            <div>
              <span>СТОИМОСТЬ</span>
              <strong>от {formatPrice(active.priceFrom)}</strong>
            </div>
          </div>
        </div>
        <div className="selector-features">
          <div
            className="mini-site"
            data-title={active.title.toUpperCase()}
            aria-label={`Эскиз первого экрана: ${active.title}`}
          />
          <ul>
            {active.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
