export interface ServiceData {
  slug: string;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    slides: { title: string; description: string; image: string; }[];
    trustItems: string[];
  };
  features: {
    icon: string;
    title: string;
    description: string;
    accent: string;
    bg: string;
  }[];
  process: {
    badge: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    steps: { step: string; title: string; desc: string; icon: string; accent: string; bg: string; }[];
  };
  recentWorks: {
    title: string;
    url: string;
    category: string;
    location: string;
    desc: string;
    thumb: string;
    popular: boolean;
    pages: string;
    projectType: string;
    delivery: string;
    level: string;
    levelColor: string;
    rating: string;
  }[];
  transformation: {
    eyebrow: string;
    title: string;
    description: string;
    centerTextLine1: string;
    centerTextLine2: string;
    quadrants: { labelLine1: string; labelLine2: string; iconClass: string; }[];
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    plans: {
      name: string; pages: string; price: string; period: string;
      features: string[]; excluded: string[]; popular: boolean;
    }[];
  };
  stats: { value: string; label: string; }[];
  cta: {
    titleStart: string;
    titleHighlight: string;
    description: string;
  };
}

export const servicesData: Record<string, ServiceData> = {
  "website-designing": {
    slug: "website-designing",
    seo: {
      title: "Website Designing Services | Gashwa Technologies",
      description: "Professional website designing services by Gashwa Technologies. We build stunning, highly functional websites that get results."
    },
    hero: {
      slides: [
        {
          title: 'We Built 1000+ Websites that get results',
          description: 'Gashwa Technologies blends creativity and technology to elevate your online presence with impactful design and measurable success.',
          image: '/assets/img/shape/webdeisgningslider1.jpg',
        },
        {
          title: 'Exceeding Expectations, Delivering Best Results',
          description: 'We go beyond the ordinary” transforming ideas into captivating digital experiences that resonate with your audience.',
          image: '/assets/img/shape/webdeisgningslider2.jpg',
        },
        {
          title: 'Crafting Digital Dreams with Expertise',
          description: 'Our dedicated team combines creativity and technical prowess to build websites that captivate, engage, and drive results.',
          image: '/assets/img/shape/craftingdigital.webp',
        },
        {
          title: 'Elevating Designs, Exceptional Support',
          description: 'Visually stunning, functional websites with dedicated support every step of the way” creativity meets reliability.',
          image: '/assets/img/shape/elevatingspot.webp',
        },
      ],
      trustItems: ['1000+ Projects', '500+ Clients', '10  Years', '24/7 Support', 'Mobile First', 'SEO Optimized', 'Custom Design', 'Fast Delivery']
    },
    features: [
      { icon: 'fa-palette', title: 'Creative & Engaging Designs', description: 'Visually stunning websites that leave a lasting impression” aesthetics meets functionality for engaging user experiences.', accent: '#6366f1', bg: '#eef2ff' },
      { icon: 'fa-users', title: 'User-Focused Approach', description: 'Thorough research into user preferences and behavior patterns to tailor design elements that enhance engagement.', accent: '#32649f', bg: '#ecf3ff' },
      { icon: 'fa-mobile-alt', title: 'Mobile Responsive', description: 'Seamless performance across desktops, tablets, and smartphones with a consistent, polished experience.', accent: '#06b6d4', bg: '#ecfeff' },
      { icon: 'fa-cogs', title: 'Customized Solutions', description: 'Personalized designs aligned with your brand identity, business goals, and unique requirements.', accent: '#8b5cf6', bg: '#f5f3ff' },
      { icon: 'fa-search', title: 'SEO Friendly Designs', description: 'Optimized page speed, clean code, and proper URL structures built in from day one for higher search rankings.', accent: '#10b981', bg: '#ecfdf5' }
    ],
    process: {
      badge: "Our Process",
      titleStart: "How We Build Your",
      titleHighlight: "Website",
      subtitle: "A proven 4-step workflow that transforms your idea into a high-performing digital presence.",
      steps: [
        { step: '01', title: 'Discovery', desc: 'Understanding your goals, target audience & brand vision through detailed consultation.', icon: 'fa-lightbulb', accent: '#32649F', bg: '#fffbeb' },
        { step: '02', title: 'Design', desc: 'Wireframes, high-fidelity mockups & interactive prototypes tailored to your brand.', icon: 'fa-pen-ruler', accent: '#6366f1', bg: '#eef2ff' },
        { step: '03', title: 'Development', desc: 'Clean, responsive code with performance optimization and cross-browser testing.', icon: 'fa-code', accent: '#06b6d4', bg: '#ecfeff' },
        { step: '04', title: 'Launch', desc: 'Final testing, seamless deployment & ongoing support to keep your site running.', icon: 'fa-rocket', accent: '#10b981', bg: '#ecfdf5' }
      ]
    },
    recentWorks: [
      { title: 'Horizon Bound Travels', url: 'https://horizonboundtravels.com', category: 'Tourism', location: 'Travel', desc: 'Travel & booking website with immersive visuals and seamless user experience.', thumb: '/assets/img/recentworks/horizonboundtravels.png', popular: true, pages: '21', projectType: 'Dynamic', delivery: '3 Weeks', level: 'Moderate Level', levelColor: '#4D96FF', rating: '4.8' },
      { title: 'White Oak Pictures', url: 'https://whiteoakpictures.in', category: 'Media', location: 'Shimla, Himachal Pradesh', desc: 'Wedding & pre-wedding photography and videography studio portfolio with a cinematic, story-driven visual style.', thumb: '/assets/img/recentworks/whiteoakpictures.png', popular: true, pages: '122', projectType: 'Portfolio', delivery: '2 Weeks', level: 'Easy Level', levelColor: '#6BCB77', rating: '4.9' },
      { title: 'Nature Quest Travels', url: 'https://naturequesttravels.com', category: 'Tourism', location: 'Himalayan Treks', desc: 'Adventure tourism site highlighting offbeat Himalayan trekking experiences.', thumb: '/assets/img/recentworks/naturequesttravels.png', popular: false, pages: '14', projectType: 'Adventure', delivery: '4 Weeks', level: 'Hard Level', levelColor: '#FF6B6B', rating: '4.7' },
      { title: 'Asia Trip Holidays', url: 'https://asiatripholidays.com', category: 'Travel', location: 'Manali, Himachal Pradesh', desc: 'Domestic & international holiday package platform (Himachal, North India, Dubai, Bangkok, Bhutan) built for conversions and mobile-first browsing.', thumb: '/assets/img/recentworks/asiatripholidayas.png', popular: false, pages: '22', projectType: 'Booking', delivery: '2 Weeks', level: 'Easy Level', levelColor: '#6BCB77', rating: '4.6' },
      { title: 'Dream Destination Explorer', url: 'https://dreamdestinationexplorer.com/', category: 'Travel', location: 'Spiritual Tours', desc: 'Spiritual travel portal with clean layout and easy tour booking flow.', thumb: '/assets/img/recentworks/Drem-destination-exploer.png', popular: false, pages: '24', projectType: 'Portal', delivery: '3 Weeks', level: 'Moderate Level', levelColor: '#4D96FF', rating: '4.5' },
      { title: 'Harmony Hotel Manali', url: 'https://harmonyhotelmanali.com', category: 'Hospitality', location: 'Manali, India', desc: 'Hospitality website with elegant design and direct reservation features.', thumb: '/assets/img/recentworks/dyarkoul.png', popular: true, pages: '20', projectType: 'Hospitality', delivery: '2 Weeks', level: 'Easy Level', levelColor: '#6BCB77', rating: '4.8' }
    ],
    transformation: {
      eyebrow: "OUR APPROACH",
      title: "End-To-End Web Design & Development Solutions.",
      description: "We craft stunning, highly functional websites that captivate audiences and drive conversions. Our comprehensive approach ensures your digital presence is built for long-term success.",
      centerTextLine1: "WEB",
      centerTextLine2: "DESIGN",
      quadrants: [
        { labelLine1: "UI/UX", labelLine2: "Design", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "Custom", labelLine2: "Development", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "SEO", labelLine2: "Optimization", iconClass: "fa-solid fa-angles-left" },
        { labelLine1: "Ongoing", labelLine2: "Support", iconClass: "fa-solid fa-angles-right" }
      ]
    },
    pricing: {
      badge: "Pricing Plans",
      title: "Affordable Web Design Packages",
      subtitle: "Transparent pricing tailored for businesses of all sizes. No hidden fees.",
      plans: [
        { name: 'BASIC', pages: 'Up to 8 Pages', price: '7,999', period: '/-', features: ['8 Pages', '2 Email IDs', 'Contact Form', 'Gallery', 'Custom Design', 'Google Map', 'Mobile Compatible', '12 Months Support'], excluded: ['Domain Name', 'Free Hosting', 'SEO', 'SSL', 'CMS'], popular: false },
        { name: 'STANDARD', pages: 'Up to 25 Pages', price: '14,999', period: '/-', features: ['Domain Name', '25 Pages', '5 Email IDs', 'Free Hosting (1 Year)', 'Contact Form', 'Gallery', 'Custom Design', 'Google Map', 'Mobile Compatible', 'SSL', 'CMS', '12 Months Support'], excluded: ['SEO'], popular: true },
        { name: 'PREMIUM', pages: 'Up to 50 Pages', price: '19,999', period: '/-', features: ['Domain Name', '50 Pages', '6 Email IDs', 'Free Hosting (1 Year)', 'Contact Form', 'Gallery', 'Custom Design', 'Google Map', 'Mobile Compatible', 'SSL', 'CMS', '1 Month SEO', '12 Months Support'], excluded: [], popular: false },
        { name: 'ADVANCE', pages: 'Unlimited Pages', price: 'Custom', period: 'Quote', features: ['Domain Name', 'Unlimited Pages', 'Up to 10 Email IDs', 'Free Hosting (1 Year)', 'Contact Form', 'Gallery', 'Custom Design', 'Google Map', 'Mobile Compatible', 'SSL', 'CMS', 'Initial SEO', '12 Months Support'], excluded: [], popular: false }
      ]
    },
    stats: [
      { value: '1000+', label: 'Projects' },
      { value: '500+', label: 'Clients' },
      { value: '8+', label: 'Years' },
      { value: '24/7', label: 'Support' }
    ],
    cta: {
      titleStart: "Let's Build Your",
      titleHighlight: "Dream Website",
      description: "Ready to elevate your digital presence? Get in touch with our experts today and start your journey towards online success."
    }
  },
  "website-development": {
    slug: "website-development",
    seo: {
      title: "Website Development Services | Gashwa Technologies",
      description: "Robust and scalable website development services. We build custom web applications and dynamic sites for modern businesses."
    },
    hero: {
      slides: [
        {
          title: 'Robust Web Development for Modern Businesses',
          description: 'We build scalable, secure, and high-performance web applications tailored to your operational needs.',
          image: '/assets/img/shape/webdeisgningslider1.jpg',
        },
        {
          title: 'Full-Stack Solutions for Every Industry',
          description: 'From frontend interfaces to backend databases, our development team delivers complete solutions.',
          image: '/assets/img/shape/webdeisgningslider2.jpg',
        },
      ],
      trustItems: ['Next.js / React', 'Node.js / Express', 'Database Design', 'API Integration', 'Cloud Hosting', 'Scalable Architecture', 'Secure Coding', 'Ongoing Maintenance']
    },
    features: [
      { icon: 'fa-code', title: 'Custom Web Apps', description: 'Tailored applications designed specifically to streamline your business workflows and data management.', accent: '#6366f1', bg: '#eef2ff' },
      { icon: 'fa-database', title: 'Secure Databases', description: 'Robust database architecture ensuring data integrity, security, and lightning-fast retrieval.', accent: '#32649f', bg: '#ecf3ff' },
      { icon: 'fa-server', title: 'Scalable Backend', description: 'Cloud-ready backend systems designed to grow seamlessly as your user base expands.', accent: '#06b6d4', bg: '#ecfeff' },
      { icon: 'fa-plug', title: 'API Integrations', description: 'Connecting your platform with third-party tools, payment gateways, and external services.', accent: '#8b5cf6', bg: '#f5f3ff' },
      { icon: 'fa-shield-alt', title: 'High Security', description: 'Implementing industry best practices to protect your application from vulnerabilities and attacks.', accent: '#10b981', bg: '#ecfdf5' }
    ],
    process: {
      badge: "Development Process",
      titleStart: "How We Engineer Your",
      titleHighlight: "Application",
      subtitle: "A rigorous engineering lifecycle ensuring flawless execution from code to deployment.",
      steps: [
        { step: '01', title: 'Architecture', desc: 'Planning the tech stack, database schema, and system architecture for optimal performance.', icon: 'fa-sitemap', accent: '#32649F', bg: '#fffbeb' },
        { step: '02', title: 'Coding', desc: 'Writing clean, modular, and well-documented code using modern frameworks.', icon: 'fa-laptop-code', accent: '#6366f1', bg: '#eef2ff' },
        { step: '03', title: 'Testing', desc: 'Comprehensive QA, unit testing, and vulnerability checks to ensure reliability.', icon: 'fa-bug', accent: '#06b6d4', bg: '#ecfeff' },
        { step: '04', title: 'Deployment', desc: 'Setting up CI/CD pipelines and deploying the app to secure cloud infrastructure.', icon: 'fa-server', accent: '#10b981', bg: '#ecfdf5' }
      ]
    },
    recentWorks: [
      { title: 'Custom ERP System', url: '#', category: 'Development', location: 'Enterprise', desc: 'A full-scale custom ERP solution for a manufacturing client.', thumb: '/assets/img/recentworks/horizonboundtravels.png', popular: true, pages: '50+', projectType: 'Web App', delivery: '8 Weeks', level: 'Hard Level', levelColor: '#FF6B6B', rating: '4.9' },
      { title: 'E-Learning Platform', url: '#', category: 'Education', location: 'Global', desc: 'Dynamic course management system with video streaming and quizzes.', thumb: '/assets/img/recentworks/whiteoakpictures.png', popular: true, pages: '30+', projectType: 'Portal', delivery: '6 Weeks', level: 'Moderate Level', levelColor: '#4D96FF', rating: '4.8' }
    ],
    transformation: {
      eyebrow: "OUR TECH STACK",
      title: "Advanced Web Development Ecosystem.",
      description: "We utilize cutting-edge technologies to build applications that are not just functional, but powerful, fast, and future-proof.",
      centerTextLine1: "WEB",
      centerTextLine2: "DEV",
      quadrants: [
        { labelLine1: "Frontend", labelLine2: "React/Next", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "Backend", labelLine2: "Node/API", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "Database", labelLine2: "SQL/NoSQL", iconClass: "fa-solid fa-angles-left" },
        { labelLine1: "Cloud", labelLine2: "Deployment", iconClass: "fa-solid fa-angles-right" }
      ]
    },
    pricing: {
      badge: "Development Plans",
      title: "Scalable Development Packages",
      subtitle: "Flexible pricing models for applications of varying complexity.",
      plans: [
        { name: 'BASIC APP', pages: 'Small Scale', price: '29,999', period: '/-', features: ['Custom Frontend', 'Basic Backend API', 'User Auth', 'Standard Database', 'Mobile Responsive', '1 Month Support'], excluded: ['3rd Party Integrations', 'Advanced Security', 'Load Balancing'], popular: false },
        { name: 'PRO APP', pages: 'Medium Scale', price: '59,999', period: '/-', features: ['Complex Frontend', 'Advanced Backend', 'Role Based Auth', 'Scalable Database', 'Payment Gateway', 'API Integrations', '3 Months Support'], excluded: ['Dedicated Server Config'], popular: true },
        { name: 'ENTERPRISE', pages: 'Large Scale', price: 'Custom', period: 'Quote', features: ['Microservices', 'High Availability', 'Enterprise Security', 'Custom ERP/CRM', 'Dedicated DevOps', 'SLA Support'], excluded: [], popular: false }
      ]
    },
    stats: [
      { value: '500+', label: 'Apps Built' },
      { value: '99%', label: 'Uptime' },
      { value: '1M+', label: 'Code Lines' },
      { value: '24/7', label: 'Monitoring' }
    ],
    cta: {
      titleStart: "Let's Engineer Your",
      titleHighlight: "Next Big Idea",
      description: "Need a powerful web application? Discuss your requirements with our technical experts."
    }
  }
};
