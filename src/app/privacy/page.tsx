import type { Metadata } from "next";
import {
  Breadcrumbs,
  Container,
  SectionLabel,
} from "@/components/common/Primitives";
export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  robots: { index: false, follow: true },
};
export default function PrivacyPage() {
  return (
    <Container>
      <Breadcrumbs
        items={[
          { label: "Главная", href: "/" },
          { label: "Политика конфиденциальности" },
        ]}
      />
      <section className="page-hero" style={{ minHeight: "55svh" }}>
        <div className="page-hero-grid">
          <div>
            <SectionLabel index="01" title="PRIVACY" />
          </div>
          <h1 style={{ fontSize: "clamp(3.8rem,9vw,10rem)" }}>
            ПОЛИТИКА
            <br />
            ДАННЫХ
          </h1>
        </div>
      </section>
      <article
        className="section"
        style={{ maxWidth: 820, fontSize: 17, lineHeight: 1.7 }}
      >
        <p>
          Это демонстрационный сайт-портфолио. Форма запрашивает только данные,
          которые вы вводите добровольно: имя, описание бизнеса, задачу, бюджет
          и контакт для ответа.
        </p>
        <p>
          Данные не сохраняются в базе сайта. При настроенной интеграции они
          передаются владельцу сайта через Telegram исключительно для ответа на
          обращение.
        </p>
        <p>
          Не отправляйте через форму медицинские, платёжные и иные
          чувствительные сведения. Для удаления ранее отправленного сообщения
          свяжитесь по адресу, указанному на странице контактов.
        </p>
        <p>
          Отправляя форму, вы подтверждаете согласие на обработку введённых
          данных для обратной связи.
        </p>
      </article>
    </Container>
  );
}
