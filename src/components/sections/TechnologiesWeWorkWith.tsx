'use client';

import './TechnologiesWeWorkWith.css';

export default function TechnologiesWeWorkWith() {
  const techs = ['fab fa-react', 'fab fa-node', 'fab fa-js', 'fab fa-vuejs', 'fab fa-aws', 'fab fa-docker'];

  return (
    <section className="tech-section">
      <div className="container">
        <div className="tech-inner">
          <h2>Technologies We Work With</h2>
          <p className="lead">Our team uses up-to-date technologies to deliver scalable, secure and maintainable solutions.</p>

          <div className="tech-grid">
            {techs.map((cls, i) => (
              <div className="tech-item" key={i}>
                <i className={cls} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
