import ServiceTemplate from '@/components/sections/ServiceTemplate';
import { servicesData } from '@/data/services';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: servicesData['cloud-services'].seo.title,
  description: servicesData['cloud-services'].seo.description,
  openGraph: {
    title: servicesData['cloud-services'].seo.title,
    description: servicesData['cloud-services'].seo.description,
    type: 'website',
  },
};

export default function CloudServicesPage() {
  const data = servicesData['cloud-services'];
  return <ServiceTemplate data={data} />;
}
