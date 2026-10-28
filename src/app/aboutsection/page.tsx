'use client';

import Link from 'next/link';
import Image from 'next/image';
import './aboutsection.css';

import about2Img from '../../../public/assets/img/about/about2.jpg';
import aboutShape1 from '../../../public/assets/img/shape/aboutShape1_4.png';
import gashwaSectionImg from '../../../public/assets/img/about/gashwafullsectionimage.jpg';
import PPCAdsSection from '@/components/sections/PPCAdsSection';
import StatsSection from '@/components/sections/StatsSection';
import BusinessSolution from '@/components/sections/Businesssolution';
import Testimonials from '@/components/sections/Testimonials';


export default function About() {
  const HIGHLIGHTS = [
    {
      icon: 'fa-solid fa-globe',
      text: '2,500+ websites delivered across industries worldwide.',
    },
    {
      icon: 'fa-solid fa-users-gear',
      text: 'A 20+ person team of designers, developers and engineers.',
    },
    {
      icon: 'fa-solid fa-network-wired',
      text: '100+ workstations running on dedicated leased lines.',
    },
    {
      icon: 'fa-solid fa-award',
      text: '10 years of dedicated website and IT development.',
    },
  ];

  const STATS = [
    { value: '2500+', label: 'Projects delivered' },
    { value: '99%', label: 'Client satisfaction' },
    { value: '3500+', label: 'Customers served' },
    { value: '10', label: 'Years in operation' },
  ];

  return (
    <section className="about-section space fix">
      <div className="container about-container">
        <div className="grid">

          {/* Left: framed media panel */}
          <div className="media-col">
            <div className="frame">
              <span className="corner-tl" aria-hidden="true" />
              <span className="corner-tr" aria-hidden="true" />
              <span className="corner-bl" aria-hidden="true" />
              <span className="corner-br" aria-hidden="true" />

              <Image
                src={about2Img}
                alt="Gashwa Technologies team at work"
                className="team-image"
                priority
              />

              <div className="inset-photo">
                <Image
                  src={gashwaSectionImg}
                  alt="Gashwa Technologies workspace and infrastructure"
                  className="inset-image"
                />
              </div>

              <div className="credential-tag">
                <span className="credential-label">Est.</span>
                <span className="credential-value">2014</span>
              </div>
            </div>

            <Link href="/contact" className="seal" aria-label="Explore our work">
              <Image
                src={aboutShape1}
                alt=""
                aria-hidden="true"
                className="seal-ring"
              />
              <span className="seal-text">View work</span>
            </Link>
          </div>

          {/* Right: copy, highlights, stats */}
          <div className="content-col mb-5">

            <p className="eyebrow">Gashwa Technologies — since 2014</p>

            <h2 className="title">
              Ten years building the web and IT systems{' '}
              <span className="title-highlight">our clients depend on</span>.
            </h2>

            <p className="paragraph">
              We design and develop websites, e-commerce platforms, software and
              mobile apps — backed by SEO, marketing, hosting and full data
              center outsourcing. One team, every layer of your infrastructure.{' '}
              <Link href="/about" className="know-more-link">
                Know more <i className="fa-solid fa-arrow-right-long" aria-hidden="true" />
              </Link>
            </p>

            <ul className="highlight-grid">
              {HIGHLIGHTS.map((item, idx) => (
                <li key={idx} className="highlight-card">
                  <span className="highlight-icon">
                    <i className={item.icon} aria-hidden="true" />
                  </span>
                  <p className="highlight-text">{item.text}</p>
                </li>
              ))}
            </ul>

            <dl className="stat-bar">
              {STATS.map((stat, idx) => (
                <div key={idx} className="stat-item">
                  <dt className="stat-label">{stat.label}</dt>
                  <dd className="stat-value">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <StatsSection />
      <BusinessSolution />
      <Testimonials />

    </section>

  );
}