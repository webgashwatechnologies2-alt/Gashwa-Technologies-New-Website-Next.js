import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Team Member Details',
  description: 'Profile and technical skills overview of Gashwa Technologies team members.',
};

export default function TeamDetailsPage() {
  return (
    <>
      <Breadcrumb title="Team Details" activeItem="Team Details" />

      <section className="team-details-section space fix">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <img src="/assets/img/team/team-details.jpg" alt="team details" className="img-fluid rounded-4 shadow" />
            </div>
            <div className="col-lg-7">
              <span className="text-primary fw-bold">Senior Solutions Architect</span>
              <h2 className="display-5 fw-bold mb-3">Marvin McKinney</h2>
              <p className="lead">
                Marvin has over 10 years of experience designing high-scale cloud platforms, distributed microservices, and database systems.
              </p>

              <div className="row g-3 my-4">
                <div className="col-sm-6">
                  <strong>Email:</strong> marvin@gashwatechnologies.com
                </div>
                <div className="col-sm-6">
                  <strong>Phone:</strong> +1 800 234 5678
                </div>
                <div className="col-sm-6">
                  <strong>Location:</strong> Melbourne, Australia
                </div>
                <div className="col-sm-6">
                  <strong>Experience:</strong> 10  Years
                </div>
              </div>

              <div className="d-flex gap-3">
                <Link href="/contact" className="theme-btn">
                  <span>Get In Touch</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
