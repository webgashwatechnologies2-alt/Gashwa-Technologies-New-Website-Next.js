'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PRICING_PLANS } from '@/constants';

export default function Pricing() {
  const [pricingTab, setPricingTab] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="pricing-section fix section-padding">
      <div className="pricing-wrapper style1">
        <div className="shape1 d-none d-xxl-block"><img src="/assets/img/shape/pricingShape1_1.png" alt="shape" /></div>
        <div className="shape2 d-none d-xxl-block"><img src="/assets/img/shape/pricingShape1_2.png" alt="shape" /></div>
        <div className="container">
          <div className="section-title title-area mx-auto mb-25 text-center">
            <div className="subtitle d-flex justify-content-center">
              <img src="/assets/img/icon/arrowLeft.svg" alt="icon" />
              <span> Our Pricing </span>
              <img src="/assets/img/icon/arrowRight.svg" alt="icon" />
            </div>
            <h2 className="title text-center">Our Awesome Pricing Plans</h2>

            <div className="tab-section d-flex justify-content-center align-items-center gap-3 mt-3">
              <div className="nav nav-pills" role="tablist">
                <button
                  className={`nav-link ${pricingTab === 'monthly' ? 'active' : ''}`}
                  onClick={() => setPricingTab('monthly')}
                >
                  Monthly
                </button>
                <button
                  className={`nav-link ${pricingTab === 'yearly' ? 'active' : ''}`}
                  onClick={() => setPricingTab('yearly')}
                >
                  Yearly
                </button>
              </div>
              <img src="/assets/img/icon/pricingIcon1_2.svg" alt="icon" />
              <span className="save badge bg-warning text-dark fs-6">Save 25%</span>
            </div>
          </div>

          <div className="tab-content mt-4">
            <div className="row gy-5">
              {PRICING_PLANS.map((plan) => (
                <div key={plan.id} className="col-xl-4 col-md-6">
                  <div className={`pricing-card ${plan.featured ? 'style2' : 'style1'}`}>
                    <div className="pricing-card_header">
                      <div className="item">
                        <h4>{plan.title}</h4>
                        <div className="price">
                          <h2>${pricingTab === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}</h2> <span>/ {pricingTab === 'monthly' ? 'Month' : 'Year'}</span>
                        </div>
                      </div>
                      <div className="item">
                        <img src="/assets/img/icon/pricingIcon1_1.svg" alt="icon" />
                      </div>
                    </div>
                    <div className="pricing-card_body">
                      <div className="checklist-wrapper">
                        {plan.features.map((feature, index) => (
                          <ul key={index} className="checklist style1">
                            <li>
                              <img 
                                src={feature.included ? '/assets/img/icon/checkmarkIcon.svg' : '/assets/img/icon/crossIcon.svg'} 
                                alt="icon" 
                              /> {feature.text}
                            </li>
                            <li><img src="/assets/img/icon/questionIcon.svg" alt="icon" /></li>
                          </ul>
                        ))}
                      </div>
                      <div className="btn-wrapper">
                        <Link href="/pricing" className={`gt-btn ${plan.featured ? 'style3' : 'style2'} w-100`}>
                          Get Started Now <i className="fa-sharp fa-light fa-arrow-right-long"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
