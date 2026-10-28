import Link from 'next/link';
import { BLOG_POSTS } from '@/constants';

export default function Blog() {
  return (
    <section className="blog-section space fix">
      <div className="blog-wrapper style1 space pt-0">
        <div className="container">
          <div className="title-wrap mb-45">
            <div className="section-title">
              <div className="subtitle">
                <img src="/assets/img/icon/arrowLeft.svg" alt="icon" />
                <span> Blog &amp; News </span>
                <img src="/assets/img/icon/arrowRight.svg" alt="icon" />
              </div>
              <h2 className="title">Featured News And Insights</h2>
            </div>
          </div>
          
          <div className="row g-4">
            {BLOG_POSTS.map((post, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="blog-card style1">
                  <div className="blog-card-thumb">
                    <img src={post.image} alt="thumb" />
                  </div>
                  <div className="blog-card-body">
                    <div className="blog-meta">
                      <div className="tag">{post.tag}</div>
                      <div className="date">{post.date}</div>
                    </div>
                    <h3><Link href="/news/details">{post.title}</Link></h3>
                    <div className="author-meta">
                      <div className="fancy-box style1">
                        <div className="item"><img src={post.profileImage} alt="thumb" /></div>
                        <div className="item">
                          <h6>{post.author}</h6>
                          <p>{post.role}</p>
                        </div>
                      </div>
                      <Link className="link-btn style1" href="/news/details">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
