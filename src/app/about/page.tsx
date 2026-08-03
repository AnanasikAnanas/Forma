import type { Metadata } from "next";
import {
  Breadcrumbs,
  Container,
  PrimaryButton,
  SectionHeading,
  SectionLabel,
} from "@/components/common/Primitives";

export const metadata: Metadata = {
  title: "О подходе",
  description:
    "Как FORMA проектирует сайты: структура, характер бизнеса, mobile-first, понятные технологии и запуск.",
  alternates: { canonical: "/about" },
};
const principles = [
  [
    "01",
    "Сначала структура",
    "До цвета и шрифта определяю, что человек должен понять, увидеть и сделать.",
  ],
  [
    "02",
    "Характер бизнеса",
    "Визуальное направление рождается из места, аудитории и уровня сервиса, а не из тренда.",
  ],
  [
    "03",
    "Mobile — основной сценарий",
    "Проектирую для реальной руки и короткого внимания, затем раскрываю композицию на больших экранах.",
  ],
  [
    "04",
    "Понятные технологии",
    "Без лишних слоёв: быстрый сайт, прозрачная логика, предсказуемая поддержка.",
  ],
  [
    "05",
    "Самостоятельность",
    "Цены и контент можно обновлять без постоянной зависимости от разработчика.",
  ],
  [
    "06",
    "Запуск без тумана",
    "Понятные этапы, промежуточные согласования и инструкция после публикации.",
  ],
];
export default function AboutPage() {
  return (
    <>
      <Container>
        <Breadcrumbs
          items={[{ label: "Главная", href: "/" }, { label: "Подход" }]}
        />
        <section className="page-hero">
          <div className="page-hero-grid">
            <div>
              <SectionLabel index="01" title="APPROACH" />
            </div>
            <h1>
              НЕ БИОГРАФИЯ.
              <br />
              МЕТОД.
            </h1>
            <p>
              Создаю сайты для локального бизнеса, которые выглядят как
              полноценный бренд, а не как страница из конструктора.
            </p>
          </div>
        </section>
      </Container>
      <section className="section">
        <Container>
          <div className="section-intro">
            <SectionLabel index="02" title="PRINCIPLES" />
            <SectionHeading>Решения с причиной.</SectionHeading>
          </div>
          <div className="service-list">
            {principles.map(([index, title, text]) => (
              <article className="service-row" key={index}>
                <span className="service-index">{index}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="service-price">IN PRACTICE</span>
                <span className="service-time">FORMA / 2026</span>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className="dark-statement">
        <Container>
          <SectionLabel index="03" title="SCOPE" light />
          <h2 style={{ maxWidth: "11ch" }}>
            DESIGN
            <br />
            DEVELOPMENT
            <br />
            CONTENT STRUCTURE
            <br />
            LAUNCH
            <br />
            SUPPORT
          </h2>
        </Container>
      </section>
      <section className="section contact-section">
        <Container>
          <div className="contact-head">
            <div>
              <SectionLabel index="04" title="CONTACT" />
              <h2>
                ВАША
                <br />
                ЗАДАЧА
              </h2>
            </div>
            <p>
              Если вам нужен не «красивый экран», а цельная цифровая система —
              начнём с короткого разговора.
            </p>
          </div>
          <PrimaryButton href="/contact" invert>
            Обсудить проект
          </PrimaryButton>
        </Container>
      </section>
    </>
  );
}
