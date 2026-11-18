import ServiceTemplate from '@/components/sections/ServiceTemplate';
import { servicesData } from '@/data/services';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: servicesData['security'].seo.title,
  description: servicesData['security'].seo.description,
  openGraph: {
    title: servicesData['security'].seo.title,
    description: servicesData['security'].seo.description,
    type: 'website',
  },
};

export default function SecurityServicePage() {
  const data = servicesData['security'];
  return <ServiceTemplate data={data} />;
}
