import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';
import CareerSection from '@/components/sections/CareerSection';

export const metadata: Metadata = {
  title: 'Career With Us - Gashwa Technologies',
  description:
    'Explore career opportunities at Gashwa Technologies and join our team of passionate web and digital professionals.',
  keywords:
    'career, jobs, web designer jobs, frontend developer jobs, Gashwa Technologies careers',
};

export default function CareerPage() {
  return (
    <>
      <Breadcrumb title="Career With Us" activeItem="Career With Us" />
      <CareerSection />
    </>
  );
}