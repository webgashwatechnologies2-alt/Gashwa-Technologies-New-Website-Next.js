"use client";

import Link from "next/link";
import { COUNTERS } from "@/constants";
import "./Businesssolution.css";

const stats = COUNTERS.slice(0, 4);

export default function BusinessSolution() {
  return (
    <section className="business-solution">
      <div className="business-solution__container">

        {/* Decorative background shapes */}
        <div className="business-solution__shape business-solution__shape--one">
          <img
            src="/assets/img/shape/workProcessShape2_1.png"
            alt=""
            aria-hidden="true"
          />
        </div>

        <div className="business-solution__shape business-solution__shape--two">
          <img
            src="/assets/img/shape/workProcessShape2_2.png"
            alt=""
            aria-hidden="true"
          />
        </div>

        {/* Main Content */}
        <div className="business-solution__grid">

          {/* LEFT CONTENT */}
          <div className="business-solution__content">

            <div className="business-solution__eyebrow">
              <span className="business-solution__arrow">
                ←
              </span>

              <span>ONLINE SUCCESS PARTNER</span>

              <span className="business-solution__arrow">
                →
              </span>
            </div>

            <h2 className="business-solution__title">
              Why We&apos;re Your Best Online
              <br />
              Success Partner
            </h2>

            <p className="business-solution__description">
              Gashwa Technologies believes in ethical business practices,
              teamwork, deep research, smart work and keeping ourselves
              updated.
            </p>

            {/* COUNTERS */}
            <div className="business-solution__stats">
              {stats.map((counter, index) => (
                <div
                  className="business-solution__stat"
                  key={`${counter.label}-${index}`}
                >
                  <h3>
                    {counter.value}
                    {counter.suffix}
                  </h3>

                  <p>{counter.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/projects"
              className="business-solution__button"
            >
              <span>VIEW OUR PROJECTS</span>

              <span className="business-solution__button-icon">
                →
              </span>
            </Link>
          </div>

          {/* RIGHT CONTENT */}
          <div className="business-solution__visual">

            <div className="business-solution__visual-heading">
              <h3>
                We Create Exceptional Products
              </h3>

              <p>
                Emerging High-Growth Businesses
              </p>
            </div>

            <div className="business-solution__image-wrapper">
              <img
                src="/assets/img/work-process/workProcessThumb1_1.png"
                alt="Exceptional products and digital solutions"
                className="business-solution__image"
              />
            </div>
          </div>
        </div>

        {/* Bottom Decorative Lines */}
        <div className="business-solution__waves">
          <span />
          <span />
          <span />
          <span />
        </div>

        {/* Explore More Badge */}
        <Link
          href="/projects"
          className="business-solution__explore"
          aria-label="Explore more projects"
        >
          <img
            src="/assets/img/shape/workProcessShape2_3.png"
            alt="Explore more"
          />
        </Link>

      </div>
    </section>
  );
}