import type { Metadata } from 'next';
import WebDesigningTrainingPage from '@/components/training/WebDesigningTrainingPage';

export const metadata: Metadata = {
  title: 'Web Designing Training in Himachal Pradesh | 100% Job Assurance | Gashwa Institute',
  description:
    'Premier Web Designing Training in Himachal Pradesh by Gashwa Institute of Technical Education. 100% job assurance with 5 guaranteed IT interviews, live projects, up to 18 LPA salary. 2 Days Free Demo Class.',
  keywords: [
    'Web Designing Training in Himachal Pradesh',
    'Web Designing course Himachal',
    'Web Designing training in Shimla',
    'Gashwa Institute of Technical Education',
    'IT training in Himachal',
    '100% Job Assurance Web Design Course',
    'Web designing training in Mandi',
    'Web design training in Solan',
    'Web design training in Kangra',
    'Industrial training in Himachal Pradesh',
    'Front end developer training Shimla',
  ],
  alternates: {
    canonical: 'https://gashwatechnologies.in/web-designing-training-in-himachal-pradesh/',
  },
  openGraph: {
    title: 'Web Designing Training in Himachal Pradesh | Gashwa Institute',
    description:
      'Learn Web Designing from seasoned trainers with 14+ years experience. 100% practical training on live client projects, 5 guaranteed interviews, upto 18 LPA salary.',
    url: 'https://gashwatechnologies.in/web-designing-training-in-himachal-pradesh/',
    siteName: 'Gashwa Institute of Technical Education',
    images: [
      {
        url: '/assets/img/choose/trainingimage.webp',
        width: 1200,
        height: 630,
        alt: 'Web Designing Training in Himachal Pradesh',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Designing Training in Himachal Pradesh | 100% Job Assurance',
    description:
      'Learn HTML5, CSS3, JavaScript, UI/UX with 100% placement assurance and live projects at Gashwa Institute.',
    images: ['/assets/img/choose/trainingimage.webp'],
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Web Designing Training in Himachal Pradesh',
    description:
      'Comprehensive Web Designing Training covering HTML5, CSS3, Bootstrap, Tailwind, JavaScript, UI/UX wireframing, and responsive design with 100% job assurance.',
    provider: {
      '@type': 'EducationalOrganization',
      name: 'Gashwa Institute of Technical Education',
      sameAs: 'https://gashwatechnologies.in/',
      telephone: '+919805034219',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Shimla',
        addressRegion: 'Himachal Pradesh',
        addressCountry: 'IN',
      },
    },
    educationalCredentialAwarded: 'ISO Certified Diploma in Web Designing',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '336',
    },
    offers: {
      '@type': 'Offer',
      category: 'Paid',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WebDesigningTrainingPage />
    </>
  );
}
