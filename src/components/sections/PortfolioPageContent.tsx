"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  Palette,
  Search,
  Smartphone,
  Target,
} from "lucide-react";
import "./PortfolioPageContent.css";

type PortfolioItem = {
  title: string;
  image: string;
  logo: string;
  technologies: string[];
  category: string;
};

const categories = ["ALL", "WEBSITE", "DESIGN", "DEVELOPMENT"];

const portfolioItems: PortfolioItem[] = [
  {
    title: "Lexor Miami",
    image: "/assets/img/portfolio/portflio_trtrt.webp",
    logo: "https://gashwatechnologies.com/images/anathresort.png",
    technologies: ["Design", "HTML5/CSS3", "JavaScript", "jQuery"],
    category: "WEBSITE",
  },
  {
    title: "Aanantham Resort",
    image: "/assets/img/portfolio/anathresort.webp",
    logo: "https://gashwatechnologies.com/images/leadcometlogo.png",
    technologies: ["Design", "HTML5/CSS3", "JavaScript", "jQuery"],
    category: "WEBSITE",
  },
  {
    title: "Leadcomet Digital",
    image: "/assets/img/portfolio/leadcometlogo.webp",
    logo: "https://gashwatechnologies.com/images/kmclogo.png",
    technologies: ["Design", "HTML5/CSS3", "JavaScript", "jQuery"],
    category: "DEVELOPMENT",
  },
  {
    title: "Meditationin New York",
    image: "/assets/img/portfolio/kmclogo.webp",
    logo: "https://gashwatechnologies.com/images/swimining_logo.png",
    technologies: ["Design", "HTML5/CSS3", "JavaScript", "jQuery"],
    category: "DESIGN",
  },
  {
    title: "Leni Swims",
    image: "/assets/img/portfolio/swimining_logo.webp",
    logo: "https://gashwatechnologies.com/images/pastalignlogo.png",
    technologies: ["Design", "HTML5/CSS3", "JavaScript", "jQuery"],
    category: "WEBSITE",
  },
  {
    title: "Pastorsline",
    image: "/assets/img/portfolio/pastalignlogo.webp",
    logo: "https://gashwatechnologies.com/images/ONE-SIDESTT.png",
    technologies: ["Design", "HTML5/CSS3", "JavaScript", "jQuery"],
    category: "DEVELOPMENT",
  },
  {
    title: "On One Studios",
    image: "/assets/img/portfolio/ONE-SIDESTT.webp",
    logo: "https://gashwatechnologies.com/images/NEWAREA_LOGO.png",
    technologies: ["Design", "HTML5/CSS3", "JavaScript", "jQuery"],
    category: "DESIGN",
  },
  {
    title: "New Era Tour",
    image: "/assets/img/portfolio/NEWAREA_LOGO.webp",
    logo: "https://gashwatechnologies.com/images/kool_door_logoqq.png",
    technologies: ["Design", "HTML5/CSS3", "JavaScript", "jQuery"],
    category: "WEBSITE",
  },
  {
    title: "Kool Door",
    image: "/assets/img/portfolio/kool_door_logoqq.webp",
    logo: "https://gashwatechnologies.com/images/HIMALYAN_TRAVELS.png",
    technologies: ["Design", "HTML5/CSS3", "JavaScript", "jQuery"],
    category: "DEVELOPMENT",
  },
  {
    title: "Himalaya Travel World",
    image: "/assets/img/portfolio/HIMALYAN_TRAVELS.webp",
    logo: "https://gashwatechnologies.com/images/HARMONY-LOGO.png",
    technologies: ["Design", "HTML5/CSS3", "JavaScript", "jQuery"],
    category: "WEBSITE",
  },
  {
    title: "Harmony Hotel Manali",
    image: "/assets/img/portfolio/HARMONY-LOGO.webp",
    logo: "https://gashwatechnologies.com/images/HARMONY-LOGO.png",
    technologies: ["Design", "HTML5/CSS3", "JavaScript", "jQuery"],
    category: "WEBSITE",
  },
];

const capabilities = [
  {
    number: "01",
    icon: <Palette size={22} />,
    title: "Web Design",
    text: "Modern, responsive and conversion-focused website experiences designed around your brand.",
  },
  {
    number: "02",
    icon: <Code2 size={22} />,
    title: "Web Development",
    text: "Fast and scalable websites built with clean code, reliable architecture and modern technologies.",
  },
  {
    number: "03",
    icon: <Smartphone size={22} />,
    title: "Responsive Experience",
    text: "Digital experiences that provide a consistent and seamless experience across every device.",
  },
  {
    number: "04",
    icon: <Target size={22} />,
    title: "Digital Solutions",
    text: "Purpose-driven digital solutions designed to support business goals and measurable growth.",
  },
];

const processSteps = [
  {
    number: "01",
    icon: <Search size={21} />,
    title: "Discover",
    text: "We understand your business, audience, goals and project requirements.",
  },
  {
    number: "02",
    icon: <Palette size={21} />,
    title: "Design",
    text: "We transform ideas into clean, modern and user-focused visual experiences.",
  },
  {
    number: "03",
    icon: <Code2 size={21} />,
    title: "Develop",
    text: "Our team turns approved designs into responsive and functional digital products.",
  },
  {
    number: "04",
    icon: <Target size={21} />,
    title: "Deliver",
    text: "We test, refine and deliver a polished digital experience ready for your audience.",
  },
];

export default function PortfolioPageContent() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredItems =
    activeCategory === "ALL"
      ? portfolioItems
      : portfolioItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section className="portfolio-section">
      <div className="container-fluid portfolio-container">
        {/* Portfolio Intro */}
        <div className="portfolio-top row align-items-end g-4">
          <div className="col-lg-9">
            <div className="portfolio-intro">
              <div className="portfolio-tag d-inline-flex align-items-center gap-2">
                <Layers3 size={14} />
                <span>OUR PORTFOLIO</span>
              </div>

              <h2>
                Digital Experiences
                <span>Built With Purpose.</span>
              </h2>

              <p>
                A selection of websites, digital products and creative
                experiences delivered by Gashwa Technologies.
              </p>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="portfolio-stat ms-lg-auto">
              <span className="portfolio-stat-number">
                {String(portfolioItems.length).padStart(2, "0")}
              </span>

              <span className="portfolio-stat-text">
                Selected
                <br />
                Projects
              </span>
            </div>
          </div>
        </div>

        {/* Portfolio Toolbar */}
        <div className="portfolio-toolbar d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3">
          <div className="portfolio-filters d-flex flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={activeCategory === category ? "active" : ""}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="portfolio-results">
            <span>{filteredItems.length}</span> Projects
          </div>
        </div>

        {/* Portfolio Projects */}
        <div className="row g-4">
          {filteredItems.map((item, index) => (
            <div className="col-12 col-md-6 col-xl-4" key={item.title}>
              <article className="portfolio-card h-100">
                <div className="portfolio-card-image">
                  <img
                    src={item.image}
                    alt={`${item.title} project`}
                    loading="lazy"
                  />

                  <div className="portfolio-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="portfolio-card-category">
                    {item.category}
                  </div>

                  <div className="portfolio-card-action">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                <div className="portfolio-card-body">
                  <div className="portfolio-project-info d-flex align-items-center gap-3">
                    <div className="portfolio-logo flex-shrink-0">
                      <img
                        src={item.logo}
                        alt={`${item.title} logo`}
                        loading="lazy"
                      />
                    </div>

                    <div className="portfolio-project-name">
                      <span>PROJECT</span>
                      <h3>{item.title}</h3>
                    </div>
                  </div>

                  <div className="portfolio-divider" />

                  <div className="portfolio-tech d-flex flex-wrap">
                    {item.technologies.map((technology) => (
                      <span key={technology}>
                        <Code2 size={11} />
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Capabilities */}
        <section className="portfolio-capabilities">
          <div className="portfolio-section-heading row align-items-end g-4">
            <div className="col-lg-8">
              <div className="portfolio-tag d-inline-flex align-items-center gap-2">
                <Layers3 size={14} />
                <span>WHAT WE DO</span>
              </div>

              <h2>
                Digital solutions
                <span>built around your goals.</span>
              </h2>
            </div>

            <div className="col-lg-4">
              <p>
                From design to development, we create digital experiences that
                are clear, useful and built to perform.
              </p>
            </div>
          </div>

          <div className="row g-0 portfolio-capabilities-grid">
            {capabilities.map((item) => (
              <div className="col-12 col-md-6 col-xl-3" key={item.number}>
                <div className="portfolio-capability h-100">
                  <div className="portfolio-capability-top d-flex justify-content-between align-items-center">
                    <span>{item.number}</span>
                    <div className="portfolio-capability-icon">
                      {item.icon}
                    </div>
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <div className="portfolio-small-line" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="portfolio-process">
          <div className="portfolio-section-heading row align-items-end g-4">
            <div className="col-lg-8">
              <div className="portfolio-tag d-inline-flex align-items-center gap-2">
                <Layers3 size={14} />
                <span>OUR PROCESS</span>
              </div>

              <h2>
                From idea
                <span>to digital experience.</span>
              </h2>
            </div>

            <div className="col-lg-4">
              <p>
                A straightforward process that keeps strategy, creativity and
                technology connected from beginning to launch.
              </p>
            </div>
          </div>

          <div className="row g-0 portfolio-process-grid">
            {processSteps.map((step) => (
              <div className="col-12 col-md-6 col-xl-3" key={step.number}>
                <div className="portfolio-process-item h-100">
                  <div className="portfolio-process-number">
                    {step.number}
                  </div>

                  <div className="portfolio-process-icon">
                    {step.icon}
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>

                  <ArrowRight
                    className="portfolio-process-arrow"
                    size={19}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="portfolio-cta">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="portfolio-cta-content">
                <span>LET'S BUILD SOMETHING GREAT</span>

                <h2>
                  Have A Project
                  <span>In Mind?</span>
                </h2>

                <p>
                  Tell us about your idea and let's create a digital experience
                  that works for your business.
                </p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="text-lg-end">
                <a href="/contact" className="portfolio-cta-button">
                  Start A Conversation
                  <ArrowUpRight size={19} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}