import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Team Carousel',
  description: 'Team members carousel gallery.',
};

export default function TeamCarouselPage() {
  const teamMembers = [
    { name: 'Marvin McKinney', role: 'Software Engineer', img: '/assets/img/team/teamThumb1_1.png' },
    { name: 'Wade Warren', role: 'Solutions Architect', img: '/assets/img/team/teamThumb1_2.png' },
    { name: 'Kristin Watson', role: 'UI/UX Design Lead', img: '/assets/img/team/teamThumb1_3.png' },
    { name: 'Jacob Jones', role: 'DevOps & Cloud Lead', img: '/assets/img/team/teamThumb1_4.png' },
  ];

  return (
    <>
      <Breadcrumb title="Team Carousel" activeItem="Team Carousel" />

      <section className="team-section space fix">
        <div className="container">
          <div className="section-title text-center mxw-650 mb-5">
            <div className="subtitle">
              <img src="/assets/img/icon/arrowLeft.svg" alt="icon" />
              <span> Leadership &amp; Experts </span>
              <img src="/assets/img/icon/arrowRight.svg" alt="icon" />
            </div>
            <h2 className="title">Meet Our Experienced Engineering Team</h2>
          </div>

          <div className="row g-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-xl-3 col-md-6">
                <div className="team-card border rounded-4 overflow-hidden bg-white shadow-sm h-100 text-center p-4">
                  <div className="team-thumb mb-3 position-relative">
                    <img src={member.img} alt={member.name} className="img-fluid rounded-circle border p-2" style={{ width: '150px', height: '150px', objectFit: 'cover' }} />
                  </div>
                  <h3><Link href="/team/details" className="text-dark">{member.name}</Link></h3>
                  <p className="text-primary fw-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
