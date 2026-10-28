import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import AboutPageContent from '@/components/sections/AboutPageContent';

// Enhanced Metadata for SEO
export const metadata: Metadata = {
  title: 'About Us - Gashwa Technologies',
  description: 'Learn about Gashwa Technologies, our mission, vision, expert engineering team, and technology track record. We deliver innovative IT solutions.',
  keywords: 'about us, company profile, IT company, mission, vision, team',
  openGraph: {
    title: 'About Us - Gashwa Technologies',
    description: 'Learn about Gashwa Technologies, our mission, vision, expert engineering team, and technology track record.',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumb title="About Us" activeItem="About Us" />
      <AboutPageContent />

    </>
  );
}
