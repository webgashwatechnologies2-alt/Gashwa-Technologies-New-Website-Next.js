import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import PortfolioPageContent from '@/components/sections/PortfolioPageContent';

export const metadata: Metadata = {
  title: 'Portfolio - Gashwa Technologies',
  description:
    'Explore our portfolio of successful projects and see how we deliver innovative IT solutions.',
  keywords:
    'portfolio, projects, case studies, IT company, technology track record',
  openGraph: {
    title: 'Portfolio - Gashwa Technologies',
    description:
      'Explore our portfolio of successful projects and see how we deliver innovative IT solutions.',
    type: 'website',
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Breadcrumb title="Portfolio" activeItem="Portfolio" />
      <PortfolioPageContent />
    </>
  );
}