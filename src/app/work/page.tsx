import type { Metadata } from "next";
import {
  Container,
  Breadcrumbs,
  SectionLabel,
} from "@/components/common/Primitives";
import { ProjectIndex } from "@/components/work/ProjectIndex";

export const metadata: Metadata = {
  title: "Проекты",
  description:
    "Демонстрационные сайты FORMA для beauty, health, HoReCa и sport-бизнеса.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <Container>
        <Breadcrumbs
          items={[{ label: "Главная", href: "/" }, { label: "Проекты" }]}
        />
        <section className="page-hero">
          <div className="page-hero-grid">
            <div>
              <SectionLabel index="01" title="WORK INDEX" />
            </div>
            <h1>ПРОЕКТЫ</h1>
            <p>
              Не шаблоны по нишам, а разные визуальные системы под характер
              конкретного бизнеса.
            </p>
          </div>
        </section>
      </Container>
      <section className="section">
        <Container>
          <ProjectIndex />
        </Container>
      </section>
    </>
  );
}
