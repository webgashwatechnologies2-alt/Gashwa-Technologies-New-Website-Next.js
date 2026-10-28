import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home 02 | Gashwa Technologies',
  description: 'Enterprise IT solutions, cloud computing, and digital transformation.',
};

export default function HomeTwoPage() {
  return (
    <>
      <section className="hero-section fix style2 py-5 bg-dark text-white">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="badge bg-primary px-3 py-2 fs-6 mb-3">Enterprise Software Solutions</span>
              <h1 className="text-white display-4 fw-bold mb-4">Empowering Modern Businesses Through Technology</h1>
              <p className="lead text-white-50 mb-4">
                We craft intelligent IT architectures, automated cloud deployments, and custom software systems designed to scale seamlessly with your growth.
              </p>
              <div className="d-flex gap-3">
                <Link href="/contact" className="theme-btn">
                  <span>Get Started Now <i className="fa-solid fa-arrow-right-long"></i></span>
                </Link>
                <Link href="/services" className="theme-btn bg-white text-dark">
                  <span>Explore Services</span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <img src="/assets/img/hero/heroThumb1_1.png" alt="hero style 2" className="img-fluid rounded-4 shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="space fix">
        <div className="container">
          <div className="section-title text-center mb-5">
            <span className="subtitle">Core Competencies</span>
            <h2 className="title">Tailored Solutions for Your Enterprise</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 border rounded-3 bg-white h-100 shadow-sm">
                <div className="mb-3 text-primary fs-1"><i className="fa-solid fa-cloud"></i></div>
                <h3>Cloud Migration</h3>
                <p className="text-muted">Seamlessly shift legacy systems to modern multi-cloud AWS, Azure, and Google Cloud environments.</p>
                <Link href="/services/details" className="text-primary fw-bold">Read More &rarr;</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded-3 bg-white h-100 shadow-sm">
                <div className="mb-3 text-primary fs-1"><i className="fa-solid fa-shield-halved"></i></div>
                <h3>Cyber Security</h3>
                <p className="text-muted">Comprehensive threat protection, identity management, and continuous security auditing.</p>
                <Link href="/services/details" className="text-primary fw-bold">Read More &rarr;</Link>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border rounded-3 bg-white h-100 shadow-sm">
                <div className="mb-3 text-primary fs-1"><i className="fa-solid fa-code"></i></div>
                <h3>Web &amp; Mobile Apps</h3>
                <p className="text-muted">High-performance React, Next.js, and mobile applications built for speed and security.</p>
                <Link href="/services/details" className="text-primary fw-bold">Read More &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
