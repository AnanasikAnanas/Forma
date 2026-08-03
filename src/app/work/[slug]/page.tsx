import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Breadcrumbs,
  Container,
  SectionLabel,
} from "@/components/common/Primitives";
import { getProject, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.title,
    description: `${project.niche}. Демонстрационный кейс FORMA: ${project.description}`,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];
  return (
    <>
      <Container>
        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: "Проекты", href: "/work" },
            { label: project.title },
          ]}
        />
        <section className="case-hero">
          <SectionLabel index={project.index} title="DEMO CASE" />
          <h1 className="case-title">{project.title}</h1>
          <div className="case-meta">
            <div>
              НИША<strong>{project.niche}</strong>
            </div>
            <div>
              ГОД<strong>{project.year}</strong>
            </div>
            <div>
              ТИП<strong>{project.projectType ?? "Коммерческий сайт"}</strong>
            </div>
            <div>
              СРОК<strong>{project.duration}</strong>
            </div>
            <div>
              РОЛЬ<strong>{project.role}</strong>
            </div>
          </div>
        </section>
      </Container>
      <div
        className="case-cover"
        style={
          { "--project-accent": project.accentColor } as React.CSSProperties
        }
        data-cursor="VIEW"
      >
        <Image
          unoptimized
          src={project.heroImage}
          alt={`Главный экран демонстрационного проекта ${project.title}`}
          width={1400}
          height={880}
          priority
          sizes="100vw"
        />
      </div>
      <section className="section">
        <Container>
          <div className="case-story">
            <h2>01 / ЗАДАЧА</h2>
            <div className="story-copy">
              <p>{project.description}</p>
              <p>
                {project.challenge ??
                  "Задача — собрать понятный путь от первого впечатления до целевого действия, не перегружая посетителя деталями. Все названия, материалы и решения в кейсе демонстрационные; числовые бизнес-результаты не заявляются."}
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="section">
        <Container>
          <div className="case-story">
            <h2>02 / КОНЦЕПЦИЯ</h2>
            <div className="story-copy">
              <p>{project.concept}</p>
              <p>
                Композиция строится на архитектурной сетке, выразительной
                типографике и одном фирменном акценте. Система остаётся
                узнаваемой на большом экране и удобной на телефоне.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="section">
        <Container>
          <div className="section-intro">
            <SectionLabel index="03" title="STRUCTURE" />
            <h2 className="section-heading">Логика до деталей.</h2>
          </div>
          <div className="structure-map">
            {(
              project.structure ?? [
                "Первый экран",
                "Услуги",
                "Преимущества",
                "Специалисты",
                "Отзывы",
                "Запись",
              ]
            ).map((item, i) => (
              <div key={item}>
                0{i + 1}
                <br />
                <br />
                {item}
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="section">
        <Container>
          <div className="section-intro">
            <SectionLabel index="04" title="INTERFACE" />
            <h2 className="section-heading">Одна система. Разные сценарии.</h2>
          </div>
          <div className="gallery">
            {project.gallery.map((image, i) => (
              <div className="gallery-item" key={image} data-cursor="VIEW">
                <Image
                  unoptimized
                  src={image}
                  alt={`${project.title}: демонстрационный экран ${i + 1}`}
                  width={1000}
                  height={720}
                  sizes="(max-width:700px) 90vw, 52vw"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="section">
        <Container>
          <div className="section-intro">
            <SectionLabel index="05" title="TECHNICAL" />
            <h2 className="section-heading">Собрано для реальной работы.</h2>
          </div>
          <div className="tech-list">
            {(
              project.tech ?? [
                "Next.js",
                "TypeScript",
                "Адаптивная вёрстка",
                "SEO base",
                "Интеграция записи",
                "Аналитика",
              ]
            ).map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </Container>
      </section>
      <section className="section">
        <Container>
          <div className="case-story">
            <h2>06 / РЕЗУЛЬТАТ</h2>
            <div className="story-copy">
              <p>{project.result?.[0] ?? "Готовая основа для запуска."}</p>
              <p>
                {project.result?.[1] ??
                  "Создана понятная структура, усилен акцент на онлайн-записи, подготовлена мобильная версия и разработана единая визуальная система. Сайт готов к подключению реального контента."}
              </p>
            </div>
          </div>
        </Container>
      </section>
      <a
        className="next-project"
        href={`/work/${next.slug}`}
        style={{ "--project-accent": next.accentColor } as React.CSSProperties}
        data-cursor="OPEN"
      >
        <Container>
          <small>СЛЕДУЮЩИЙ ПРОЕКТ / {next.index}</small>
          <strong>{next.title} ↗</strong>
        </Container>
      </a>
    </>
  );
}
