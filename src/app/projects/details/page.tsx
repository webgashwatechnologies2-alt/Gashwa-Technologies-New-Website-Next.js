import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Project Details',
  description: 'In-depth case study of Gashwa Technologies engineering deliverables.',
};

export default function ProjectDetailsPage() {
  return (
    <>
      <Breadcrumb title="Project Details" activeItem="Project Details" />

      <section className="project-details-section space fix">
        <div className="container">
          <div className="project-details-wrapper">
            <div className="project-thumb mb-5">
              <img src="/assets/img/project/project-details.jpg" alt="project details" className="img-fluid rounded-4 w-100" />
            </div>

            <div className="row g-4 mb-5">
              <div className="col-lg-8">
                <h2>Smart Cloud Integration Platform</h2>
                <p className="lead">
                  A high-availability multi-cloud infrastructure solution built to streamline database synchronization, security governance, and auto-scaling.
                </p>
                <p>
                  The client faced latency issues and complex server management across distributed teams. Gashwa Technologies architected a containerized microservices ecosystem with automated deployment pipelines and zero downtime.
                </p>

                <h3 className="mt-4 mb-3">Key Project Objectives</h3>
                <ul className="list-group list-group-flush mb-4">
                  <li className="list-group-item bg-transparent ps-0"><i className="fa-solid fa-check text-primary me-2"></i> Reduced infrastructure latency by 45%</li>
                  <li className="list-group-item bg-transparent ps-0"><i className="fa-solid fa-check text-primary me-2"></i> Achieved 99.99% uptime SLA compliance</li>
                  <li className="list-group-item bg-transparent ps-0"><i className="fa-solid fa-check text-primary me-2"></i> Integrated real-time automated security threat analysis</li>
                </ul>
              </div>

              <div className="col-lg-4">
                <div className="p-4 bg-light rounded-4 border">
                  <h4 className="mb-4">Project Overview</h4>
                  <ul className="list-unstyled">
                    <li className="mb-3"><strong>Client:</strong> Tech Global Inc.</li>
                    <li className="mb-3"><strong>Category:</strong> Cloud Infrastructure</li>
                    <li className="mb-3"><strong>Date:</strong> May 2026</li>
                    <li className="mb-3"><strong>Duration:</strong> 6 Months</li>
                    <li className="mb-0"><strong>Location:</strong> Australia / Global</li>
                  </ul>
                  <div className="mt-4">
                    <Link href="/contact" className="theme-btn w-100 text-center">
                      <span>Start Your Project</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
