"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";

const filters = [
  "Все",
  "Beauty",
  "HoReCa",
  "Health",
  "Sport",
  "Personal Brand",
] as const;

export function ProjectIndex() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Все");
  const [view, setView] = useState<"index" | "visual">("index");
  const visible = useMemo(
    () =>
      filter === "Все"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );
  return (
    <>
      <div className="work-controls">
        <div className="filter-list" aria-label="Фильтр проектов">
          {filters.map((item) => (
            <button
              type="button"
              className={filter === item ? "active" : ""}
              aria-pressed={filter === item}
              key={item}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="view-toggle" aria-label="Вид каталога">
          <button
            type="button"
            className={view === "index" ? "active" : ""}
            onClick={() => setView("index")}
          >
            INDEX
          </button>
          <button
            type="button"
            className={view === "visual" ? "active" : ""}
            onClick={() => setView("visual")}
          >
            VISUAL
          </button>
        </div>
      </div>
      {visible.length === 0 ? (
        <p className="empty-state">
          В этой категории пока нет демонстрационных кейсов.
        </p>
      ) : view === "index" ? (
        <div className="project-index-list">
          {visible.map((project) => (
            <Link
              href={`/work/${project.slug}`}
              className="project-index-row"
              key={project.slug}
              style={
                {
                  "--project-accent": project.accentColor,
                } as React.CSSProperties
              }
              data-cursor="OPEN"
            >
              <span className="index">{project.index}</span>
              <h2>{project.title}</h2>
              <span className="category">{project.category}</span>
              <span className="year">{project.year}</span>
              <ArrowUpRight size={24} />
            </Link>
          ))}
        </div>
      ) : (
        <div className="project-visual-list">
          {visible.map((project) => (
            <Link
              href={`/work/${project.slug}`}
              className="visual-card"
              key={project.slug}
              style={
                {
                  "--project-accent": project.accentColor,
                } as React.CSSProperties
              }
              data-cursor="OPEN"
            >
              <div className="visual-card-media">
                <Image
                  unoptimized
                  src={project.heroImage}
                  alt={`Проект ${project.title}`}
                  width={1200}
                  height={760}
                  sizes="(max-width:700px) 94vw, 60vw"
                />
              </div>
              <div className="visual-card-copy">
                <div>
                  <span className="meta">
                    {project.index} / {project.category}
                  </span>
                  <h2>{project.title}</h2>
                </div>
                <ArrowUpRight />
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
