import './VisionMissionSection.css';

const VALUES = [
  {
    icon: 'fa-solid fa-user-tie',
    title: 'Client-Centric Approach',
    description:
      'We place our clients at the center of every solution, delivering tailored strategies that solve real business challenges and build long-term partnerships.',
  },
  {
    icon: 'fa-solid fa-lightbulb',
    title: 'Innovation & Adaptability',
    description:
      'Our team stays ahead of technology trends so we can deliver modern, future-ready digital products that evolve with your business.',
  },
  {
    icon: 'fa-solid fa-gem',
    title: 'Quality & Excellence',
    description:
      'We uphold the highest standards through rigorous testing, attention to detail, and a relentless focus on delivering reliable, polished solutions.',
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Collaborative Partnerships',
    description:
      'We work closely with clients, employees, and technology partners to create stronger outcomes through shared expertise and transparent communication.',
  },
  {
    icon: 'fa-solid fa-leaf',
    title: 'Social Responsibility',
    description:
      'Our growth is guided by sustainable practices, inclusivity, and meaningful contributions to the communities we serve.',
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Measurable Results',
    description:
      'We deliver solutions aligned with your KPIs — from traffic growth and lead generation to revenue metrics and long-term ROI.',
  },
];

export default function VisionMissionSection() {
  return (
    <section className="vms-section">
      {/* Background Effects */}
      <div className="vms-bg-grid" />
      <div className="vms-glow vms-glow--1" />
      <div className="vms-glow vms-glow--2" />

      <div className="container vms-container">

        {/* ── Header ── */}
        <div className="vms-header">
          <span className="vms-eyebrow">
            <span className="vms-eyebrow__dot" />
            Our Vision &amp; Mission
            <span className="vms-eyebrow__dot" />
          </span>
          <h2 className="vms-title">
            Empowering Businesses with{' '}
            <span className="vms-title__accent">Purpose, Quality</span>
            {' '}&amp; Innovation
          </h2>
          <p className="vms-subtitle">
            At Gashwa Technologies, we are committed to delivering IT solutions that drive growth,
            efficiency, and lasting value across India and international markets.
          </p>
        </div>

        {/* ── Mission Card ── */}
        <div className="vms-mission">
          <div className="vms-mission__left">
            <div className="vms-mission__icon-wrap">
              <i className="fa-solid fa-bullseye" />
            </div>
            <div>
              <h3 className="vms-mission__heading">What Guides Our Work</h3>
              <p className="vms-mission__text">
                Our mission is to transform business challenges into digital opportunities using smart
                web development, mobile apps, cloud infrastructure, and strategic marketing solutions.
              </p>
            </div>
          </div>
          <div className="vms-mission__right">
            <ul className="vms-mission__list">
              <li>
                <i className="fa-solid fa-circle-check" />
                Trusted by businesses across Himachal, Delhi NCR, Punjab, Haryana, and the USA.
              </li>
              <li>
                <i className="fa-solid fa-circle-check" />
                Dedicated to transparent communication and measurable digital success.
              </li>
              <li>
                <i className="fa-solid fa-circle-check" />
                Supporting growing enterprises with responsive support and ongoing maintenance.
              </li>
            </ul>
          </div>
        </div>

        {/* ── Values Grid ── */}
        <div className="vms-values-grid">
          {VALUES.map((item, idx) => (
            <div key={idx} className="vms-value-card">
              <div className="vms-value-card__icon">
                <i className={item.icon} />
              </div>
              <h4 className="vms-value-card__title">{item.title}</h4>
              <p className="vms-value-card__desc">{item.description}</p>
              <div className="vms-value-card__glow" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
