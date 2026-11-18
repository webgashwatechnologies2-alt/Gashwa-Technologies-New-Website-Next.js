'use client';

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { useState, useEffect, useCallback, useRef } from 'react';
import './Hero.css';

import heroBaner2 from '../../../public/assets/img/hero/herobaner2.jpg';
import heroimage3 from '../../../public/assets/img/hero/heroimage3.jpg';
import heroimage4 from '../../../public/assets/img/hero/Namaste-Himachal-Studio-Interview.png';
import gashwatechgroupimage from '../../../public/assets/img/hero/heroimage4.jpg';
import heroimage5 from '../../../public/assets/img/hero/abtnew.jpg';

interface HeroImage {
  src: StaticImageData;
  alt: string;
}

const HERO_IMAGES: HeroImage[] = [
  {
    src: heroBaner2,
    alt: 'Gashwa Technologies Team - IT Company in Shimla Himachal Pradesh',
  },
  {
    src: heroimage3,
    alt: 'Gashwa Technologies - Website Designing Company',
  },
  {
    src: heroimage4,
    alt: 'Gashwa Technologies - Digital Marketing Services',
  },
  {
    src: gashwatechgroupimage,
    alt: 'Gashwa Technologies - Mobile App Development',
  },
  {
    src: heroimage5,
    alt: 'Gashwa Technologies - SEO Services Shimla',
  },
];

const HERO_SERVICES = [
  { icon: 'fa-solid fa-code', label: 'Web Development' },
  { icon: 'fa-solid fa-mobile-screen-button', label: 'App Development' },
  { icon: 'fa-solid fa-chart-line', label: 'SEO & Marketing' },
  { icon: 'fa-solid fa-palette', label: 'UI/UX Design' },
  { icon: 'fa-solid fa-cloud', label: 'Cloud Solutions' },
  { icon: 'fa-solid fa-shield-halved', label: 'Cyber Security' },
];

const TYPING_WORDS = [
  'Web Development',
  'Mobile Apps',
  'Digital Marketing',
  'SEO Services',
  'Cloud Solutions',
  'IT Consulting',
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlideIndex, setNextSlideIndex] = useState<number | null>(null);
  const [typingText, setTypingText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const particlesRef = useRef<HTMLCanvasElement>(null);

  const goToSlide = useCallback((index: number) => {
    if (index === currentSlide) return;
    setNextSlideIndex(index);
    setTimeout(() => {
      setCurrentSlide(index);
      setNextSlideIndex(null);
    }, 800);
  }, [currentSlide]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % HERO_IMAGES.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    const currentWord = TYPING_WORDS[wordIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypingText(currentWord.substring(0, typingText.length + 1));
        if (typingText.length === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypingText(currentWord.substring(0, typingText.length - 1));
        if (typingText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [typingText, isDeleting, wordIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveServiceIndex((prev) => (prev + 1) % HERO_SERVICES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticles = () => {
      const count = Math.floor((canvas.width * canvas.height) / 18000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${p.opacity})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });

      animationId = requestAnimationFrame(drawParticles);
    };

    resize();
    createParticles();
    drawParticles();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="hero-v2" id="hero-banner">
      <div className="hero-v2__bg">
        {HERO_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`hero-v2__bg-slide ${
              currentSlide === index ? 'hero-v2__bg-slide--active' : ''
            } ${nextSlideIndex === index ? 'hero-v2__bg-slide--next' : ''}`}
          >
            <Image src={image.src} alt={image.alt} className="hero-bg-image" priority={index === 0} />
          </div>
        ))}
        <div className="hero-v2__bg-overlay" />
      </div>
      <canvas ref={particlesRef} className="hero-v2__particles" />
      <div className="hero-v2__grid-pattern" />
      <div className="container">
        <div className="row align-items-center g-5">
          <div style={{marginTop: '4%' , paddingLeft: '0px'}} className="col-lg-7 order-2 order-lg-1 hero-left-content">
            <div className="hero-v2__content">
              <div className="hero-v2__badge">
                <span className="hero-v2__badge-dot" />
                <span>#1 IT Company in Shimla, Himachal Pradesh</span>
                <span className="hero-v2__badge-live">LIVE</span>
              </div>
              <h1 className="hero-v2__title">
                Transforming Business
                <br />
                <span className="hero-v2__title-gradient">
                  Through Technology
                </span>
              </h1>
              <div className="hero-v2__typing-wrapper">
                <span className="hero-v2__typing-label">We specialize in</span>
                <span className="hero-v2__typing-text">
                  {typingText}
                  <span className="hero-v2__cursor" />
                </span>
              </div>
              <p className="hero-v2__description">
                Empowering businesses with cutting-edge IT solutions — from custom web &amp; app
                development to SEO, digital marketing, and cloud infrastructure.
                Trusted by 500+ clients worldwide.
              </p>
              <div className="hero-v2__services">
                {HERO_SERVICES.map((service, index) => (
                  <div
                    key={index}
                    className={`hero-v2__service-pill ${
                      activeServiceIndex === index ? 'hero-v2__service-pill--active' : ''
                    }`}
                  >
                    <i className={service.icon} />
                    <span>{service.label}</span>
                  </div>
                ))}
              </div>
              <div className="hero-v2__actions">
                <Link href="/contact" className="hero-v2__btn-primary">
                  <span>Start Your Project</span>
                  <i className="fa-solid fa-arrow-right" />
                </Link>
                <Link href="/services" className="hero-v2__btn-outline">
                  <i className="fa-solid fa-play" />
                  <span>Explore Services</span>
                </Link>
              </div>
              <div className="hero-v2__trust-bar">
                <div className="hero-v2__trust-item">
                  <div className="hero-v2__trust-stars">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star" />
                    ))}
                  </div>
                  <span>4.9/5 on Google</span>
                </div>
                <div className="hero-v2__trust-divider" />
                <div className="hero-v2__trust-item">
                  <i className="fa-solid fa-shield-check" />
                  <span>ISO Certified</span>
                </div>
                <div className="hero-v2__trust-divider" />
                <div className="hero-v2__trust-item">
                  <i className="fa-solid fa-award" />
                  <span>Award Winning</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 order-1 order-lg-2">
            <div className="hero-v2__visual">
              <div className="hero-v2__glow-orb" />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-v2__wave">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path
            d="M0,40 C360,100 720,0 1080,60 C1260,90 1380,50 1440,40 L1440,100 L0,100 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}
