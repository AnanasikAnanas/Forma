import Image from "next/image";
import type { Project } from "@/types";
import { Container, TextLink } from "@/components/common/Primitives";
import { Reveal } from "@/components/common/Reveal";

export function ProjectPreview({
  project,
  variant = "",
}: {
  project: Project;
  variant?: string;
}) {
  return (
    <article
      className={`project-preview ${variant}`}
      style={{ "--project-accent": project.accentColor } as React.CSSProperties}
    >
      <Container>
        <div className="project-layout">
          <Reveal className="project-copy">
            <span className="project-index">
              {project.index} / {project.year}
            </span>
            <h3>
              <a href={`/work/${project.slug}`} data-cursor="OPEN">
                {project.title}
              </a>
            </h3>
            <p className="project-niche">{project.niche}</p>
            <p className="project-description">{project.description}</p>
            <ul className="project-services">
              {project.services.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <TextLink href={`/work/${project.slug}`} cursor="OPEN">
              Открыть кейс
            </TextLink>
          </Reveal>
          <div className="project-visual" data-cursor="VIEW">
            <Image
              src={project.heroImage}
              alt={`Демонстрационный экран проекта ${project.title}`}
              width={1200}
              height={760}
              sizes="(max-width: 700px) 94vw, 60vw"
            />
            <span className="project-phone" aria-hidden="true" />
          </div>
        </div>
      </Container>
    </article>
  );
}
