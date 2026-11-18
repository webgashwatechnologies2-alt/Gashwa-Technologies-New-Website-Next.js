import ServiceTemplate from '@/components/sections/ServiceTemplate';
import { servicesData } from '@/data/services';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: servicesData['web-development'].seo.title,
  description: servicesData['web-development'].seo.description,
  openGraph: {
    title: servicesData['web-development'].seo.title,
    description: servicesData['web-development'].seo.description,
    type: 'website',
  },
};

export default function WebDevelopmentServicePage() {
  const data = servicesData['web-development'];
  return <ServiceTemplate data={data} />;
}
