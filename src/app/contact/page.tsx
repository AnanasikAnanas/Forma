import type { Metadata } from "next";
import {
  Breadcrumbs,
  Container,
  SectionLabel,
} from "@/components/common/Primitives";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Обсудить разработку сайта с FORMA — Тольятти и удалённая работа.",
  alternates: { canonical: "/contact" },
};
export default function ContactPage() {
  return (
    <>
      <Container>
        <Breadcrumbs
          items={[{ label: "Главная", href: "/" }, { label: "Контакты" }]}
        />
      </Container>
      <section className="section contact-section" style={{ paddingTop: 150 }}>
        <Container>
          <div className="contact-head">
            <div>
              <SectionLabel index="01" title="CONTACT" />
              <h1
                style={{
                  margin: "40px 0 0",
                  fontSize: "clamp(5rem,15vw,15rem)",
                  lineHeight: ".72",
                  letterSpacing: "-.09em",
                  fontWeight: 520,
                }}
              >
                НАЧАТЬ
                <br />
                ПРОЕКТ
              </h1>
            </div>
            <div>
              <p>
                Расскажите немного о вашем бизнесе. Я предложу подходящий
                формат, структуру и направление сайта.
              </p>
              <div
                className="mono"
                style={{ marginTop: 50, fontSize: 10, lineHeight: 2 }}
              >
                <div>TELEGRAM — {siteConfig.telegram}</div>
                <div>EMAIL — {siteConfig.email}</div>
                <div>CITY — {siteConfig.city}</div>
                <div>AVAILABLE — SEPTEMBER / 2026</div>
              </div>
            </div>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
