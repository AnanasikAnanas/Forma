import type { Metadata } from "next";
import {
  Breadcrumbs,
  Container,
  PrimaryButton,
  SectionHeading,
  SectionLabel,
} from "@/components/common/Primitives";
import { CostCalculator } from "@/components/services/CostCalculator";
import { ServiceRow } from "@/components/services/ServiceRow";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Услуги и стоимость",
  description:
    "Лендинги, многостраничные сайты, редизайн, каталоги и поддержка для локального бизнеса.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Container>
        <Breadcrumbs
          items={[{ label: "Главная", href: "/" }, { label: "Услуги" }]}
        />
        <section className="page-hero">
          <div className="page-hero-grid">
            <div>
              <SectionLabel index="01" title="SERVICES" />
            </div>
            <h1>
              ФОРМАТЫ
              <br />
              РАБОТЫ
            </h1>
            <p>
              От точного лендинга до каталога услуг. Формат выбирается по
              задаче, а не по количеству модных блоков.
            </p>
          </div>
        </section>
      </Container>
      <section className="section">
        <Container>
          <div className="service-list">
            {services.map((service) => (
              <div key={service.index}>
                <ServiceRow service={service} />
                <div
                  style={{
                    padding: "18px 0 42px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 10,
                  }}
                >
                  {service.features.map((feature) => (
                    <span
                      className="mono"
                      style={{ fontSize: 9 }}
                      key={feature}
                    >
                      [{feature}]
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="section">
        <Container>
          <div className="section-intro">
            <SectionLabel index="02" title="ESTIMATE" />
            <SectionHeading>Соберите свой формат.</SectionHeading>
          </div>
          <CostCalculator />
        </Container>
      </section>
      <section className="section contact-section">
        <Container>
          <div className="contact-head">
            <div>
              <SectionLabel index="03" title="NEXT STEP" />
              <h2>ОБСУДИМ?</h2>
            </div>
            <p>
              Коротко расскажите о задаче — предложу разумный объём без лишней
              инфраструктуры.
            </p>
          </div>
          <PrimaryButton href="/contact" invert>
            Оставить заявку
          </PrimaryButton>
        </Container>
      </section>
    </>
  );
}
