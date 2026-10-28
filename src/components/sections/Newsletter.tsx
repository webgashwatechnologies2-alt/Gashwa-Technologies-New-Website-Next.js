import Link from 'next/link';
import Image from 'next/image';
import './Newsletter.css';

import ctaShape1 from '../../../public/assets/img/shape/ctaShape2_1.png';
import ctaShape2 from '../../../public/assets/img/shape/ctaShape2_2.png';
import ctaShape3 from '../../../public/assets/img/shape/ctaShape2_3.png';
import ctaShape4 from '../../../public/assets/img/shape/ctaShape2_4.png';
import cta2Img from '../../../public/assets/img/cta/cta2.jpg';

export default function Newsletter() {
  return (
    <section className="cta-section space pb-0 mt-n150 mb-n116 z-5">
      <div className="container">
        <div className="cta-wrap style2">
          <div className="shape1_1 rotate360 d-none d-xl-block">
            <Image src={ctaShape1} alt="shape" />
          </div>
          <div className="shape1_2 d-none d-xl-block">
            <Image src={ctaShape2} alt="shape" />
          </div>
          <div className="shape1_3 d-none d-xl-block">
            <Image src={ctaShape3} alt="shape" />
          </div>
          <div className="shape1_4 d-none d-xl-block">
            <Image src={ctaShape4} alt="shape" />
          </div>
          <div className="cta-thumb d-none d-xl-block">
            <Image 
              src={cta2Img} 
              alt="thumb" 
              className="cta-thumb-image"
            />
          </div>
          <h3 className="cta-title text-white">Stay Connected With Cutting Edge IT</h3>
          <div className="btn-wrapper">
            <Link className="gt-btn style5" href="/contact">
              Talk to a Specialist <i className="fa-sharp fa-regular fa-arrow-right-long"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

