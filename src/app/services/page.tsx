'use client';

import Link from 'next/link';
import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import FaqSection from '@/components/sections/FaqSection';
import './ServicesPage.css';

interface ServiceItem {
  icon: string;
  image: string;
  title: string;
  desc: string;
  link: string;
}

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  pages: string;
  features: string[];
  excluded: string[];
}

const servicesList = [
  {
    title: "Digital Marketing",
    desc: "Providing the solutions for tech business",
    image: "/assets/img/service/dm.png",
    icon: "fa-solid fa-bullhorn",
    link: "/services/digital-marketing",
  },
  {
    title: "Security System",
    desc: "Protect your digital assets with enterprise-grade cybersecurity.",
    image: "/assets/img/service/Security-System.png",
    icon: "fa-solid fa-shield",
    link: "/services/security",
  },
  {
    title: "UI/UX Designing",
    desc: "Modern and engaging interfaces designed around your users.",
    image: "/assets/img/service/ui-ux.png",
    icon: "fa-solid fa-bullseye",
    link: "/services/ui-ux",
  },
  {
    title: "Web Development",
    desc: "High-performance websites built for modern businesses.",
    image: "/assets/img/service/web-development-picture.png",
    icon: "fa-solid fa-code",
    link: "/services/web-development",
  },
  {
    title: "Cloud Services",
    desc: "Scalable cloud solutions for modern digital businesses.",
    image: "/assets/img/service/cloud_computing.png",
    icon: "fa-solid fa-cloud",
    link: "/services/cloud-services",
  },
];

const chooseFeatures = [
  {
    icon: 'fa-solid fa-diagram-project',
    title: 'Fast Growing Process',
    desc: 'Streamlined agile workflows that keep your project on track and deliver results faster.',
  },
  {
    icon: 'fa-solid fa-code',
    title: 'Clean Code',
    desc: 'Thoroughly reviewed, well-documented code following industry best practices and standards.',
  },
  {
    icon: 'fa-solid fa-file-lines',
    title: 'Well Documentation',
    desc: 'Providing spec-focused change management materials to ensure seamless project handover.',
  },
];

const stats = [
  { icon: 'fa-solid fa-users', value: '4660+', label: 'App Developers' },
  { icon: 'fa-solid fa-swatchbook', value: '3600+', label: 'Online Designs' },
  { icon: 'fa-solid fa-face-smile', value: '2750+', label: 'Happy Clients' },
  { icon: 'fa-solid fa-star', value: '1200+', label: 'Data Reviews' },
];

const testimonials = [
  {
    text: 'Gashwa Technologies delivered an outstanding website for our travel business. Their team was professional, responsive and the final product exceeded our expectations. Highly recommend!',
    author: 'Aman Mehta',
    role: 'Director',
    img: '/assets/img/testimonial/clinent1.png',
  },
  {
    text: 'We partnered with Gashwa for our digital marketing and web development needs. The team was thorough, creative, and delivered everything on time. Our traffic has grown significantly.',
    author: 'Priya Sharma',
    role: 'Founder',
    img: '/assets/img/testimonial/client2.png',
  },
  {
    text: 'Excellent work on our e-commerce store. The design is clean, fast, and conversion-focused. The support team is always available whenever we need help.',
    author: 'Rahul Verma',
    role: 'CEO',
    img: '/assets/img/testimonial/clinent3.png',
  },
];

const brandLogos = [
  { src: '/assets/img/brand-logo/brandLogo1_1.svg', alt: 'Brand 1' },
  { src: '/assets/img/brand-logo/brandLogo1_2.svg', alt: 'Brand 2' },
  { src: '/assets/img/brand-logo/brandLogo1_3.svg', alt: 'Brand 3' },
  { src: '/assets/img/brand-logo/brandLogo1_4.svg', alt: 'Brand 4' },
  { src: '/assets/img/brand-logo/brandLogo1_5.svg', alt: 'Brand 5' },
];

const pricingPlans: PricingPlan[] = [
  {
    name: 'Silver Package',
    price: '7,999',
    period: '/- Only',
    pages: 'Up to 8 Pages',
    features: ['5 Page Website', 'Unlimited Features', 'Web & Manage Panel', 'Unlimited Agency Licensing', 'Specific Global Locations'],
    excluded: ['Domain Name', 'Free Hosting', 'SEO Optimization'],
  },
  {
    name: 'Data Package',
    price: '14,999',
    period: '/- Only',
    pages: 'Up to 25 Pages',
    features: ['5 Users Pro Services', 'Unlimited Features', 'Web & Manage Panel', 'Unlimited Agency Licensing', 'Specific Global Locations'],
    excluded: ['Advanced Security'],
  },
  {
    name: 'Partner Package',
    price: '19,999',
    period: '/- Only',
    pages: 'Up to 50 Pages',
    features: ['25 Users Pro Services', 'Unlimited Features', 'Web & Manage Panel', 'Unlimited Agency Licensing', 'Specific Global Locations'],
    excluded: [],
  },
];

export default function ServicesPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const t = testimonials[activeTestimonial];

  return (
    <>
      <Breadcrumb title="Our Services" activeItem="Services" />
      <section className="isn-services-section">
        <div className="isn-services-container">
          <div className="isn-services-header">
            <div className="isn-services-heading">
              <span className="isn-eyebrow">Our Specialized Services</span>
              <h2 className="isn-section-title">
                We run all kinds of <span>IT services</span>
              </h2>
            </div>
            <p style={{fontSize : '15px'}} className="isn-section-desc">
              From web design to cloud infrastructure, our expert team delivers
              end-to-end IT solutions that drive real business growth across every
              industry.
            </p>
          </div>

          <div className="isn-services-grid">
            {servicesList.slice(0, 5).map((svc, i) => (
              <div className="isn-scard" key={i}>
                <div className="isn-scard-pattern"></div>
                <span className="isn-card-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="isn-scard-content">
                  <div className="isn-scard-icon">
                    <i className={svc.icon}></i>
                  </div>
                  <div className="isn-scard-info">
                    <h3>{svc.title}</h3>
                    <p>{svc.desc}</p>
                    <Link href={svc.link} className="isn-scard-btn">
                      Read More
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="isn-scard-image">
                  <img src={svc.image} alt={svc.title} />
                </div>
              </div>
            ))}

            <div className="isn-services-cta">
              <div className="isn-cta-dots"></div>
              <div className="isn-cta-circle"></div>
              <div className="isn-cta-content">
                <span>Get Your IT Technology Solutions</span>
                <h3>Don&apos;t Waste a Second! Call Us to Solve Your Any IT Solutions</h3>
                <Link href="/contact" className="isn-cta-btn">
                  Find Your Solution
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="isn-choose-section">
        <div className="container">
          <div className="isn-choose-layout">
            <div className="isn-choose-images">
              <img
                src="/assets/img/about/about1image.jpg"
                alt="Why Choose Gashwa Technologies"
                className="isn-choose-img-main"
              />
              <div className="isn-choose-img-badge">
                <i className="fa-solid fa-headset" style={{ fontSize: '20px', marginBottom: '6px' }} />
                <strong>24/7</strong>
                <span>Support</span>
              </div>
            </div>
            <div className="isn-choose-content">
              <div>
                <div className="isn-eyebrow">99% Growth In</div>
                <h2 className="isn-choose-title">
                  10+ Years of delivering <span>customer satisfaction</span>
                </h2>
              </div>
              <p className="isn-choose-desc">
                We design and develop digital experiences that transform businesses. Our team combines cutting-edge technology with creative thinking to deliver solutions that truly make a difference.
              </p>
              <div className="isn-choose-features">
                {chooseFeatures.map((f, i) => (
                  <div key={i} className="isn-cfeat">
                    <div className="isn-cfeat-icon">
                      <i className={f.icon} />
                    </div>
                    <div className="isn-cfeat-text">
                      <h4>{f.title}</h4>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="isn-choose-cta">
                Get Free Consultation <i className="fa-solid fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="isn-stats-section">
        <div className="container">
          <div className="isn-stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="isn-stat-item">
                <div className="isn-stat-icon">
                  <i className={s.icon} />
                </div>
                <strong className="isn-stat-value">{s.value}</strong>
                <span className="isn-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="isn-testi-section">
        <div className="container">
          <div className="isn-testi-layout">
            <div className="isn-testi-left">
              <img src="/assets/img/about/aboutnew.jpg" alt="Testimonials" />
            </div>
            <div className="isn-testi-right">
              <div className="isn-eyebrow">Testimonials</div>
              <h2 className="isn-testi-title">What our clients say about us</h2>
              <div className="isn-testi-main-card">
                <span className="isn-testi-quote-icon">&ldquo;</span>
                <p className="isn-testi-text">{t.text}</p>
                <div className="isn-testi-author">
                  <img src={t.img} alt={t.author} />
                  <div className="isn-testi-author-info">
                    <strong>{t.author}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
              <div className="isn-testi-thumbs">
                {testimonials.map((testi, i) => (
                  <img
                    key={i}
                    src={testi.img}
                    alt={testi.author}
                    className={`isn-testi-thumb ${i === activeTestimonial ? 'active' : ''}`}
                    onClick={() => setActiveTestimonial(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="isn-brands-section">
        <div className="container">
          <p className="isn-brands-eyebrow">More than 5k brands work with Gashwa Technologies</p>
          <div className="isn-brands-row">
            {brandLogos.map((b, i) => (
              <div key={i} className="isn-brand-item">
                <img src={b.src} alt={b.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="isn-pricing-section">
        <div className="container">
          <div className="isn-pricing-head">
            <div className="isn-eyebrow">Pricing Plans</div>
            <h2 className="isn-pricing-title">Our popular packages</h2>
          </div>
          <div className="isn-pricing-grid">
            {pricingPlans.map((plan, i) => (
              <div key={i} className="isn-plan">
                <div className="isn-plan-head">
                  <span className="isn-plan-name">{plan.name}</span>
                  <div className="isn-plan-price-row">
                    <span className="isn-plan-currency">Rs.</span>
                    <span className="isn-plan-price">{plan.price}</span>
                    <span className="isn-plan-period">{plan.period}</span>
                  </div>
                  <p className="isn-plan-pages">{plan.pages}</p>
                </div>
                <div className="isn-plan-body">
                  <ul className="isn-plan-features">
                    {plan.features.map((f, j) => (
                      <li key={j}>
                        <i className="fa-solid fa-circle-check" />
                        {f}
                      </li>
                    ))}
                    {plan.excluded.map((f, j) => (
                      <li key={j} className="no">
                        <i className="fa-solid fa-circle-xmark" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="isn-plan-btn">
                    Get Started <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FaqSection />
    </>
  );
}