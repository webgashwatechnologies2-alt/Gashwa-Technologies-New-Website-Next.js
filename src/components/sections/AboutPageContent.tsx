'use client';

import Link from 'next/link';
import Image from 'next/image';
import './AboutPageContent.css';

import about2Img from '../../../public/assets/img/about/about2.jpg';
import gashwaSectionImg from '../../../public/assets/img/about/gashwafullsectionimage.jpg';
import StatsSection from '@/components/sections/StatsSection';
import BusinessSolution from '@/components/sections/Businesssolution';
import Testimonials from '@/components/sections/Testimonials';
import Team from '@/components/sections/Team';
import VisionMissionSection from '@/components/sections/VisionMissionSection';

const HIGHLIGHTS = [
  {
    icon: 'fa-solid fa-globe',
    title: '2,500+ Websites',
    desc: 'Delivered across diverse industries worldwide.',
  },
  {
    icon: 'fa-solid fa-users-gear',
    title: '20+ Experts',
    desc: 'Designers, developers, and engineers on one team.',
  },
  {
    icon: 'fa-solid fa-network-wired',
    title: '100+ Workstations',
    desc: 'Running on dedicated high-speed leased lines.',
  },
  {
    icon: 'fa-solid fa-award',
    title: '10 Years Strong',
    desc: 'Committed to website and IT excellence since 2014.',
  },
];

const SERVICES = [
  { icon: 'fa-solid fa-code', label: 'Web Development' },
  { icon: 'fa-solid fa-mobile-screen-button', label: 'Mobile Apps' },
  { icon: 'fa-solid fa-magnifying-glass-chart', label: 'SEO & Marketing' },
  { icon: 'fa-solid fa-cloud', label: 'Cloud Hosting' },
  { icon: 'fa-solid fa-palette', label: 'UI/UX Design' },
  { icon: 'fa-solid fa-shield-halved', label: 'Cybersecurity' },
];

const TIMELINE = [
  { year: '2014', title: 'Company Founded', desc: 'Gashwa Technologies started in Himachal Pradesh with a vision to empower local businesses digitally.' },
  { year: '2016', title: 'Expanded Services', desc: 'Launched full-scale mobile app development and digital marketing services for a broader client base.' },
  { year: '2019', title: '1,000+ Projects', desc: 'Crossed the milestone of 1,000 delivered projects, establishing a reputation for quality and reliability.' },
  { year: '2022', title: 'National Reach', desc: 'Expanded to Delhi NCR, Punjab, Haryana, and began accepting international projects.' },
  { year: '2024', title: '2,500+ Websites', desc: 'Celebrating a decade of innovation with 2,500+ delivered projects and a growing team of 20+ professionals.' },
];

const WHY_CHOOSE = [
  { icon: 'fa-solid fa-bolt', title: 'Fast Turnaround', desc: 'We respect your timelines. Agile delivery with zero compromise on quality.' },
  { icon: 'fa-solid fa-hand-holding-heart', title: 'Client-First Culture', desc: 'Every solution is tailored to your business goals, not off-the-shelf templates.' },
  { icon: 'fa-solid fa-infinity', title: 'End-to-End Support', desc: 'From concept to launch and beyond — we stay with you at every stage.' },
  { icon: 'fa-solid fa-lock', title: 'Transparent Process', desc: 'Clear communication, honest timelines, and full project visibility always.' },
  { icon: 'fa-solid fa-chart-line', title: 'Results-Driven', desc: 'We measure success by your growth metrics — traffic, leads, and conversions.' },
  { icon: 'fa-solid fa-microchip', title: 'Cutting-Edge Tech', desc: 'Modern tech stacks and latest frameworks to future-proof your digital presence.' },
];
export default function AboutPageContent() {
  return (
    <>
      <section className="apc-hero">
        <div className="apc-hero__glow apc-hero__glow--1" />
        <div className="apc-hero__glow apc-hero__glow--2" />
        <div className="container">
          <div className="apc-hero__grid">
            <div className="apc-hero__media">
              <div className="apc-hero__frame">
                <span className="apc-corner apc-corner--tl" />
                <span className="apc-corner apc-corner--tr" />
                <span className="apc-corner apc-corner--bl" />
                <span className="apc-corner apc-corner--br" />
                <Image
                  src={about2Img}
                  alt="Gashwa Technologies team"
                  className="apc-hero__main-img"
                  priority
                />
                <div className="apc-hero__inset">
                  <Image
                    src={gashwaSectionImg}
                    alt="Gashwa workspace"
                    className="apc-hero__inset-img"
                  />
                </div>
                <div className="apc-hero__badge">
                  <span className="apc-hero__badge-label">Est.</span>
                  <span className="apc-hero__badge-year">2014</span>
                </div>
              </div>
              <div className="apc-hero__stat-pill">
                <i className="fa-solid fa-star" />
                <span><strong>10+</strong> Years of Excellence</span>
              </div>
            </div>
            <div className="apc-hero__copy">
              <span className="apc-eyebrow">
                <i className="fa-solid fa-circle-dot" />
                Gashwa Technologies — Since 2014
              </span>
              <h2 className="apc-hero__title">
                Building Digital Excellence,{' '}
                <span className="apc-hero__title-accent">One Project at a Time</span>
              </h2>
              <p className="apc-hero__lead">
                We are a full-service IT company from the heart of Himachal Pradesh — designing websites, developing apps, powering e-commerce, and driving digital marketing strategies that grow businesses across India and beyond.
              </p>
              <ul className="apc-highlight-grid">
                {HIGHLIGHTS.map((item, idx) => (
                  <li key={idx} className="apc-highlight-card">
                    <span className="apc-highlight-icon">
                      <i className={item.icon} />
                    </span>
                    <div>
                      <strong className="apc-highlight-title">{item.title}</strong>
                      <p className="apc-highlight-desc">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="apc-hero__actions">
                <Link href="/contact" className="apc-btn-primary">
                  Get a Free Consultation
                  <i className="fa-solid fa-arrow-right" />
                </Link>
                <Link href="/projects" className="apc-btn-ghost">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="apc-services-strip">
        <div className="container">
          <p className="apc-services-strip__label">What We Do</p>
          <div className="apc-services-strip__grid">
            {SERVICES.map((s, idx) => (
              <div key={idx} className="apc-services-strip__item">
                <i className={s.icon} />
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="apc-why">
        <div className="apc-why__glow" />
        <div className="container">
          <div className="apc-section-header">
            <span className="apc-eyebrow">
              <i className="fa-solid fa-circle-dot" />
              Why Choose Us
            </span>
            <h2 className="apc-section-title">
              The Gashwa Advantage
            </h2>
            <p className="apc-section-sub">
              We do not just build websites — we build digital assets that work for your business 24/7, backed by a team that cares about your success.
            </p>
          </div>
          <div className="apc-why__grid">
            {WHY_CHOOSE.map((item, idx) => (
              <div key={idx} className="apc-why__card">
                <div className="apc-why__card-icon">
                  <i className={item.icon} />
                </div>
                <h3 className="apc-why__card-title">{item.title}</h3>
                <p className="apc-why__card-desc">{item.desc}</p>
                <div className="apc-why__card-line" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <VisionMissionSection />
      <section className="apc-timeline">
        <div className="container">
          <div className="apc-section-header">
            <span className="apc-eyebrow">
              <i className="fa-solid fa-circle-dot" />
              Our Journey
            </span>
            <h2 className="apc-section-title">A Decade of Growth</h2>
            <p className="apc-section-sub">
              From a small startup to a trusted IT partner for thousands of businesses — here is how we grew.
            </p>
          </div>

          <div className="apc-timeline__track">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className={`apc-timeline__item ${idx % 2 === 0 ? 'apc-timeline__item--left' : 'apc-timeline__item--right'}`}>
                <div className="apc-timeline__content">
                  <span className="apc-timeline__year">{item.year}</span>
                  <h3 className="apc-timeline__title">{item.title}</h3>
                  <p className="apc-timeline__desc">{item.desc}</p>
                </div>
                <div className="apc-timeline__dot" />
              </div>
            ))}
            <div className="apc-timeline__line" />
          </div>
        </div>
      </section>
      <StatsSection />
      <Team />
      <BusinessSolution />
      <Testimonials />
      <section className="apc-cta">
        <div className="apc-cta__glow" />
        <div className="container">
          <div className="apc-cta__inner">
            <div className="apc-cta__copy">
              <h2 className="apc-cta__title">Ready to Build Something Great?</h2>
              <p className="apc-cta__sub">
                Let us turn your vision into a high-performance digital product. Our team is ready to help.
              </p>
            </div>
            <div className="apc-cta__actions">
              <Link href="/contact" className="apc-btn-primary apc-btn-primary--white">
                Start a Project
                <i className="fa-solid fa-arrow-right" />
              </Link>
              <a href="tel:+919317734219" className="apc-cta__phone">
                <i className="fa-solid fa-phone" />
                +91 93177-34219
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
