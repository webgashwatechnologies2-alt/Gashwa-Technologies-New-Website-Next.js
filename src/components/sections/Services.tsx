'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/constants';
import {
  Code2,
  TrendingUp,
  Search,
  Megaphone,
  Palette,
  Server,
  Smartphone,
  Layers,
  Headphones,
  Navigation,
  MessageSquareText,
  ArrowUpRight
} from 'lucide-react';
import './Services.css';

// Lucide icon mapper for services
const SERVICE_ICONS = [
  Code2,
  TrendingUp,
  Search,
  Megaphone,
  Palette,
  Server,
  Smartphone,
  Layers,
  Headphones,
];

// Helper for proper case formatting of service titles
function formatTitle(title: string): string {
  if (title === title.toUpperCase()) {
    return title
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  return title;
}

export default function Services() {
  return (
    <section
      className="service-section-v2"
      aria-labelledby="services-heading"
    >
      <div className="container px-4 mx-auto">
        {/* Section Header - 2 Column Layout on Large Screens */}
        <div className="services-header-wrapper">
          <div className="services-header-left">
            <div className="services-kicker">
              <span className="kicker-arrow">&larr;</span>
              <span>OUR SERVICES</span>
              <span className="kicker-arrow">&rarr;</span>
            </div>

            <h2 id="services-heading" className="services-main-title">
              Elevating Businesses with{' '}
              <span className="highlight">IT Ingenuity</span>
            </h2>
          </div>

          <div className="services-header-right">
            <p className="services-header-desc">
              Transform your digital presence with our innovative technology solutions
              designed to fuel growth, improve efficiency, and create impactful digital
              experiences that help your business stand out and succeed.
            </p>
          </div>
        </div>

        {/* Services Grid (White Cards + Featured Live Chat Card at 4th slot) */}
        <div className="services-grid-container" role="list">
          {SERVICES.map((service, index) => {
            const IconComponent = SERVICE_ICONS[index % SERVICE_ICONS.length];

            return (
              <React.Fragment key={service.id}>
                {/* Regular Service Card */}
                <div className="service-card-modern" role="listitem">
                  <div className="service-card-top">
                    {/* Icon Box with soft blue outline */}
                    <div className="service-icon-box">
                      <IconComponent className="service-card-icon" />
                    </div>

                    <h3 className="service-card-title">
                      {formatTitle(service.title)}
                    </h3>

                    <p className="service-card-desc">
                      {service.description}
                    </p>
                  </div>

                  <div className="service-card-bottom">
                    <Link href={service.link} className="service-read-more-btn">
                      <span>Read more</span>
                      <span className="arrow-icon">&raquo;</span>
                    </Link>
                  </div>
                </div>

                {/* Inject Featured Live Chat Card right after 3rd service item (at slot 4 like image) */}
                {index === 2 && (
                  <div className="service-card-featured" role="listitem">
                    {/* Background Decorative Rings */}
                    <div className="featured-arc-bg">
                      <div className="featured-arc-circle featured-arc-circle-1"></div>
                      <div className="featured-arc-circle featured-arc-circle-2"></div>
                      <div className="featured-arc-circle featured-arc-circle-3"></div>
                    </div>

                    {/* Top Bar */}
                    <div className="featured-card-topbar">
                      <div className="featured-nav-icon-badge">
                        <Navigation className="w-5 h-5 text-white" />
                      </div>

                      <div className="featured-live-chat-badge">
                        <span className="featured-live-chat-dot"></span>
                        <span>Live Chat</span>
                      </div>
                    </div>

                    {/* Person Image */}
                    <div className="featured-image-wrapper">
                      <Image
                        src="/assets/img/service/live_chat_person.png"
                        alt="IT Support Live Chat"
                        width={220}
                        height={200}
                        className="featured-person-img"
                      />
                    </div>

                    {/* Bottom CTA */}
                    <div className="featured-bottom-content">
                      <Link href="/contact" className="featured-cta-btn">
                        <MessageSquareText className="w-4 h-4" />
                        <span>Chat With Experts</span>
                        <ArrowUpRight className="w-4 h-4 ml-auto" />
                      </Link>
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
