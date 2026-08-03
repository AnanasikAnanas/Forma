"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { contactSchema, type ContactData } from "@/lib/contact-schema";

const budgets = [
  ["under-35", "до 35 000 ₽"],
  ["35-60", "35 000–60 000 ₽"],
  ["60-100", "60 000–100 000 ₽"],
  ["100-plus", "более 100 000 ₽"],
  ["unknown", "пока не определён"],
] as const;

export function ContactForm() {
  type FormValues = Omit<ContactData, "consent"> & { consent: boolean };
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      hasSite: "no",
      budget: "unknown",
      consent: false,
      website: "",
    },
  });
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const submit = async (values: FormValues) => {
    setStatus({ type: "idle", message: "" });
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof FormValues;
        setError(field, { message: issue.message });
      });
      return;
    }
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok)
        throw new Error(result.message || "Не удалось отправить заявку");
      setStatus({
        type: "success",
        message: "Заявка принята. Следующий шаг — короткое знакомство.",
      });
      reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error ? error.message : "Попробуйте ещё раз позже.",
      });
    }
  };
  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit(submit)}
      noValidate
      data-cursor="WRITE"
    >
      <div className="field">
        <label htmlFor="name">01 / Имя</label>
        <input
          id="name"
          placeholder="Как к вам обращаться?"
          autoComplete="name"
          {...register("name")}
        />
        {errors.name && <p className="field-error">{errors.name.message}</p>}
      </div>
      <div className="field">
        <label htmlFor="business">02 / Бизнес</label>
        <input
          id="business"
          placeholder="Студия, ресторан, клиника…"
          {...register("business")}
        />
        {errors.business && (
          <p className="field-error">{errors.business.message}</p>
        )}
      </div>
      <fieldset className="choice-field">
        <legend>03 / Есть ли действующий сайт?</legend>
        <div className="choice-list">
          {[
            ["no", "Нет"],
            ["yes", "Да"],
            ["in-progress", "В процессе"],
          ].map(([value, label]) => (
            <label key={value}>
              <input type="radio" value={value} {...register("hasSite")} />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="field full">
        <label htmlFor="request">04 / Что требуется</label>
        <input
          id="request"
          placeholder="Новый сайт, редизайн, каталог…"
          {...register("request")}
        />
        {errors.request && (
          <p className="field-error">{errors.request.message}</p>
        )}
      </div>
      <fieldset className="choice-field">
        <legend>05 / Примерный бюджет</legend>
        <div className="choice-list">
          {budgets.map(([value, label]) => (
            <label key={value}>
              <input type="radio" value={value} {...register("budget")} />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="field">
        <label htmlFor="contact">06 / Telegram или телефон</label>
        <input
          id="contact"
          placeholder="@username или +7…"
          autoComplete="tel"
          {...register("contact")}
        />
        {errors.contact && (
          <p className="field-error">{errors.contact.message}</p>
        )}
      </div>
      <div className="field">
        <label htmlFor="comment">07 / Комментарий</label>
        <textarea
          id="comment"
          placeholder="Что важно учесть?"
          {...register("comment")}
        />
      </div>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
      </div>
      <label className="consent">
        <input type="checkbox" {...register("consent")} />
        <span>
          Я согласен(на) на обработку данных по{" "}
          <a href="/privacy">
            <u>политике конфиденциальности</u>
          </a>
          .
        </span>
      </label>
      {errors.consent && (
        <p className="field-error">{errors.consent.message}</p>
      )}
      <div className="submit-row">
        <button
          className="submit-button"
          type="submit"
          disabled={isSubmitting}
          data-cursor="GO"
        >
          <span>{isSubmitting ? "ОТПРАВЛЯЮ…" : "НАЧАТЬ ПРОЕКТ"}</span>
          <span aria-hidden="true">→</span>
        </button>
        <p className="form-status" role="status" aria-live="polite">
          {status.message}
        </p>
      </div>
    </form>
  );
}
