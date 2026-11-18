'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Code2,
  Briefcase,
  IndianRupee,
  Ticket,
  Download,
  Phone,
  Mail,
} from 'lucide-react';
import './WebDesigningTrainingPage.css';

// 6 Courses Strip (as shown in user's design)
const HEADER_COURSES_STRIP = [
  {
    title: 'Web Designing',
    subtitle: 'Course',
    icon: 'fa-solid fa-laptop-code',
    href: '/web-designing-training-in-himachal-pradesh',
    active: true,
  },
  {
    title: 'Web Development',
    subtitle: 'Course',
    icon: 'fa-solid fa-code',
    href: '/services/website-development',
    active: false,
  },
  {
    title: 'CMS Development',
    subtitle: 'Course',
    icon: 'fa-brands fa-wordpress',
    href: '/services/cms-development',
    active: false,
  },
  {
    title: 'Graphic Design',
    subtitle: 'Course',
    icon: 'fa-solid fa-pen-nib',
    href: '/services/graphic-designing',
    active: false,
  },
  {
    title: 'Digital Marketing',
    subtitle: 'Course',
    icon: 'fa-solid fa-chart-line',
    href: '/digital-marketing',
    active: false,
  },
  {
    title: 'Python & Ai',
    subtitle: 'Course',
    icon: 'fa-brands fa-python',
    href: '/contact',
    active: false,
  },
];

const COURSES_LIST = [
  { title: 'Web Designing Course', desc: 'UI/UX, HTML5, CSS3, JS & Live Projects', href: '/web-designing-training-in-himachal-pradesh' },
  { title: 'Web Development Course', desc: 'Full Stack, React, Node & Backend', href: '/services/website-development' },
  { title: 'CMS Development Course', desc: 'WordPress, Shopify & WooCommerce', href: '/services/cms-development' },
  { title: 'Graphic Design Course', desc: 'Branding, Photoshop & Illustrator', href: '/services/graphic-designing' },
  { title: 'Digital Marketing Course', desc: 'SEO, Google Ads & Social Media', href: '/digital-marketing' },
  { title: 'Python & AI Course', desc: 'Python, Machine Learning & Automation', href: '/contact' },
];

const DISTRICT_COL_1 = [
  { name: 'Sirmaur', mode: 'Live Mentor & Classroom', region: 'Nahan & Paonta Sahib' },
  { name: 'Mandi', mode: 'Classroom & Online', region: 'Mandi & Sundernagar' },
  { name: 'Una', mode: 'Job-Assurance Batch', region: 'Una, Amb & Mehatpur' },
  { name: 'Spiti', mode: 'Digital Classrooms', region: 'Lahaul & Spiti Valley' },
  { name: 'Hamirpur', mode: 'Tech Students Hub', region: 'Hamirpur & Nadaun' },
  { name: 'Bilaspur', mode: 'Live Client Training', region: 'Bilaspur & Ghumarwin' },
];

const DISTRICT_COL_2 = [
  { name: 'Solan', mode: 'Industrial Internship', region: 'Solan & Baddi Belt' },
  { name: 'Kullu', mode: 'Weekend & Regular', region: 'Kullu & Manali Hub' },
  { name: 'Shimla', mode: 'Capital Lab & Online', region: 'Shimla & Sanjauli' },
  { name: 'Kangra', mode: 'Live Projects Batch', region: 'Dharamshala & Kangra' },
  { name: 'Chamba', mode: 'Remote Live Classes', region: 'Chamba & Dalhousie' },
  { name: 'Kinnaur', mode: 'Interactive Online', region: 'Kinnaur & Reckong Peo' },
];

// Course Durations
const COURSE_DURATIONS = [
  {
    title: '1 Year Diploma in Web designing',
    tag: 'Diploma Program',
    desc: 'Complete foundation to advanced diploma covering website layouts, responsive frameworks, JavaScript, and a 6-month live client internship.',
    points: [
      'HTML5, CSS3, Bootstrap & Tailwind',
      'Advanced JavaScript & Interactivity',
      'UI/UX Layouts & Parallax Design',
      '6 Months Live Client Projects',
      '100% Job Assurance (5 Interviews)',
      'Government / ISO Certified Diploma',
    ],
    highlight: true,
  },
  {
    title: '6 Months Training on Web Designing',
    tag: 'Job Preparation',
    desc: 'Intensive industrial training designed to turn students into market-ready web designers with comprehensive live project experience.',
    points: [
      'Practical Website Design Workflow',
      'Mobile-First Responsive Standards',
      'Client Real-Time Assignments',
      'Resume Building & Mock Interviews',
      'Placement Support with 5 Interviews',
      'Training Completion Certificate',
    ],
    highlight: false,
  },
  {
    title: '2 Months Short Term Course',
    tag: 'Fast-Track',
    desc: 'Skill booster crash course focusing on core design languages, modern responsive layouts, and interactive styling techniques.',
    points: [
      'HTML5 & Modern CSS3 Grid/Flexbox',
      'Bootstrap Framework Mastery',
      'Responsive Landing Page Design',
      'Practical Lab Exercises',
      'Hands-On Project Submission',
      'Course Certificate',
    ],
    highlight: false,
  },
  {
    title: '45 Days Industrial Training',
    tag: 'College Special',
    desc: 'Specially structured for B.Tech, Diploma, M.Tech, M.Sc, BCA, and MCA students to fulfill college internship and project requirements.',
    points: [
      'Curriculum Aligned with University Criteria',
      'Live Minor & Major Project Guidance',
      'Daily Mentoring by Senior Developers',
      'College Synopsis & Report Assistance',
      'Viva & Interview Preparation',
      'Industrial Training Certificate',
    ],
    highlight: false,
  },
];

// 4 Hiring steps
const HIRING_STEPS = [
  {
    step: 'STEP 1',
    title: 'Enroll in a Program',
    desc: 'Choose your desired duration (1 Year, 6 Months, 2 Months, or 45 Days) and book your seat with a free demo.',
  },
  {
    step: 'STEP 2',
    title: 'Complete Courses with Mentoring',
    desc: 'Gain 100% practical training, master all modern tools, and work on real-world live client projects.',
  },
  {
    step: 'STEP 3',
    title: 'Placement Support',
    desc: 'Build an industry-standard resume, create a live portfolio, and attend extensive mock technical interviews.',
  },
  {
    step: 'STEP 4',
    title: 'Get Hired in IT Companies',
    desc: 'Facilitating five interviews with esteemed companies and excellence technology partners.',
  },
];

// Reviews
const REVIEWS = [
  {
    name: 'Saurabh',
    time: '3 years ago',
    comment: 'Very Good 5 star training! Gashwa Institute has exceptional trainers who explain concepts very practically.',
  },
  {
    name: 'Masoom Katoch',
    time: '3 years ago',
    comment: 'When we launched our business last year, creating a smart and creative website was our first priority. When we searched on Google, Gashwa Institute of Technical Education was at the top so we decided to contact them and get our work done from them. Ultimately, it turned out to be a sensible decision as we got more than what we bargained for.',
  },
  {
    name: 'Nisha Kumari',
    time: '3 years ago',
    comment: 'One of the best agencies for SEO and Web Development in Shimla which guarantees results on the top page of Google. We are very satisfied with the results for our product search and business has increased immensely. Thanks Gashwa Institute of Technical Education Team.',
  },
  {
    name: 'Harsh Katoch',
    time: '3 years ago',
    comment: 'Happy to have associated with one of the leading web designing companies in Shimla. Gashwa Institute of Technical Education did a really fantastic job when they took up SEO and Web design for my brand. My rankings improved at a steady rate. Happy to recommend them.',
  },
  {
    name: 'Komal Katoch',
    time: '3 years ago',
    comment: 'We have been using Gashwa Institute of Technical Education for the last 3 + years and are extremely satisfied with their service. We have used their website development and design service. They took the time out to understand our products and services and came up with innovative design. It\'s a one stop shop.',
  },
  {
    name: 'Palak Chandel',
    time: '3 years ago',
    comment: 'Gashwa Institute of Technical Education has been a wonderful place to work with & also to start my career into Web Development in Shimla. Team leads have always motivated their employees to explore new technologies which also in-turn help their clients get their product built in the latest technology.',
  },
  {
    name: 'Pratibha Chauhan',
    time: '3 years ago',
    comment: 'I highly recommend this web developer company in Shimla, especially Mr. Pankaj. The team was very helpful, explaining everything simply and clearly for someone without development knowledge. So the result is a professional-looking website. Best wishes.',
  },
  {
    name: 'Neha Bharat Bhraman',
    time: '3 years ago',
    comment: 'I am also happy with Gashwa Institute of Technical Education website designing services in Shimla. They did an excellent job on the website and did all the research before work. One of the best web development companies in Himachal to work with. Very Professional.',
  },
  {
    name: 'Kunal Sonta',
    time: '3 years ago',
    comment: 'Good, very awesome web designing and web development services in Shimla. I highly suggest joining this company for best and better results with packages. I really like this good service. So thank you very much.',
  },
];

// FAQs
const FAQS = [
  {
    q: 'What are the requirements for enrolling in the web designing training institute?',
    a: 'There are no strict prerequisites, but some familiarity with basic computer usage and knowledge of HTML, CSS, and JavaScript would be helpful. Beginners with no prior coding background are fully supported with foundational classes.',
  },
  {
    q: 'What will be covered in the web designing course?',
    a: 'The course covers Website Layout, HTML5, CSS3, Bootstrap, Javascript, Mobile Responsive Design, Parallax Design, UI/UX Wireframing, and working on live commercial projects.',
  },
  {
    q: 'What is the course duration?',
    a: 'We offer 1 Year Diploma in Web Designing, 6 Months Industrial Training, 2 Months Short Term Course, and 45 Days Industrial Training for college students.',
  },
  {
    q: 'Is previous experience in web design necessary to enroll in the training?',
    a: 'No previous experience is required. Our mentors with over 14 years experience provide step-by-step guidance from the absolute basics to production-ready deployments.',
  },
  {
    q: 'Which tools and software are utilized in the web design training?',
    a: 'We utilize VS Code, Figma, Adobe Photoshop, Bootstrap 5, Tailwind CSS, Chrome DevTools, Git/GitHub, and live web hosting environments.',
  },
  {
    q: 'Is it possible to focus on a particular area of web design in the course?',
    a: 'Yes, students can specialize in UI/UX Layout Design, Responsive Front-End Development, or Interactive JavaScript according to their career aspirations.',
  },
  {
    q: 'Will a certificate be awarded upon the completion of web design training?',
    a: 'Yes, a recognized Training & Internship Certificate along with a live client project experience letter is provided upon successful course completion.',
  },
  {
    q: 'What career paths open up after finishing the web designing training?',
    a: 'You can work as a Web Designer, UI/UX Designer, Front-End Developer, or start your own freelancing agency with salaries ranging up to 18 LPA.',
  },
];

export default function WebDesigningTrainingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Book Your Seat');
  const [submissionNotice, setSubmissionNotice] = useState(false);

  // Form state
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'Web Designing Training',
    question: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionNotice(true);
  };

  const openBookingModal = (title: string) => {
    setModalTitle(title);
    setIsModalOpen(true);
    setSubmissionNotice(false);
  };

  const scrollToForm = () => {
    const el = document.getElementById('contact-form-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://gashwatechnologies.in/web-designing-training-in-himachal-pradesh/';
  const shareTitle = encodeURIComponent('Web Designing Training in Himachal Pradesh - 100% Job Assurance | Gashwa Institute');

  return (
    <div className="g-wdt-page">
      <section className="g-wdt-hero">
        <div className="g-wdt-hero__glow g-wdt-hero__glow--1" />
        <div className="g-wdt-hero__glow g-wdt-hero__glow--2" />
        <div className="g-wdt-hero__grid" />
        <div className="g-wdt-container">
          <div className="g-wdt-hero__inner">
            <div className="g-wdt-breadcrumbs">
              <Link href="/">Home</Link>
              <span>›</span>
              <Link href="/services">Internship & Training</Link>
              <span>›</span>
              <span className="active">Web Designing Training</span>
            </div>
            <h1 className="g-wdt-hero__title">
              <span className="g-wdt-hero__title-highlight">Web Designing Training in Himachal Pradesh</span>
            </h1>
            <p className="g-wdt-hero__desc">
              Web Designing training in Himachal . Our courses guarantee 100% job assurance, including facilitating five interviews with esteemed companies.
            </p>
            <div className="g-wdt-hero__badges">
              <div className="g-wdt-hero__badge">
                <i className="fa-solid fa-graduation-cap" />
                <span>10+ Years Experienced Trainers</span>
              </div>
              <div className="g-wdt-hero__badge">
                <i className="fa-solid fa-star" />
                <span>5.0 ★ Google Rating (336+ Reviews)</span>
              </div>
              <div className="g-wdt-hero__badge">
                <i className="fa-solid fa-user-check" />
                <span>1500+ Students Placed</span>
              </div>
              <div className="g-wdt-hero__badge">
                <i className="fa-solid fa-certificate" />
                <span>ISO Certified Training</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="g-wdt-container">
        <div className="g-wdt-highlight-bar">
          <div className="g-wdt-highlight-items">
            <div className="g-wdt-metric-box">
              <div className="g-wdt-metric-icon">
                <ShieldCheck size={22} strokeWidth={2.2} />
              </div>
              <div className="g-wdt-metric-text">
                <strong>100% Job Assurance</strong>
                <span>Guaranteed 5 Interviews</span>
              </div>
            </div>
            <div className="g-wdt-metric-box">
              <div className="g-wdt-metric-icon">
                <Code2 size={22} strokeWidth={2.2} />
              </div>
              <div className="g-wdt-metric-text">
                <strong>Work On Live Project</strong>
                <span>Practical Real-time Apps</span>
              </div>
            </div>
            <div className="g-wdt-metric-box">
              <div className="g-wdt-metric-icon">
                <Briefcase size={22} strokeWidth={2.2} />
              </div>
              <div className="g-wdt-metric-text">
                <strong>Apply For Job In IT</strong>
                <span>Direct Placement Drives</span>
              </div>
            </div>
            <div className="g-wdt-metric-box">
              <div className="g-wdt-metric-icon">
                <IndianRupee size={22} strokeWidth={2.2} />
              </div>
              <div className="g-wdt-metric-text">
                <strong>Upto 18 LPA Salary</strong>
                <span>High Growth Careers</span>
              </div>
            </div>
          </div>
          <div className="g-wdt-highlight-actions">
            <button
              type="button"
              className="g-btn g-btn--primary"
              onClick={() => openBookingModal('BOOK YOUR SEAT')}
            >
              <Ticket size={18} strokeWidth={2.2} />
              <span>BOOK YOUR SEAT</span>
            </button>
            <button
              type="button"
              className="g-btn g-btn--outline"
              onClick={() => openBookingModal('Download Syllabus')}
            >
              <Download size={18} strokeWidth={2.2} />
              <span>Download Syllabus</span>
            </button>
          </div>
        </div>
      </div>
      <section className="g-section" id="contact-form-section">
        <div className="g-wdt-container">
          <div className="g-intro-layout">
            <div className="g-intro-content">
              <span className="g-section-tag">
                <i className="fa-solid fa-award" />
                Gashwa Institute of Technical Education
              </span>
              <h2>Web Designing Training in Himachal : Gashwa Institute of Technical Education</h2>
              <div className="g-lab-image-showcase">
                <img
                  src="/assets/img/choose/web_design_lab_modern.jpg"
                  alt="Modern Web Designing Classroom and Smart Lab at Gashwa Institute"
                />
                <div className="g-lab-image-badge-floating">
                  <i className="fa-solid fa-chalkboard-user" />
                  <div>
                    <strong>Smart Projector Lab Sessions</strong>
                    <span>100% Practical Training on Live Projects</span>
                  </div>
                </div>
              </div>
              <p>
                <a
                  href="https://gashwatechnologies.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#0D4892', fontWeight: 750, textDecoration: 'underline' }}
                >
                  Gashwa Institute of Technical Education
                </a>{' '}
                is a renowned web designing training company in Himachal Pradesh, offering
                practical and industry-focused online training. Our courses cover HTML, CSS,
                responsive web design, website layouts, and modern design techniques, helping
                students develop practical skills and build professional websites from
                beginner to advanced levels.
              </p>
              <p>
                Website design involves <strong>Website Layout, HTML5, CSS3, Bootstrap, JavaScript, Mobile Responsive, Parallax Design</strong>,
                and many more concepts that simplify website usability and help users access information quickly. We believe that design is
                more than just visual appeal — it&apos;s about creating a cohesive, engaging, and user-friendly online platform. Our training
                focuses on practical learning, helping students understand modern web design techniques and build professional, responsive
                websites. We provide <strong>100% practical training, including access to live projects</strong>, so learners can gain
                real-world experience and develop the confidence to work on actual website design projects.
              </p>
              <div className="g-tech-tags">
                <span className="g-tech-tag"><i className="fa-solid fa-table-columns" /> Website Layout</span>
                <span className="g-tech-tag"><i className="fa-brands fa-html5" /> HTML5</span>
                <span className="g-tech-tag"><i className="fa-brands fa-css3-alt" /> CSS3</span>
                <span className="g-tech-tag"><i className="fa-brands fa-bootstrap" /> Bootstrap</span>
                <span className="g-tech-tag"><i className="fa-brands fa-js" /> Javascript</span>
                <span className="g-tech-tag"><i className="fa-solid fa-mobile-screen-button" /> Mobile Responsive</span>
                <span className="g-tech-tag"><i className="fa-solid fa-layer-group" /> Parallax Design</span>
              </div>
              <div className="g-intro-cta-row">
                <button
                  type="button"
                  className="g-btn g-btn--primary"
                  onClick={() => openBookingModal('BOOK YOUR SEAT')}
                >
                  <i className="fa-solid fa-check" />
                  <span>BOOK YOUR SEAT</span>
                </button>
                <button
                  type="button"
                  className="g-btn g-btn--outline"
                  onClick={() => openBookingModal('Download Syllabus')}
                >
                  <i className="fa-solid fa-file-arrow-down" />
                  <span>Download Syllabus</span>
                </button>
                <a
                  href="tel:+919805034219"
                  style={{ color: '#0D4892', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <i className="fa-solid fa-phone" />
                  <span>+91 9805034219</span>
                </a>
              </div>
            </div>
            <div>
              <div className="g-form-card">
                <div className="g-form-card__head">
                  <h3>Still have Questions ? Contact us </h3>
                  <p>Send your query or apply for 2-day free demo class</p>
                </div>

                {submissionNotice && (
                  <div className="alert alert-warning" role="status">
                    Online registration is not available yet. Please call{' '}
                    <a href="tel:+919805034219">+91 98050 34219</a> or email{' '}
                    <a href="mailto:info@gashwatechnologies.com">info@gashwatechnologies.com</a>.
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="g-form-group">
                      <label className="g-form-label">Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Full Name"
                        className="g-form-input"
                        value={form.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="g-form-group">
                      <label className="g-form-label">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 Phone Number"
                        className="g-form-input"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="g-form-group">
                      <label className="g-form-label">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="yourname@gmail.com"
                        className="g-form-input"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="g-form-group">
                      <label className="g-form-label">Select Course</label>
                      <select
                        name="course"
                        className="g-form-select"
                        value={form.course}
                        onChange={handleChange}
                      >
                        <option value="Web Designing Training">Web Designing Training</option>
                        <option value="Web Development Training">Web Development Training</option>
                        <option value="Graphic Designing Training">Graphic Designing Training</option>
                        <option value="Digital Marketing Training">Digital Marketing Training</option>
                        <option value="SEO Training">SEO Training</option>
                        <option value="PHP Development Training">PHP Development Training</option>
                        <option value="Python Development Training">Python Development Training</option>
                        <option value="Other">Other........</option>
                      </select>
                    </div>
                    <div className="g-form-group">
                      <label className="g-form-label">Asked Question *</label>
                      <textarea
                        name="question"
                        rows={3}
                        required
                        placeholder="Type your question or requirement here..."
                        className="g-form-textarea"
                        value={form.question}
                        onChange={handleChange}
                      />
                    </div>
                    <button type="submit" className="g-form-submit">
                      <span>Submit</span>
                      <i className="fa-solid fa-paper-plane" />
                    </button>
                </form>
              </div>
              <div className="g-help-card">
                <h3 className="g-help-card__title">Need Any Help?</h3>
                <div className="g-help-card__items">
                  <a href="tel:+919805034219" className="g-help-card__box" aria-label="Call Us Now">
                    <div className="g-help-card__icon">
                      <Phone size={22} strokeWidth={2.2} />
                    </div>
                    <div className="g-help-card__content">
                      <span className="g-help-card__label">Call Us Now</span>
                      <strong className="g-help-card__value">+91 98050 34219</strong>
                    </div>
                  </a>

                  <a href="mailto:info@gashwatechnologies.com" className="g-help-card__box" aria-label="Mail Us Now">
                    <div className="g-help-card__icon">
                      <Mail size={22} strokeWidth={2.2} />
                    </div>
                    <div className="g-help-card__content">
                      <span className="g-help-card__label">Mail Us Now</span>
                      <strong className="g-help-card__value">info@gashwatechnologies.com</strong>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="g-courses-fullwidth-section">
        <div className="g-courses-fullwidth-container">
          {HEADER_COURSES_STRIP.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={`g-courses-fullwidth-item ${item.active ? 'g-courses-fullwidth-item--active' : ''}`}
            >
              <div className="g-courses-fullwidth-icon">
                <i className={item.icon} />
              </div>
              <span className="g-courses-fullwidth-title">{item.title}</span>
              <span className="g-courses-fullwidth-subtitle">{item.subtitle}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="g-section g-section--bg">
        <div className="g-wdt-container">
          <div className="g-section-head">
            <span className="g-section-tag">
              <i className="fa-solid fa-display" />
              Real-World Portfolio
            </span>
            <h2 className="g-section-title">Web Designing Projects After Training</h2>
            <p className="g-section-desc">
              Build functional, responsive, and industry-standard live projects to showcase in your interview portfolio.
            </p>
          </div>
          <div className="g-projects-showcase-layout">
            <div className="g-projects-mockup-wrapper">
              <img
                src="/assets/img/choose/web_design_projects_modern.jpg"
                alt="Web Designing Projects Showcase - Responsive Layout, Job Portal, Portfolio Site"
                className="g-projects-mockup-img"
              />
              <span className="g-projects-mockup-floating-tag">
                <i className="fa-solid fa-sparkles" /> Live Client Deployments
              </span>
            </div>
            <div className="g-projects-cards-col">
              <div className="g-project-card-horizontal">
                <div className="g-project-card-icon">
                  <i className="fa-solid fa-file-lines" />
                </div>
                <div>
                  <h4>One-page layout</h4>
                  <p>The goal of this project idea for websites is to replicate a pixel-perfect design and create a one-page responsive layout.</p>
                </div>
              </div>
              <div className="g-project-card-horizontal">
                <div className="g-project-card-icon">
                  <i className="fa-solid fa-briefcase" />
                </div>
                <div>
                  <h4>Job sites</h4>
                  <p>The perpetual demand for high-quality job boards presents an excellent opportunity to develop interactive listings, search, and user-friendly filtering.</p>
                </div>
              </div>
              <div className="g-project-card-horizontal">
                <div className="g-project-card-icon">
                  <i className="fa-solid fa-id-badge" />
                </div>
                <div>
                  <h4>Portfolio Website</h4>
                  <p>Initiate the establishment of a business portfolio website for your web design enterprise and impress potential recruiters and clients.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================================================================
          ADMISSIONS OPEN - MODERN FULL-WIDTH HERO BANNER
          Placed directly on top of "Web Designing Course Programs"
          ====================================================================== */}
      <section className="g-admissions-banner">
        <div className="g-admissions-banner__glow-left" />
        <div className="g-admissions-banner__glow-right" />
        <div className="g-wdt-container">
          <div className="g-admissions-banner__content">
            <div className="g-admissions-banner__text">
              <div className="g-admissions-banner__badge">
                <span className="g-pulse-dot" />
                <span>Admissions Open &bull; New Batches Starting</span>
              </div>
              <h2 className="g-admissions-banner__title">Admissions Open!</h2>
              <p className="g-admissions-banner__desc">
                Apply now and turn your passion for Web Designing into a rewarding career! Contact us at{' '}
                <a href="tel:+919805034219" className="g-admissions-banner__phone">
                  +91 9805034219
                </a>
              </p>
              <div className="g-admissions-banner__perks">
                <span>
                  <i className="fa-solid fa-circle-check" /> 100% Job Assurance
                </span>
                <span>
                  <i className="fa-solid fa-circle-check" /> 5 Guaranteed Interviews
                </span>
                <span>
                  <i className="fa-solid fa-circle-check" /> 2-Day Free Demo Class
                </span>
              </div>
            </div>

            <div className="g-admissions-banner__action">
              <button
                type="button"
                className="g-admissions-banner__btn"
                onClick={() => openBookingModal('Admissions Open - Enroll Now')}
              >
                <i className="fa-solid fa-video" />
                <span>Enroll Now</span>
              </button>
              <span className="g-admissions-banner__helpline">
                Call Us: <strong>+91 98050 34219</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="g-section">
        <div className="g-wdt-container">
          <div className="g-section-head">
            <span className="g-section-tag">
              <i className="fa-solid fa-bell" />
              Admissions Open!
            </span>
            <h2 className="g-section-title">Web Designing Course Programs</h2>
            <p className="g-section-desc">
              Apply now and turn your passion for Web Designing into a rewarding career! Contact us at{' '}
              <a href="tel:+919805034219" style={{ color: '#0D4892', fontWeight: 750 }}>
                +91 9805034219
              </a>
            </p>
          </div>
          <div className="g-duration-grid">
            {COURSE_DURATIONS.map((dur, i) => (
              <div
                key={i}
                className={`g-duration-card ${dur.highlight ? 'g-duration-card--highlight' : ''}`}
              >
                <span className="g-duration-card__tag">{dur.tag}</span>
                <h3 className="g-duration-card__title">{dur.title}</h3>
                <p className="g-duration-card__desc">{dur.desc}</p>
                <ul className="g-duration-card__list">
                  {dur.points.map((pt, pIdx) => (
                    <li key={pIdx}>
                      <i className="fa-solid fa-circle-check" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className={`g-btn ${dur.highlight ? 'g-btn--primary' : 'g-btn--outline'}`}
                  style={{ width: '100%' }}
                  onClick={() => openBookingModal(dur.title)}
                >
                  <i className="fa-solid fa-graduation-cap" />
                  <span>Get demo classes</span>
                </button>
              </div>
            ))}
          </div>
          <div className="g-discount-callout">
            <div>
              <h3>Group Discount Offers !</h3>
              <p>
                We would be delighted to offer you a group discount if there are three or more people in your training session.
              </p>
            </div>
            <div>
              <button
                type="button"
                className="g-btn g-btn--accent"
                onClick={() => openBookingModal('Group Discount Offer')}
              >
                <i className="fa-solid fa-tags" />
                <span>Get Discount</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="g-section g-section--bg">
        <div className="g-wdt-container">
          <div className="g-section-head">
            <span className="g-section-tag">
              <i className="fa-solid fa-layer-group" />
              Career Programs
            </span>
            <h2 className="g-section-title">Explore Technical Courses</h2>
            <p className="g-section-desc">
              Explore our wide variety of industry-aligned training programs in Himachal Pradesh.
            </p>
          </div>

          <div className="g-other-courses-grid" style={{ marginBottom: '50px' }}>
            {COURSES_LIST.map((c, i) => (
              <Link key={i} href={c.href} className="g-other-course-card">
                <div>
                  <h4>{c.title}</h4>
                  <span>{c.desc}</span>
                </div>
                <i className="fa-solid fa-arrow-right" />
              </Link>
            ))}
          </div>
          <div className="g-districts-modern-wrap">
            <div className="g-section-head" style={{ marginBottom: '32px' }}>
              <span className="g-section-tag">
                <i className="fa-solid fa-map-location-dot" />
                Himachal Pradesh Centers
              </span>
              <h2 className="g-section-title">
                Web Design Training Across Himachal Districts
              </h2>
              <p className="g-section-desc">
                Accessible training across all 12 districts of Himachal Pradesh with interactive live online classes, offline lab support, 100% job assurance, and 5 guaranteed interviews.
              </p>
            </div>
            <div className="g-districts-split-layout">
              <div className="g-districts-photo-card">
                <div className="g-districts-photo-wrap">
                  <img
                    src="/assets/img/choose/gashwa_felicitation_students.jpg"
                    alt="Gashwa Institute Student Felicitation & Job Placement Celebration"
                    className="g-districts-photo-img"
                  />
                  <div className="g-districts-photo-badge">
                    <i className="fa-solid fa-trophy" />
                    <div>
                      <strong>100% Job Assurance</strong>
                      <span>5 Facilitated Interviews</span>
                    </div>
                  </div>
                </div>
                <div className="g-districts-photo-info">
                  <div className="g-districts-photo-head">
                    <h4>Gashwa Institute of Technical Education</h4>
                    <p>Web Designing & UI/UX Training Excellence Across Himachal Pradesh</p>
                  </div>
                  <div className="g-districts-photo-features">
                    <div className="g-districts-feature-pill">
                      <i className="fa-solid fa-circle-check" />
                      <span>Smart Projector Labs</span>
                    </div>
                    <div className="g-districts-feature-pill">
                      <i className="fa-solid fa-circle-check" />
                      <span>Live Client Projects</span>
                    </div>
                  </div>
                  <div className="g-districts-photo-contact">
                    <a href="tel:+919805034219" className="g-districts-contact-call">
                      <div className="g-districts-contact-icon">
                        <i className="fa-solid fa-phone-volume" />
                      </div>
                      <div className="g-districts-contact-meta">
                        <span className="g-districts-contact-label">Talk to Course Mentor</span>
                        <strong className="g-districts-contact-num">+91 98050 34219</strong>
                      </div>
                    </a>
                    <div className="g-districts-rating-pill">
                      <div className="g-stars-mini">
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                        <i className="fa-solid fa-star" />
                      </div>
                      <span>5.0 (336 Reviews)</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="g-btn g-btn--primary g-districts-cta-btn"
                    onClick={() => openBookingModal('Himachal Centers - Free Demo')}
                  >
                    <i className="fa-solid fa-user-graduate" />
                    <span>Book 2-Day Free Demo Class</span>
                  </button>
                </div>
              </div>
              <div className="g-districts-bars-container">
                <div className="g-districts-bars-col">
                  {DISTRICT_COL_1.map((d, i) => (
                    <button
                      key={i}
                      type="button"
                      className="g-district-bar"
                      onClick={() => openBookingModal(`Web Design Training in ${d.name}`)}
                    >
                      <div className="g-district-bar__left">
                        <span className="g-district-bar__chevron">
                          <i className="fa-solid fa-chevron-right" />
                        </span>
                        <div className="g-district-bar__text">
                          <span className="g-district-bar__title">
                            Web Design Training in <strong>{d.name}</strong>
                          </span>
                          <span className="g-district-bar__sub">{d.mode} &bull; {d.region}</span>
                        </div>
                      </div>
                      <span className="g-district-bar__arrow">
                        <i className="fa-solid fa-arrow-right-long" />
                      </span>
                    </button>
                  ))}
                </div>
                <div className="g-districts-bars-col">
                  {DISTRICT_COL_2.map((d, i) => (
                    <button
                      key={i}
                      type="button"
                      className="g-district-bar"
                      onClick={() => openBookingModal(`Web Design Training in ${d.name}`)}
                    >
                      <div className="g-district-bar__left">
                        <span className="g-district-bar__chevron">
                          <i className="fa-solid fa-chevron-right" />
                        </span>
                        <div className="g-district-bar__text">
                          <span className="g-district-bar__title">
                            Web Design Training in <strong>{d.name}</strong>
                          </span>
                          <span className="g-district-bar__sub">{d.mode} &bull; {d.region}</span>
                        </div>
                      </div>
                      <span className="g-district-bar__arrow">
                        <i className="fa-solid fa-arrow-right-long" />
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===== WHY GASHWA – Modern Bento Grid ===== */}
      <section className="g-why-section">
        <div className="g-wdt-container">
          <div className="g-why-header">
            <span className="g-section-tag">
              <i className="fa-solid fa-thumbs-up" />
              The Gashwa Advantage
            </span>
            <h2 className="g-why-title">
              Why choose{' '}
              <span className="g-why-title-accent">Gashwa Institute</span>{' '}for Web Designing?
            </h2>
            <p className="g-why-subtitle">
              Thousands of students in Himachal Pradesh trust Gashwa Institute every year &mdash; here&apos;s why.
            </p>
          </div>

          <div className="g-bento-grid">

            {/* CELL 1 — Hero classroom */}
            <div className="g-bento-card g-bento-card--hero">
              <img src="/images/why-classroom.jpg" alt="Modern web design classroom at Gashwa Institute" className="g-bento-img" />
              <div className="g-bento-overlay">
                <span className="g-bento-badge"><i className="fa-solid fa-chalkboard-user" /> Projector-Based Classes</span>
                <h3 className="g-bento-overlay-title">Learn in a Smart Lab Environment</h3>
                <p className="g-bento-overlay-desc">HD projectors, modern workstations, and live project demos every session.</p>
              </div>
            </div>

            {/* CELL 2 — Stats */}
            <div className="g-bento-card g-bento-card--stats">
              <div className="g-bento-stat-row">
                <div className="g-bento-stat">
                  <span className="g-bento-stat-num">14<span className="g-bento-stat-plus">+</span></span>
                  <span className="g-bento-stat-label">Years Experience</span>
                </div>
                <div className="g-bento-stat">
                  <span className="g-bento-stat-num">5K<span className="g-bento-stat-plus">+</span></span>
                  <span className="g-bento-stat-label">Students Trained</span>
                </div>
              </div>
              <div className="g-bento-stat-row">
                <div className="g-bento-stat">
                  <span className="g-bento-stat-num">100<span className="g-bento-stat-plus">%</span></span>
                  <span className="g-bento-stat-label">Practical Training</span>
                </div>
                <div className="g-bento-stat">
                  <span className="g-bento-stat-num">5</span>
                  <span className="g-bento-stat-label">Interview Calls</span>
                </div>
              </div>
              <div className="g-bento-icon-features">
                <span><i className="fa-solid fa-circle-check" /> Job Assurance</span>
                <span><i className="fa-solid fa-circle-check" /> Live Projects</span>
                <span><i className="fa-solid fa-circle-check" /> Certificate</span>
              </div>
            </div>

            {/* CELL 3 — Growing Industry */}
            <div className="g-bento-card g-bento-card--accent1">
              <i className="fa-solid fa-arrow-trend-up g-bento-icon" />
              <h4>Growing Industry</h4>
              <p>
                Web design is one of the fastest-growing sectors, offering excellent career
                opportunities, creative freedom, and long-term professional growth. As
                businesses, organizations, and individuals increasingly establish their
                presence online, the demand for skilled web designers continues to grow
                across different industries. Web design is not only about creating
                attractive websites but also about building responsive, accessible, and
                user-friendly digital experiences that work smoothly across different
                devices and screen sizes.
              </p>

              <p>
                Learning web design helps students develop practical knowledge of modern
                design concepts, website layouts, and essential web technologies. With
                proper training and hands-on experience, learners can build professional
                websites, work on real-world projects, and develop a strong foundation for
                their careers. The field also offers opportunities in web design companies,
                digital agencies, freelance projects, and independent work, making it a
                flexible career option for those interested in technology and creativity.
              </p>
               <div className="g-bento-tag-row">
                <span>&#8377;3L&#8211;&#8377;12L / yr</span>
                <span>High Demand</span>
              </div>
            </div>

            {/* CELL 4 — Freelancer (tall, spans 2 rows) */}
            <div className="g-bento-card g-bento-card--img-tall">
              <img src="/images/why-freelancer.jpg" alt="Freelancing from home after web design training" className="g-bento-img" />
              <div className="g-bento-overlay g-bento-overlay--bottom">
                <span className="g-bento-badge"><i className="fa-solid fa-laptop-code" /> Freelancing</span>
                <h3 className="g-bento-overlay-title">Work From Anywhere</h3>
                <p className="g-bento-overlay-desc">Start earning online by taking freelance projects right after course completion.</p>
              </div>
            </div>

            {/* CELL 5+6 — Right column: Trainers + Demo stacked */}
            <div className="g-bento-right-col">
              <div className="g-bento-card g-bento-card--dark">
                <i className="fa-solid fa-user-tie g-bento-icon g-bento-icon--white" />
                <h4>Professional Trainers</h4>
                <p>Learn from industry veterans with 14+ years of hands-on experience in web design and development.</p>
                <div className="g-bento-stars">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <span>4.9 / 5 Rating</span>
                </div>
              </div>
              <div className="g-bento-card g-bento-card--accent2">
                <i className="fa-solid fa-gift g-bento-icon" />
                <h4>2 Days Free Demo</h4>
                <p>Experience our teaching quality before you commit. No payment needed — just show up and learn.</p>
                <a href="tel:+919805034219" className="g-bento-cta-btn">
                  Book Free Demo <i className="fa-solid fa-arrow-right" />
                </a>
              </div>
            </div>

            {/* CELL 7 — Placement */}
            <div className="g-bento-card g-bento-card--placement">
              <img src="/images/why-placement.jpg" alt="Student getting placed at IT company after Gashwa training" className="g-bento-img" />
              <div className="g-bento-overlay">
                <span className="g-bento-badge g-bento-badge--green"><i className="fa-solid fa-briefcase" /> 100% Placement Support</span>
                <h3 className="g-bento-overlay-title">Get Hired at Top IT Companies</h3>
                <p className="g-bento-overlay-desc">We connect students with 5 guaranteed interview opportunities in reputed tech companies.</p>
              </div>
            </div>

            {/* CELL 8 — Start Business */}
            <div className="g-bento-card g-bento-card--accent3">
              <i className="fa-solid fa-rocket g-bento-icon" />
              <h4>Start Your Own Business</h4>
              <p>Launch your own web design studio or digital agency with the complete skill set we provide.</p>
              <div className="g-bento-tag-row">
                <span><i className="fa-solid fa-fire" /> High Potential</span>
                <span><i className="fa-solid fa-bolt" /> Fast Launch</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="g-section g-section--bg">
        <div className="g-wdt-container">
          <div className="g-section-head">
            <span className="g-section-tag">
              <i className="fa-solid fa-route" />
              Career Roadmap
            </span>
            <h2 className="g-section-title">Get hired in four easy steps</h2>
            <p className="g-section-desc">
              Our structured career track prepares you completely for corporate interviews and software company recruitment.
            </p>
          </div>

          <div className="g-steps-grid">
            {HIRING_STEPS.map((s, idx) => (
              <div key={idx} className="g-step-card">
                <span className="g-step-badge">{s.step}</span>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="g-section">
        <div className="g-wdt-container">
          <div className="g-market-box">
            <div>
              <span className="g-section-tag">
                <i className="fa-solid fa-chart-line" />
                Job Market Reality
              </span>
              <h3>Do you Know?</h3>
              <p>
                Naukri, Indeed, Monsterindia, Shine, Timesjobs, Amazon Jobs, LinkedIn and Angel List Reveal That There Are Over{' '}
                <strong>35,00,000 Open IT Jobs Available In 2023 Only In India</strong>.
              </p>
              <p style={{ fontWeight: 750, color: '#0D4892', margin: '0 0 16px' }}>
                Registration Open for B.Tech Diploma, M.Tech, M.sc, BCA, MCA
              </p>
              <div className="g-market-badge-wrap">
                <span className="g-market-badge">Naukri</span>
                <span className="g-market-badge">Indeed</span>
                <span className="g-market-badge">MonsterIndia</span>
                <span className="g-market-badge">LinkedIn</span>
                <span className="g-market-badge">Amazon Jobs</span>
                <span className="g-market-badge">Shine</span>
              </div>
            </div>

            <div className="g-market-stat">
              <h2>35,00,000+</h2>
              <span>Open IT Jobs in India</span>
              <button
                type="button"
                className="g-btn g-btn--accent"
                style={{ width: '100%', marginBottom: '12px' }}
                onClick={() => openBookingModal('Free Demo Class - Enroll Today')}
              >
                <span>Free Demo Class - Enroll Today</span>
              </button>
              <a
                href="tel:+919805034219"
                style={{ color: '#ffffff', textDecoration: 'underline', fontSize: '0.95rem', fontWeight: 700 }}
              >
                Call Us @ 9805034219
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="g-section g-section--bg">
        <div className="g-wdt-container">
          <div className="g-reviews-badge-card">
            <div className="g-reviews-badge-left">
              <div className="g-google-logo">
                <i className="fa-brands fa-google" />
              </div>
              <div>
                <div className="g-stars-row">
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </div>
                <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>
                  Google rating score: 5.0 of 5, based on 336 reviews
                </h3>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="g-btn g-btn--primary"
                onClick={() => openBookingModal('Enroll Now')}
              >
                <i className="fa-solid fa-check" />
                <span>Enroll Now</span>
              </button>
            </div>
          </div>
          <div className="g-section-head">
            <span className="g-section-tag">
              <i className="fa-solid fa-comments" />
              Testimonials
            </span>
            <h2 className="g-section-title">What Our Clients & Students Say About Web Designing Training</h2>
            <p className="g-section-desc">
              We Have Trained Over 1500+ Students (Offline & Online) In Past 10 Years & Help Them Get Their 1st Job In IT Companies At Good Salary Packages !
              Students enrolled in Web Designing Training at Gashwa Institute of Technical Education in Himachal Pradesh come from various universities and colleges.
            </p>
          </div>
          <div className="g-reviews-grid">
            {REVIEWS.map((rev, idx) => (
              <div key={idx} className="g-review-card">
                <div className="g-review-header">
                  <div className="g-review-avatar">{rev.name.charAt(0)}</div>
                  <div className="g-review-author">
                    <h5>{rev.name}</h5>
                    <span>{rev.time}</span>
                  </div>
                </div>
                <div className="g-stars-row" style={{ fontSize: '0.9rem', marginBottom: '8px' }}>
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                  <i className="fa-solid fa-star" />
                </div>
                <p>&ldquo;{rev.comment}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="g-section">
        <div className="g-wdt-container">
          <div className="g-section-head">
            <span className="g-section-tag">
              <i className="fa-solid fa-circle-question" />
              Frequently Asked Questions
            </span>
            <h2 className="g-section-title">Frequently Asked Question</h2>
            <p className="g-section-desc">
              Clear information about our admission criteria, course contents, and job assistance.
            </p>
          </div>

          <div className="g-faq-list">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className={`g-faq-item ${isOpen ? 'g-faq-item--active' : ''}`}>
                  <button
                    type="button"
                    className="g-faq-btn"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                  >
                    <span>{faq.q}</span>
                    <i className="fa-solid fa-chevron-down g-faq-arrow" />
                  </button>
                  {isOpen && (
                    <div className="g-faq-content">
                      <p style={{ margin: 0 }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="g-share-row">
            <h4>Share This Course</h4>
            <div className="g-share-buttons">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="g-share-btn g-share-btn--fb"
              >
                <i className="fa-brands fa-facebook-f" />
                <span>Facebook</span>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?text=${shareTitle}&url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="g-share-btn g-share-btn--tw"
              >
                <i className="fa-brands fa-x-twitter" />
                <span>Twitter</span>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="g-share-btn g-share-btn--li"
              >
                <i className="fa-brands fa-linkedin-in" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=${shareTitle}%20${encodeURIComponent(currentUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="g-share-btn g-share-btn--wa"
              >
                <i className="fa-brands fa-whatsapp" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`mailto:?subject=Web%20Designing%20Training%20in%20Himachal&body=${encodeURIComponent(currentUrl)}`}
                className="g-share-btn g-share-btn--em"
              >
                <i className="fa-solid fa-envelope" />
                <span>Email</span>
              </a>
              <a
                href={`https://t.me/share/url?url=${encodeURIComponent(currentUrl)}&text=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="g-share-btn g-share-btn--tg"
              >
                <i className="fa-brands fa-telegram" />
                <span>Telegram</span>
              </a>
              <a
                href={`https://reddit.com/submit?url=${encodeURIComponent(currentUrl)}&title=${shareTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="g-share-btn g-share-btn--rd"
              >
                <i className="fa-brands fa-reddit-alien" />
                <span>Reddit</span>
              </a>
            </div>
          </div>
          <div className="g-bottom-cta">
            <h2>Admissions Open!</h2>
            <p>
              Apply now and turn your passion for Web Designing into a rewarding career! Contact us at +91 9805034219
            </p>
            <div className="g-bottom-cta__actions">
              <button
                type="button"
                className="g-btn g-btn--accent"
                onClick={() => openBookingModal('Enroll Now')}
              >
                <i className="fa-solid fa-user-plus" />
                <span>Enroll Now</span>
              </button>
              <button
                type="button"
                className="g-btn g-btn--outline"
                style={{ borderColor: '#ffffff', color: '#ffffff' }}
                onClick={scrollToForm}
              >
                <i className="fa-solid fa-comment-dots" />
                <span>Still have Questions ? Contact us 👇</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      {isModalOpen && (
        <div className="g-modal-backdrop" onClick={() => setIsModalOpen(false)}>
          <div className="g-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="g-modal-close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              <i className="fa-solid fa-xmark" />
            </button>
            <h3 style={{ margin: '0 0 6px', fontSize: '1.4rem', color: '#0f172a' }}>{modalTitle}</h3>
            <p style={{ margin: '0 0 20px', fontSize: '0.9rem', color: '#64748b' }}>
              Fill in your details below and our admissions team will contact you.
            </p>
            {submissionNotice && (
              <div className="alert alert-warning" role="status">
                Online registration is not available yet. Please call{' '}
                <a href="tel:+919805034219">+91 98050 34219</a> or email{' '}
                <a href="mailto:info@gashwatechnologies.com">info@gashwatechnologies.com</a>.
              </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className="g-form-group">
                  <label className="g-form-label">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="g-form-input"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="g-form-group">
                  <label className="g-form-label">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 Mobile Number"
                    className="g-form-input"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="g-form-group">
                  <label className="g-form-label">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="name@example.com"
                    className="g-form-input"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="g-form-group">
                  <label className="g-form-label">Select Course</label>
                  <select
                    name="course"
                    className="g-form-select"
                    value={form.course}
                    onChange={handleChange}
                  >
                    <option value="Web Designing Training">Web Designing Training</option>
                    <option value="Web Development Training">Web Development Training</option>
                    <option value="Graphic Designing Training">Graphic Designing Training</option>
                    <option value="Digital Marketing Training">Digital Marketing Training</option>
                    <option value="SEO Training">SEO Training</option>
                    <option value="PHP Development Training">PHP Development Training</option>
                    <option value="Python Development Training">Python Development Training</option>
                    <option value="Other">Other........</option>
                  </select>
                </div>
                <button type="submit" className="g-form-submit">
                  <span>Submit Application</span>
                  <i className="fa-solid fa-arrow-right" />
                </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
