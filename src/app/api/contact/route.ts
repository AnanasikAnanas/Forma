import { NextRequest, NextResponse } from "next/server";
import { contactSchema, normalizePhone } from "@/lib/contact-schema";

const WINDOW = 10 * 60 * 1000;
const LIMIT = 5;
const requests = new Map<string, number[]>();

function allowed(ip: string) {
  const now = Date.now();
  const recent = (requests.get(ip) ?? []).filter((time) => now - time < WINDOW);
  if (recent.length >= LIMIT) return false;
  recent.push(now);
  requests.set(ip, recent);
  return true;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("cf-connecting-ip") ||
    request.headers.get("x-forwarded-for")?.split(",")[0] ||
    "local";
  if (!allowed(ip))
    return NextResponse.json(
      { message: "Слишком много попыток. Попробуйте через несколько минут." },
      { status: 429 },
    );
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Не удалось прочитать данные формы." },
      { status: 400 },
    );
  }
  const result = contactSchema.safeParse(body);
  if (!result.success)
    return NextResponse.json(
      {
        message: "Проверьте заполнение полей.",
        errors: result.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  if (result.data.website)
    return NextResponse.json({ message: "Заявка принята." });
  const data = { ...result.data, contact: normalizePhone(result.data.contact) };
  if (process.env.NODE_ENV === "development")
    console.info("FORMA contact request", {
      ...data,
      consent: true,
      website: undefined,
    });
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (token && chatId) {
    const message = [
      `Новая заявка FORMA`,
      `Имя: ${data.name}`,
      `Бизнес: ${data.business}`,
      `Есть сайт: ${data.hasSite}`,
      `Задача: ${data.request}`,
      `Бюджет: ${data.budget}`,
      `Контакт: ${data.contact}`,
      `Комментарий: ${data.comment || "—"}`,
    ].join("\n");
    try {
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text: message }),
        },
      );
      if (!response.ok) throw new Error("Telegram delivery failed");
    } catch (error) {
      console.error("Contact delivery error", error);
      return NextResponse.json(
        {
          message:
            "Заявка проверена, но отправка временно недоступна. Попробуйте позже.",
        },
        { status: 502 },
      );
    }
  }
  return NextResponse.json({
    message: "Заявка принята. Следующий шаг — короткое знакомство.",
  });
}
