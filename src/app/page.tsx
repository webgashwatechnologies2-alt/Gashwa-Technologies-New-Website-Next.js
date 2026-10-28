import {
  Hero,
  ServiceMarquee,
  Services,
  About,
  WorkProcess,
  Marqueesection,
  PPCAdsSection,
  BusinessSolution,
  InternshipTraining,
  IndustriesWeServe,
  FAQ,
  Testimonials,
  Newsletter,
  WorkProcessProfessional,
  CallBannerSection,
} from '@/components/sections';
import Aboutneeewsection from '@/components/sections/Aboutneeewsection';
import StatsSection from '@/components/sections/StatsSection';
import WorkingProcess from '@/components/sections/WorkingProcess';

export const metadata = {
  title: 'Gashwa Technologies Pvt. Ltd. | IT Company in Shimla Himachal',
  description: 'Gashwa Technologies Pvt. Ltd. is your trusted IT company in Shimla, Himachal. We offer cutting-edge IT solutions and services to help your business thrive.',
  keywords: 'IT Companies In Shimla, Online Marketing Company in Shimla, Digital Marketing Services, Digital Marketing Company in Shimla, Website Design and Development Company Himachal',
  openGraph: {
    title: 'IT Company In Shimla Himachal | Gashwa Technologies Pvt. Ltd.',
    description: 'Gashwa Technologies Pvt. Ltd. is your trusted IT company in Shimla, Himachal. We offer cutting-edge IT solutions and services to help your business thrive.',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <ServiceMarquee /> */}
      <Aboutneeewsection />
      <Services />
      <About />
      <WorkProcess />
      <Marqueesection />
      {/* <WorkProcessProfessional/> */}
      <PPCAdsSection />
      <InternshipTraining />
      {/* <WorkingProcess /> */}
      <BusinessSolution />
      <StatsSection />
      <FAQ />
      <Testimonials />
      <CallBannerSection />
      {/* <Newsletter /> */}
    </>
  );
}