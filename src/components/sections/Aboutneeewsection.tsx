'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Award, 
  ArrowRight, 
  PhoneCall, 
  CheckCircle2, 
  Sparkles, 
  Zap,
  ShieldCheck,
  Cpu,
  TrendingUp,
  Play
} from 'lucide-react';
import './Aboutneeewsection.css';

export default function Aboutneeewsection() {
  const features = [
    { 
      title: 'Fast & Reliable Delivery', 
      desc: 'Prompt execution & seamless deployment timelines.',
      icon: Zap 
    },
    { 
      title: 'End-to-End Solutions', 
      desc: 'Complete architectural & operational support.',
      icon: ShieldCheck 
    },
    { 
      title: 'Smart Technology', 
      desc: 'Modern tech stacks tailored for scalable growth.',
      icon: Cpu 
    },
    { 
      title: 'Competitive Pricing', 
      desc: 'Maximum ROI with transparent cost structures.',
      icon: CheckCircle2 
    },
  ];

  return (
    <section className="ans-section">
      {/* Background Decor Ambient Effects */}
      <div className="ans-ambient-light-1" />
      <div className="ans-ambient-light-2" />
      <div className="ans-mesh-pattern" />

      <div className="container position-relative z-3">
        
        {/* Main Content Row: Left Showcase & Right Copy */}
        <div className="row g-4 lg:g-5 align-items-center">
          
          {/* Left Column: Video Showcase & Metric Badges */}
          <div className="col-lg-6">
            <div className="ans-media-wrapper">
              
              {/* Sleek Tech Window Frame Header */}
              <div className="ans-window-header">
                <div className="ans-window-dots">
                  <span className="ans-dot ans-dot-red" />
                  <span className="ans-dot ans-dot-yellow" />
                  <span className="ans-dot ans-dot-green" />
                </div>
                <div className="ans-window-title">
                  <Play className="ans-window-play-icon" />
                  <span>gashwatechnologies.com/showcase</span>
                </div>
              </div>

              {/* Video Player Box */}
              <div className="ans-video-box">
                <iframe
                  className="ans-video-iframe"
                  src="https://www.youtube.com/embed/rOZRF0zbgks?autoplay=1&mute=1&controls=1&rel=0&loop=1&playlist=rOZRF0zbgks"
                  title="Gashwa Technologies Work Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>

              {/* Badges Grid (Placed cleanly UNDER the video frame, no overlaps!) */}
              <div className="ans-badges-row">
                <div className="ans-stat-card">
                  <div className="ans-stat-icon-wrap ans-icon-blue">
                    <Award className="ans-stat-icon" />
                  </div>
                  <div className="ans-stat-info">
                    <div className="ans-stat-val-group">
                      <span className="ans-stat-num">10+</span>
                      <span className="ans-stat-star">★</span>
                    </div>
                    <span className="ans-stat-lbl">Years Experience</span>
                  </div>
                </div>

                <div className="ans-stat-card">
                  <div className="ans-stat-icon-wrap ans-icon-cyan">
                    <TrendingUp className="ans-stat-icon" />
                  </div>
                  <div className="ans-stat-info">
                    <div className="ans-stat-val-group">
                      <span className="ans-stat-num">99.8%</span>
                    </div>
                    <span className="ans-stat-lbl">Client Satisfaction</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Information, Features & Actions */}
          <div className="col-lg-6 ps-xl-4">
            <div className="ans-info-wrapper">
              
              {/* Badge Subtitle */}
              <div className="ans-header-badge">
                <Sparkles className="ans-badge-sparkle" />
                <span className="ans-badge-text">ABOUT OUR COMPANY</span>
              </div>

              {/* Main Heading */}
              <h2 className="ans-heading">
                Why Businesses Trust Our Logistics{' '}
                <span className="ans-heading-accent">Solutions</span>
              </h2>

              {/* Paragraph Description */}
              <p className="ans-lead-text">
                With over four decades of experience providing solutions to large-scale enterprises throughout the globe, we offer end-to-end logistics tailored for specific markets.
              </p>

              {/* Features Grid Layout */}
              <div className="ans-features-container">
                {features.map((item, idx) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={idx} className="ans-feature-item">
                      <div className="ans-feature-icon-box">
                        <IconComponent className="ans-feature-icon" />
                      </div>
                      <div className="ans-feature-content">
                        <h4 className="ans-feature-title">{item.title}</h4>
                        <p className="ans-feature-desc">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Action Row */}
              <div className="ans-action-bar">
                <Link href="/contact" className="ans-btn-glow">
                  <span>About More</span>
                  <ArrowRight className="ans-btn-arrow" />
                </Link>

                <a href="tel:+919805034219" className="ans-phone-box">
                  <div className="ans-phone-avatar">
                    <PhoneCall className="ans-phone-svg" />
                    <span className="ans-phone-wave" />
                  </div>
                  <div className="ans-phone-meta">
                    <span className="ans-phone-title">Call Us Any Time:</span>
                    <span className="ans-phone-num">+91-98050-34219</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



