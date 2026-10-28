import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import ScrollToTop from '@/components/ScrollToTop';
import { Plus_Jakarta_Sans } from 'next/font/google';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'IT Company In Shimla Himachal | Gashwa Technologies Pvt. Ltd.',
    template: '%s | Gashwa Technologies',
  },
  description:
    'Gashwa Technologies Pvt. Ltd. is your trusted IT company in Shimla, Himachal. We offer cutting-edge IT solutions and services to help your business thrive.',
  keywords: [
    'IT Companies In Shimla',
    'Online Marketing Company in Shimla',
    'Digital Marketing Services',
    'Digital Marketing Company in Shimla',
    'Digital Marketing & Web Development Company',
    'Website Design and Development Company Himachal',
    'E-Commerce Development Company Shimla',
    'SEO Services in Himachal Pradesh',
    'web designer in Shimla',
    'Web Development Company in Shimla',
    'Gashwa Technologies',
  ],
  authors: [
    {
      name: 'Gashwa Technologies',
      url: 'https://gashwatechnologies.com',
    },
  ],
  creator: 'Gashwa Technologies',
  publisher: 'Gashwa Technologies',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      {
        url: '/assets/img/gashwatechnologie-logonew.png',
        type: 'image/png',
      },
    ],
    shortcut: '/favicon.png',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'IT Company In Shimla Himachal | Gashwa Technologies Pvt. Ltd.',
    description:
      'Gashwa Technologies Pvt. Ltd. is your trusted IT company in Shimla, Himachal. We offer cutting-edge IT solutions and services to help your business thrive.',
    url: 'https://gashwatechnologies.com',
    siteName: 'Gashwa Technologies Pvt. Ltd.',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://gashwatechnologies.com/images/gashwatechnologie-logo.png',
        width: 200,
        height: 200,
        alt: 'Gashwa Technologies Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Company In Shimla Himachal | Gashwa Technologies Pvt. Ltd.',
    description:
      'Gashwa Technologies Pvt. Ltd. is your trusted IT company in Shimla, Himachal. We offer cutting-edge IT solutions and services to help your business thrive.',
    images: [
      'https://gashwatechnologies.com/images/gashwatechnologie-logo.png',
    ],
    creator: '@gashwatech',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#295D9A',
  colorScheme: 'light',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={plusJakartaSans.className}>
        <Preloader />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}