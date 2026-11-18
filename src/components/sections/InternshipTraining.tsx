'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Award,
  Code2,
  Smartphone,
  Palette,
  Megaphone,
  PenTool,
  Terminal,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Briefcase,
  Star,
  CheckCircle2,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import './InternshipTraining.css';
import about2Img from '../../../public/assets/img/choose/trainingimage.webp';
import avatar1 from '../../../public/assets/img/about/01.jpg';
import avatar2 from '../../../public/assets/img/about/02.jpg';
import avatar3 from '../../../public/assets/img/about/04.jpg';

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const STATS = [
  { value: '500+', label: 'Trained Students' },
  { value: '8+', label: 'Live Modules' },
  { value: '100%', label: 'Placement Support' },
  { value: '10+', label: 'Years Experience' },
];

const HIGHLIGHTS = [
  'ISO Certified Training Programs',
  'Real Client Projects & Mentorship',
  'Career-Ready Portfolio Building',
  'Flexible Batch Schedules',
];

interface CardItem {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  badge: string;
  badgeColor: string;
  link: string;
}

const CARDS_DATA: CardItem[] = [
  {
    id: 1,
    title: 'Web Designing',
    description: 'Master HTML5, CSS3, modern UI/UX frameworks, and responsive layouts.',
    icon: Palette,
    badge: 'LIVE MODULE',
    badgeColor: 'blue',
    link: '/services',
  },
  {
    id: 2,
    title: 'Web Development',
    description: 'Build full-stack applications using React, Next.js, Node.js, and databases.',
    icon: Code2,
    badge: 'LIVE MODULE',
    badgeColor: 'blue',
    link: '/services',
  },
  {
    id: 3,
    title: 'Digital Marketing',
    description: 'Data-driven SEO, Google Ads, social media, and conversion optimization.',
    icon: Megaphone,
    badge: 'LIVE MODULE',
    badgeColor: 'blue',
    link: '/services',
  },
  {
    id: 4,
    title: 'Graphic Designing',
    description: 'Visual content, brand identities, vector art, and professional UI/UX assets.',
    icon: PenTool,
    badge: 'LIVE MODULE',
    badgeColor: 'blue',
    link: '/services',
  },
  {
    id: 5,
    title: 'C/C++ Development',
    description: 'OOP, data structures, algorithms, and high-performance programming.',
    icon: Terminal,
    badge: 'LIVE MODULE',
    badgeColor: 'blue',
    link: '/services',
  },
  {
    id: 6,
    title: 'Mobile Development',
    description: 'Cross-platform iOS & Android apps with Flutter and React Native.',
    icon: Smartphone,
    badge: 'LIVE MODULE',
    badgeColor: 'blue',
    link: '/services',
  },
  {
    id: 7,
    title: 'Live Industrial Projects',
    description: 'Work on real enterprise applications alongside senior developers.',
    icon: ShieldCheck,
    badge: 'HANDS-ON',
    badgeColor: 'green',
    link: '/contact',
  },
  {
    id: 8,
    title: 'ISO & Placement Support',
    description: 'Earn ISO-verified certificates with 100% career placement assistance.',
    icon: Award,
    badge: 'CAREER',
    badgeColor: 'amber',
    link: '/contact',
  },
];

/* ─── Component ─────────────────────────────────────────────────────────────── */

export default function InternshipTraining() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const itemsPerView = 1;
  const totalPages = Math.ceil(CARDS_DATA.length / itemsPerView);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalPages);
    }, 3200);
    return () => clearInterval(timer);
  }, [isPaused, totalPages]);

  const handlePrev = () =>
    setCurrentSlide((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  const handleNext = () =>
    setCurrentSlide((prev) => (prev + 1) % totalPages);

  return (
    <section className="it-section" id="internship-training">
      <div className="it-grid-bg" />
      <div className="it-blob it-blob-1" />
      <div className="it-blob it-blob-2" />
      <div className="container it-container">
        <div className="it-section-header">
          <div className="it-section-eyebrow">
            <Sparkles className="it-eyebrow-icon" />
            <span>INDUSTRIAL TRAINING & INTERNSHIP</span>
          </div>
          <h2 className="it-section-title">
            Transform Your Skills Into a
            <span className="it-title-accent"> Thriving Career</span>
          </h2>
          <p className="it-section-desc">
            Hands-on industrial training on live client projects. Work alongside senior developers,
            build a real-world portfolio, and step into your IT career with confidence.
          </p>
        </div>
        <div className="it-stats-strip">
          {STATS.map((s, i) => (
            <div key={i} className="it-stat-item">
              <span className="it-stat-value">{s.value}</span>
              <span className="it-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-5">
            <div className="it-media-card">

              {/* Enrollment Tag */}
              <div className="it-enroll-tag">
                <span className="it-enroll-dot" />
                ENROLLMENT OPEN
              </div>
              <Image
                src={about2Img}
                alt="Gashwa Technologies Training"
                className="it-media-img"
                fill
                priority
              />
              <div className="it-media-overlay" />
              <div className="it-media-glass-panel">
                <div className="it-avatars-row">
                  <div className="it-avatar-stack">
                    {[avatar1, avatar2, avatar3].map((av, i) => (
                      <div key={i} className="it-avatar">
                        <Image src={av} alt={`Intern ${i + 1}`} fill className="it-avatar-img" />
                      </div>
                    ))}
                    <div className="it-avatar it-avatar-num">500+</div>
                  </div>
                  <div className="it-avatars-text">
                    <strong>Join our community</strong>
                    <span>of trained interns & developers</span>
                  </div>
                </div>
                <div className="it-highlights">
                  {HIGHLIGHTS.map((h, i) => (
                    <div key={i} className="it-highlight-item">
                      <CheckCircle2 className="it-check-icon" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="it-corner-badge it-badge-top-right">
                <GraduationCap className="it-corner-icon" />
                <span>ISO Certified</span>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div
              className="it-content-card"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="it-content-top">
                <div className="it-content-title-row">
                  <div className="it-content-icon-badge">
                    <Briefcase className="it-content-icon" />
                  </div>
                  <div>
                    <h3 className="it-content-heading">
                      In-Demand <span className="it-heading-accent">Training Modules</span>
                    </h3>
                    <p className="it-content-subtext">
                      Choose your technology path and begin your professional journey today.
                    </p>
                  </div>
                </div>

                {/* CTA + Slider Nav in one row */}
                <div className="it-top-actions">
                  <Link href="/contact" className="it-apply-btn">
                    Apply Now
                    <ArrowRight className="it-apply-arrow" size={16} />
                  </Link>

                  <div className="it-slider-nav">
                    <span className="it-slide-counter">
                      {String(currentSlide + 1).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
                    </span>
                    <button onClick={handlePrev} className="it-nav-btn" aria-label="Previous">
                      <ChevronLeft size={16} />
                    </button>
                    <button onClick={handleNext} className="it-nav-btn" aria-label="Next">
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="it-slider-viewport">
                <div
                  className="it-slider-track"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: totalPages }).map((_, pageIdx) => {
                    const pageItems = CARDS_DATA.slice(
                      pageIdx * itemsPerView,
                      pageIdx * itemsPerView + itemsPerView
                    );
                    return (
                      <div key={pageIdx} className="it-slider-page">
                        <div className="row g-3 w-100 m-0">
                          {pageItems.map((item) => {
                            const Icon = item.icon;
                            return (
                              <div key={item.id} className="col-12 p-2">
                                <div className="it-course-card">
                                  {/* Card Top Row */}
                                  <div className="it-course-top">
                                    <div className={`it-course-icon-wrap it-icon-${item.badgeColor}`}>
                                      <Icon className="it-course-icon" />
                                    </div>
                                    <span className={`it-course-badge it-badge-${item.badgeColor}`}>
                                      {item.badge}
                                    </span>
                                  </div>

                                  {/* Card Body */}
                                  <h4 className="it-course-title">{item.title}</h4>
                                  <p className="it-course-desc">{item.description}</p>

                                  {/* Card Footer */}
                                  <Link href={item.link} className="it-course-link">
                                    <span>Explore</span>
                                    <ArrowUpRight size={14} />
                                  </Link>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Progress Bar Dots */}
              <div className="it-progress-row">
                <div className="it-progress-bar">
                  <div
                    className="it-progress-fill"
                    style={{ width: `${((currentSlide + 1) / totalPages) * 100}%` }}
                  />
                </div>
                <div className="it-dots">
                  {Array.from({ length: totalPages }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`it-dot ${currentSlide === idx ? 'it-dot-active' : ''}`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom Trust Bar */}
              <div className="it-trust-bar">
                <div className="it-trust-item">
                  <Star className="it-trust-icon" />
                  <span><strong>4.9/5</strong> Rating</span>
                </div>
                <div className="it-trust-divider" />
                <div className="it-trust-item">
                  <ShieldCheck className="it-trust-icon" />
                  <span><strong>100%</strong> Placement</span>
                </div>
                <div className="it-trust-divider" />
                <div className="it-trust-item">
                  <Award className="it-trust-icon" />
                  <span><strong>ISO</strong> Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
