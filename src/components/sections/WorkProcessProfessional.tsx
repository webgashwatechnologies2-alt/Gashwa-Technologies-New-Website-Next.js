'use client';

import React from 'react';
import './WorkProcessProfessional.css';

const WORK_STEPS = [
  {
    title: 'Requirement',
    desc: 'Gather goals, stakeholders inputs, and requirements to shape a precise project roadmap.',
    icon: 'fa-solid fa-list-check',
    accent: '#FF5B3A',
    bg: '#FFF4EE',
  },
  {
    title: 'UI/UX Design',
    desc: 'Create elegant user experiences with thoughtful layouts, visual hierarchy, and brand consistency.',
    icon: 'fa-solid fa-pen-ruler',
    accent: '#265B99',
    bg: '#ECF3FF',
  },
  {
    title: 'Prototype',
    desc: 'Build interactive prototypes to validate the flow, test usability, and refine the product vision.',
    icon: 'fa-solid fa-cubes',
    accent: '#7C52FF',
    bg: '#F2EEFF',
  },
  {
    title: 'Development',
    desc: 'Deliver scalable products with polished interfaces, clean architecture, and reliable performance.',
    icon: 'fa-solid fa-code',
    accent: '#00BFA6',
    bg: '#E6FFF4',
  },
];

export default function WorkProcessProfessional() {
  return (
    <section className="work-process-professional">
      <div className="wrapper">
        <div className="heading-block">
          <div className="badge">Working Process</div>
          <h2>
            Process we <span>follow</span>
          </h2>
        </div>

        <div className="process-grid">
          {WORK_STEPS.map((step, index) => (
            <article
              key={step.title}
              className="process-card"
              style={{ '--accent': step.accent, '--bg': step.bg } as React.CSSProperties}
            >
              <div className="card-top">
                <div className="card-step">{String(index + 1).padStart(2, '0')}</div>
                <div className="card-icon" style={{ background: step.accent }}>
                  <i className={step.icon} />
                </div>
              </div>

              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
