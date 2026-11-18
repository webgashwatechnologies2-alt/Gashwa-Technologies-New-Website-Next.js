import AutoScrollMarquee from "@/components/sections/AutoScrollMarquee";
import Link from "next/link";
import BusinessWebsiteEnquiry from "@/components/sections/BusinessWebsiteEnquiry";
import ServiceCards from "@/components/sections/ServiceCards";
import OurVision from "@/components/sections/OurVision";
import AboutContent from "@/components/sections/AboutContent";
import FaqSection from "@/components/sections/FaqSection";
import type { DesignPageData } from "@/data/designPages";
import "./DesignServicePage.css";

type DesignServicePageProps = {
  data: DesignPageData;
};

export default function DesignServicePage({ data }: DesignServicePageProps) {
  return (
    <div className="sw-root">
      <div className="sw-ambient" aria-hidden="true">
        <div className="sw-ambient__blob sw-ambient__blob--1" />
        <div className="sw-ambient__blob sw-ambient__blob--2" />
        <div className="sw-ambient__blob sw-ambient__blob--3" />
        <div className="sw-ambient__grid" />
      </div>
      <section className="services-hero">
        <div
          className="services-hero__bg"
          style={{ backgroundImage: `url('${data.hero.backgroundImage}')` }}
        >
          <div className="services-hero__grid" />
          <div className="services-hero__glow services-hero__glow--purple" />
          <div className="services-hero__glow services-hero__glow--red" />
          <div className="services-hero__container">
            <div className="services-hero__content">
              <div className="services-hero__breadcrumb">
                <Link href="/">Home</Link>
                <span>›</span>
                <Link href="/services">Services</Link>
                <span>›</span>
                <span className="active">{data.hero.title}</span>
              </div>
              <div className="services-hero__eyebrow">
                <span>✦</span>
                IT WEB FUTURE / SERVICES
              </div>
              <h1 className="services-hero__title">{data.hero.title}</h1>
              <p className="services-hero__description">
                Professional {data.hero.title.toLowerCase()} services designed to
                present your business clearly, build trust and turn visitors into
                enquiries.
              </p>
            </div>
            <div className="services-hero__visual">
              <div className="services-hero__visual-ring ring-one" />
              <div className="services-hero__visual-ring ring-two" />
              <div className="services-hero__icon">
                <i className="fa-solid fa-chart-line" />
              </div>
              <div className="services-hero__dot dot-one" />
              <div className="services-hero__dot dot-two" />
              <div className="services-hero__dot dot-three" />
            </div>
          </div>
        </div>
      </section>
      <AutoScrollMarquee items={data.marquee} />
      <BusinessWebsiteEnquiry {...data.businessEnquiry} />
      <ServiceCards headline={data.serviceCards.headline} items={data.serviceCards.items} />
      <OurVision data={data.vision} />
      <AboutContent data={data.about} />
      {data.faq && (
        <FaqSection
          eyebrow={data.faq.eyebrow}
          title={data.faq.title}
          titleHighlight={data.faq.titleHighlight}
          subtitle={data.faq.subtitle}
          items={data.faq.items}
          ctaLabel={data.faq.ctaLabel}
          ctaHref={data.faq.ctaHref}
        />
      )}
    </div>
  );
}
