import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Service Details',
  description: 'In-depth overview of Gashwa Technologies IT services and technical capabilities.',
};

export default function ServiceDetailsPage() {
  return (
    <>
      <Breadcrumb title="Service Details" activeItem="Service Details" />

      <section className="service-details-section section-padding space fix">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="service-details-content">
                <img src="/assets/img/service/service-details-1.jpg" alt="service details" className="img-fluid rounded-4 mb-4 w-100" />
                <h2 className="mb-3">Data Guard Sentinel &amp; Cloud Security Solutions</h2>
                <p className="lead">
                  Modern organizations require robust multi-layered cyber security architectures to withstand modern threat vectors and ensure business continuity.
                </p>
                <p>
                  At Gashwa Technologies, our engineering team constructs automated security controls, real-time threat intelligence monitoring, data encryption at rest and in transit, and continuous compliance checks.
                </p>

                <h3 className="mt-5 mb-3">Key Features &amp; Capabilities</h3>
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded-3 d-flex align-items-center gap-3">
                      <i className="fa-solid fa-circle-check text-primary fs-4"></i>
                      <span>Automated Cloud Backups &amp; Recovery</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded-3 d-flex align-items-center gap-3">
                      <i className="fa-solid fa-circle-check text-primary fs-4"></i>
                      <span>24/7 Security Operations Center (SOC)</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded-3 d-flex align-items-center gap-3">
                      <i className="fa-solid fa-circle-check text-primary fs-4"></i>
                      <span>Zero Trust Network Architecture</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-3 bg-light rounded-3 d-flex align-items-center gap-3">
                      <i className="fa-solid fa-circle-check text-primary fs-4"></i>
                      <span>Regulatory Compliance (GDPR/HIPAA)</span>
                    </div>
                  </div>
                </div>

                <p>
                  Our security experts work directly with your technology leaders to analyze existing workflows, identify vulnerabilities, and deploy custom defense mechanisms.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar p-4 bg-light rounded-4">
                <h4 className="widget-title mb-4">All Services</h4>
                <ul className="list-unstyled mb-5">
                  <li className="mb-2"><Link href="/services/details" className="p-3 bg-white d-block rounded border font-weight-bold text-primary">Data Guard Sentinel</Link></li>
                  <li className="mb-2"><Link href="/services/details" className="p-3 bg-white d-block rounded border text-dark">WooCommerce Solutions</Link></li>
                  <li className="mb-2"><Link href="/services/details" className="p-3 bg-white d-block rounded border text-dark">CRM &amp; ERP Engineering</Link></li>
                  <li className="mb-2"><Link href="/services/details" className="p-3 bg-white d-block rounded border text-dark">Custom Web Design</Link></li>
                </ul>

                <div className="p-4 bg-theme text-white rounded-4 text-center">
                  <i className="fa-solid fa-headset display-4 mb-3"></i>
                  <h4 className="text-white">Need Technical Help?</h4>
                  <p className="small text-white-50">Speak directly with our senior solutions engineers today.</p>
                  <Link href="/contact" className="theme-btn bg-white text-dark mt-2">
                    <span>Contact Us</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
