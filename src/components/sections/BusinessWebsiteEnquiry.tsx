'use client';

import React, { useState } from 'react';
import './BusinessWebsiteEnquiry.css';

export interface BusinessEnquiryProps {
  image?: string;
  badgeTag?: string;
  badgeTitle?: string;
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  titleEnd?: string;
  description?: string;
  descriptionHighlight?: string;
  formEyebrow?: string;
  formTitle?: string; 
}

export default function BusinessWebsiteEnquiry({
  image = '/assets/img/service/business-web-showcase.jpg',
  badgeTag = 'BUSINESS WEB DEVELOPMENT',
  badgeTitle = 'Designed for your business goals',
  eyebrow = 'A WEBSITE WITH A PURPOSE',
  title = 'Trusted',
  titleHighlight = 'Business Website',
  titleEnd = 'Development in Delhi for Professional Online Presence',
  description = 'A professional website is a big part of putting together a strong digital presence, and it also helps businesses show their products services and brand identity online.',
  descriptionHighlight = 'Business Website Development in Delhi',
  formEyebrow = 'SEND ENQUIRY',
  formTitle = "Let's Discuss Your Project",
}: BusinessEnquiryProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    details: '',
  });

  const [submissionNotice, setSubmissionNotice] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionNotice(true);
  };

  return (
    <section className="bwe-section">
      {/* Background ambient accents */}
      <div className="bwe-ambient-pattern" aria-hidden="true" />
      <div className="bwe-glow bwe-glow-left" aria-hidden="true" />
      <div className="bwe-glow bwe-glow-right" aria-hidden="true" />

      <div className="bwe-container">
        <div className="bwe-grid">
          {/* LEFT COLUMN: Visual Showcase & Text Info */}
          <div className="bwe-left-col">
            <div className="bwe-image-card">
              <img
                src={image}
                alt={badgeTitle || 'Business Web Development'}
                className="bwe-image"
                loading="lazy"
              />
              <div className="bwe-image-overlay" />
              <div className="bwe-image-badge">
                <div className="bwe-badge-tag">
                  <span className="bwe-code-icon">&lt;/&gt;</span>
                  <span>{badgeTag}</span>
                </div>
                <h4 className="bwe-badge-title">{badgeTitle}</h4>
              </div>
            </div>

            <div className="bwe-content">
              <div className="bwe-eyebrow">
                <span className="bwe-eyebrow-icon">✦</span>
                <span>{eyebrow}</span>
              </div>

              <h2 className="bwe-title">
                {title} <span className="bwe-title-accent" style={{ color: '#0D4892' }}>{titleHighlight}</span> {titleEnd}
              </h2>

              <p className="bwe-description">
                {description}{' '}
                <strong className="bwe-desc-accent" style={{ color: '#0D4892' }}>{descriptionHighlight}</strong> supports companies in
                building responsive, easy-to-use, and professionally arranged websites that match their
                industry, target audience, and business aims. A good website build can involve responsive layout,
                clean navigation, user-focused pages, service and product sections, contact options, mobile
                optimisation and performance enhancements, which helps the site run fast and stay stable.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Enquiry Form Card */}
          <div className="bwe-right-col">
            <div className="bwe-form-card">
              {/* Decorative top dots / accents */}
              <div className="bwe-decorative-ring" aria-hidden="true">
                <span className="bwe-ring-dot" />
              </div>

              <div className="bwe-form-header">
                <div className="bwe-form-eyebrow">
                  <i className="fa-solid fa-paper-plane" aria-hidden="true" />
                  <span>{formEyebrow}</span>
                </div>
                <h3 className="bwe-form-title">{formTitle}</h3>
              </div>

              {submissionNotice && (
                <div className="alert alert-warning" role="status">
                  Online enquiry delivery is not available yet. Please email{' '}
                  <a href="mailto:info@gashwatechnologies.com">info@gashwatechnologies.com</a>.
                </div>
              )}
              <form className="bwe-form" onSubmit={handleSubmit}>
                  {/* Full Name */}
                  <div className="bwe-field-group">
                    <label htmlFor="bwe-name" className="bwe-label">Full Name</label>
                    <div className="bwe-input-wrapper">
                      <span className="bwe-input-icon">
                        <i className="fa-regular fa-user" aria-hidden="true" />
                      </span>
                      <input
                        id="bwe-name"
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bwe-input"
                      />
                    </div>
                  </div>

                  {/* Mobile Number */}
                  <div className="bwe-field-group">
                    <label htmlFor="bwe-phone" className="bwe-label">Mobile Number</label>
                    <div className="bwe-input-wrapper">
                      <span className="bwe-input-icon">
                        <i className="fa-solid fa-phone" aria-hidden="true" />
                      </span>
                      <input
                        id="bwe-phone"
                        type="tel"
                        required
                        placeholder="Enter mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bwe-input"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="bwe-field-group">
                    <label htmlFor="bwe-email" className="bwe-label">Email Address</label>
                    <div className="bwe-input-wrapper">
                      <span className="bwe-input-icon">
                        <i className="fa-regular fa-envelope" aria-hidden="true" />
                      </span>
                      <input
                        id="bwe-email"
                        type="email"
                        required
                        placeholder="Enter email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bwe-input"
                      />
                    </div>
                  </div>

                  {/* Select Service */}
                  <div className="bwe-field-group">
                    <label htmlFor="bwe-service" className="bwe-label">Select Service</label>
                    <div className="bwe-input-wrapper bwe-select-wrapper">
                      <span className="bwe-input-icon">
                        <i className="fa-solid fa-border-all" aria-hidden="true" />
                      </span>
                      <select
                        id="bwe-service"
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="bwe-input bwe-select"
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="business-website">Business Website Development</option>
                        <option value="custom-website">Custom Web Design</option>
                        <option value="dynamic-website">Dynamic Web Development</option>
                        <option value="ecommerce">E-Commerce Development</option>
                        <option value="website-redesigning">Website Redesigning</option>
                        <option value="landing-page">Landing Page Designing</option>
                        <option value="digital-marketing">Digital Marketing & SEO</option>
                      </select>
                      <span className="bwe-select-arrow" aria-hidden="true">
                        <i className="fa-solid fa-chevron-down" />
                      </span>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="bwe-field-group">
                    <label htmlFor="bwe-details" className="bwe-label">Project Details</label>
                    <div className="bwe-input-wrapper bwe-textarea-wrapper">
                      <span className="bwe-input-icon bwe-textarea-icon">
                        <i className="fa-regular fa-comment-dots" aria-hidden="true" />
                      </span>
                      <textarea
                        id="bwe-details"
                        rows={3}
                        required
                        placeholder="Tell us about your requirements..."
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className="bwe-input bwe-textarea"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="bwe-submit-btn"
                    style={{ background: 'linear-gradient(135deg, #0D4892 0%, #0D4892 100%)', color: '#ffffff' }}
                  >
                    <span>Submit Enquiry</span>
                    <span className="bwe-btn-arrow">↗</span>
                  </button>

                  {/* Trust badges footer */}
                  <div className="bwe-form-footer">
                    <div className="bwe-trust-item">
                      <i className="fa-solid fa-shield-halved" aria-hidden="true" />
                      <span>Your details stay private</span>
                    </div>
                    <div className="bwe-trust-item">
                      <i className="fa-regular fa-clock" aria-hidden="true" />
                      <span>Quick response</span>
                    </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
