'use client';

import Link from 'next/link';

const MARQUEE_SERVICES = [
  { label: 'Website Designing',          href: '/services', icon: 'fa-solid fa-palette' },
  { label: 'Website Development',        href: '/services', icon: 'fa-solid fa-code' },
  { label: 'Mobile App Development',     href: '/services', icon: 'fa-solid fa-mobile-screen-button' },
  { label: 'CMS Development',            href: '/services', icon: 'fa-solid fa-layer-group' },
  { label: 'Graphic Designing',          href: '/services', icon: 'fa-solid fa-pen-ruler' },
  { label: 'Ecommerce Solutions',        href: '/services', icon: 'fa-solid fa-cart-shopping' },
  { label: 'Domain & Hosting',           href: '/services', icon: 'fa-solid fa-server' },
];

export default function ServiceMarquee() {
  return (
    <section className="service-marquee-section">
      <div className="service-marquee-container">
        <div className="service-marquee-track">
          {/* Double the items for infinite seamless scroll */}
          {[...MARQUEE_SERVICES, ...MARQUEE_SERVICES, ...MARQUEE_SERVICES].map((service, index) => (
            <Link key={index} href={service.href} className="service-marquee-card">
              <div className="smc-icon-wrapper">
                <i className={service.icon} />
              </div>
              <span className="smc-label">{service.label}</span>
              <div className="smc-arrow">
                <i className="fa-solid fa-arrow-right-long" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
