'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PROJECT_CATEGORIES } from '@/constants';

export default function Projects() {
  const [projectTab, setProjectTab] = useState<number>(2);

  return (
    <section className="project-section space fix">
      <div className="project-container-wrapper style1">
        <div className="container">
          <div className="section-title title-area mx-auto mb-10">
            <div className="subtitle d-flex justify-content-center">
              <img src="/assets/img/icon/arrowLeft.svg" alt="icon" />
              <span>Examples of our work</span>
              <img src="/assets/img/icon/arrowRight.svg" alt="icon" />
            </div>
            <h2 className="title text-center">Check Our Latest Portfolios</h2>
          </div>
          
          <div className="project-item-wrapper style1">
            {PROJECT_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className={`project-item-card style1 ${projectTab === idx ? 'active' : ''}`}
                onClick={() => setProjectTab(idx)}
                style={{ cursor: 'pointer' }}
              >
                <div className="project-icon">
                  <img src={cat.icon} alt="icon" />
                </div>
                <h5>{cat.title}</h5>
              </div>
            ))}
          </div>

          <div className="project-wrapper style1 mt-4">
            <div className="row gy-5 gx-60">
              <div className="col-xl-5">
                <div className="project-thumb img-custom-anim-left">
                  <img src="/assets/img/project/projectThumb1_1.png" alt="thumb" />
                </div>
              </div>
              <div className="col-xl-7">
                <div className="project-content-wrapper style1">
                  <div className="project-content style1">
                    <div className="row">
                      <div className="col-xl-9">
                        <div className="project-content-left">
                          <h3>Detailing of our Project</h3>
                          <p className="text">
                            There are many variations passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour,
                          </p>
                          <div className="fancy-box-wrapper style3">
                            <div className="fancy-box style3">
                              <div className="item">
                                <div className="icon">
                                  <img src="/assets/img/icon/projectIcon1_1.svg" alt="icon" />
                                </div>
                              </div>
                              <div className="item">
                                <h6>Responsive website</h6>
                              </div>
                            </div>
                            <div className="fancy-box style3">
                              <div className="item">
                                <div className="icon">
                                  <img src="/assets/img/icon/projectIcon1_2.svg" alt="icon" />
                                </div>
                              </div>
                              <div className="item">
                                <h6>100% Customers Satisfaction</h6>
                              </div>
                            </div>
                          </div>

                          <div className="fancy-box style3">
                            <div className="item">
                              <div className="icon">
                                <img src="/assets/img/icon/projectIcon1_3.svg" alt="icon" />
                              </div>
                            </div>
                            <div className="item">
                              <h6>Big Data &amp; Analytics</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-3">
                        <div className="project-content-right">
                          <img className="img-custom-anim-right" src="/assets/img/project/projectThumb1_2.png" alt="thumb" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="shape">
                    <Link href="/projects/details">
                      <img className="rotate360" src="/assets/img/shape/projectShape1_1.png" alt="shape" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
