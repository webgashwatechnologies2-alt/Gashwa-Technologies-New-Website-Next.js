import type { Metadata } from 'next';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import './ProjectsPage.css';

type Project = {
  name: string;
  category: string;
  description: string;
  url: string;
  image: string;
  tags: string[];
};

export const metadata: Metadata = {
  title: 'Our Projects',
  description:
    'Explore live websites built for travel, Himalayan adventures, and doorstep car care by Gashwa Technologies.',
};

const projects: Project[] = [
  {
    name: 'Zoyo Trip',
    category: 'Travel & Tourism',
    description:
      'A travel platform for discovering curated India and international tour packages, seasonal deals, and custom itineraries.',
    url: 'https://zoyotrip.in/',
    image: 'https://zoyotrip.in/assets/images/packageimages/Kashmirnewww.webp',
    tags: ['Tour Packages', 'Custom Itineraries', 'Travel Deals'],
  },
  {
    name: 'Dream Ride Himalaya',
    category: 'Motorcycle Expeditions',
    description:
      'A guided riding experience for Ladakh and Spiti, featuring Royal Enfield tours, fixed departures, and expedition support.',
    url: 'https://dreamridehimalaya.com/',
    image: 'https://dreamridehimalaya.com/images/packages/slmdturtuk_0.webp',
    tags: ['Ladakh', 'Spiti Valley', 'Guided Bike Tours'],
  },
  {
    name: 'Vista Travelss',
    category: 'Travel Planning',
    description:
      'A destination-led travel experience featuring sample itineraries, stays, and trip ideas across India and abroad.',
    url: 'https://vistatravelss.com/',
    image: 'https://vistatravelss.com/images/kashmirtrails.webp',
    tags: ['Destinations', 'Sample Itineraries', 'Trip Planning'],
  },
  {
    name: 'Highline Himalayas',
    category: 'Adventure Travel',
    description:
      'A Himalayan travel platform showcasing guided expeditions, stays, and outdoor experiences across mountain regions.',
    url: 'https://highlinehimalayas.com/',
    image: 'https://highlinehimalayas.com/images/herobaner/herobanerthree.jpg',
    tags: ['Himalayan Trails', 'Expeditions', 'Mountain Stays'],
  },
  {
    name: 'Big Bubble Car Care',
    category: 'Automotive Care',
    description:
      'A doorstep car-care service website for daily washes, subscription packages, and eco-conscious cleaning.',
    url: 'https://bigbubblecarcare.com/',
    image: 'https://bigbubblecarcare.com/img/carwash1.jpg',
    tags: ['Doorstep Service', 'Car Wash', 'Subscriptions'],
  },
  {
    name: 'Journey Planners',
    category: 'Travel Planning',
    description:
      'A personalized trip-planning experience for Himachal, Spiti, Leh, Kashmir, and other mountain destinations.',
    url: 'https://journeyplanners.info/',
    image: 'https://journeyplanners.info/images/other/himachal-slider.webp',
    tags: ['Custom Trips', 'Local Guides', 'Mountain Travel'],
  },
  {
    name: 'India Travel Holiday',
    category: 'Holiday Packages',
    description:
      'A holiday planning and booking website for Himachal trips, destinations across India, hotels, and international getaways.',
    url: 'https://indiatravelholiday.com/',
    image: 'https://indiatravelholiday.com/d/bf0da5b297875230cc088845dc3f43f7.webp',
    tags: ['India Tours', 'Hotels', 'International Trips'],
  },
  {
    name: 'Mrignandani Tours & Travels',
    category: 'Tours & Travels',
    description:
      'A tour website presenting travel packages and popular destinations across India and Asia.',
    url: 'https://mrignandanitoursandtravels.com/',
    image: 'https://mrignandanitoursandtravels.com/images/slider-img-1.jpg',
    tags: ['Tour Packages', 'Popular Destinations', 'Travel'],
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Breadcrumb title="Our Projects" activeItem="Projects" />

      <section className="projects-showcase">
        <div className="container">
          <header className="projects-showcase__intro">
            <div className="projects-showcase__intro-copy">
              <span className="projects-showcase__eyebrow">
                Selected work <span aria-hidden="true" />
              </span>
              <h2>
                Digital experiences <span>made for real journeys.</span>
              </h2>
              <p>
                Explore websites we have created for travel brands, Himalayan
                adventures, and customer-focused services.
              </p>
            </div>
            <div className="projects-showcase__count" aria-label="8 projects">
              <strong>{String(projects.length).padStart(2, '0')}</strong>
              <span>Live projects</span>
            </div>
          </header>

          <div className="projects-showcase__grid">
            {projects.map((project, index) => (
              <article className="project-showcase-card" key={project.name}>
                <a
                  className="project-showcase-card__visual"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.name} website (opens in a new tab)`}
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(10, 25, 45, 0.02) 28%, rgba(10, 25, 45, 0.74) 100%), url("${project.image}")`,
                  }}
                >
                  <span className="project-showcase-card__number">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="project-showcase-card__category">
                    {project.category}
                  </span>
                  <span className="project-showcase-card__image-link">
                    Explore project <ArrowUpRight size={16} aria-hidden="true" />
                  </span>
                </a>

                <div className="project-showcase-card__body">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-showcase-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a
                    className="project-showcase-card__link"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit live website
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <aside className="projects-showcase__cta">
            <div>
              <span>Have a project in mind?</span>
              <h2>Let&apos;s build something that works for you.</h2>
            </div>
            <a href="/contact">
              Start a conversation <ArrowRight size={17} aria-hidden="true" />
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}
