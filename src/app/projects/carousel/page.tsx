import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Project Carousel',
  description: 'Project gallery and carousel showcase.',
};

export default function ProjectCarouselPage() {
  const projectList = [
    { title: 'Smart Cloud Integration', category: 'Cloud Infrastructure', img: '/assets/img/project/projectThumb1_1.png' },
    { title: 'Enterprise SaaS Portal', category: 'Software Engineering', img: '/assets/img/project/projectThumb1_2.png' },
    { title: 'Mobile FinTech App', category: 'App Development', img: '/assets/img/project/projectThumb1_3.png' },
  ];

  return (
    <>
      <Breadcrumb title="Project Carousel" activeItem="Project Carousel" />

      <section className="project-section space fix">
        <div className="container">
          <div className="section-title text-center mxw-650 mb-5">
            <div className="subtitle">
              <img src="/assets/img/icon/arrowLeft.svg" alt="icon" />
              <span> Project Gallery </span>
              <img src="/assets/img/icon/arrowRight.svg" alt="icon" />
            </div>
            <h2 className="title">Discover Our Featured Projects</h2>
          </div>

          <div className="row g-4">
            {projectList.map((project, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="project-card border rounded-4 overflow-hidden bg-white shadow-sm h-100">
                  <div className="overflow-hidden">
                    <img src={project.img} alt={project.title} className="w-100 img-fluid" />
                  </div>
                  <div className="p-4">
                    <span className="text-primary small fw-bold text-uppercase">{project.category}</span>
                    <h4 className="mt-2 mb-3">
                      <Link href="/projects/details" className="text-dark">{project.title}</Link>
                    </h4>
                    <Link href="/projects/details" className="link-btn style1 text-primary">
                      View Case Study <i className="fa-regular fa-chevrons-right"></i>
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
