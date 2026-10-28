import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

// Types
interface FAQItem {
  q: string;
  a: string;
}

// Enhanced Metadata for SEO
export const metadata: Metadata = {
  title: 'FAQ - Gashwa Technologies',
  description: 'Find answers to common questions about Gashwa Technologies IT services and project workflows.',
  keywords: 'FAQ, questions, IT services, support, help',
  openGraph: {
    title: 'FAQ - Gashwa Technologies',
    description: 'Find answers to common questions about Gashwa Technologies IT services and project workflows.',
    type: 'website',
  },
};

export default function FaqPage() {
  const faqs: FAQItem[] = [
    { q: 'What IT services does Gashwa Technologies offer?', a: 'We specialize in custom web application development (Next.js, React, Node), mobile app development (iOS & Android), cloud infrastructure (AWS/Azure), cybersecurity, and IT consulting.' },
    { q: 'How long does a typical software project take?', a: 'Project timelines vary depending on scope. Standard web applications take 4-8 weeks, while custom enterprise platforms take 3-6 months with iterative agile sprint deliverables.' },
    { q: 'Do you provide ongoing technical maintenance and support?', a: 'Yes! We offer 24/7 SLA maintenance plans, continuous server monitoring, security auditing, and feature enhancement support.' },
    { q: 'Can you migrate our existing legacy system to Next.js?', a: 'Absolutely. We specialize in converting legacy HTML, WordPress, PHP, or older JS applications into modern, high-performance, SEO-friendly Next.js applications.' },
  ];

  return (
    <>
      <Breadcrumb title="Frequently Asked Questions" activeItem="FAQ" />

      <section className="faq-section space fix">
        <div className="container">
          <div className="section-title text-center mxw-650 mb-5">
            <div className="subtitle">
              <img src="/assets/img/icon/arrowLeft.svg" alt="icon" />
              <span> Got Questions? </span>
              <img src="/assets/img/icon/arrowRight.svg" alt="icon" />
            </div>
            <h2 className="title">Frequently Asked Questions</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                {faqs.map((faq, index) => (
                  <div key={index} className="accordion-item mb-3 border rounded-3 overflow-hidden">
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button 
                        className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`} 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target={`#collapse${index}`} 
                        aria-expanded={index === 0 ? 'true' : 'false'} 
                        aria-controls={`collapse${index}`}
                      >
                        {faq.q}
                      </button>
                    </h2>
                    <div 
                      id={`collapse${index}`} 
                      className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`} 
                      aria-labelledby={`heading${index}`} 
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body text-muted">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-5 p-4 bg-light rounded-4">
                <h4 className="mb-2">Still Have Questions?</h4>
                <p className="text-muted mb-3">Reach out directly to our engineering advisory team.</p>
                <Link href="/contact" className="theme-btn">
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
