'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

interface FormData {
  name: string;
  phone: string;
  email: string;
  state: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  state?: string;
  service?: string;
  message?: string;
}

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[0-9+\-\s()]{7,15}$/;
  return phoneRegex.test(phone);
};

const validateForm = (formData: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!formData.name.trim()) {
    errors.name = 'Name is required';
  }

  if (!formData.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!validatePhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!formData.state.trim()) {
    errors.state = 'State is required';
  }

  if (!formData.message.trim()) {
    errors.message = 'Requirements are required';
  }

  return errors;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    state: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);

      // Simulate API submission
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setSubmitted(true);
      setIsSubmitting(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        state: '',
        service: '',
        message: '',
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <>
      <Breadcrumb title="Contact Us" activeItem="Contact Us" />

      {/* Hero Intro Banner */}
      <section className="contact-hero-banner">
        <div className="container">
          <h1 className="contact-hero-title">Reach Out to Us</h1>
          <p className="contact-hero-desc">
            At Gashwa Technologies, we offer a comprehensive range of IT services to meet the diverse
            needs of our clients. With a team of highly skilled professionals and cutting-edge
            technology, we are committed to delivering top-quality solutions.
          </p>
          <div className="contact-specialty-badge">
            <i className="fa-solid fa-code" aria-hidden="true" />
            <span>Languages &amp; Frameworks are one of our specialties — Let's Talk</span>
          </div>
        </div>
      </section>

      {/* Form + Services & Dept Info Section */}
      <section className="contact-section  fix bg-light pt-5 pb-5">
        <div className="container">
          <div className="row g-4">

            {/* Left: Form */}
            <div className="col-lg-6">
              <div className="contact-form-card">
                <h2 className="contact-form-title">Get In Touch</h2>
                <span className="contact-form-subtitle">Contact us today for inquiries</span>

                {submitted ? (
                  <div className="alert alert-success p-3 rounded-3 mb-0" role="alert">
                    <i className="fa-solid fa-circle-check me-2" aria-hidden="true" />
                    Thank you! Your message has been sent successfully. Our team will get back to you shortly.
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form-items">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-clt">
                          <label className="form-label font-weight-bold">Your Name*</label>
                          <input
                            type="text"
                            name="name"
                            className="form-control p-3"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                          {errors.name && <div className="text-danger small mt-1">{errors.name}</div>}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-clt">
                          <label className="form-label font-weight-bold">Phone Number*</label>
                          <input
                            type="tel"
                            name="phone"
                            className="form-control p-3"
                            placeholder="+91-XXXXXXXXXX"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                          {errors.phone && <div className="text-danger small mt-1">{errors.phone}</div>}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-clt">
                          <label className="form-label font-weight-bold">Email Address*</label>
                          <input
                            type="email"
                            name="email"
                            className="form-control p-3"
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                          {errors.email && <div className="text-danger small mt-1">{errors.email}</div>}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-clt">
                          <label className="form-label font-weight-bold">State / Location*</label>
                          <input
                            type="text"
                            name="state"
                            className="form-control p-3"
                            placeholder="Your State"
                            value={formData.state}
                            onChange={handleInputChange}
                          />
                          {errors.state && <div className="text-danger small mt-1">{errors.state}</div>}
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-clt">
                          <label className="form-label font-weight-bold">Services Required</label>
                          <select
                            name="service"
                            className="form-select p-3"
                            value={formData.service}
                            onChange={handleInputChange}
                          >
                            <option value="">Select a Service (Optional)</option>
                            <option value="Website Designing">Website Designing</option>
                            <option value="Website Development">Website Development</option>
                            <option value="Mobile App Development">Mobile App Development</option>
                            <option value="SEO & Digital Marketing">SEO &amp; Digital Marketing</option>
                            <option value="Performance Marketing / PPC">Performance Marketing / PPC</option>
                            <option value="Internship & Training">Internship &amp; Industrial Training</option>
                            <option value="Other">Other IT Services</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-clt">
                          <label className="form-label font-weight-bold">Requirements / Message*</label>
                          <textarea
                            name="message"
                            className="form-control p-3"
                            rows={4}
                            placeholder="Tell us about your project requirements..."
                            value={formData.message}
                            onChange={handleInputChange}
                          ></textarea>
                          {errors.message && <div className="text-danger small mt-1">{errors.message}</div>}
                        </div>
                      </div>

                      <div className="col-12 mt-4">
                        <button
                          type="submit"
                          className="theme-btn w-100 text-center"
                          disabled={isSubmitting}
                        >
                          <span>
                            {isSubmitting ? 'Sending Message...' : 'Send Message'}{' '}
                            <i className="fa-solid fa-arrow-right-long" aria-hidden="true" />
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Social & Dept Info */}
            <div className="col-lg-6">
              <div className="ps-lg-3">

                {/* Social Bar */}
                <div className="contact-social-bar">
                  <span className="contact-social-label">Follow Us —</span>
                  <a href="https://www.facebook.com/GashwaTechnologies" target="_blank" rel="noopener noreferrer" className="contact-social-icon" aria-label="Facebook">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a href="https://www.instagram.com/gashwatechnologies" target="_blank" rel="noopener noreferrer" className="contact-social-icon" aria-label="Instagram">
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a href="https://twitter.com/Gashwa_Tech" target="_blank" rel="noopener noreferrer" className="contact-social-icon" aria-label="Twitter">
                    <i className="fa-brands fa-x-twitter" />
                  </a>
                  <a href="https://www.linkedin.com/company/gashwa-technologies-pvt-ltd" target="_blank" rel="noopener noreferrer" className="contact-social-icon" aria-label="LinkedIn">
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCBP7hFGAPL9noCYoKrd2hdg" target="_blank" rel="noopener noreferrer" className="contact-social-icon" aria-label="YouTube">
                    <i className="fa-brands fa-youtube" />
                  </a>
                </div>

                {/* Section Header */}
                <h3 className="fw-bold mb-2 text-dark">CONTACT US FOR SERVICES</h3>
                <p className="text-secondary mb-4" style={{ lineHeight: '1.7' }}>
                  At Gashwa Technologies, we are dedicated to providing top-notch services that cater to your
                  unique needs. Our team of experts is committed to delivering excellence in every project we
                  undertake. Fill out the contact form or call us at{' '}
                  <a href="tel:+919459234219" className="fw-bold text-primary text-decoration-none">
                    +91-94592-34219
                  </a>
                  . We are available 24/7 to answer your inquiries.
                </p>

                {/* Sales Dept */}
                <div className="contact-dept-card">
                  <div className="contact-dept-header">
                    <div className="contact-dept-icon">
                      <i className="fa-solid fa-chart-line" />
                    </div>
                    <div>
                      <h4 className="contact-dept-title">Sales Department</h4>
                      <span className="contact-dept-tag">Boost your business with us</span>
                    </div>
                  </div>
                  <p className="contact-dept-desc">
                    Boost your business with our cutting-edge IT solutions. We offer tailored sales strategies,
                    advanced technology, and exceptional support for your success.
                  </p>
                  <div className="contact-dept-phones">
                    <a href="tel:+919317734219" className="contact-phone-chip">
                      <i className="fa-solid fa-phone" /> +91-93177-34219
                    </a>
                    <a href="tel:+919317834219" className="contact-phone-chip">
                      <i className="fa-solid fa-phone" /> +91-93178-34219
                    </a>
                    <a href="tel:+919317934219" className="contact-phone-chip">
                      <i className="fa-solid fa-phone" /> +91-93179-34219
                    </a>
                  </div>
                </div>

                {/* Operations Dept */}
                <div className="contact-dept-card mb-0">
                  <div className="contact-dept-header">
                    <div className="contact-dept-icon" style={{ background: '#16222b' }}>
                      <i className="fa-solid fa-gears" />
                    </div>
                    <div>
                      <h4 className="contact-dept-title">Operations Department</h4>
                      <span className="contact-dept-tag" style={{ color: '#16222b' }}>
                        Efficiency &amp; Precision in Operation
                      </span>
                    </div>
                  </div>
                  <p className="contact-dept-desc">
                    Our operation team offers cutting-edge technology solutions, seamless project management,
                    and expert support to empower businesses for success.
                  </p>
                  <div className="contact-dept-phones">
                    <a href="tel:+918894534219" className="contact-phone-chip">
                      <i className="fa-solid fa-phone" /> +91-88945-34219
                    </a>
                    <a href="tel:+918894634219" className="contact-phone-chip">
                      <i className="fa-solid fa-phone" /> +91-88946-34219
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Contact Info Cards */}
      <section className="space-bottom space-top fix">
        <div className="container">
          <div className="row g-4">

            {/* Address */}
            <div className="col-lg-3 col-md-6">
              <div className="contact-info-card">
                <div className="contact-info-icon-wrapper">
                  <i className="fa-solid fa-location-dot" />
                </div>
                <h4 className="contact-info-card-title">Our Address</h4>
                <p className="contact-info-card-text">
                  Ground Floor, Bhattakufer, Shimla Bypass, opposite Shivalik Institute Of Nursing, Sanjauli, Shimla, HP 171006
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="col-lg-3 col-md-6">
              <div className="contact-info-card">
                <div className="contact-info-icon-wrapper">
                  <i className="fa-solid fa-headset" />
                </div>
                <h4 className="contact-info-card-title">Phone Numbers</h4>
                <p className="contact-info-card-text">
                  <a href="tel:+919317734219" className="text-decoration-none text-dark d-block mb-1 font-weight-bold">
                    +91-93177-34219
                  </a>
                  <a href="tel:+919459234219" className="text-decoration-none text-dark d-block font-weight-bold">
                    +91-94592-34219
                  </a>
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="col-lg-3 col-md-6">
              <div className="contact-info-card">
                <div className="contact-info-icon-wrapper">
                  <i className="fa-solid fa-envelope" />
                </div>
                <h4 className="contact-info-card-title">Email Address</h4>
                <p className="contact-info-card-text">
                  <a href="mailto:info@gashwatechnologies.com" className="text-decoration-none text-dark font-weight-bold">
                    info@gashwatechnologies.com
                  </a>
                </p>
              </div>
            </div>

            {/* 24/7 Availability */}
            <div className="col-lg-3 col-md-6">
              <div className="contact-info-card">
                <div className="contact-info-icon-wrapper">
                  <i className="fa-solid fa-clock" />
                </div>
                <h4 className="contact-info-card-title">24/7 Availability</h4>
                <p className="contact-info-card-text">
                  We're here for you around the clock, 24/7. Whenever you need us, our team is ready to assist you without delay.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="map-section fix">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13666.192984330435!2d77.2064502!3d31.0944908!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc2a8c99b1f117225!2sGashwa%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1666248322225!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          title="Gashwa Technologies Location"
        ></iframe>
      </div>

      {/* CTA Quote Bar */}
      <div className="contact-cta-bar">
        <div className="container">
          <div className="contact-cta-content">
            <h4 className="contact-cta-text">
              Call Us For Free Quote Consultant{' '}
              <a href="tel:+919805034219" className="contact-cta-highlight">
                +91-98050-34219
              </a>
            </h4>
            <a
              href="/Gashwa_Project.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-cta-btn"
            >
              <i className="fa-solid fa-download" aria-hidden="true" />
              <span>Download Brochure</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
