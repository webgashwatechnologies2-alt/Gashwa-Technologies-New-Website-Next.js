'use client';

import { useState } from 'react';
import './FaqSection.css';

export interface FaqItem {
  question: string;
  answer: string;
}

export const DEFAULT_FAQ_ITEMS: FaqItem[] = [
  {
    question: "How long does it take to design and develop a website?",
    answer: "The timeline depends on the complexity and scope of the project. A standard business website typically takes 2–4 weeks, while a more complex e-commerce or dynamic website can take 4–8 weeks. We always share a detailed project timeline before starting work.",
  },
  {
    question: "How much does a website cost at Gashwa Technologies?",
    answer: "Our website packages start from ₹7,999 and vary based on the number of pages, features, and customisation required. We offer transparent pricing with no hidden costs. Contact us for a free quote tailored to your specific requirements.",
  },
  {
    question: "Will my website be mobile-friendly and responsive?",
    answer: "Absolutely. Every website we design is fully responsive and tested across all major devices — smartphones, tablets, laptops, and desktops — ensuring a seamless user experience for all your visitors regardless of screen size.",
  },
  {
    question: "Do you provide SEO-friendly website design?",
    answer: "Yes. All our websites are built with SEO best practices in mind, including proper heading structure, semantic HTML, optimised page speed, meta tags, alt texts, and clean URL structures — giving your website a strong foundation for search engine rankings.",
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes, we specialise in website redesigning. Whether you want a complete visual overhaul, improved performance, or better UX/UI, our team can analyse your current website and deliver a modern, high-performing redesign that aligns with your business goals.",
  },
  {
    question: "Will I be able to update my website content myself?",
    answer: "Yes. We can build your website on a user-friendly CMS (Content Management System) such as WordPress, giving you the ability to update pages, add blog posts, and manage content easily — no technical knowledge required.",
  },
  {
    question: "Do you offer website maintenance and support after launch?",
    answer: "Yes, we offer comprehensive post-launch support and maintenance packages. This includes security updates, performance monitoring, content updates, bug fixes, and technical support to ensure your website stays secure and up-to-date.",
  },
];

export interface FaqSectionProps {
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  items?: FaqItem[];
  ctaLabel?: string;
  ctaHref?: string;
  callCardTitle?: string;
  callCardSubtitle?: string;
  callCardCta?: string;
  consultantImage?: string;
}

export default function FaqSection({
  eyebrow = 'FAQs',
  title = 'Frequently Asked',
  titleHighlight = 'Questions',
  subtitle,
  items = DEFAULT_FAQ_ITEMS,
  ctaLabel = 'Book a Free Call',
  ctaHref = '/contact',
  callCardTitle = 'Book a 15 min call',
  callCardSubtitle = 'If you have any questions, just book a 15-minute call with us before subscribing',
  callCardCta,
  consultantImage = '/assets/img/faq/faq-consultant.jpg',
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  // Normalize display eyebrow if passed as old default
  const displayEyebrow =
    !eyebrow || eyebrow.toUpperCase() === 'GOT QUESTIONS?' ? 'FAQs' : eyebrow;

  // Determine button text: if ctaLabel was the old long default, use 'Book a Free Call'
  const displayBtn =
    callCardCta ||
    (ctaLabel && !ctaLabel.toLowerCase().includes('still have')
      ? ctaLabel
      : 'Book a Free Call');

  return (
    <section className="faq2-section" aria-labelledby="faq2-heading">
      {/* Background ambient lighting */}
      <div className="faq2-ambient-glow" aria-hidden="true" />
      <div className="faq2-ambient-grid" aria-hidden="true" />

      <div className="faq2-container">
        <div className="faq2-layout">
          {/* Left Column: Heading + Book a Call Card */}
          <div className="faq2-left">
            <div className="faq2-header-block">
              <div className="faq2-eyebrow">
                <span className="faq2-eyebrow-dot" aria-hidden="true" />
                <span>{displayEyebrow}</span>
              </div>
              <h2 className="faq2-title" id="faq2-heading">
                {title}
                {titleHighlight && (
                  <>
                    <br />
                    <span>{titleHighlight}</span>
                  </>
                )}
              </h2>
              {subtitle && <p className="faq2-subtitle">{subtitle}</p>}
            </div>

            {/* Book a Call Card */}
            <div className="faq2-call-card">
              <div className="faq2-avatar-wrap">
                <img
                  src={consultantImage}
                  alt="Tech Consultant"
                  className="faq2-avatar-img"
                  width={76}
                  height={76}
                  loading="lazy"
                />
                <div className="faq2-avatar-halo" aria-hidden="true" />
              </div>
              <h3 className="faq2-call-title">{callCardTitle}</h3>
              <p className="faq2-call-desc">{callCardSubtitle}</p>
              <a href={ctaHref} className="faq2-call-btn">
                {displayBtn}
              </a>
            </div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="faq2-right">
            <div className="faq2-accordion" role="list">
              {items.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    className={`faq2-item${isOpen ? ' faq2-item--open' : ''}`}
                    key={i}
                    role="listitem"
                  >
                    <button
                      type="button"
                      className="faq2-question-btn"
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq2-ans-${i}`}
                      id={`faq2-btn-${i}`}
                    >
                      <span className="faq2-q-text">{item.question}</span>
                      <span
                        className={`faq2-q-icon${isOpen ? ' faq2-q-icon--open' : ''}`}
                        aria-hidden="true"
                      >
                        {isOpen ? (
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        ) : (
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        )}
                      </span>
                    </button>
                    <div
                      id={`faq2-ans-${i}`}
                      role="region"
                      aria-labelledby={`faq2-btn-${i}`}
                      className="faq2-answer-wrap"
                      style={{ maxHeight: isOpen ? '500px' : '0px' }}
                    >
                      <div className="faq2-answer-content">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
