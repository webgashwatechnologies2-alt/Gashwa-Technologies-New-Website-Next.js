'use client';

export default function IndustriesWeServe() {
  const industries = [
    { name: 'Travel Agency', icon: '✈️' },
    { name: 'Real Estate', icon: '🏠' },
    { name: 'E-commerce', icon: '🛒' },
    { name: 'Education', icon: '🎓' },
    { name: 'Supply Chain', icon: '📦' },
    { name: 'Healthcare', icon: '🏥' },
    { name: 'Finance', icon: '💰' },
    { name: 'Manufacturing', icon: '🏭' },
  ];

  return (
    <section className="space fix" style={{ background: '#fff' , paddingTop : '0%' , }}>
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-xl-6">
            <div style={{ borderRadius: '20px', overflow: 'hidden' }}>
              <img
                src="/assets/img/about/about1image.jpg"
                alt="Industries We Serve - Gashwa Technologies"
                style={{ width: '100%', height : '500px', borderRadius: '20px', boxShadow: '0 20px 60px rgba(0,0,0,0.12)' , objectFit : 'cover' }}
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="section-title mxw-560">
              <div className="subtitle" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <img src="/assets/img/icon/arrowLeft.svg" alt="icon" />
                <span>Industries</span>
                <img src="/assets/img/icon/arrowRight.svg" alt="icon" />
              </div>
              <h2 className="title">Industries We Serve</h2>
              <p className="mt-25">
                At Gashwa Technologies, we take pride in serving diverse industries with cutting-edge IT solutions. From healthcare and finance to e-commerce and education, we cater to the unique needs of each sector.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '24px' }}>
              {industries.map((industry, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 18px',
                    background: '#f8f9ff',
                    borderRadius: '12px',
                    border: '1px solid #eef0ff',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#333',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = '#384BFF';
                    (e.currentTarget as HTMLDivElement).style.color = '#fff';
                    (e.currentTarget as HTMLDivElement).style.border = '1px solid #384BFF';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = '#f8f9ff';
                    (e.currentTarget as HTMLDivElement).style.color = '#333';
                    (e.currentTarget as HTMLDivElement).style.border = '1px solid #eef0ff';
                  }}
                >
                  <span style={{ fontSize: '20px' }}>{industry.icon}</span>
                  <span>{industry.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
