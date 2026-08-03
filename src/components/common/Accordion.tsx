"use client";

import { Plus, X } from "lucide-react";
import { useState } from "react";

export function Accordion({
  items,
}: {
  items: readonly (readonly [string, string])[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="accordion">
      {items.map(([question, answer], index) => {
        const active = open === index;
        return (
          <div
            className={`accordion-item${active ? " open" : ""}`}
            key={question}
          >
            <h3>
              <button
                type="button"
                className="accordion-button"
                aria-expanded={active}
                aria-controls={`faq-${index}`}
                onClick={() => setOpen(active ? null : index)}
              >
                <span className="num">0{index + 1}</span>
                <strong>{question}</strong>
                {active ? <X size={18} /> : <Plus size={18} />}
              </button>
            </h3>
            <div id={`faq-${index}`} className="accordion-panel" role="region">
              <p>{answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
