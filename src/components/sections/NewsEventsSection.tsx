const newsItems = [
  {
    title: 'Engineering Day 2023',
    description: 'Gashwa Technologies was invited as Special Guest of Honour at Bahra University, celebrating innovation and student projects.',
  },
  {
    title: 'HPSPCB Hackathon Event',
    description: 'Delivered a student registration platform, video production, and campaign graphics for the HPSPCB hackathon.',
  },
  {
    title: 'Smart AI Innovations',
    description: 'Showcasing AI-driven business transformation ideas for healthcare, finance, and marketing solutions.',
  },
  {
    title: 'Email Marketing Strategies',
    description: 'Highlighting why email remains the best channel for loyal customer engagement and measurable ROI.',
  },
];

export default function NewsEventsSection() {
  return (
    <section className="blog-section section-padding fix" style={{ background: '#ffffff', padding: '90px 0' }}>
      <div className="container">
        <div className="section-title title-area mx-auto mb-6 text-center">
          <div className="subtitle d-flex justify-content-center align-items-center">
            <img src="/assets/img/icon/arrowLeft.svg" alt="icon" />
            <span style={{ margin: '0 12px', color: '#0d6efd', letterSpacing: '2px' }}>NEWS & EVENTS</span>
            <img src="/assets/img/icon/arrowRight.svg" alt="icon" />
          </div>
          <h2 className="title">Recent stories from Gashwa Technologies</h2>
          <p style={{ maxWidth: '720px', margin: '0 auto', color: '#6c757d' }}>
            Explore key events, campaigns, and innovation highlights from our latest brand activity and industry engagements.
          </p>
        </div>

        <div className="row g-4">
          {newsItems.map((item) => (
            <div key={item.title} className="col-lg-3 col-md-6">
              <div style={{ minHeight: '230px', padding: '28px', borderRadius: '24px', background: '#f8fbff', border: '1px solid rgba(13, 110, 253, 0.12)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '18px', background: '#e7f1ff', marginBottom: '18px', color: '#0d6efd' }}>
                  <i className="fa-solid fa-newspaper" style={{ fontSize: '20px' }} />
                </div>
                <h5 style={{ marginBottom: '14px' }}>{item.title}</h5>
                <p style={{ color: '#6c757d', lineHeight: 1.75 }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
