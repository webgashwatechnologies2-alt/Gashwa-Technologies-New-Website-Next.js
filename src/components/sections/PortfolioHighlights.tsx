const portfolioItems = [
  {
    title: 'Lexor Miami',
    description: 'Modern website design and web development for a premium travel brand.',
    tags: ['Design', 'HTML5/CSS3', 'JavaScript', 'jQuery'],
  },
  {
    title: 'Aanantham Resort',
    description: 'Hospitality portfolio with elegant visuals and conversion-focused layout.',
    tags: ['Design', 'Responsive', 'Branding', 'Booking'],
  },
  {
    title: 'Leni Swims',
    description: 'E-commerce website experience crafted for swimwear and lifestyle products.',
    tags: ['Design', 'HTML5/CSS3', 'JavaScript', 'jQuery'],
  },
  {
    title: 'On One Studios',
    description: 'Creative web presence that reflects modern branding and digital storytelling.',
    tags: ['Design', 'Development', 'SEO', 'Performance'],
  },
  {
    title: 'New Era Tour',
    description: 'Travel and tour website with clear booking flow and immersive visuals.',
    tags: ['Design', 'UI/UX', 'SEO', 'Mobile Friendly'],
  },
  {
    title: 'Harmony Hotel Manali',
    description: 'Hospitality website designed for local travelers and reservation growth.',
    tags: ['Design', 'Responsive', 'Speed', 'Conversion'],
  },
];

export default function PortfolioHighlights() {
  return (
    <section className="project-section space fix" style={{ padding: '90px 0', background: '#f8fbff' }}>
      <div className="container">
        <div className="section-title title-area mx-auto mb-6 text-center">
          <div className="subtitle d-flex justify-content-center align-items-center">
            <img src="/assets/img/icon/arrowLeft.svg" alt="icon" />
            <span style={{ margin: '0 12px', color: '#0d6efd', letterSpacing: '2px' }}>PORTFOLIO HIGHLIGHTS</span>
            <img src="/assets/img/icon/arrowRight.svg" alt="icon" />
          </div>
          <h2 className="title">Featured Projects that Showcase Our Expertise</h2>
          <p style={{ maxWidth: '720px', margin: '0 auto', color: '#6c757d' }}>
            We deliver polished websites, digital campaigns, and application experiences across hospitality, retail, events, and creative brands.
          </p>
        </div>

        <div className="row g-4">
          {portfolioItems.map((item) => (
            <div key={item.title} className="col-lg-4 col-md-6">
              <div style={{ background: '#ffffff', padding: '28px', borderRadius: '24px', boxShadow: '0 18px 50px rgba(9, 30, 66, 0.08)', height: '100%' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '52px', height: '52px', borderRadius: '16px', background: '#e7f1ff', color: '#0d6efd', marginBottom: '18px' }}>
                  <i className="fa-solid fa-briefcase" style={{ fontSize: '20px' }} />
                </div>
                <h4 style={{ marginBottom: '14px' }}>{item.title}</h4>
                <p style={{ color: '#6c757d', lineHeight: 1.8, minHeight: '76px' }}>{item.description}</p>
                <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {item.tags.map((tag) => (
                    <span key={tag} style={{ padding: '8px 12px', borderRadius: '999px', background: '#eef5ff', color: '#0d6efd', fontSize: '0.85rem' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
