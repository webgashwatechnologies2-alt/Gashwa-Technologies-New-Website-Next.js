import Link from 'next/link';

export default function CTA() {
  return (
    <section style={{ paddingTop: '0px', }} className="cta-section space pb-0">
      <div className="container">
        <div className="cta-wrap style1 fix">
          <div className="shape"><img src="/assets/img/shape/ctaShape1_1.png" alt="shape" /></div>
          <div className="row gy-5">
            <div className="col-xl-3">
              <div className="cta-thumb img-custom-anim-left">
                <img style={{ borderRadius : '20px' }} src="/assets/img/cta/ctimage.jpg" alt="thumb" />
              </div>
            </div>
            <div className="col-xl-6 d-flex align-items-center">
              <div className="section-title">
                <div className="subtitle">
                  <img src="/assets/img/icon/arrowLeftWhite.svg" alt="icon" />
                  <span className="text-white"> Contact Us </span>
                  <img src="/assets/img/icon/arrowRightWhite.svg" alt="icon" />
                </div>
                <h2 className="title text-white">Why We&apos;re Your Best Online Success Partner</h2>
                <p className="text-white" style={{ opacity: 0.85, marginTop: '10px' }}>
                  Gashwa Technologies believes in ethical business practices, teamwork, deep research, smart work and keeping ourselves updated.
                </p>
              </div>
            </div>
            <div className="col-xl-3 d-flex align-items-center">
              <div className="btn-wrapper">
                <Link className="gt-btn style5" href="/contact">
                  Talk to a Specialist <i className="fa-sharp fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
