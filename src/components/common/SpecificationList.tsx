const specs = [
  ["RESPONSIVE", "Все основные разрешения", "INCLUDED"],
  ["SEO BASE", "Metadata, sitemap, schema", "INCLUDED"],
  ["ANALYTICS", "Подготовка подключения", "INCLUDED"],
  ["BOOKING", "Интеграция сервиса", "OPTIONAL"],
  ["CMS", "Управление контентом", "OPTIONAL"],
  ["SUPPORT", "После публикации", "30 DAYS"],
];

export function SpecificationList() {
  return (
    <div className="specification">
      {specs.map(([name, note, status]) => (
        <div className="spec-row" key={name}>
          <span>{name}</span>
          <span>{note}</span>
          <strong>{status}</strong>
        </div>
      ))}
    </div>
  );
}
