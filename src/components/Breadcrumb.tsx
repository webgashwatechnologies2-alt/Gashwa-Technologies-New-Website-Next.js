import Link from 'next/link';
import './Breadcrumb.css';

interface BreadcrumbProps {
  title: string;
  activeItem: string;
}

export default function Breadcrumb({ title, activeItem }: BreadcrumbProps) {
  return (
    <div className="breadcrumb-wrapper bg-cover">
      {/* <div className="border-shape">
        <img src="/assets/img/element.png" alt="shape-img" />
      </div> */}
      <div className="line-shape">
        <img src="/assets/img/line-element.png" alt="shape-img" />
      </div>
      <div className="container">
        <div className="page-heading">
          <h1 className="wow fadeInUp" data-wow-delay=".3s">{title}</h1>
          <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <i className="fas fa-chevron-right"></i>
            </li>
            <li>{activeItem}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
