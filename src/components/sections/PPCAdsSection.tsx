'use client';

import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import './PPCAdsSection.css';

// Types
interface PPCAdsItem {
  title: string;
  description: string;
  icon: string;
  color: string;
}

// Constants
const PPC_ADS_ITEMS: PPCAdsItem[] = [
  {
    title: 'Digital Solutions',
    description: 'Information Technology is a broad category that encompasses various technologies and practices.',
    icon: 'fas fa-laptop-code',
    color: '#285C9A',
  },
  {
    title: 'Software Masters',
    description: 'Enterprise-grade software development, integration, and support for scalable products.',
    icon: 'fas fa-cogs',
    color: '#0D4892',
  },
  {
    title: 'Execution Business',
    description: 'Strategic execution and managed services to keep your operations running smoothly.',
    icon: 'fas fa-rocket',
    color: '#06b6d4',
  },
  {
    title: 'LinkedIn Ads',
    description: 'Reach decision-makers with highly targeted campaigns designed for B2B growth and brand visibility.',
    icon: 'fab fa-linkedin-in',
    color: '#0077b5',
  },
  {
    title: 'Instagram Ads',
    description: 'Create high-engagement social campaigns that connect your brand with modern audiences.',
    icon: 'fab fa-instagram',
    color: '#e1306c',
  },
  {
    title: 'Google Ads',
    description: 'Scale traffic and conversions with search, display, and performance campaigns built for measurable ROI.',
    icon: 'fab fa-google',
    color: '#4285f4',
  },
];

export default function PPCAdsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);

  // Update items to show based on screen size
  useEffect(() => {
    const updateItemsToShow = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 576) {
          setItemsToShow(1);
        } else if (window.innerWidth < 992) {
          setItemsToShow(2);
        } else {
          setItemsToShow(4);
        }
      }
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, []);

  const visibleItems = PPC_ADS_ITEMS.slice(currentIndex, currentIndex + itemsToShow);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : PPC_ADS_ITEMS.length - itemsToShow));
  }, [itemsToShow]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < PPC_ADS_ITEMS.length - itemsToShow ? prev + 1 : 0));
  }, [itemsToShow]);

  return (
    <section className="ppc-ads-section">
      <div  className="container ppc-ads-container">
        <div className="ppc-ads-content">
          <div className="ppc-ads-eyebrow">INNOVATIVE FEATURES & SUPPORT</div>
          <h1 className="ppc-ads-title">
            Simplify IT for
            <br />
            Enhanced Productivity
          </h1>
          <p className="ppc-ads-description">
            We build enterprise-grade solutions and managed services that improve efficiency, reduce operational
            cost, and accelerate time-to-market for modern organizations.
          </p>
        </div>

        <div className="ppc-ads-controls">
          <button
            aria-label="previous"
            className="ppc-ads-nav-btn"
            onClick={handlePrevious}
          >
            ←
          </button>
          <button
            aria-label="next"
            className="ppc-ads-nav-btn"
            onClick={handleNext}
          >
            →
          </button>
        </div>
      </div>

      <div className="ppc-ads-cards-wrapper">
        <div className="ppc-ads-cards">
          {visibleItems.map((item, index) => (
            <div className="ppc-ads-card" key={`${currentIndex}-${index}`}>
              <div className="ppc-ads-card-badge" style={{ background: item.color }}>
                <i className={item.icon} />
              </div>

              <h3 className="ppc-ads-card-title">{item.title}</h3>
              <p className="ppc-ads-card-description">{item.description}</p>

              <Link href="/services" className="ppc-ads-card-link">
                <span>Read More</span>
                <span className="ppc-ads-card-link-arrow">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
