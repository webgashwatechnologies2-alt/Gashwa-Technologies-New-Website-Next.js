import { notFound } from 'next/navigation';
import ServiceTemplate from '@/components/sections/ServiceTemplate';
import { servicesData } from '@/data/services';
import { Metadata } from 'next';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = servicesData[slug];

  if (!data) {
    return {
      title: 'Service Not Found | Gashwa Technologies',
    };
  }

  return {
    title: data.seo.title,
    description: data.seo.description,
    openGraph: {
      title: data.seo.title,
      description: data.seo.description,
      type: 'website',
    },
  };
}

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const data = servicesData[slug];

  if (!data) {
    notFound();
  }

  return <ServiceTemplate data={data} />;
}