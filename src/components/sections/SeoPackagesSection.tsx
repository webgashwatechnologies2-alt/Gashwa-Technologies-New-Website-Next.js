'use client';

import { useState } from 'react';
import Link from 'next/link';
import './SeoPackagesSection.css';

interface PackageItem {
  name: string;
  small: string | boolean;
  mid: string | boolean;
  large: string | boolean;
}

interface PackageCategory {
  title: string;
  icon: string;
  items: PackageItem[];
}

const SEO_CATEGORIES: PackageCategory[] = [
  {
    title: 'Website Review & Analysis',
    icon: 'fa-magnifying-glass-chart',
    items: [
      { name: 'Max Keywords', small: 'Max 5 Keywords', mid: 'Max 15 Keywords', large: 'Max 25 Keywords' },
      { name: 'Website & Competitor Analysis', small: true, mid: true, large: true },
      { name: 'Content Duplicity Check', small: true, mid: true, large: true },
      { name: 'Initial Ranking Report', small: true, mid: true, large: true },
      { name: 'Keywords Research', small: true, mid: true, large: true },
    ],
  },
  {
    title: 'On Page SEO Analysis',
    icon: 'fa-code',
    items: [
      { name: 'Meta Tags Creation', small: true, mid: true, large: true },
      { name: 'Canonicalization', small: true, mid: true, large: true },
      { name: 'URL Structure Optimization', small: true, mid: true, large: true },
      { name: 'Content Optimization', small: true, mid: true, large: true },
      { name: 'Image Optimization & Alt Tags', small: true, mid: true, large: true },
      { name: 'Heading Tag (H1-H6) Optimization', small: true, mid: true, large: true },
      { name: 'Website Speed Optimization', small: true, mid: true, large: true },
      { name: 'Robots.txt Optimization', small: true, mid: true, large: true },
      { name: 'XML Sitemap Creation & Submission', small: true, mid: true, large: true },
      { name: 'Google Analytics & Search Console Setup', small: true, mid: true, large: true },
      { name: 'Blog Optimization', small: '2 Posts', mid: '4 Posts', large: '6 Posts' },
    ],
  },
  {
    title: 'Local SEO Setup',
    icon: 'fa-location-dot',
    items: [
      { name: 'Google Map Integration on Website', small: true, mid: true, large: true },
      { name: 'Google My Business Page Setup & Optimization', small: true, mid: true, large: true },
      { name: 'Local Citations', small: '5 Citations', mid: '10 Citations', large: '15 Citations' },
      { name: 'Local Classifieds', small: '2 Classifieds', mid: '5 Classifieds', large: '10 Classifieds' },
    ],
  },
  {
    title: 'Content Marketing',
    icon: 'fa-pen-to-square',
    items: [
      { name: 'Blog Posting (600 - 700 words)', small: '1 Post', mid: '2 Posts', large: '3 Posts' },
      { name: 'Article Writing (600 - 700 words)', small: '1 Article', mid: '2 Articles', large: '4 Articles' },
      { name: 'Onsite Blog (500 - 600 words)', small: '1 Blog', mid: '2 Blogs', large: '3 Blogs' },
    ],
  },
  {
    title: 'Email Outreach & Link Building',
    icon: 'fa-envelope-open-text',
    items: [
      { name: 'Guest Blogging', small: true, mid: true, large: true },
      { name: 'Broken Backlink Building', small: true, mid: true, large: true },
      { name: 'Resource Link Building', small: true, mid: true, large: true },
      { name: 'Brand Alerts & Mentions', small: true, mid: true, large: true },
      { name: 'Link Reclamation', small: true, mid: true, large: true },
      { name: 'Competitor Backlink Research', small: true, mid: true, large: true },
    ],
  },
  {
    title: 'Off Page SEO',
    icon: 'fa-share-nodes',
    items: [
      { name: 'Social Sharing', small: '30 Total', mid: '40 Total', large: '50 Total' },
      { name: 'Blog Social Sharing', small: true, mid: true, large: true },
      { name: 'Video Submissions', small: '1 Submission', mid: '2 Submissions', large: '2 Submissions' },
      { name: 'Text Infographic Creation', small: '1 Infographic', mid: '2 Infographics', large: '3 Infographics' },
      { name: 'Video Creation', small: '1 Video', mid: '1 Video', large: '1 Min (Premium Teaser)' },
      { name: 'Q & A Submissions', small: '1 Q&A', mid: '3 Q&As', large: '5 Q&As' },
    ],
  },
  {
    title: 'Monthly Reporting',
    icon: 'fa-chart-pie',
    items: [
      { name: 'Keyword Ranking Report', small: true, mid: true, large: true },
      { name: 'Google Analytics Traffic Report', small: true, mid: true, large: true },
      { name: 'Acquired Links & Backlink Report', small: true, mid: true, large: true },
    ],
  },
  {
    title: 'Client Support',
    icon: 'fa-headset',
    items: [
      { name: 'Email Support', small: true, mid: true, large: true },
      { name: 'Chat Support', small: true, mid: true, large: true },
      { name: 'Phone Call Support', small: true, mid: true, large: true },
    ],
  },
];

const PLANS = [
  {
    id: 'small' as const,
    name: 'Small Business',
    subtitle: 'SEO Packages',
    price: '₹ 8,000',
    period: '/ month',
    note: 'Exclusive of all taxes',
    desc: 'Perfect for local business owners and startups aiming to capture high-intent local search traffic.',
    badge: 'STARTER / LOCAL',
    popular: false,
    keyFeatures: [
      'Max 5 Target Keywords',
      'Full Competitor & Ranking Audit',
      'On-Page & Speed Optimization',
      'Google Map & GMB Setup',
      '5 Citations & 2 Classifieds',
      'Monthly Reports & Direct Support',
    ],
  },
  {
    id: 'mid' as const,
    name: 'Mid-Size Business',
    subtitle: 'SEO Packages',
    price: '₹ 14,000',
    period: '/ month',
    note: 'Exclusive of all taxes',
    desc: 'Best for established businesses looking to outperform regional competitors and scale organically.',
    badge: 'MOST POPULAR ✦',
    popular: true,
    keyFeatures: [
      'Max 15 Target Keywords',
      'Comprehensive Technical SEO',
      '4 Blog Optimizations + 2 Articles',
      '10 Local Citations & 5 Classifieds',
      'Outreach & Broken Link Building',
      '40 Social Shares + Video Creation',
    ],
  },
  {
    id: 'large' as const,
    name: 'Large or Ecommerce',
    subtitle: 'SEO Packages',
    price: '₹ 24,000',
    period: '/ month',
    note: 'Exclusive of all taxes',
    desc: 'Built for enterprise websites and ecommerce stores demanding maximum traffic and keyword dominance.',
    badge: 'ENTERPRISE / ECOMMERCE',
    popular: false,
    keyFeatures: [
      'Max 25 Target Keywords',
      'Full Ecommerce Architecture SEO',
      '6 Blog Optimizations + 4 Articles',
      '15 Citations & 10 Classifieds',
      '50 Social Shares + 1-Min Video',
      'Priority Phone, Chat & Email Support',
    ],
  },
];

export default function SeoPackagesSection() {
  const [activeTab, setActiveTab] = useState<'all' | 'small' | 'mid' | 'large'>('all');
  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (title: string) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const renderValue = (val: string | boolean, isPopular: boolean) => {
    if (typeof val === 'boolean') {
      return (
        <span className={`seo-check-badge ${isPopular ? 'seo-check-badge--popular' : ''}`}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span className="seo-check-text">Included</span>
        </span>
      );
    }
    return (
      <span className={`seo-pill-badge ${isPopular ? 'seo-pill-badge--popular' : ''}`}>
        {val}
      </span>
    );
  };

  return (
    <section className="seo-pkg-section" id="seo-packages" aria-labelledby="seo-pkg-heading">
      <div className="seo-pkg-ambient seo-pkg-ambient--1" aria-hidden="true" />
      <div className="seo-pkg-ambient seo-pkg-ambient--2" aria-hidden="true" />
      <div className="seo-pkg-grid" aria-hidden="true" />
      <div className="seo-pkg-container">
        <div className="seo-pkg-header">
          <div className="seo-pkg-eyebrow">
            <span className="seo-pkg-dot" aria-hidden="true" />
            <span>TRANSPARENT SEO PRICING PLANS</span>
          </div>
          <h2 className="seo-pkg-title" id="seo-pkg-heading">
            SEO Packages in <span className="seo-pkg-highlight">Shimla Himachal</span>
          </h2>
          <p className="seo-pkg-subtitle">
            Boost your Google search rankings, drive high-intent organic traffic, and generate consistent leads with our customized search engine optimization packages.
          </p>
        </div>
        <div className="seo-cards-grid">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`seo-card ${plan.popular ? 'seo-card--popular' : ''}`}
            >
              {plan.popular && (
                <div className="seo-card-badge">
                  <span>{plan.badge}</span>
                </div>
              )}
              {!plan.popular && (
                <div className="seo-card-tier-label">
                  <span>{plan.badge}</span>
                </div>
              )}
              <div className="seo-card-header">
                <h3 className="seo-card-name">{plan.name}</h3>
                <span className="seo-card-sub">{plan.subtitle}</span>
              </div>
              <div className="seo-card-price-box">
                <div className="seo-card-price-wrap">
                  <span className="seo-card-price">{plan.price}</span>
                  <span className="seo-card-period">{plan.period}</span>
                </div>
                <span className="seo-card-tax-note">{plan.note}</span>
              </div>
              <p className="seo-card-desc">{plan.desc}</p>
              <div className="seo-card-features">
                <span className="seo-card-feat-title">Key Highlights:</span>
                <ul className="seo-card-feat-list">
                  {plan.keyFeatures.map((feat, idx) => (
                    <li key={idx}>
                      <i className="fa-solid fa-check seo-feat-check" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="seo-card-action">
                <Link
                  href={`/contact?plan=${encodeURIComponent(plan.name)}`}
                  className={`seo-card-btn ${plan.popular ? 'seo-card-btn--popular' : ''}`}
                >
                  Choose {plan.name}
                  <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="seo-mobile-tabs" role="tablist" aria-label="Select Plan to Compare">
          <button
            type="button"
            className={`seo-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Plans
          </button>
          <button
            type="button"
            className={`seo-tab-btn ${activeTab === 'small' ? 'active' : ''}`}
            onClick={() => setActiveTab('small')}
          >
            Small (₹8k)
          </button>
          <button
            type="button"
            className={`seo-tab-btn ${activeTab === 'mid' ? 'active' : ''}`}
            onClick={() => setActiveTab('mid')}
          >
            Mid-Size (₹14k)
          </button>
          <button
            type="button"
            className={`seo-tab-btn ${activeTab === 'large' ? 'active' : ''}`}
            onClick={() => setActiveTab('large')}
          >
            Large (₹24k)
          </button>
        </div>
        <div className="seo-matrix-wrap">
          <div className="seo-matrix-header-info">
            <div className="seo-matrix-badge">
              <i className="fa-solid fa-list-check" />
              <span>COMPLETE DELIVERABLES MATRIX</span>
            </div>
            <h3 className="seo-matrix-title">Detailed Feature Comparison</h3>
            <p className="seo-matrix-sub">
              Every deliverable included in our monthly SEO retainer contracts, with zero hidden costs.
            </p>
          </div>
          <div className="seo-matrix-table-card">
            <div className="seo-table-head">
              <div className="seo-th seo-th--feature">Deliverables & Features</div>
              {(activeTab === 'all' || activeTab === 'small') && (
                <div className="seo-th seo-th--plan">
                  <div className="seo-th-name">Small Business</div>
                  <div className="seo-th-price">₹8,000<span>/mo</span></div>
                </div>
              )}
              {(activeTab === 'all' || activeTab === 'mid') && (
                <div className="seo-th seo-th--plan seo-th--popular">
                  <div className="seo-th-popular-pill">Most Popular</div>
                  <div className="seo-th-name">Mid-Size Business</div>
                  <div className="seo-th-price">₹14,000<span>/mo</span></div>
                </div>
              )}
              {(activeTab === 'all' || activeTab === 'large') && (
                <div className="seo-th seo-th--plan">
                  <div className="seo-th-name">Large or Ecommerce</div>
                  <div className="seo-th-price">₹24,000<span>/mo</span></div>
                </div>
              )}
            </div>
            <div className="seo-table-body">
              {SEO_CATEGORIES.map((cat, catIdx) => {
                const isCollapsed = !!collapsedCategories[cat.title];
                return (
                  <div key={catIdx} className="seo-cat-group">
                    <button
                      type="button"
                      className="seo-cat-row"
                      onClick={() => toggleCategory(cat.title)}
                      aria-expanded={!isCollapsed}
                    >
                      <div className="seo-cat-title">
                        <i className={`fa-solid ${cat.icon} seo-cat-icon`} />
                        <span>{cat.title}</span>
                      </div>
                      <div className="seo-cat-meta">
                        <span className="seo-cat-count">{cat.items.length} deliverables</span>
                        <i className={`fa-solid fa-chevron-${isCollapsed ? 'down' : 'up'} seo-cat-toggle-icon`} />
                      </div>
                    </button>
                    {!isCollapsed && (
                      <div className="seo-cat-items">
                        {cat.items.map((item, itemIdx) => (
                          <div
                            key={itemIdx}
                            className={`seo-row ${itemIdx % 2 === 1 ? 'seo-row--alt' : ''}`}
                          >
                            <div className="seo-td seo-td--feature">
                              <span className="seo-item-dot" />
                              <span className="seo-item-name">{item.name}</span>
                            </div>
                            {(activeTab === 'all' || activeTab === 'small') && (
                              <div className="seo-td seo-td--val" data-plan="Small Business">
                                <span className="seo-mobile-plan-tag">Small Business:</span>
                                {renderValue(item.small, false)}
                              </div>
                            )}
                            {(activeTab === 'all' || activeTab === 'mid') && (
                              <div className="seo-td seo-td--val seo-td--popular" data-plan="Mid-Size Business">
                                <span className="seo-mobile-plan-tag">Mid-Size Business:</span>
                                {renderValue(item.mid, true)}
                              </div>
                            )}
                            {(activeTab === 'all' || activeTab === 'large') && (
                              <div className="seo-td seo-td--val" data-plan="Large / Ecommerce">
                                <span className="seo-mobile-plan-tag">Large or Ecommerce:</span>
                                {renderValue(item.large, false)}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="seo-table-footer">
              <div className="seo-tf seo-tf--label">
                <span>Select your ideal growth plan today:</span>
              </div>
              {(activeTab === 'all' || activeTab === 'small') && (
                <div className="seo-tf">
                  <Link href="/contact?plan=Small%20Business" className="seo-tf-btn">
                    Get Small Plan
                  </Link>
                </div>
              )}
              {(activeTab === 'all' || activeTab === 'mid') && (
                <div className="seo-tf seo-tf--popular">
                  <Link href="/contact?plan=Mid-Size%20Business" className="seo-tf-btn seo-tf-btn--popular">
                    Get Mid-Size Plan
                  </Link>
                </div>
              )}
              {(activeTab === 'all' || activeTab === 'large') && (
                <div className="seo-tf">
                  <Link href="/contact?plan=Large%20or%20Ecommerce" className="seo-tf-btn">
                    Get Enterprise Plan
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="seo-pkg-cta-banner">
          <div className="seo-cta-content">
            <div className="seo-cta-badge">
              <i className="fa-solid fa-headset" />
              <span>NEED A CUSTOM SEO PROPOSAL?</span>
            </div>
            <h3 className="seo-cta-title">Not Sure Which Plan Suits Your Website?</h3>
            <p className="seo-cta-desc">
              Get in touch with our certified SEO specialists in Shimla for a <strong>Free Comprehensive Website Audit</strong> and a customized ranking roadmap tailored to your target audience.
            </p>
          </div>
          <div className="seo-cta-actions">
            <Link href="/contact" className="seo-cta-btn-primary">
              Request Free Audit <i className="fa-solid fa-arrow-right" />
            </Link>
            <a href="tel:+919805034219" className="seo-cta-btn-call">
              <i className="fa-solid fa-phone" />
              <span>+91-9805034219</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
