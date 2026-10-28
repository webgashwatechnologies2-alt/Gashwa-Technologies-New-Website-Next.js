import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Blog Standard',
  description: 'Blog listing standard layout.',
};

export default function NewsStandardPage() {
  const posts = [
    { title: 'Top 5 Most Famous Technology Trends in 2026', date: '15th April, 2026', img: '/assets/img/news/post1.jpg', category: 'Technology' },
    { title: 'Why Next.js App Router Is Ideal For Enterprise Websites', date: '20th May, 2026', img: '/assets/img/news/post2.jpg', category: 'Development' },
    { title: 'Building Resilient Microservices With Kubernetes', date: '10th June, 2026', img: '/assets/img/news/post3.jpg', category: 'Cloud' },
  ];

  return (
    <>
      <Breadcrumb title="Blog Standard" activeItem="Blog Standard" />

      <section className="news-section space fix">
        <div className="container">
          <div className="section-title text-center mxw-650 mb-5">
            <div className="subtitle">
              <img src="/assets/img/icon/arrowLeft.svg" alt="icon" />
              <span> Articles &amp; Insights </span>
              <img src="/assets/img/icon/arrowRight.svg" alt="icon" />
            </div>
            <h2 className="title">Read Our Standard Tech Articles</h2>
          </div>

          <div className="row g-4">
            {posts.map((post, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="news-card border rounded-4 overflow-hidden bg-white shadow-sm h-100">
                  <div className="news-thumb overflow-hidden">
                    <img src={post.img} alt={post.title} className="w-100 img-fluid" style={{ minHeight: '220px', objectFit: 'cover' }} />
                  </div>
                  <div className="p-4">
                    <span className="badge bg-primary px-3 py-2 mb-2">{post.category}</span>
                    <p className="text-muted small mb-2"><i className="fa-solid fa-calendar me-2"></i>{post.date}</p>
                    <h4 className="mb-3">
                      <Link href="/news/details" className="text-dark">{post.title}</Link>
                    </h4>
                    <Link href="/news/details" className="link-btn style1">
                      Read Full Article <i className="fa-regular fa-chevrons-right"></i>
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
