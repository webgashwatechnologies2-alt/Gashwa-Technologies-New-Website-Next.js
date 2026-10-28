import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="error-section space fix text-center py-5">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h1 className="display-1 text-primary fw-bold">404</h1>
            <h2 className="mb-3">Page Not Found</h2>
            <p className="text-muted mb-4">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <Link href="/" className="theme-btn">
              <span>Back To Home <i className="fa-solid fa-arrow-right-long"></i></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
