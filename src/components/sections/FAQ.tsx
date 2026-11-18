'use client';

import { useState, useCallback } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '@/constants';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  thumb?: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const faqList: FAQItem[] = [
    {
      id: 1,
      question: FAQS[0]?.question || "Maecenas facilisis erat id solution business",
      answer: "Solution the connection, we create business marketing platforms business Solution",
      thumb: "/assets/img/faq/faq_meeting.png"
    },
    {
      id: 2,
      question: FAQS[1]?.question || "Digital data facilisis erat id solution business",
      answer: "Solution the connection, we create business marketing platforms business Solution",
      thumb: "/assets/img/faq/faq_meeting.png"
    },
    {
      id: 3,
      question: FAQS[2]?.question || "We adapt our delivery to the way your solution",
      answer: "Solution the connection, we create business marketing platforms business Solution",
      thumb: "/assets/img/faq/faq_vr.png"
    },
    ...(FAQS.length > 3 ? FAQS.slice(3).map((faq, idx) => ({
      id: idx + 4,
      question: faq.question,
      answer: faq.answer,
      thumb: "/assets/img/faq/faq_team.png"
    })) : [])
  ];

  const toggleFAQ = useCallback((index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  }, []);

  return (
    <section className="faq-section space fix" style={{
      backgroundColor: '#ffffff',
      padding: '90px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative top-left dots matching reference image */}
      <div style={{ position: 'absolute', top: '20px', left: '20px', display: 'flex', gap: '8px', zIndex: 1 }}>
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#0D4892', opacity: 0.8 }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#0D4892', opacity: 0.6 }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row gy-5" style={{ alignItems: 'stretch' }}>
          {/* Left Column: Title & Accordions */}
          <div className="col-lg-6 col-xl-6">
            <div className="faq-content-left" style={{ paddingRight: '15px' }}>
              {/* Subtitle */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ width: '20px', height: '2px', backgroundColor: '#0D4892', display: 'inline-block' }} />
                <span style={{
                  color: '#0D4892',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase'
                }}>
                  OUR FAQ US
                </span>
              </div>

              {/* Main Heading */}
              <h2 style={{
                color: '#0D0E10',
                fontSize: '2.4rem',
                fontWeight: '800',
                lineHeight: '1.25',
                marginBottom: '16px',
                letterSpacing: '-0.5px'
              }}>
                Can Faqs Help Improve For This Customer Satisfaction?
              </h2>

              {/* Description */}
              <p style={{
                color: '#6B7280',
                fontSize: '0.95rem',
                lineHeight: '1.6',
                marginBottom: '32px'
              }}>
                Business tailored design, management &amp; support services Business business agency elit, sed do eiusmod tempor majority have in some we form, by injected humour solution.
              </p>

              {/* Accordion List */}
              <div className="faq-accordion-list" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {faqList.map((faq, idx) => {
                  const isOpen = activeIndex === idx;
                  return (
                    <div key={faq.id} style={{ display: 'flex', alignItems: isOpen ? 'flex-start' : 'center' }}>
                      {/* Left vertical red accent bar */}
                      <span style={{
                        width: '4px',
                        height: isOpen ? '42px' : '22px',
                        backgroundColor: '#0D4892',
                        borderRadius: '4px',
                        marginRight: '12px',
                        marginTop: isOpen ? '10px' : '0',
                        transition: 'all 0.3s ease',
                        flexShrink: 0
                      }} />

                      {/* Card Content */}
                      <div style={{ flex: 1, transition: 'all 0.3s ease' }}>
                        {isOpen ? (
                          /* Expanded Accordion Card */
                          <div style={{
                            borderRadius: '20px',
                            border: '1px solid #E5E7EB',
                            overflow: 'hidden',
                            boxShadow: '0 8px 24px rgba(38, 91, 153, 0.08)',
                            transition: 'all 0.3s ease'
                          }}>
                            {/* Active Header */}
                            <button
                              type="button"
                              onClick={() => toggleFAQ(idx)}
                              style={{
                                width: '100%',
                                padding: '14px 20px',
                                backgroundColor: '#0D4892',
                                border: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '12px',
                                cursor: 'pointer',
                                textAlign: 'left'
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{
                                  width: '22px',
                                  height: '22px',
                                  borderRadius: '50%',
                                  backgroundColor: '#ffffff',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  color: '#0D4892',
                                  flexShrink: 0
                                }}>
                                  <Check size={14} strokeWidth={3} />
                                </div>
                                <span style={{ color: '#ffffff', fontWeight: '700', fontSize: '0.95rem' }}>
                                  {faq.question}
                                </span>
                              </div>
                              <ChevronUp size={20} style={{ color: '#ffffff', flexShrink: 0 }} />
                            </button>

                            {/* Active Body */}
                            <div style={{
                              backgroundColor: '#ffffff',
                              padding: '16px 20px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '16px'
                            }}>
                              {faq.thumb && (
                                <img
                                  src={faq.thumb}
                                  alt="FAQ illustration"
                                  style={{
                                    width: '75px',
                                    height: '55px',
                                    borderRadius: '10px',
                                    objectFit: 'cover',
                                    flexShrink: 0
                                  }}
                                />
                              )}
                              <p style={{
                                color: '#6B7280',
                                fontSize: '0.9rem',
                                lineHeight: '1.5',
                                margin: 0
                              }}>
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        ) : (
                          /* Collapsed Accordion Pill Card */
                          <button
                            type="button"
                            onClick={() => toggleFAQ(idx)}
                            style={{
                              width: '100%',
                              padding: '12px 20px',
                              backgroundColor: '#ffffff',
                              border: '1px solid #E5E7EB',
                              borderRadius: '50px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: '12px',
                              cursor: 'pointer',
                              textAlign: 'left',
                              transition: 'all 0.2s ease',
                              boxShadow: '0 2px 6px rgba(0,0,0,0.02)'
                            }}
                          >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                              <div style={{
                                width: '22px',
                                height: '22px',
                                borderRadius: '50%',
                                backgroundColor: '#0D4892',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#ffffff',
                                flexShrink: 0
                              }}>
                                <Check size={14} strokeWidth={3} />
                              </div>
                              <span style={{ color: '#1F2937', fontWeight: '600', fontSize: '0.95rem' }}>
                                {faq.question}
                              </span>
                            </div>
                            <ChevronDown size={20} style={{ color: '#374151', flexShrink: 0 }} />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: 3-Image Gallery Layout */}
          <div className="col-lg-6 col-xl-6" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '20px',
              flex: 1,
              minHeight: '440px',
              height: '100%'
            }}>
              {/* Stacked Images (Left Gallery Col) */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
                <div style={{ flex: 1, borderRadius: '28px', overflow: 'hidden', minHeight: 0, boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
                  <img
                    src="/assets/img/faq/faqnew.webp"
                    alt="Corporate meeting"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', border: '2px solid rgba(38, 91, 153, 0.2)' }}
                  />
                </div>
                <div style={{ flex: 1, borderRadius: '28px', overflow: 'hidden', minHeight: 0, boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
                  <img
                    src="/assets/img/faq/faq3.webp"
                    alt="Woman with VR headset"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', border: '2px solid rgba(38, 91, 153, 0.2)' }}
                  />
                </div>
              </div>

              {/* Tall Image (Right Gallery Col) */}
              <div style={{ borderRadius: '28px', overflow: 'hidden', height: '100%', minHeight: 0, boxShadow: '0 10px 30px rgba(0,0,0,0.06)' }}>
                <img
                  src="/assets/img/faq/faq4.webp"
                  alt="Team looking at laptop"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', border: '2px solid rgba(38, 91, 153, 0.2)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

