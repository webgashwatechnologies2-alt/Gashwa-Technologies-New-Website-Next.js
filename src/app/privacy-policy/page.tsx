import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import '../legal-pages.css';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Learn how Gashwa Technologies handles information when you browse our website or contact us about our services.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumb title="Privacy Policy" activeItem="Privacy Policy" />
      <section className="legal-page">
        <div className="container">
          <article className="legal-page__content">
            <p className="legal-page__updated">Last updated: November 16, 2026</p>
            <p>
              This policy explains how Gashwa Technologies handles information
              when you visit this website or contact us about our IT and
              digital services.
            </p>

            <h2>Information you may provide</h2>
            <p>
              If you contact us directly by email or phone, we receive the
              information you choose to share so we can respond. The contact
              form on this website asks for your name, phone number, email
              address, state or location, requested service and project
              message.
            </p>

            <h2>How the website forms currently work</h2>
            <p>
              At present, the contact, newsletter, service enquiry, business
              enquiry, and training enquiry forms are front-end demonstrations.
              They do not send your entries to Gashwa Technologies or store them
              on a server. Resume files selected on the careers page are not
              uploaded or attached to an application. If you need a response,
              contact us directly using the details on our{' '}
              <Link href="/contact">contact page</Link>.
            </p>

            <h2>How we use information received directly</h2>
            <p>
              Information you send to us by email or provide during a call may
              be used to respond to your enquiry, discuss a requested project,
              provide services you have engaged us for, and meet applicable
              legal obligations. We do not sell personal information.
            </p>

            <h2>Website technologies and third parties</h2>
            <p>
              The contact page includes a Google Maps embed. When you visit
              that page, Google may receive technical information such as
              your IP address and browser details according to its own
              privacy terms. This website also links to external social media
              and other websites; their privacy practices are controlled by
              those providers.
            </p>

            <h2>Retention and security</h2>
            <p>
              If you contact us directly, we keep the information needed to
              handle your request or provide services and retain it only as
              long as reasonably necessary for those purposes or as required
              by law. We take reasonable steps to protect information we
              handle, but no method of electronic communication or storage is
              completely secure.
            </p>

            <h2>Your choices and requests</h2>
            <p>
              You can choose not to provide personal information through
              direct communication, though we may then be unable to respond
              fully to your enquiry. To ask about, correct or request deletion
              of information you have sent us, email{' '}
              <a href="mailto:info@gashwatechnologies.com">
                info@gashwatechnologies.com
              </a>
              . We will handle requests in accordance with applicable law.
            </p>

            <h2>Changes to this policy</h2>
            <p>
              We may update this policy if our website, services or legal
              obligations change. The latest version and its update date will
              be published on this page.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
