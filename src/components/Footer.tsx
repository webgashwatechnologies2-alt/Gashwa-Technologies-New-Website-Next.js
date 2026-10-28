'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Footer.css';

import logoImg from '../../public/assets/img/gashwatechnologie-logonew.png';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="grid-overlay" aria-hidden="true" />
      <div className="container">
        <div className="call-banner">
        <div className="call-banner-inner">
          <div className="call-banner-left">
            <div className="call-icon">
              <i className="fa-solid fa-phone-volume" />
            </div>
            <div className="banner-text">
              <div className="call-label">Grow your Shimla business with premium IT solutions.</div>
              <p className="call-description">
                Website design, app development, digital marketing and secure hosting built to help your brand stand out.
              </p>
            </div>
          </div>
          <div className="call-banner-actions">
            <a href="tel:+919805034219" className="call-number">
              +91-9805034219
            </a>
            <a
              href="https://gashwatechnologies.com/Gashwa_Project.pdf"
              target="_blank"
              rel="noreferrer"
              className="brochure-btn"
            >
              <i className="fa fa-download" />
              Download Brochure
            </a>
          </div>
        </div>
      </div>
      </div>
      <div className="container main-body">
        <div className="row gy-5">
          <div className="col-xl-3 col-lg-4 col-md-6 column-card">
            <Link href="/">
              <Image
                src={logoImg}
                alt="Gashwa Technologies"
                className="logo-image"
                style={{height: '150px' , width : '50%'}}
              />
            </Link>
            <p className="about-text">
              Gashwa Technologies Pvt. Ltd. is your trusted IT company in Shimla, Himachal Pradesh.
              We offer cutting-edge IT solutions to help your business thrive.
            </p>
            <div className="social-row">
              <a href="https://www.facebook.com/GashwaTechnologies" target="_blank" rel="noreferrer" className="social-link" aria-label="Facebook">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://twitter.com/Gashwa_Tech" target="_blank" rel="noreferrer" className="social-link" aria-label="Twitter">
                <i className="fab fa-twitter" />
              </a>
              <a href="https://www.youtube.com/channel/UCBP7hFGAPL9noCYoKrd2hdg" target="_blank" rel="noreferrer" className="social-link" aria-label="YouTube">
                <i className="fab fa-youtube" />
              </a>
              <a href="https://www.instagram.com/gashwatechnologies" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/company/gashwa-technologies-pvt-ltd" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 column-card">
            <h4 className="heading-title">Quick Links</h4>
            <ul className="link-list">
              <li><Link href="/"><i className="fa-solid fa-chevron-right" />Home</Link></li>
              <li><Link href="/about"><i className="fa-solid fa-chevron-right" />Company Profile</Link></li>
              <li><Link href="/news"><i className="fa-solid fa-chevron-right" />News &amp; Events</Link></li>
              <li><Link href="/projects"><i className="fa-solid fa-chevron-right" />Portfolio</Link></li>
              <li><Link href="/contact"><i className="fa-solid fa-chevron-right" />Privacy Policy</Link></li>
              <li><Link href="/contact"><i className="fa-solid fa-chevron-right" />Terms &amp; Conditions</Link></li>
              <li><Link href="/news"><i className="fa-solid fa-chevron-right" />Blog</Link></li>
            </ul>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 column-card">
            <h4 className="heading-title">Services</h4>
            <ul className="link-list">
              <li><Link href="/services"><i className="fa-solid fa-chevron-right" />Website Designing</Link></li>
              <li><Link href="/services"><i className="fa-solid fa-chevron-right" />Website Development</Link></li>
              <li><Link href="/services"><i className="fa-solid fa-chevron-right" />CMS Development</Link></li>
              <li><Link href="/services"><i className="fa-solid fa-chevron-right" />Mobile App Development</Link></li>
              <li><Link href="/services"><i className="fa-solid fa-chevron-right" />Graphic Designing</Link></li>
              <li><Link href="/services"><i className="fa-solid fa-chevron-right" />Domain &amp; Hosting</Link></li>
              <li><Link href="/services"><i className="fa-solid fa-chevron-right" />SSL Certification</Link></li>
            </ul>
          </div>
          <div className="col-xl-2 col-lg-4 col-md-6 col-sm-6 column-card">
            <h4 className="heading-title">Internet Marketing</h4>
            <ul className="link-list">
              <li><Link href="/services"><i className="fa-solid fa-chevron-right" />Search Engine Optimization</Link></li>
              <li><Link href="/services"><i className="fa-solid fa-chevron-right" />Search Engine Marketing</Link></li>
              <li><Link href="/services"><i className="fa-solid fa-chevron-right" />Social Media Marketing</Link></li>
              <li><Link href="/services"><i className="fa-solid fa-chevron-right" />Content Marketing</Link></li>
              <li><Link href="/services"><i className="fa-solid fa-chevron-right" />App Store Optimization</Link></li>
              <li><Link href="/services"><i className="fa-solid fa-chevron-right" />PPC Advertising</Link></li>
              <li><Link href="/services"><i className="fa-solid fa-chevron-right" />Google Analytics</Link></li>
            </ul>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 column-card">
            <h4 className="heading-title">Contact Details</h4>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-location-dot" />
              </div>
              <div className="contact-text">
                <div className="contact-label">Head Office</div>
                <div className="contact-value">
                  Kashyap Niwas, Ground Floor BhattaKufer,<br />
                  Shimla, Himachal Pradesh
                </div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-envelope" />
              </div>
              <div className="contact-text">
                <div className="contact-label">Email Us</div>
                <div className="contact-value">
                  <a href="mailto:info@gashwatechnologies.com">info@gashwatechnologies.com</a>
                </div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-phone" />
              </div>
              <div className="contact-text">
                <div className="contact-label">Sales</div>
                <div className="contact-value">
                  <a href="tel:+919317734219">+91-93177-34219</a>
                  <a href="tel:+919317834219">+91-93178-34219</a>
                  <a href="tel:+919317934219">+91-93179-34219</a>
                </div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-headset" />
              </div>
              <div className="contact-text">
                <div className="contact-label">Operations</div>
                <div className="contact-value">
                  <a href="tel:+918894534219">+91-88945-34219</a>
                  <a href="tel:+918894634219">+91-88946-34219</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="newsletter-strip">
          <div className="newsletter-inner">
            <div>
              <p className="newsletter-label">
                Subscribe for exclusive IT insights, product updates, and business growth tips.
              </p>
              <p className="newsletter-note">
                No spam — just expert advice and new service launches.
              </p>
            </div>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <div className="newsletter-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address"
                />
                <button type="submit" className="newsletter-button">
                  {subscribed ? 'Subscribed' : 'Subscribe'}
                </button>
              </div>
              {subscribed && (
                <p className="newsletter-success">Thanks! You're on the list.</p>
              )}
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright-bar">
          <div className="copyright-inner">
            <p className="copyright-text">
              © 2018–{new Date().getFullYear()}{' '}
              <Link href="/">Gashwa Technologies Pvt. Ltd.</Link>
              {' '}— All Rights Reserved.
            </p>
            <div className="legal-links">
              <Link href="/contact">Terms &amp; Conditions</Link>
              <span className="legal-dot" />
              <Link href="/contact">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
