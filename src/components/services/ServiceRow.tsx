import type { Service } from "@/types";
import { formatPrice } from "@/lib/cost-calculator";

export function ServiceRow({ service }: { service: Service }) {
  return (
    <article className="service-row">
      <span className="service-index">{service.index}</span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <span className="service-price">от {formatPrice(service.priceFrom)}</span>
      <span className="service-time">{service.duration}</span>
      <span className="service-sketch" aria-hidden="true" />
    </article>
  );
}
