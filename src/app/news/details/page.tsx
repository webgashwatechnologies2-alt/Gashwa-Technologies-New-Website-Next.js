import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Blog Article Details',
  description: 'Read the full tech article on Gashwa Technologies insights.',
};

export default function NewsDetailsPage() {
  return (
    <>
      <Breadcrumb title="Blog Details" activeItem="Blog Details" />

      <section className="news-details-section space fix">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8">
              <article className="news-details-wrap">
                <img src="/assets/img/news/post1.jpg" alt="news details" className="img-fluid rounded-4 mb-4 w-100" />
                <div className="d-flex gap-3 text-muted mb-3">
                  <span><i className="fa-solid fa-calendar me-1"></i> April 15, 2026</span>
                  <span><i className="fa-solid fa-user me-1"></i> Admin</span>
                  <span><i className="fa-solid fa-folder me-1"></i> Technology</span>
                </div>

                <h2 className="mb-3">Top 5 Most Famous Technology Trends in 2026</h2>
                <p className="lead">
                  Technology moves at a unprecedented pace. From AI integration to serverless Next.js edge applications, keeping your enterprise stack up to date is essential for market dominance.
                </p>
                <p>
                  In this article, we break down how edge computing, automated devops pipelines, zero-trust cybersecurity, and modern frontend frameworks are shaping software architecture worldwide.
                </p>

                <blockquote className="p-4 bg-light rounded-4 border-start border-4 border-primary my-4 fst-italic">
                  &ldquo;Innovation distinguishes between a leader and a follower. Adapting modern web and cloud architecture early yields massive compound returns in reliability and speed.&rdquo;
                </blockquote>

                <p>
                  At Gashwa Technologies, our engineering team continuously tests and integrates emerging web standards into client products.
                </p>
              </article>
            </div>

            <div className="col-lg-4">
              <div className="sidebar p-4 bg-light rounded-4">
                <h4 className="mb-4">Recent Articles</h4>
                <div className="mb-3">
                  <h6><Link href="/news/details" className="text-dark">Top 5 Most Famous Technology Trends in 2026</Link></h6>
                  <span className="small text-muted">15th April, 2026</span>
                </div>
                <hr />
                <div className="mb-3">
                  <h6><Link href="/news/details" className="text-dark">Why Next.js App Router Is Ideal For Enterprise Websites</Link></h6>
                  <span className="small text-muted">20th May, 2026</span>
                </div>
                <hr />
                <div>
                  <h6><Link href="/news/details" className="text-dark">Building Resilient Microservices With Kubernetes</Link></h6>
                  <span className="small text-muted">10th June, 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
