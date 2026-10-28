"use client";

import { useState } from "react";
import "./about-content.css";
import type { DesignPageData } from "@/data/designPages";

type AboutContentProps = {
  data: DesignPageData["about"];
};

export default function AboutContent({ data }: AboutContentProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="ga-about">
      <div className="ga-about__container">
        <div className="ga-about__head">
          <span className="ga-about__eyebrow">{data.eyebrow}</span>
          <h2>
            {data.title}
            <span>{data.titleHighlight}</span>
          </h2>
        </div>

        <div className={`ga-about__body ${expanded ? "is-expanded" : ""}`}>
          {data.paragraphs.map((paragraph, index) => (
            <p key={index} className={index === 0 ? "ga-about__lead" : undefined}>
              {paragraph}
            </p>
          ))}
          {!expanded && <div className="ga-about__fade" aria-hidden="true" />}
        </div>

        <button
          type="button"
          className="ga-about__toggle"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "Read Less" : "Read More"}
          <i
            className={`fa-solid fa-chevron-down ${expanded ? "is-flipped" : ""}`}
            aria-hidden="true"
          />
        </button>

        <div className="ga-about__coverage">
          <div className="ga-about__coverage-icon">
            <i className="fa-solid fa-earth-asia" aria-hidden="true" />
          </div>
          <p>
            <strong>GASHWA TECHNOLOGIES</strong> have been the first choice
            for many small and large businesses throughout{" "}
            <strong>{data.locationsIn.join(", ")}</strong> across all over India.
            Internationally for <strong>{data.locationsIntl.join(", ")}</strong>.
          </p>
        </div>

        <div className="ga-about__cta">
          <div className="ga-about__cta-text">
            <strong>{data.ctaTitle}</strong>
            <span>{data.ctaSubtitle}</span>
          </div>
          <a href={data.phoneHref} className="ga-about__cta-btn">
            <span className="ga-about__cta-icon">
              <i className="fa-solid fa-phone" aria-hidden="true" />
            </span>
            <span>
              <small>CALL NOW</small>
              <strong>{data.phone}</strong>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
