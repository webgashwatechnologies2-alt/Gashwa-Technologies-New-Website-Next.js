import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Service Carousel',
  description: 'Interactive showcase of Gashwa Technologies IT services.',
};

export default function ServiceCarouselPage() {
  const servicesList = [
    {
      icon: '/assets/img/icon/serviceIcon1_1.svg',
      title: 'Data Guard Sentinel',
      desc: 'Formulate principle capital. Progressively evolve user revolutionary hosting & enterprise cybersecurity systems.',
      link: '/services/details',
    },
    {
      icon: '/assets/img/icon/serviceIcon1_2.svg',
      title: 'WooCommerce & E-Commerce',
      desc: 'Scalable e-commerce store architecture, high converting checkout experiences, and payment integrations.',
      link: '/services/details',
    },
    {
      icon: '/assets/img/icon/serviceIcon1_3.svg',
      title: 'CRM & ERP Solutions',
      desc: 'Seamless automated workflows, customer relationship tracking, and enterprise software engineering.',
      link: '/services/details',
    },
    {
      icon: '/assets/img/icon/serviceIcon1_4.svg',
      title: 'Custom Web Design',
      desc: 'Modern, responsive, mobile-first design systems crafted with high design standards and accessibility.',
      link: '/services/details',
    },
  ];

  return (
    <>
      <Breadcrumb title="Service Carousel" activeItem="Service Carousel" />

      <section className="service-section space fix">
        <div className="container">
          <div className="section-title text-center mxw-650 mb-5">
            <div className="subtitle">
              <img src="/assets/img/icon/arrowLeft.svg" alt="icon" />
              <span> Our Carousel Services </span>
              <img src="/assets/img/icon/arrowRight.svg" alt="icon" />
            </div>
            <h2 className="title">Elevating Businesses With Specialized IT Services</h2>
          </div>

          <div className="row g-4">
            {servicesList.map((service, index) => (
              <div key={index} className="col-xl-3 col-md-6">
                <div className="service-card style1 h-100 p-4 border rounded-4 bg-white shadow-sm">
                  <div className="icon mb-3">
                    <img src={service.icon} alt="icon" />
                  </div>
                  <div className="body">
                    <h3><Link href={service.link}>{service.title}</Link></h3>
                    <p>{service.desc}</p>
                    <Link href={service.link} className="link-btn style1">
                      Read more <i className="fa-regular fa-chevrons-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
