"use client";

import { useState } from "react";
import "./testimonials.css";

type Testimonial = {
  name: string;
  role: string; 
  text: string;
  image: string;
  logo?: string; 
};

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: "Martins Ana",
    role: "CEO, Bribbble LLC",
    text: "Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality. Podcasting operational change management inside of workflows to establish a framework.",
    image: "/assets/img/testimonial/clinent3.png",
    logo: "/assets/img/testimonial/google.png",
  },
  {
    name: "Sophia Miller",
    role: "Marketing Head, Nexora",
    text: "Their team delivered our project on time and the quality was beyond what we expected. Communication was clear at every step and support after launch has been excellent.",
    image: "/assets/img/testimonial/clinent1.png",
    logo: "/assets/img/testimonial/google.png",
  },
  {
    name: "David Okoye",
    role: "CTO, Finlytics",
    text: "From planning to deployment, the process was smooth and professional. Our platform is faster, safer and much easier to manage than before.",
    image: "/assets/img/testimonial/client2.png",
    logo: "/assets/img/testimonial/google.png",
  },
  {
    name: "Emma Clarke",
    role: "Founder, Brightside",
    text: "They understood our brand right away and turned our ideas into a clean, modern website. Our customers keep complimenting the new look.",
    image: "/assets/img/testimonial/clinent1.png",
    logo: "/assets/img/testimonial/google.png",
  },
  {
    name: "Liam Turner",
    role: "Director, Orbit Labs",
    text: "Reliable, creative and quick to respond. We have worked with them on multiple projects and every one has been delivered with care.",
    image: "/assets/img/testimonial/clinent3.png",
    logo: "/assets/img/testimonial/google.png",
  },
];

const PulseIcon = () => (
  <svg width="22" height="14" viewBox="0 0 22 14" fill="none" aria-hidden="true">
    <path
      d="M1 7h4l2-5 4 10 3-8 2 3h5"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = TESTIMONIALS_DATA[active];

  return (
    <section className="tst-section">
      <div className="tst-map"></div>
      <div className="tst-container">
        <div className="tst-left">
          <span style={{fontFamily : '"Plus Jakarta Sans", "Plus Jakarta Sans Fallback"'}} className="tst-eyebrow">
            <PulseIcon />
            Testimonials
            <PulseIcon />
          </span>
          <h2 style={{fontFamily : '"Plus Jakarta Sans", "Plus Jakarta Sans Fallback"'}} className="tst-title">What happy clients says about us?</h2>
          <div className="tst-main-img">
            <img src="/assets/img/testimonial/testimonial-left-img.png" alt="Happy client" />
          </div>
        </div>
        <div className="tst-right">
          <div className="tst-content" key={active}>
            <svg className="tst-quote" width="42" height="36" viewBox="0 0 42 36" aria-hidden="true">
              <path
                fill="currentColor"
                d="M0 36V19.5C0 8.3 6 1.6 17 0v6.6C12 7.8 9.6 11 9.4 15.2H17V36H0zm24 0V19.5C24 8.3 30 1.6 41 0v6.6c-5 1.2-7.4 4.4-7.6 8.6H41V36H24z"
              />
            </svg>
            <div className="tst-card">
              <p>{current.text}</p>
            </div>
            <div className="tst-author">
              <div className="tst-author-thumb">
                <img src={current.image} alt={current.name} />
              </div>
              <div className="tst-author-info">
                <h3>{current.name}</h3>
                <span>{current.role}</span>
                {current.logo && <img className="tst-author-logo" src={current.logo} alt="" />}
              </div>
            </div>
          </div>
          <div className="tst-avatars" role="tablist" aria-label="Select testimonial">
            {TESTIMONIALS_DATA.map((t, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={t.name}
                className={`tst-avatar ${i === active ? "is-active" : ""}`}
                onClick={() => setActive(i)}
              >
                <img src={t.image} alt="" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
