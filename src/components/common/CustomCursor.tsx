"use client";

import { useEffect } from "react";

export function CustomCursor() {
  useEffect(() => {
    if (
      !matchMedia("(pointer:fine)").matches ||
      matchMedia("(prefers-reduced-motion:reduce)").matches
    )
      return;
    const root = document.documentElement;
    const cursor = document.querySelector<HTMLElement>(".custom-cursor");
    if (!cursor) return;
    let x = -100,
      y = -100,
      tx = x,
      ty = y,
      raf = 0;
    const move = (event: MouseEvent) => {
      tx = event.clientX;
      ty = event.clientY;
      cursor.dataset.visible = "true";
    };
    const loop = () => {
      x += (tx - x) * 0.2;
      y += (ty - y) * 0.2;
      cursor.style.transform = `translate3d(${x}px,${y}px,0)`;
      raf = requestAnimationFrame(loop);
    };
    const over = (event: MouseEvent) => {
      const el = (event.target as HTMLElement).closest<HTMLElement>(
        "[data-cursor]",
      );
      cursor.dataset.label = el?.dataset.cursor || "";
    };
    root.classList.add("has-custom-cursor");
    addEventListener("mousemove", move);
    document.addEventListener("mouseover", over);
    raf = requestAnimationFrame(loop);
    return () => {
      root.classList.remove("has-custom-cursor");
      removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div className="custom-cursor" aria-hidden="true">
      <span />
    </div>
  );
}
