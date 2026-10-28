import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home 03 | Gashwa Technologies',
  description: 'Innovative digital agency and tech engineering solutions.',
};

export default function HomeThreePage() {
  return (
    <>
      <section className="hero-section fix style3 py-5 section-bg">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <span className="text-primary fw-bold text-uppercase tracking-wider">Next-Gen Engineering</span>
              <h1 className="display-4 fw-bold mt-2 mb-4">Driving Digital Innovation &amp; Growth</h1>
              <p className="lead text-secondary mb-4">
                We combine creative design, cutting-edge code, and cloud strategy to deliver unmatched digital experiences for global brands.
              </p>
              <Link href="/contact" className="theme-btn">
                <span>Talk To Our Team <i className="fa-solid fa-arrow-right-long"></i></span>
              </Link>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0 text-center">
              <img src="/assets/img/hero/heroThumb1_1.png" alt="hero style 3" className="img-fluid rounded-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5 bg-theme text-white">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-3 col-6">
              <h2 className="text-white display-5 fw-bold">250+</h2>
              <p className="text-white-50 mb-0">Projects Completed</p>
            </div>
            <div className="col-md-3 col-6">
              <h2 className="text-white display-5 fw-bold">99%</h2>
              <p className="text-white-50 mb-0">Client Satisfaction</p>
            </div>
            <div className="col-md-3 col-6">
              <h2 className="text-white display-5 fw-bold">50+</h2>
              <p className="text-white-50 mb-0">Expert Engineers</p>
            </div>
            <div className="col-md-3 col-6">
              <h2 className="text-white display-5 fw-bold">12+</h2>
              <p className="text-white-50 mb-0">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
