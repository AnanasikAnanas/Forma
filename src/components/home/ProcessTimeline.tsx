import { processSteps } from "@/data/content";

export function ProcessTimeline() {
  return (
    <div className="process-line">
      {processSteps.map(([number, title, description]) => (
        <article className="process-step" key={number}>
          <button type="button">
            <span className="num">{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </button>
        </article>
      ))}
    </div>
  );
}
