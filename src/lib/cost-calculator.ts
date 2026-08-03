import type { CalculatorInput } from "@/types";

const basePrices: Record<CalculatorInput["type"], number> = {
  landing: 35000,
  multipage: 52000,
  redesign: 45000,
  catalog: 65000,
};

export function calculateEstimate(input: CalculatorInput) {
  let min = basePrices[input.type];
  min += Math.max(0, input.pages - 1) * 3500;
  if (input.cms) min += 12000;
  if (input.catalog && input.type !== "catalog") min += 18000;
  if (input.form) min += 3000;
  if (input.booking) min += 6000;
  if (input.multilingual) min += 15000;
  if (input.urgent) min = Math.round(min * 1.25);
  const max = Math.ceil((min * 1.28) / 1000) * 1000;
  return { min: Math.ceil(min / 1000) * 1000, max };
}

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("ru-RU").format(value) + " ₽";
