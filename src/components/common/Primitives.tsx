import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container ${className}`}>{children}</div>;
}

export function SectionLabel({
  index,
  title,
  light = false,
}: {
  index: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div className={`section-label${light ? " section-label--light" : ""}`}>
      <span>{index}</span>
      <span>/</span>
      <span>{title}</span>
    </div>
  );
}

export function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <h2 className={`section-heading ${className}`}>{children}</h2>;
}

export function TextLink({
  href,
  children,
  cursor = "GO",
}: {
  href: string;
  children: ReactNode;
  cursor?: string;
}) {
  return (
    <Link href={href} className="text-link" data-cursor={cursor}>
      {children}
      <span aria-hidden="true">↗</span>
    </Link>
  );
}

export function PrimaryButton({
  href,
  children,
  invert = false,
}: {
  href: string;
  children: ReactNode;
  invert?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`primary-button${invert ? " primary-button--invert" : ""}`}
      data-cursor="GO"
    >
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </Link>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href,
    })),
  };
  return (
    <>
      <nav aria-label="Хлебные крошки" className="breadcrumbs">
        {items.map((item, index) => (
          <span key={item.label}>
            {index > 0 && " / "}
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              item.label
            )}
          </span>
        ))}
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
