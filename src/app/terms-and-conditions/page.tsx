import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import '../legal-pages.css';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Read the terms that apply when you browse the Gashwa Technologies website or enquire about our IT services.',
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Breadcrumb title="Terms & Conditions" activeItem="Terms & Conditions" />
      <section className="legal-page">
        <div className="container">
          <article className="legal-page__content">
            <p className="legal-page__updated">Last updated: November 16, 2026</p>
            <p>
              These terms apply to your use of the Gashwa Technologies website
              and to enquiries about our services. By using this website, you
              agree to these terms. A separate written proposal or agreement
              will govern any specific project or service engagement.
            </p>

            <h2>Our services</h2>
            <p>
              Gashwa Technologies provides IT and digital services, including
              website design and development, e-commerce, mobile applications,
              digital marketing, graphic design, domains, hosting and related
              support. The scope, deliverables, fees, schedule and support for
              each engagement are agreed with the client in writing before
              work begins.
            </p>

            <h2>Website information and enquiries</h2>
            <p>
              We aim to keep website information current, but service
              descriptions are general information and may change. Sending an
              enquiry does not itself create a client relationship or guarantee
              availability, pricing, results or a project start date. Please
              confirm project details in a written proposal or agreement.
            </p>

            <h2>Client responsibilities</h2>
            <ul>
              <li>
                Provide accurate project information, timely feedback and
                materials needed to deliver the agreed work.
              </li>
              <li>
                Ensure you have the necessary rights and permissions for any
                text, images, software, trademarks or other materials supplied
                to us.
              </li>
              <li>
                Review deliverables and raise concerns within the review
                periods set out in your project agreement.
              </li>
            </ul>

            <h2>Fees, changes and delivery</h2>
            <p>
              Fees, payment dates, taxes, milestones, revisions, change
              requests, cancellations and delivery estimates are set out in the
              applicable proposal or agreement. A change to the agreed scope
              may affect cost and timing and must be approved before that
              additional work begins.
            </p>

            <h2>Intellectual property</h2>
            <p>
              Rights to project deliverables are determined by the written
              agreement and any applicable payment terms. Each party retains
              rights to materials it owned before a project. Third-party
              software, fonts, plugins, stock assets and hosting or domain
              services remain subject to their own terms and licences.
            </p>

            <h2>Third-party services and links</h2>
            <p>
              Our work may use third-party platforms or services, such as
              hosting, domain registrars, analytics tools or payment
              providers. Those services are governed by their own terms and
              availability, which we do not control. Links on this website are
              provided for convenience and do not imply endorsement.
            </p>

            <h2>Acceptable use</h2>
            <p>
              Do not use this website unlawfully, attempt to disrupt its
              operation, gain unauthorised access to systems, or submit
              material that infringes another person&apos;s rights.
            </p>

            <h2>Limitation of liability</h2>
            <p>
              To the extent permitted by applicable law, Gashwa Technologies
              is not responsible for indirect or consequential loss arising
              from general use of this website. Nothing in these terms limits
              rights or liabilities that cannot legally be excluded. Any
              project-specific liability is governed by the relevant written
              agreement.
            </p>

            <h2>Governing law and contact</h2>
            <p>
              These terms are governed by the applicable laws of India,
              subject to any mandatory legal protections. For questions about
              these terms or our services, email{' '}
              <a href="mailto:info@gashwatechnologies.com">
                info@gashwatechnologies.com
              </a>{' '}
              or use our <Link href="/contact">contact page</Link>.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
