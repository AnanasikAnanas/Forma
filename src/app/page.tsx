import { Accordion } from "@/components/common/Accordion";
import { BrowserMockup } from "@/components/common/BrowserMockup";
import {
  Container,
  PrimaryButton,
  SectionHeading,
  SectionLabel,
  TextLink,
} from "@/components/common/Primitives";
import { Reveal } from "@/components/common/Reveal";
import { SpecificationList } from "@/components/common/SpecificationList";
import { ContactForm } from "@/components/forms/ContactForm";
import { BeforeAfterSlider } from "@/components/home/BeforeAfterSlider";
import { BusinessSelector } from "@/components/home/BusinessSelector";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { ServiceRow } from "@/components/services/ServiceRow";
import { ProjectPreview } from "@/components/work/ProjectPreview";
import { faq } from "@/data/content";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export default function HomePage() {
  const variants = [
    "",
    "project-full",
    "project-dark",
    "project-editorial",
    "project-strip",
  ];
  return (
    <>
      <section className="home-hero">
        <Container className="hero-grid">
          <div className="hero-kicker">
            <span>PORTFOLIO / 2026</span>
            <span>FORMA®</span>
          </div>
          <h1 className="hero-title">
            <span>ЦИФРОВЫЕ ПРОСТРАНСТВА</span>
            <span>ДЛЯ БИЗНЕСА, КОТОРЫЕ</span>
            <span>ХОЧЕТСЯ ОТКРЫТЬ</span>
          </h1>
          <div className="hero-side">
            <BrowserMockup />
            <p className="hero-subcopy">
              Разработка сайтов для студий, салонов, локальных брендов и
              сервисного бизнеса.
            </p>
            <div className="hero-actions">
              <PrimaryButton href="/work">Смотреть проекты</PrimaryButton>
              <TextLink href="/contact">Обсудить сайт</TextLink>
            </div>
          </div>
          <div className="hero-meta">
            <span>TOLYATTI / REMOTE</span>
            <span>AVAILABLE FOR PROJECTS</span>
            <span>Digital atelier for local business</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </Container>
      </section>

      <section className="manifest">
        <Container>
          <SectionLabel index="01" title="INTRO" />
          <div className="manifest-lines">
            <span>Сайт — это не набор блоков.</span>
            <span>Это первое впечатление,</span>
            <span>структура бизнеса,</span>
            <span>доверие и действие.</span>
          </div>
        </Container>
      </section>

      <section className="selected-work" id="work">
        <Container>
          <div className="section-intro">
            <SectionLabel index="02" title="SELECTED WORK" />
            <SectionHeading>Пять бизнесов. Пять характеров.</SectionHeading>
          </div>
        </Container>
        {projects.map((project, index) => (
          <ProjectPreview
            key={project.slug}
            project={project}
            variant={variants[index]}
          />
        ))}
        <Container>
          <div style={{ paddingBlock: "48px 90px", textAlign: "right" }}>
            <TextLink href="/work">Все проекты</TextLink>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="section-intro">
            <SectionLabel index="03" title="BUSINESS TYPE" />
            <SectionHeading>Какой бизнес у вас?</SectionHeading>
          </div>
          <BusinessSelector />
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="section-intro">
            <SectionLabel index="04" title="BEFORE & AFTER" />
            <SectionHeading>Сначала — путь человека.</SectionHeading>
          </div>
          <BeforeAfterSlider />
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="section-intro">
            <SectionLabel index="05" title="PROCESS" />
            <SectionHeading>От задачи до запуска.</SectionHeading>
          </div>
          <ProcessTimeline />
        </Container>
      </section>

      <section className="dark-statement">
        <Container>
          <SectionLabel index="05.1" title="PURPOSE" light />
          <h2>САЙТ ДОЛЖЕН НЕ ТОЛЬКО НРАВИТЬСЯ</h2>
          <div className="statement-lines">
            <Reveal>
              <span>Он должен объяснять.</span>
            </Reveal>
            <Reveal>
              <span>Вызывать доверие.</span>
            </Reveal>
            <Reveal>
              <span>Показывать ценность.</span>
            </Reveal>
            <Reveal>
              <span>Приводить к действию.</span>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="section-intro">
            <SectionLabel index="06" title="SERVICES" />
            <SectionHeading>Меню digital-ателье.</SectionHeading>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <ServiceRow service={service} key={service.index} />
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <TextLink href="/services">Подробнее и калькулятор</TextLink>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="section-intro">
            <SectionLabel index="07" title="PRINCIPLES" />
            <SectionHeading>Что вы получаете.</SectionHeading>
          </div>
          <SpecificationList />
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="section-intro">
            <SectionLabel index="07.1" title="FAQ" />
            <SectionHeading>Коротко о важном.</SectionHeading>
          </div>
          <Accordion items={faq} />
        </Container>
      </section>

      <section className="section contact-section" id="contact">
        <Container>
          <div className="contact-head">
            <div>
              <SectionLabel index="08" title="CONTACT" />
              <h2>
                НОВЫЙ
                <br />
                ПРОЕКТ
              </h2>
            </div>
            <p>
              Расскажите немного о вашем бизнесе. Я предложу подходящий формат,
              структуру и направление сайта.
            </p>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
