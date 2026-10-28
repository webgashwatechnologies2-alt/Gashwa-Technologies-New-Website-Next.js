import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

// Types
interface TeamMember {
  name: string;
  role: string;
  img: string;
}

// Enhanced Metadata for SEO
export const metadata: Metadata = {
  title: 'Our Team - Gashwa Technologies',
  description: 'Meet the executive leadership and senior software engineers at Gashwa Technologies.',
  keywords: 'team, leadership, engineers, developers, staff',
  openGraph: {
    title: 'Our Team - Gashwa Technologies',
    description: 'Meet the executive leadership and senior software engineers at Gashwa Technologies.',
    type: 'website',
  },
};

export default function TeamPage() {
  const teamMembers: TeamMember[] = [
    { name: 'Marvin McKinney', role: 'Software Engineer', img: '/assets/img/team/user1.png' },
    { name: 'Wade Warren', role: 'Solutions Architect', img: '/assets/img/team/teamThumb1_2.png' },
    { name: 'Kristin Watson', role: 'UI/UX Design Lead', img: '/assets/img/team/teamThumb1_3.png' },
    { name: 'Jacob Jones', role: 'DevOps & Cloud Lead', img: '/assets/img/team/teamThumb1_4.png' },
    { name: 'Cody Fisher', role: 'Cyber Security Consultant', img: '/assets/img/team/teamThumb1_5.png' },
    { name: 'Dianne Russell', role: 'Product Manager', img: '/assets/img/team/teamThumb1_6.png' },
  ];

  return (
    <>
      <Breadcrumb title="Our Team" activeItem="Team" />

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
              <div key={index} className="col-xl-4 col-md-6">
                <div className="team-card border rounded-4 overflow-hidden bg-white shadow-sm h-100 text-center p-4">
                  <div className="team-thumb mb-3 position-relative">
                    <img src={member.img} alt={member.name} className="img-fluid rounded-circle border p-2" style={{ width: '180px', height: '180px', objectFit: 'cover' }} />
                  </div>
                  <h3><Link href="/team/details" className="text-dark">{member.name}</Link></h3>
                  <p className="text-primary fw-medium">{member.role}</p>
                  <div className="social-links d-flex justify-content-center gap-3 mt-3 fs-5 text-muted">
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
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
