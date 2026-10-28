import "./our-vision.css";
import type { DesignPageData } from "@/data/designPages";

type OurVisionProps = {
  data: DesignPageData["vision"];
};

export default function OurVision({ data }: OurVisionProps) {
  return (
    <section className="vision-section">
      <div className="vision-container">
        <div className="vision-grid">
          <div className="vision-images">
            <div className="vision-images__main">
              <img
                src={data.mainImage}
                alt="Team collaboration"
                className="vision-images__main-img"
              />
            </div>
            <div className="vision-images__grid">
              {data.gridImages.map((image) => (
                <div className="vision-images__grid-item" key={image.src}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="vision-images__grid-img"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="vision-content">
            <div className="vision-eyebrow">
              <i className="fa-solid fa-lightbulb" aria-hidden="true" />
              <span>{data.eyebrow}</span>
            </div>
            <h2 className="vision-title">{data.title}</h2>
            <p className="vision-description">{data.description}</p>
            <div className="vision-features">
              {data.features.map((feature) => (
                <div className="vision-feature" key={feature.title}>
                  <div className="vision-feature__icon">
                    <i className={`fa-solid ${feature.icon}`} aria-hidden="true" />
                  </div>
                  <div className="vision-feature__content">
                    <h3 className="vision-feature__title">{feature.title}</h3>
                    <p className="vision-feature__description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href={data.ctaHref} className="vision-button">
              {data.ctaLabel}
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
