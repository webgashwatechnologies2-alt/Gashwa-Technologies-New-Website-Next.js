'use client';

export default function BrandSlider() {
  const services = [
    { name: 'Search Engine Optimization', icon: '🔍', description: 'Boost your online visibility', color: '#295D9A' },
    { name: 'Website Designing', icon: '🎨', description: 'Stunning user experiences', color: '#3a0ca3' },
    { name: 'Graphic Designing', icon: '✨', description: 'Creative visual solutions', color: '#7209b7' },
    { name: 'Website Development', icon: '💻', description: 'Robust web applications', color: '#560bad' },
    { name: 'App Development', icon: '📱', description: 'Mobile-first solutions', color: '#480ca8' }
  ];

  return (
    <div className="brand-slider-section fix" style={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
        borderRadius: '50%'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-150px',
        left: '-150px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
        borderRadius: '50%'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
        borderRadius: '50%'
      }}></div>

      <div className="brand-slider-container-wrapper style1" style={{ position: 'relative', zIndex: 1 }}>
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <div style={{ 
                display: 'inline-block',
                padding: '8px 24px',
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
                borderRadius: '50px',
                marginBottom: '20px',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <span style={{ 
                  color: '#ffffff', 
                  fontWeight: '600', 
                  fontSize: '0.85rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase'
                }}>
                  What We Do
                </span>
              </div>
              <h2 style={{ 
                color: '#ffffff', 
                fontSize: '3rem', 
                fontWeight: '800', 
                marginBottom: '15px',
                textShadow: '0 4px 20px rgba(0,0,0,0.2)',
                letterSpacing: '-1px'
              }}>
                Our Core Services
              </h2>
              <p style={{ 
                color: 'rgba(255,255,255,0.85)', 
                fontSize: '1.15rem',
                maxWidth: '650px',
                margin: '0 auto',
                lineHeight: '1.8'
              }}>
                Comprehensive digital solutions crafted with precision to elevate your business to new heights
              </p>
            </div>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            {services.map((service, index) => (
              <div key={index} style={{ 
                flex: '0 0 calc(20% - 16px)', 
                maxWidth: 'calc(20% - 16px)', 
                minWidth: '200px'
              }}>
                <div 
                  style={{ 
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: '24px',
                    padding: '35px 25px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    border: '1px solid rgba(255,255,255,0.15)',
                    height: '100%',
                    textAlign: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-15px) scale(1.05)';
                    e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.25)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${service.color}33 0%, ${service.color}11 100%)`,
                    opacity: 0,
                    transition: 'opacity 0.5s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                  ></div>
                  
                  {/* Shine effect */}
                  <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-50%',
                    width: '200%',
                    height: '200%',
                    background: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)',
                    transform: 'rotate(45deg)',
                    transition: 'all 0.6s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.left = '100%';
                  }}
                  ></div>
                  
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{
                      width: '85px',
                      height: '85px',
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${service.color} 0%, ${service.color}cc 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 25px',
                      boxShadow: `0 15px 35px ${service.color}55`,
                      position: 'relative',
                      transition: 'all 0.4s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
                      e.currentTarget.style.boxShadow = `0 20px 45px ${service.color}77`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                      e.currentTarget.style.boxShadow = `0 15px 35px ${service.color}55`;
                    }}
                    >
                      <div style={{
                        position: 'absolute',
                        top: '-3px',
                        left: '-3px',
                        right: '-3px',
                        bottom: '-3px',
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${service.color} 0%, transparent 50%)`,
                        opacity: 0.5,
                        filter: 'blur(8px)'
                      }}></div>
                      <span style={{ fontSize: '2.5rem', filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))' }}>{service.icon}</span>
                    </div>
                    
                    <h3 style={{ 
                      color: '#ffffff', 
                      fontWeight: '700', 
                      fontSize: '1.15rem',
                      marginBottom: '12px',
                      minHeight: '55px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textShadow: '0 2px 8px rgba(0,0,0,0.15)',
                      letterSpacing: '-0.5px'
                    }}>
                      {service.name}
                    </h3>
                    
                    <div style={{
                      width: '40px',
                      height: '3px',
                      background: `linear-gradient(90deg, ${service.color} 0%, transparent 100%)`,
                      margin: '0 auto 15px',
                      borderRadius: '2px'
                    }}></div>
                    
                    <p style={{ 
                      color: 'rgba(255,255,255,0.8)', 
                      fontSize: '0.9rem',
                      margin: 0,
                      lineHeight: '1.6',
                      fontWeight: '400'
                    }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
