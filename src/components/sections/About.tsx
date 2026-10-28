'use client';

import Link from 'next/link';
import Image from 'next/image';
import './About.css';

import about2Img from '../../../public/assets/img/about/aboutnew.jpg';
import aboutShape1 from '../../../public/assets/img/shape/aboutShape1_4.png';
import gashwaSectionImg from '../../../public/assets/img/hero/award-winning.jpg';

export default function About() {
  const HIGHLIGHT_CARDS = [
    {
      icon: 'fa-solid fa-globe',
      text: 'Over 2,500 websites created spanning diverse industries.',
    },
    {
      icon: 'fa-solid fa-users-gear',
      text: 'Accomplished team comprising over 20+ professionals.',
    },
    {
      icon: 'fa-solid fa-network-wired',
      text: 'Over 100 active workstations with dedicated leased lines.',
    },
    {
      icon: 'fa-solid fa-award',
      text: 'Over 10 Years of expertise in website & IT development.',
    },
  ];

  const STATS = [
    { value: '2500+', label: 'Finished Assignments' },
    { value: '99%', label: 'Satisfaction Guaranteed !' },
    { value: '3500+', label: 'Customers Helped' },
    { value: '10', label: 'Years in Progress' },
  ];

  return (
    <section className="about-sectionnn space fix">
      <div className="glow-top-left" />
      <div className="glow-bottom-right" />
      <div className="container about-container">
        <div className="row gy-5 gx-lg-5 align-items-center">
          <div className="col-xl-6">
            <div className="media-showcase">
              <div className="main-team-photo-box">
                <Image
                  src={about2Img}
                  alt="Gashwa Technologies Team"
                  className="team-image"
                  priority
                />
                <div className="gradient-overlay" />
              </div>
              <div className="floating-badge">
                <Link href="/contact">
                  <Image
                    src={aboutShape1}
                    alt="Explore More"
                    className="rotate360 badge-image"
                  />
                </Link>
              </div>
              <div className="showcase-image-container">
                <Image
                  src={gashwaSectionImg}
                  alt="Gashwa Technologies Showcase"
                  className="showcase-image"
                />
                <div className="showcase-bottom-box">
                  <span>Building Digital Excellence Together, One Innovation at a Time.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div className="about-content">
              <div className="section-badge">
                <i className="fa-solid fa-sparkles sparkle-icon" />
                <span className="badge-text">
                  ABOUT GASHWA TECHNOLOGIES
                </span>
              </div>
              <h2 className="about-title">
                We&apos;ve Been In Business For <span className="about-title-highlight">10 Years</span> For A Reason!
              </h2>
              <p className="about-paragraph">
                Gashwa Technologies excels in website design, development, e-commerce, software, mobile apps, SEO, marketing, and hosting. We offer comprehensive outsourcing solutions for your data center needs.{' '}
                <Link href="/about" className="know-more-link">
                  Know More <i className="fa-solid fa-arrow-right-long know-more-arrow" />
                </Link>
              </p>
              <div className="row g-3 mb-4">
                {HIGHLIGHT_CARDS.map((card, idx) => (
                  <div key={idx} className="col-sm-6">
                    <div className="feature-card">
                      <div className="feature-icon-wrapper">
                        <i className={card.icon} />
                      </div>
                      <p className="feature-card-text">
                        {card.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="stats-wrapper">
                <div className="row g-2 text-center">
                  {STATS.map((stat, idx) => (
                    <div key={idx} className="col-6 col-sm-3">
                      <div className="stat-padding">
                        <div className="stat-value">
                          {stat.value}
                        </div>
                        <div className="stat-label">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
