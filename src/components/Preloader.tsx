'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div id="preloader" className="preloader">
      {/* <div className="animation-preloader">
        <div className="spinner-wrapper">
          <div className="spinner"></div>
          <img
            src="/assets/img/gashwatechnologie-logonew.png"
            alt="Horizon Bound Travels"
            className="spinner-logo"
          />        </div>
        <div className="txt-loading">
          <span data-text-preloader="G" className="letters-loading">G</span>
          <span data-text-preloader="A" className="letters-loading">A</span>
          <span data-text-preloader="S" className="letters-loading">S</span>
          <span data-text-preloader="H" className="letters-loading">H</span>
          <span data-text-preloader="W" className="letters-loading">W</span>
          <span data-text-preloader="A" className="letters-loading">A</span>
        </div>
        <p className="text-center">Loading</p>
      </div>
      <div className="loader">
        <div className="row">
          <div className="col-3 loader-section section-left">
            <div className="bg"></div>
          </div>
          <div className="col-3 loader-section section-left">
            <div className="bg"></div>
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg"></div>
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg"></div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
