'use client';

import React from 'react';
import './WorkProcess.css';

const STEPS = [
  {
    title: 'Shopify',
    desc: 'Build high-converting Shopify stores with custom themes, app integration, secure payments, and seamless eCommerce experiences.',
    img: '/assets/img/service/shopify.png',
  },
  {
    title: 'WordPress',
    desc: 'Create responsive and SEO-friendly WordPress websites with custom themes, plugins, and easy content management.',
    img: '/assets/img/service/wordpress.png',
  },
  {
    title: 'Continuous Improvement',
    desc: 'Continuously enhance applications with performance optimization, feature upgrades, and user experience improvements.',
    img: '/assets/img/service/continous-improvement.png',
  },
  {
    title: 'Planning and Analysis',
    desc: 'Analyze business requirements, define project goals, and create strategic plans for successful project execution.',
    img: '/assets/img/service/analysis-business.png',
  },
  {
    title: 'Development',
    desc: 'Develop scalable, secure, and high-performance web and mobile applications using modern technologies and best practices.',
    img: '/assets/img/service/development.png',
  },
  {
    title: 'Testing and QA',
    desc: 'Ensure software quality through comprehensive testing, bug fixing, performance checks, and quality assurance processes.',
    img: '/assets/img/service/testing.png',
  },
  {
    title: 'Maintenance and Support',
    desc: 'Provide ongoing website and application maintenance, security updates, bug fixes, and technical support services.',
    img: '/assets/img/service/mainatanece.png',
  },
  {
    title: 'UI/UX Design',
    desc: 'Design intuitive, modern, and user-friendly interfaces that deliver engaging experiences across all devices.',
    img: '/assets/img/service/uiux.png',
  },
];

export default function WorkProcess() {
  return (
    <section className="work-process">
      <div className="container">
        <div className="process-header">
          <div className="kicker-badge">
            <i className="fa-solid fa-sparkles" />
            <span>Work Process</span>
          </div>
          <h2 className="process-title">Our Development Process For Modern Teams</h2>
        </div>

        <div className="process-grid">
          {STEPS.map((step, index) => (
            <div className="process-item" key={step.title}>
              <div className="arc-wrapper">
                <div className="circle">
                  <img src={step.img} alt={step.title} />
                </div>
                <div className="index">{String(index + 1).padStart(2, '0')}</div>
              </div>

              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
