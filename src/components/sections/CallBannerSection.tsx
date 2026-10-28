'use client';

import React from 'react';
import Link from 'next/link';
import './CallBannerSection.css';

export interface CallBannerSectionProps {
  cardTitle?: string;
  phone1?: string;
  phone2?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  descLine1?: string;
  descLine2?: string;
  readMoreText?: string;
  readMoreLink?: string;
  callNowBtnText?: string;
  callNowBtnLink?: string;
}
export default function CallBannerSection({
  cardTitle = 'Call This Now',
  phone1 = '+91-93177-34219',
  phone2 = '+91-93178-34219',
  titlePrefix = 'Solution Company',
  titleHighlight = 'Call Now!',
  descLine1 = 'We can provide you with a reliable',
  descLine2 = 'Please input an email address',
  readMoreText = 'Read More',
  readMoreLink = '/contact',
  callNowBtnText = 'CALL NOW',
  callNowBtnLink = 'tel:+919317734219',
}: CallBannerSectionProps) {
  return (
    <section style={{marginTop: '5%'}} className="cbs-wrapper">
      <div className="cbs-container">
        <div className="cbs-decor-arrow-wrap" aria-hidden="true">
          <svg
            className="cbs-decor-svg"
            viewBox="0 0 80 85"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="13" stroke="#5a85f3" strokeWidth="2.2" opacity="0.8" />
            <circle cx="16" cy="16" r="4.5" fill="#5a85f3" />
            <path
              d="M 32 10 C 58 4 72 20 60 48 C 52 64 42 70 38 76"
              stroke="#1b252f"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeDasharray="6 6"
            />
            <path
              d="M 28 66 L 38 78 L 51 72"
              stroke="#1b252f"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="cbs-banner-card">
          <div className="cbs-left-frame">
            <div className="cbs-blue-border-frame" aria-hidden="true" />
            <div className="cbs-white-card">
              <div className="cbs-card-cube-bg">
                <img
                  src="/assets/img/cta/cube_pattern.jpg"
                  alt="3D isometric pattern"
                  className="cbs-cube-img"
                  loading="lazy"
                />
              </div>
              <div className="cbs-phone-badge" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.43-3.9-6.8-6.72l1.97-1.61c.29-.26.38-.65.27-1.02A11.36 11.36 0 0 1 8.78 4a1 1 0 0 0-1-1H4.03C3.47 3 3 3.47 3 4.03 3 13.4 10.6 21 19.97 21c.56 0 1.03-.47 1.03-1.03v-3.59a1 1 0 0 0-.99-1zM17 11h2c0-3.87-3.13-7-7-7v2c2.76 0 5 2.24 5 5zm-3 0h2c0-1.66-1.34-3-3-3v2c.55 0 1 .45 1 1z" />
                </svg>
              </div>
              <div className="cbs-card-body">
                <h3 className="cbs-card-title">{cardTitle}</h3>
                <div className="cbs-phone-list">
                  <a href={`tel:${phone1.replace(/\s+/g, '')}`} className="cbs-phone-link">
                    {phone1}
                  </a>
                  <a href={`tel:${phone2.replace(/\s+/g, '')}`} className="cbs-phone-link">
                    {phone2}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="cbs-middle-content">
            <h2 className="cbs-main-title">
              {titlePrefix}
              <span className="cbs-title-highlight">{titleHighlight}</span>
            </h2>
            <div className="cbs-desc">
              <p style={{color : 'white'}}>{descLine1}</p>
              <p style={{color : 'white'}}>{descLine2}</p>
            </div>
            <Link href={readMoreLink} className="cbs-read-more-link">
              <span>{readMoreText}</span>
              <span className="cbs-read-more-arrows" aria-hidden="true">&raquo;&raquo;</span>
            </Link>
          </div>
          <div className="cbs-right-area">
            <div className="cbs-blue-slant-bg" aria-hidden="true" />
            <div className="cbs-woman-wrapper">
              <img
                src="/assets/img/cta/ctanewwimage.png"
                alt="Customer support specialist with laptop"
                className="cbs-woman-img"
                loading="lazy"
              />
            </div>
            <a
              href={callNowBtnLink}
              className="cbs-call-pill-btn"
              title="Call Now"
              aria-label="Call Now"
            >
              <span className="cbs-call-pill-text">{callNowBtnText}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
