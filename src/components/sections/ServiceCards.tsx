import "./service-cards.css";
import type { DesignServiceCard } from "@/data/designPages";

type ServiceCardsProps = {
  headline: string;
  items: DesignServiceCard[];
};

export default function ServiceCards({ headline, items }: ServiceCardsProps) {
  return (
    <section className="sc-section">
      <div className="sc-container">
        <div className="sc-headline">
          <h2>{headline}</h2>
        </div>
        <div className="sc-grid">
          {items.map((service) => (
            <article className="sc-card" key={service.title}>
              <div className="sc-card__media">
                <img src={service.image} alt={service.title} loading="lazy" />
                <div className="sc-card__ribbon">
                  <span className="sc-card__ribbon-icon">
                    <i className={`fa-solid ${service.icon}`} aria-hidden="true" />
                  </span>
                  <span className="sc-card__ribbon-title">
                    <span>{service.title}</span>
                  </span>
                </div>
              </div>
              <div className="sc-card__body">
                <p>{service.description}</p>
                <a href={service.href} className="sc-card__more">
                  READ MORE
                  <span className="sc-card__more-line" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
