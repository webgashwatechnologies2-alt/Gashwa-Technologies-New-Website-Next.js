import ServiceTemplate from '@/components/sections/ServiceTemplate';
import { servicesData } from '@/data/services';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: servicesData['ui-ux'].seo.title,
  description: servicesData['ui-ux'].seo.description,
  openGraph: {
    title: servicesData['ui-ux'].seo.title,
    description: servicesData['ui-ux'].seo.description,
    type: 'website',
  },
};

export default function UiUxServicePage() {
  const data = servicesData['ui-ux'];
  return <ServiceTemplate data={data} />;
}
