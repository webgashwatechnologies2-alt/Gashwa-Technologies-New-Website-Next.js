import { COUNTERS } from '@/constants';

const STATS_ICONS = [
  'fa-solid fa-folder-open',
  'fa-solid fa-users',
  'fa-solid fa-star',
  'fa-solid fa-award',
];

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-shapes">
        <div className="stats-shape stats-shape--vertical" />
        <div className="stats-shape stats-shape--triangle" />
      </div>

      <div className="container">
        <div className="row gy-4 justify-content-center">
          {COUNTERS.map((stat, index) => (
            <div key={stat.label} className="col-lg-3 col-md-6">
              <div className="stats-card">
                <div className="stats-card__icon">
                  <i className={STATS_ICONS[index] || 'fa-solid fa-circle'} />
                </div>
                <div className="stats-card__content">
                  <h3>{stat.value}{stat.suffix}</h3>
                  <p>{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
