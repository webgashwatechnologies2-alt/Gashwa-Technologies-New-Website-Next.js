'use client';

import { useState } from 'react';
import Link from 'next/link';
import { TEAM_MEMBERS } from '@/constants';

export default function Team() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="team-section fix" style={{ 
      background: 'linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)', 
      padding: '100px 0',
      position: 'relative'
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(67, 97, 238, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(35px)'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <div className="section-title title-area mx-auto mb-5 text-center">
              <div style={{ 
                display: 'inline-block',
                padding: '8px 24px',
                background: 'linear-gradient(135deg, rgba(67, 97, 238, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)',
                borderRadius: '50px',
                marginBottom: '20px',
                border: '1px solid rgba(67, 97, 238, 0.2)'
              }}>
                <span style={{ 
                  color: '#295D9A', 
                  fontWeight: '600', 
                  fontSize: '0.85rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase'
                }}>
                  Our Expert Team
                </span>
              </div>
              <h2 style={{ 
                color: '#1a1a2e', 
                fontSize: '2.8rem', 
                fontWeight: '800', 
                marginBottom: '15px',
                letterSpacing: '-1px'
              }}>
                Meet Our Skilled Professionals
              </h2>
              <p style={{ 
                color: '#6c757d', 
                fontSize: '1.1rem',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.8'
              }}>
                Meet the professionals behind Gashwa Technologies. We deliver polished digital experiences built on expertise, clarity and results.
              </p>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6">
              <div 
                style={{ 
                  background: '#ffffff',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: hoveredIndex === index ? '0 25px 50px rgba(67, 97, 238, 0.2)' : '0 4px 20px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  border: hoveredIndex === index ? '2px solid #295D9A' : '1px solid rgba(67, 97, 238, 0.1)',
                  position: 'relative',
                  transform: hoveredIndex === index ? 'translateY(-15px)' : 'translateY(0)'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div style={{ 
                  position: 'relative',
                  overflow: 'hidden',
                  aspectRatio: '1/1.2'
                }}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    style={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s ease',
                      transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, transparent 0%, rgba(26, 26, 46, 0.9) 100%)',
                    opacity: 0.8
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '50%',
                    transform: hoveredIndex === index ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(20px)',
                    opacity: hoveredIndex === index ? 1 : 0,
                    transition: 'all 0.4s ease',
                    display: 'flex',
                    gap: '12px'
                  }}
                  >
                    <a href="#" style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(255, 255, 255, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#295D9A';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    >
                      <i className="fab fa-linkedin-in" style={{ fontSize: '14px' }}></i>
                    </a>
                    <a href="#" style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(255, 255, 255, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#295D9A';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    >
                      <i className="fab fa-twitter" style={{ fontSize: '14px' }}></i>
                    </a>
                    <a href="#" style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(255, 255, 255, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#295D9A';
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                    >
                      <i className="fab fa-instagram" style={{ fontSize: '14px' }}></i>
                    </a>
                  </div>
                </div>
                
                {/* Team member info */}
                <div style={{ 
                  padding: '25px 20px',
                  textAlign: 'center',
                  position: 'relative',
                  background: '#ffffff'
                }}>
                  <div style={{
                    width: '60px',
                    height: '3px',
                    background: 'linear-gradient(90deg, #295D9A 0%, #818cf8 100%)',
                    margin: '0 auto 15px',
                    borderRadius: '2px'
                  }}></div>
                  
                  <h3 style={{ 
                    color: hoveredIndex === index ? '#295D9A' : '#1a1a2e', 
                    fontWeight: '700', 
                    fontSize: '1.25rem',
                    marginBottom: '8px',
                    margin: 0,
                    transition: 'color 0.3s ease'
                  }}>
                    <Link href="/team/details" style={{ 
                      color: 'inherit',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease'
                    }}>
                      {member.name}
                    </Link>
                  </h3>
                  
                  <p style={{ 
                    color: '#295D9A', 
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    margin: '0 0 12px',
                    letterSpacing: '0.5px'
                  }}>
                    {member.role}
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px',
                    flexWrap: 'wrap'
                  }}>
                    <span style={{
                      padding: '4px 12px',
                      background: 'rgba(67, 97, 238, 0.1)',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      color: '#295D9A',
                      fontWeight: '500'
                    }}>
                      Expert
                    </span>
                    <span style={{
                      padding: '4px 12px',
                      background: 'rgba(99, 102, 241, 0.1)',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      color: '#6366f1',
                      fontWeight: '500'
                    }}>
                      Professional
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
