'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import './ServiceTemplate.css';
import { ServiceData } from '@/data/services';

const PortfolioCard = React.memo(function PortfolioCard({
  work,
}: {
  work: ServiceData['recentWorks'][0];
}) {
  return (
    <article className="pf-card">
      <a href={work.url} target="_blank" rel="noopener noreferrer" className="pf-card-link">
        <div className="pf-card-shell">
          <div className="pf-card-media">
            <img src={work.thumb} alt={work.title} loading="lazy" decoding="async" />
            <div className="pf-card-badges">
              {work.popular && <span className="pf-badge-pop">Popular</span>}
              <span className="pf-badge-like" aria-hidden="true">
                <i className="fa-regular fa-heart" />
              </span>
            </div>
            <div className="pf-card-media-overlay" />
            <div className="pf-card-media-foot">
              <div className="pf-card-media-info">
                <h3>{work.title}</h3>
                <p>
                  <i className="fa-solid fa-location-dot" />
                  {work.location}
                </p>
              </div>
              <span className="pf-card-action">
                View Project
                <span className="pf-card-action-icon">
                  <i className="fa-solid fa-arrow-right" />
                </span>
              </span>
            </div>
          </div>

          <div className="pf-card-body">
            <div className="pf-card-stats">
              <div className="pf-stat">
                <strong>{work.pages}</strong>
                <span>Pages</span>
              </div>
              <div className="pf-stat">
                <strong>{work.projectType}</strong>
                <span>Type</span>
              </div>
              <div className="pf-stat">
                <strong>{work.delivery}</strong>
                <span>Delivery</span>
              </div>
            </div>

            <div className="pf-card-meta">
              <div className="pf-card-meta-left">
                <div className="pf-level">
                  <div
                    className="pf-level-bar"
                    style={{ '--level-color': work.levelColor } as React.CSSProperties}
                  />
                  <span>{work.level}</span>
                </div>
                <div className="pf-rating">
                  <strong>
                    {work.rating}
                    <i className="fa-solid fa-star" />
                  </strong>
                  <span>Rating</span>
                </div>
              </div>

              <div className="pf-map" aria-hidden="true">
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 58 C18 42, 24 36, 34 30 S52 18, 68 14"
                    stroke="#111827"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="12" cy="58" r="4" fill="#111827" />
                  <circle cx="68" cy="14" r="4" fill="#111827" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
});

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function ServiceTemplate({ data }: { data: ServiceData }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', state: '', services: '', requirements: '' });

  const featuresRef = useInView();
  const portfolioRef = useInView();
  const pricingRef = useInView();
  const processRef = useInView();
  const contactRef = useInView();

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 350);
  };

  useEffect(() => {
    const t = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % data.hero.slides.length);
        setIsTransitioning(false);
      }, 350);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); console.log('Form submitted:', formData); };

  const slide = data.hero.slides[currentSlide];

  return (
    <div className="wd-page">
      <section className="wd-hero">
        <div className="wd-hero-slides">
          {data.hero.slides.map((s, i) => (
            <div
              key={i}
              className={`wd-hero-slide ${i === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${s.image})` }}
            />
          ))}
        </div>
        <div className="wd-hero-overlay" />
        <div className="container wd-hero-inner">
          <div className={`wd-hero-content ${isTransitioning ? 'out' : 'in'}`}>
            <span className="wd-hero-label">Website Designing Company in Himachal</span>
            <h1 style={{ color: 'white' }} className="wd-hero-title">{slide.title}</h1>
            <p className="wd-hero-desc">{slide.description}</p>
            <div className="wd-hero-btns">
              <Link href="/contact" className="wd-btn wd-btn-fill">
                Get Started <i className="fa fa-arrow-right" />
              </Link>
              <a href="tel:+91-9805034219" className="wd-btn wd-btn-line">
                <i className="fa fa-phone" /> +91-9805034219
              </a>
            </div>
          </div>
          <div className="wd-hero-dots">
            {data.hero.slides.map((_, i) => (
              <button
                key={i}
                className={i === currentSlide ? 'active' : ''}
                onClick={() => goToSlide(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="wd-marquee">
        <div className="wd-marquee-track">
          {[...data.hero.trustItems, ...data.hero.trustItems].map((item, i) => (
            <span key={i} className="wd-marquee-item">
              <i className="fa fa-star" /> {item}
            </span>
          ))}
        </div>
      </div>
      <section className="wd-crumb">
        <div className="container">
          <nav className="wd-crumb-nav">
            <Link href="/">Home</Link>
            <i className="fa fa-angle-right" />
            <span>Website Designing</span>
          </nav>
          <div className="wd-crumb-row">
            <h2>Website Designing Company in <em>Himachal Pradesh</em></h2>
            <Link href="/contact" className="wd-crumb-cta">Get Free Quote <i className="fa fa-arrow-right" /></Link>
          </div>
        </div>
      </section>
      <section ref={featuresRef.ref as React.RefObject<HTMLElement>} className={`wd-features ${featuresRef.visible ? 'vis' : ''}`}>
        <div className="wd-features-glow" />
        <div className="container">
          <div className="wd-features-layout">
            <div className="wd-features-sticky">
              <span className="wd-tag">Why Choose Us</span>
              <h2 className="wd-title">Website Designing Company in <span>Shimla</span></h2>
              <p className="wd-desc">
                Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.
              </p>
              <div className="wd-features-stats">
                {data.stats.slice(0, 2).map((s, i) => (
                  <div key={i} className="wd-fstat">
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="wd-link-btn">
                Discuss Your Project <i className="fa fa-arrow-right" />
              </Link>
            </div>
            <div className="wd-features-cards">
              {data.features.map((f, i) => (
                <article
                  key={i}
                  className="wd-fcard"
                  style={{ '--c': f.accent, '--bg': f.bg, animationDelay: `${i * 0.08}s` } as React.CSSProperties}
                >
                  <div className="wd-fcard-top">
                    <span className="wd-fnum">{String(i + 1).padStart(2, '0')}</span>
                    <div className="wd-ficon"><i className={`fa ${f.icon}`} /></div>
                  </div>
                  <h3>{f.title}</h3>
                  <p>{f.description}</p>
                  <div className="wd-fcard-line" />
                </article>
              ))}
            </div>
          </div>
          <div className="wd-banner">
            <div className="wd-banner-text">
              <strong>GASHWA TECHNOLOGIES</strong>” trusted by businesses across Punjab, Haryana, Himachal Pradesh,
              Chandigarh, J&amp;K, UP, Delhi, Uttrakhand &amp; internationally in Canada, USA, UK, Australia.
            </div>
            <a href="tel:+91-9805034219" className="wd-banner-phone">
              <i className="fa fa-phone-alt" /> +91-9805034219
            </a>
          </div>
        </div>
      </section>
      <section ref={portfolioRef.ref as React.RefObject<HTMLElement>} className={`wd-portfolio ${portfolioRef.visible ? 'vis' : ''}`}>
        <div className="container">
          <div className="pf-top">
            <div>
              <span className="pf-label">Our Portfolio</span>
              <h2 className="pf-heading">Recent <span>Works</span></h2>
              <p className="pf-lead">
                Hand-crafted websites for travel, hospitality &amp; media brands — fast, responsive &amp; conversion-focused.
              </p>
            </div>
            <Link href="/projects" className="pf-top-btn">
              All Projects <i className="fa fa-arrow-right" />
            </Link>
          </div>
          <div className="pf-list-wrap">
            <div className="pf-list">
              {data.recentWorks.map((w) => (
                <PortfolioCard key={w.title} work={w} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="wd-transformation">
        <div className="container">
          <div className="wd-trans-layout">
            <div className="wd-trans-content">
              <span className="wd-trans-eyebrow">{data.transformation.eyebrow}</span>
              <h2 className="wd-trans-title">
                {data.transformation.title}
              </h2>
              <p className="wd-trans-desc">
                {data.transformation.description}
              </p>
              <Link href="/contact" className="wd-trans-btn">
                BOOK A FREE CONSULTATION <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }} />
              </Link>
            </div>
            <div className="wd-trans-graphic">
              <div className="wd-wheel">
                <div className="wd-wheel-center">
                  <div className="wd-wheel-center-inner">
                    <span>{data.transformation.centerTextLine1}<br />{data.transformation.centerTextLine2}</span>
                  </div>
                </div>
                {data.transformation.quadrants.map((q, i) => (
                  <div key={i} className={`wd-quadrant wd-q${i + 1}`}>
                    {i === 2 && <i className={`${q.iconClass} wd-q-icon`} />}
                    <span>{q.labelLine1}<br />{q.labelLine2}</span>
                    {i !== 2 && <i className={`${q.iconClass} wd-q-icon`} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section ref={processRef.ref as React.RefObject<HTMLElement>} className={`wd-process ${processRef.visible ? 'vis' : ''}`}>
        <div className="wd-process-glow wd-process-glow-a" />
        <div className="wd-process-glow wd-process-glow-b" />
        <div className="container">
          <div className="wd-process-head">
            <span className="wd-process-badge">{data.process.badge}</span>
            <h2 className="wd-process-title">
              {data.process.titleStart} <span>{data.process.titleHighlight}</span>
            </h2>
            <p className="wd-process-sub">
              {data.process.subtitle}
            </p>
          </div>

          <div className="wd-process-track">
            <div className="wd-process-steps">
              {data.process.steps.map((p, i) => (
                <article
                  key={i}
                  className="wd-step"
                  style={{ '--accent': p.accent, '--bg': p.bg, animationDelay: `${i * 0.12}s` } as React.CSSProperties}
                >
                  <div className="wd-step-node">
                    <span className="wd-step-dot" />
                    <span className="wd-step-num">{p.step}</span>
                  </div>

                  <div className="wd-step-card">
                    <span className="wd-step-watermark">{p.step}</span>
                    <div className="wd-step-icon">
                      <i className={`fa ${p.icon}`} />
                    </div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                    <div className="wd-step-bar" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Pricing */}
      <section ref={pricingRef.ref as React.RefObject<HTMLElement>} className={`wd-pricing ${pricingRef.visible ? 'vis' : ''}`}>
        <div className="wd-pricing-bg" />
        <div className="container">
          <div className="wd-head-center">
            <span className="wd-tag">{data.pricing.badge}</span>
            <h2 className="wd-title" style={{ fontSize: '2rem' }}>{data.pricing.title}</h2>
            <p className="wd-desc wd-desc-center">{data.pricing.subtitle}</p>
          </div>

          <div className="wd-price-grid">
            {data.pricing.plans.map((plan, i) => (
              <div key={i} className={`wd-plan ${plan.popular ? 'hot' : ''}`}>
                {plan.popular && <div className="wd-plan-badge"><i className="fa fa-crown" /> Most Popular</div>}
                <div className="wd-plan-head">
                  <h3>{plan.name}</h3>
                  <p>{plan.pages}</p>
                  <div className="wd-plan-price">
                    {plan.price !== 'Custom' && <small>Rs.</small>}
                    <strong>{plan.price}</strong>
                    <em>{plan.period}</em>
                  </div>
                </div>
                <ul className="wd-plan-list">
                  {plan.features.map((f, j) => (
                    <li key={j} className="yes"><i className="fa fa-check" />{f}</li>
                  ))}
                  {plan.excluded.map((f, j) => (
                    <li key={j} className="no"><i className="fa fa-times" />{f}</li>
                  ))}
                </ul>
                <Link href="/contact" className="wd-plan-btn">{plan.popular ? 'Get Started Now' : 'Get Started'}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="wd-cta">
        <div className="wd-cta-shape" />
        <div className="container">
          <div className="wd-cta-box">
            <div className="wd-cta-left">
              <span className="wd-tag wd-tag-light">Start Today</span>
              <h2>{data.cta.titleStart} <span>{data.cta.titleHighlight}</span></h2>
              <p>
                {data.cta.description}
              </p>
              <div className="wd-cta-locs">
                <i className="fa fa-map-marker-alt" />
                Punjab Â· Haryana Â· Himachal Â· Chandigarh Â· J&amp;K Â· UP Â· Delhi Â· Uttrakhand
                <br />Canada Â· USA Â· UK Â· Australia
              </div>
            </div>
            <div className="wd-cta-right">
              <Link href="/contact" className="wd-btn wd-btn-white">
                Get Free Quote <i className="fa fa-arrow-right" />
              </Link>
              <a href="tel:+91-9805034219" className="wd-btn wd-btn-glass">
                <i className="fa fa-phone" /> +91-9805034219
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section ref={contactRef.ref as React.RefObject<HTMLElement>} className={`wd-contact ${contactRef.visible ? 'vis' : ''}`}>
        <div className="container">
          <div className="wd-contact-grid">
            <div className="wd-form-box">
              <span className="wd-tag">Get in Touch</span>
              <h2 className="wd-title">Let&apos;s Discuss Your <span>Project</span></h2>
              <form onSubmit={handleSubmit} className="wd-form">
                <div className="wd-frow">
                  <div className="wd-inp"><input type="text" name="name" placeholder=" " value={formData.name} onChange={handleFormChange} required /><label>Your Name</label></div>
                  <div className="wd-inp"><input type="email" name="email" placeholder=" " value={formData.email} onChange={handleFormChange} required /><label>Email Address</label></div>
                </div>
                <div className="wd-frow">
                  <div className="wd-inp"><input type="tel" name="phone" placeholder=" " value={formData.phone} onChange={handleFormChange} required /><label>Phone Number</label></div>
                  <div className="wd-inp"><input type="text" name="state" placeholder=" " value={formData.state} onChange={handleFormChange} required /><label>State</label></div>
                </div>
                <div className="wd-inp"><input type="text" name="services" placeholder=" " value={formData.services} onChange={handleFormChange} required /><label>Services Required</label></div>
                <div className="wd-inp"><input type="text" name="requirements" placeholder=" " value={formData.requirements} onChange={handleFormChange} required /><label>Project Requirements</label></div>
                <button type="submit" className="wd-submit">Send Message <i className="fa fa-paper-plane" /></button>
              </form>
            </div>

            <div className="wd-info-box">
              <div className="wd-info-inner">
                <img src="/assets/img/logo.png" alt="Gashwa Technologies" className="wd-logo" />
                <div className="wd-info-items">
                  {[
                    { icon: 'fa-map-marker-alt', title: 'Address', text: 'Gashwa Technologies Pvt. Ltd. Kashyap Niwas, Ground Floor BhattaKufer, Shimla' },
                    { icon: 'fa-envelope', title: 'Email', text: 'info@gashwatechnologies.com' },
                    { icon: 'fa-phone', title: 'Phone', text: '+91-9805034219' },
                  ].map((c, i) => (
                    <div key={i} className="wd-info-item">
                      <div className="wd-info-ico"><i className={`fa ${c.icon}`} /></div>
                      <div><h4>{c.title}</h4><p>{c.text}</p></div>
                    </div>
                  ))}
                </div>
                <div className="wd-socials">
                  <span>Follow Us</span>
                  <div className="wd-social-row">
                    {[
                      ['https://www.facebook.com/GashwaTechnologies', 'fa-facebook-f'],
                      ['https://www.instagram.com/gashwatechnologies', 'fa-instagram'],
                      ['https://twitter.com/Gashwa_Tech', 'fa-twitter'],
                      ['https://www.linkedin.com/company/gashwa-technologies-pvt-ltd', 'fa-linkedin-in'],
                      ['https://www.youtube.com/channel/UCBP7hFGAPL9noCYoKrd2hdg', 'fa-youtube'],
                    ].map(([href, icon], i) => (
                      <a key={i} href={href} target="_blank" rel="noopener noreferrer"><i className={`fa ${icon}`} /></a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
