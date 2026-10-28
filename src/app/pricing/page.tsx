import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Pricing Plans',
  description: 'Flexible software development and IT maintenance packages by Gashwa Technologies.',
};

export default function PricingPage() {
  const plans = [
    { name: 'Basic Plan', price: '$49', period: '/month', features: ['Core Web Maintenance', 'Standard Server Monitoring', 'Weekly Backups', 'Email Support'], highlighted: false },
    { name: 'Professional Plan', price: '$149', period: '/month', features: ['Fullstack Next.js Development', '24/7 Server SLA Monitoring', 'Daily Backups & CI/CD', 'Priority Support'], highlighted: true },
    { name: 'Enterprise Plan', price: '$399', period: '/month', features: ['Dedicated Engineering Team', 'Custom Cloud Architecture', 'Zero-Trust Cyber Security', 'Dedicated Account Manager'], highlighted: false },
  ];

  return (
    <>
      <Breadcrumb title="Pricing Plans" activeItem="Pricing" />

      <section className="pricing-section space fix">
        <div className="container">
          <div className="section-title text-center mxw-650 mb-5">
            <div className="subtitle">
              <img src="/assets/img/icon/arrowLeft.svg" alt="icon" />
              <span> Transparent Pricing </span>
              <img src="/assets/img/icon/arrowRight.svg" alt="icon" />
            </div>
            <h2 className="title">Select the Perfect IT Solution Package</h2>
          </div>

          <div className="row g-4">
            {plans.map((plan, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className={`pricing-card p-5 rounded-4 h-100 border ${plan.highlighted ? 'bg-theme text-white shadow-lg' : 'bg-white text-dark shadow-sm'}`}>
                  <h3>{plan.name}</h3>
                  <div className="my-4">
                    <span className="display-4 fw-bold">{plan.price}</span>
                    <span className={plan.highlighted ? 'text-white-50' : 'text-muted'}>{plan.period}</span>
                  </div>
                  <ul className="list-unstyled mb-5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="mb-3 d-flex align-items-center gap-2">
                        <i className={`fa-solid fa-check ${plan.highlighted ? 'text-white' : 'text-primary'}`}></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className={`theme-btn w-100 text-center ${plan.highlighted ? 'bg-white text-dark' : ''}`}>
                    <span>Choose Plan</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
