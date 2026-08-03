import { z } from "zod";

const text = (label: string, max: number) =>
  z
    .string()
    .trim()
    .min(2, `${label}: заполните поле`)
    .max(max, `${label}: слишком длинное значение`);

export const contactSchema = z.object({
  name: text("Имя", 80),
  business: text("Бизнес", 120),
  hasSite: z.enum(["yes", "no", "in-progress"]),
  request: text("Задача", 160),
  budget: z.enum(["under-35", "35-60", "60-100", "100-plus", "unknown"]),
  contact: text("Контакт", 120),
  comment: z
    .string()
    .trim()
    .max(1200, "Комментарий слишком длинный")
    .optional()
    .default(""),
  consent: z.literal(true, { error: "Нужно согласие на обработку данных" }),
  website: z.string().max(0, "Spam detected").optional().default(""),
});

export type ContactData = z.infer<typeof contactSchema>;

export const normalizePhone = (value: string) => {
  const trimmed = value.trim();
  if (!trimmed.startsWith("+") && /\d/.test(trimmed))
    return trimmed.replace(/\D/g, "");
  return trimmed.replace(/[^\d+@._a-zA-Zа-яА-Я-]/g, "");
};
