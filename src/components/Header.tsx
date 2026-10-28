'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type ServiceItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  icon?: string;
  description?: string;
  dropdownItems?: ServiceItem[];
};

const SERVICE_CATEGORIES: ServiceItem[] = [
  {
    label: 'Website Designing',
    href: '/services/website-designing',
    hasDropdown: true,
    icon: 'fa-pen-ruler',
    description: 'Beautiful, custom designed websites',
    dropdownItems: [
      { label: 'Custom Web Designing', href: '/custom-website-designing' },
      { label: 'Static Web Designing', href: '/static-web-designing' },
      { label: 'Dynamic Web Designing', href: '/dynamic-website-designing' },
      { label: 'Landing Page Designing', href: '/landing-page-designing' },
      { label: 'Responsive Web Designing', href: '/responsive-web-designing' },
      { label: 'Website Redesigning', href: '/website-redesigning' },
    ],
  },
  {
    label: 'Website Development',
    href: '/services/website-development',
    hasDropdown: true,
    icon: 'fa-globe',
    description: 'Robust and scalable web development',
    dropdownItems: [
      { label: 'Responsive Web Development', href: '/responsive-web-development' },
      { label: 'PHP Development', href: '/php-development' },
      { label: 'Laravel Development', href: '/laravel-development' },
      { label: 'Website Maintenance', href: '/website-maintenance' },
    ],
  },
  {
    label: 'Mobile Application Development',
    href: '/services/mobile-application-development',
    hasDropdown: true,
    icon: 'fa-mobile-screen',
    description: 'Native apps for iOS and Android',
    dropdownItems: [
      { label: 'iPhone App Development', href: '/iphone-app-development' },
      { label: 'Android App Development', href: '/android-app-development' },
    ],
  },
  {
    label: 'Internet Marketing',
    href: '/services/mobile-application-development',
    hasDropdown: true,
    icon: 'fa-mobile-screen',
    description: 'Native apps for iOS and Android',
    dropdownItems: [
      { label: 'Search Engine Optimizing', href: '/search-engine-optimizing' },
      { label: 'Performance Marketing', href: '/performance-marketing' },
      { label: 'Digital Marketing', href: '/digital-marketing' },
      { label: 'Paid (PPC) Advertising', href: '/pay-per-click-advertising' },
      { label: 'Online Reputation Management', href: '/online-reputation-management' },
    ],
  },
  {
    label: 'CMS Development',
    href: '/services/cms-development',
    hasDropdown: true,
    icon: 'fa-layer-group',
    description: 'Content management system experts',
    dropdownItems: [
      { label: 'WordPress Development', href: '/wordpress-development' },
      { label: 'Shopify Development', href: '/shopify-development' },
      { label: 'WooCommerce Development', href: '/woocommerce-development' },
      { label: 'Squarespace Development', href: '/square-space-development' },
      { label: 'Magento Web Development', href: '/magento-web-development' },
      { label: 'Drupal Web Development', href: '/drupal-web-development' },
      { label: 'Joomla Web Development', href: '/jhoomla-web-development' },
      { label: 'ZenCart Web Development', href: '/zencart-web-development' },
      { label: 'OS-Commerce Web Development', href: '/oscommerce-web-development' },
      { label: 'Typo3 CMS Web Development', href: '/typo3-web-development' },
    ],
  },
  {
    label: 'Graphic Designing',
    href: '/services/graphic-designing',
    hasDropdown: true,
    icon: 'fa-pen-nib',
    description: 'Creative designs for your brand',
    dropdownItems: [
      { label: 'Logo Designing', href: '/logo-designing' },
      { label: 'Catalogue Designing', href: '/catalogue-designing' },
      { label: 'Flyer Designing', href: '/flyer-designing' },
      { label: 'Brochure Designing', href: '/brochure-designing' },
      { label: 'Business Card Designing', href: '/business-card-designing' },
      { label: 'Letterhead Designing', href: '/letterhead-designing' },
      { label: 'Advertisement Designing', href: '/advertisement-designing' },
      { label: 'Signature Designing', href: '/signature-designing' },
      { label: 'Bill Board Designing', href: '/billboard-designing' },
      { label: 'Label Designing', href: '/label-designing' },
    ],
  },
  {
    label: 'Ecommerce Solutions',
    href: '/services/ecommerce-solutions',
    hasDropdown: true,
    icon: 'fa-cart-shopping',
    description: 'End-to-end online store solutions',
    dropdownItems: [
      { label: 'Ecommerce Website Development', href: '/e-commerce-website-development' },
      { label: 'Multi-Vendor Marketplace', href: '/services/ecommerce-solutions/multi-vendor-marketplace' },
      { label: 'Shopping Cart Development', href: '/services/ecommerce-solutions/shopping-cart' },
      { label: 'Payment Gateway Integration', href: '/services/ecommerce-solutions/payment-gateway' },
      { label: 'Ecommerce SEO', href: '/e-commerce-website-development' },
    ],
  },
  {
    label: 'Domain & Hosting',
    href: '/services/domain-hosting',
    hasDropdown: true,
    icon: 'fa-server',
    description: 'Reliable domain and hosting services',
    dropdownItems: [
      { label: 'Domain Registration', href: '/domain-registration' },
      { label: 'Linux Hosting', href: '/linux-hosting' },
      { label: 'Windows Hosting', href: '/windows-hosting' },
      { label: 'VPS Hosting', href: '/vps-hosting' },
      { label: 'SSL Certification', href: '/ssl-certification' },
      { label: 'Business Email', href: '/business-email-companies' },
    ],
  },
  {
    label: 'Internship & Training',
    href: '/web-designing-training-in-himachal-pradesh',
    hasDropdown: true,
    icon: 'fa-graduation-cap',
    description: 'Job-oriented industrial training & live project internships',
    dropdownItems: [
      { label: 'Web Designing', href: '/web-designing-training-in-himachal-pradesh' },
      { label: 'Web Development', href: '/services/website-development' },
      { label: 'Full Stack Development', href: '/services/website-development' },
      { label: 'Graphic Designing', href: '/services/graphic-designing' },
      { label: 'Digital Marketing', href: '/digital-marketing' },
      { label: 'CMS Development', href: '/services/cms-development' },
      { label: 'Python AI', href: '/contact' },
      { label: 'Motion Graphic', href: '/services/graphic-designing' },
      { label: 'Internship Program', href: '/web-designing-training-in-himachal-pradesh' },
      { label: 'Six Month Industrial Training', href: '/web-designing-training-in-himachal-pradesh' },
    ],
  },
];

const NAV_ITEMS = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT US', href: '/about' },
  { label: 'SERVICES', href: '/services' },
  { label: 'PORTFOLIO', href: '/portfolio' },
  { label: 'CAREER WITH US', href: '/career' },
  { label: 'CONTACT US', href: '/contact' },
];

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeServiceDropdown, setActiveServiceDropdown] = useState<string | null>(null);
  const [activeChildDropdown, setActiveChildDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href;
  };
  return (
    <>
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={() => setIsMobileMenuOpen(false)} />
      )}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__header">
          <Link href="/" className="mobile-menu__logo">
            <img src="/assets/img/gashwatechnologie-logo.png" alt="Gashwa Technologies" />
          </Link>
          <button className="mobile-menu__close" onClick={() => setIsMobileMenuOpen(false)}>
            <i className="fas fa-times" />
          </button>
        </div>
        <nav className="mobile-menu__nav">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-menu__link ${isActive(item.href) ? 'mobile-menu__link--active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {SERVICE_CATEGORIES.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-menu__link mobile-menu__link--service"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <header className={`main-header ${isSticky ? 'main-header--sticky' : ''}`}>
        <div className="header-top">
          <div style={{padding : '0px'}} className="container">
            <div className="header-top__inner">
              <Link href="/" className="header-logo">
                <img src="/assets/img/gashwatechnologie-logo.png" alt="Gashwa Technologies" />
              </Link>
              <nav className="header-nav">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`header-nav__link ${isActive(item.href) ? 'header-nav__link--active' : ''}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="header-actions">
                <div className="header-contact">
                  <a href="tel:+919568212483" className="header-contact__item">
                    <i className="fa-solid fa-phone" />
                    <span>+91-93177-34219</span>
                  </a>
                  <a href="mailto:info@gashwatechnologies.com" className="header-contact__item">
                    <i className="fa-solid fa-envelope" />
                    <span>info@gashwatechnologies.com</span>
                  </a>
                </div>
                <Link href="/pay-now" className="header-pay-btn">
                  Pay Now <i className="fa-solid fa-arrow-right" />
                </Link>
                <button className="header-mobile-toggle" onClick={() => setIsMobileMenuOpen(true)}>
                  <i className="fas fa-bars" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="header-service-bar">
          <div className="container header-service-bar__container">
            <div className="service-bar__inner">
              {SERVICE_CATEGORIES.map((item) => (
                <div
                  key={item.href}
                  className={`service-bar__item ${activeServiceDropdown === item.label
                    ? 'service-bar__item--active'
                    : ''
                    }`}
                  onMouseEnter={() => {
                    if (item.hasDropdown) {
                      setActiveServiceDropdown(item.label);
                    }
                  }}
                  onMouseLeave={() => {
                    setActiveServiceDropdown(null);
                  }}
                >
                  <Link
                    href={item.href}
                    className="service-bar__link"
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <i className="fa-solid fa-chevron-down service-bar__arrow" />
                    )}
                  </Link>
                  {item.hasDropdown &&
                    activeServiceDropdown === item.label && (
                      <div className="service-dropdown">
                        <div className="service-dropdown__arrow" />
                        <div className="service-dropdown__heading">
                          <div className="service-dropdown__icon">
                            <i className={`fa-solid ${item.icon}`} />
                          </div>
                          <div className="service-dropdown__title-wrap">
                            <h3>{item.label}</h3>
                            <p>{item.description}</p>
                          </div>
                        </div>
                        <div className="service-dropdown__items">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <div
                              key={dropdownItem.href}
                              className={`service-dropdown__item-wrapper ${dropdownItem.hasDropdown && activeChildDropdown === dropdownItem.label ? 'service-dropdown__item-wrapper--active' : ''}`}
                              onMouseEnter={() => {
                                if (dropdownItem.hasDropdown) {
                                  setActiveChildDropdown(dropdownItem.label);
                                }
                              }}
                              onMouseLeave={() => {
                                setActiveChildDropdown(null);
                              }}
                            >
                              <Link
                                href={dropdownItem.href}
                                className="service-dropdown__item"
                              >
                                <span className="service-dropdown__bullet">
                                  <i className="fa-solid fa-chevron-right" />
                                </span>
                                <span>
                                  {dropdownItem.label}
                                </span>
                                {dropdownItem.hasDropdown && (
                                  <i className="fa-solid fa-chevron-right service-dropdown__child-arrow" />
                                )}
                              </Link>
                              {dropdownItem.hasDropdown &&
                                dropdownItem.dropdownItems &&
                                activeChildDropdown === dropdownItem.label && (
                                  <div className="service-dropdown__child">
                                    {dropdownItem.dropdownItems.map((childItem) => (
                                      <Link
                                        key={childItem.href}
                                        href={childItem.href}
                                        className="service-dropdown__child-item"
                                      >
                                        <span className="service-dropdown__bullet">
                                          <i className="fa-solid fa-chevron-right" />
                                        </span>
                                        <span>{childItem.label}</span>
                                      </Link>
                                    ))}
                                  </div>
                                )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
