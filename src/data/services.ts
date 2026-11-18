export interface ServiceData {
  slug: string;
  pageContent?: {
    name: string;
    heroLabel: string;
    breadcrumbTitle: string;
    breadcrumbLocation: string;
    featureTitle: string;
    featureLocation: string;
    featureDescription: string;
    portfolioDescription: string;
  };
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

type CategoryServiceConfig = Omit<ServiceData, 'pageContent' | 'seo' | 'hero'> & {
  name: string;
  seoDescription: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  trustItems: string[];
};

function createCategoryService({
  name,
  seoDescription,
  heroTitle,
  heroDescription,
  heroImage,
  trustItems,
  ...service
}: CategoryServiceConfig): ServiceData {
  return {
    ...service,
    pageContent: {
      name,
      heroLabel: `${name.toUpperCase()} SERVICES IN HIMACHAL`,
      breadcrumbTitle: `${name} Company in`,
      breadcrumbLocation: 'Himachal Pradesh',
      featureTitle: `${name} Company in`,
      featureLocation: 'Shimla',
      featureDescription: seoDescription,
      portfolioDescription: `Explore our ${name.toLowerCase()} solutions, planned around your business, audience, and goals.`
    },
    seo: {
      title: `${name} Services | Gashwa Technologies`,
      description: seoDescription
    },
    hero: {
      slides: [{ title: heroTitle, description: heroDescription, image: heroImage }],
      trustItems
    }
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
      { icon: 'fa-users', title: 'User-Focused Approach', description: 'Thorough research into user preferences and behavior patterns to tailor design elements that enhance engagement.', accent: '#0D4892', bg: '#ecf3ff' },
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
        { step: '01', title: 'Discovery', desc: 'Understanding your goals, target audience & brand vision through detailed consultation.', icon: 'fa-lightbulb', accent: '#0D4892', bg: '#fffbeb' },
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
    pageContent: {
      name: "Website Development",
      heroLabel: "WEBSITE DEVELOPMENT COMPANY IN HIMACHAL",
      breadcrumbTitle: "Website Development Company in",
      breadcrumbLocation: "Himachal Pradesh",
      featureTitle: "Website Development Company in",
      featureLocation: "Shimla",
      featureDescription: "We build fast, secure, and scalable websites and web applications tailored to your business. From custom frontend experiences and backend systems to database architecture and API integrations, our development team turns your requirements into reliable digital solutions.",
      portfolioDescription: "Explore web applications and digital platforms built with scalable architecture, secure integrations, and reliable performance."
    },
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
      { icon: 'fa-database', title: 'Secure Databases', description: 'Robust database architecture ensuring data integrity, security, and lightning-fast retrieval.', accent: '#0D4892', bg: '#ecf3ff' },
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
        { step: '01', title: 'Architecture', desc: 'Planning the tech stack, database schema, and system architecture for optimal performance.', icon: 'fa-sitemap', accent: '#0D4892', bg: '#fffbeb' },
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
  },
  "mobile-application-development": {
    slug: "mobile-application-development",
    pageContent: {
      name: "Mobile Application Development",
      heroLabel: "MOBILE APP DEVELOPMENT COMPANY IN HIMACHAL",
      breadcrumbTitle: "Mobile Application Development Company in",
      breadcrumbLocation: "Himachal Pradesh",
      featureTitle: "Mobile App Development Company in",
      featureLocation: "Shimla",
      featureDescription: "We design and develop mobile applications that help businesses connect with customers on the devices they use every day. From planning and user-friendly interfaces to development, testing, and launch, our team creates custom Android and iOS apps built around your goals.",
      portfolioDescription: "Explore mobile app concepts and solutions designed for clear, useful experiences on Android and iOS."
    },
    seo: {
      title: "Mobile Application Development Services | Gashwa Technologies",
      description: "Custom Android and iOS mobile application development services by Gashwa Technologies. Plan, design, build, and launch an app for your business."
    },
    hero: {
      slides: [
        {
          title: "Mobile Apps Built Around Your Business",
          description: "Reach your customers wherever they are with intuitive Android and iOS applications designed for real-world use.",
          image: "/assets/img/service/mobileapp.png"
        }
      ],
      trustItems: ["Android Apps", "iOS Apps", "Custom UI/UX", "Secure Development", "API Integration", "App Testing", "App Store Launch", "Ongoing Support"]
    },
    features: [
      { icon: "fa-mobile-alt", title: "Android & iOS Apps", description: "Build for the platforms your customers use, with a consistent and polished experience across devices.", accent: "#0D4892", bg: "#ecf3ff" },
      { icon: "fa-palette", title: "User-Centered Design", description: "Simple, intuitive screens that make it easier for people to find features and complete tasks.", accent: "#6366f1", bg: "#eef2ff" },
      { icon: "fa-plug", title: "API & Service Integration", description: "Connect your app to business systems, payment services, maps, notifications, and other tools.", accent: "#06b6d4", bg: "#ecfeff" },
      { icon: "fa-shield-alt", title: "Security & Reliability", description: "Apply sound development practices and thorough testing to help protect users and their data.", accent: "#10b981", bg: "#ecfdf5" },
      { icon: "fa-sync-alt", title: "App Maintenance", description: "Keep your app compatible and useful with updates, improvements, and ongoing technical support.", accent: "#8b5cf6", bg: "#f5f3ff" }
    ],
    process: {
      badge: "Our App Development Process",
      titleStart: "From Idea to",
      titleHighlight: "App Launch",
      subtitle: "A clear, collaborative process to take your mobile app from the first conversation through release.",
      steps: [
        { step: "01", title: "Discovery", desc: "Define your audience, goals, app features, and platform requirements together.", icon: "fa-lightbulb", accent: "#0D4892", bg: "#fffbeb" },
        { step: "02", title: "UI/UX Design", desc: "Plan the user journey and create polished screens for a simple, consistent experience.", icon: "fa-pen-ruler", accent: "#6366f1", bg: "#eef2ff" },
        { step: "03", title: "Development & QA", desc: "Build the app and test key flows across supported devices and platforms.", icon: "fa-code", accent: "#06b6d4", bg: "#ecfeff" },
        { step: "04", title: "Launch & Support", desc: "Prepare your app for release and provide support for updates and improvements.", icon: "fa-rocket", accent: "#10b981", bg: "#ecfdf5" }
      ]
    },
    recentWorks: [
      { title: "Android App Experience", url: "#", category: "Mobile App", location: "Android", desc: "A mobile-first app concept focused on clear navigation and everyday usability.", thumb: "/assets/img/service/mobile-app.webp", popular: true, pages: "Custom", projectType: "Android", delivery: "By Scope", level: "Custom Build", levelColor: "#4D96FF", rating: "5.0" },
      { title: "iOS App Experience", url: "#", category: "Mobile App", location: "iOS", desc: "An iOS app concept designed to make essential features easy to access on the go.", thumb: "/assets/img/service/representation-user-experience.webp", popular: false, pages: "Custom", projectType: "iOS", delivery: "By Scope", level: "Custom Build", levelColor: "#6BCB77", rating: "5.0" }
    ],
    transformation: {
      eyebrow: "MOBILE APP SOLUTIONS",
      title: "A Thoughtful Approach to Mobile App Development.",
      description: "From the first user journey to launch-day testing, we bring design and development together to create mobile apps that serve your customers and support your business goals.",
      centerTextLine1: "MOBILE",
      centerTextLine2: "APPS",
      quadrants: [
        { labelLine1: "Android", labelLine2: "Development", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "iOS", labelLine2: "Development", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "UI/UX", labelLine2: "Design", iconClass: "fa-solid fa-angles-left" },
        { labelLine1: "Testing", labelLine2: " & Support", iconClass: "fa-solid fa-angles-right" }
      ]
    },
    pricing: {
      badge: "App Development Plans",
      title: "Mobile App Packages Built Around Your Needs",
      subtitle: "Every app has a different scope. Contact us for a plan and quote tailored to your features and platforms.",
      plans: [
        { name: "STARTER APP", pages: "Core Features", price: "Custom", period: "Quote", features: ["Project Discovery", "Core App Screens", "Single Platform", "Essential Testing", "Launch Guidance"], excluded: ["Advanced Integrations", "Ongoing Maintenance"], popular: false },
        { name: "BUSINESS APP", pages: "Custom Features", price: "Custom", period: "Quote", features: ["Custom UI/UX Design", "Android or iOS App", "API Integration", "Device Testing", "Launch Support", "Post-Launch Support"], excluded: [], popular: true },
        { name: "ENTERPRISE APP", pages: "Advanced Solutions", price: "Custom", period: "Quote", features: ["Multi-Platform Planning", "Advanced Integrations", "Scalable Architecture", "Expanded QA", "Release Assistance", "Ongoing Support"], excluded: [], popular: false }
      ]
    },
    stats: [
      { value: "Android", label: "App Development" },
      { value: "iOS", label: "App Development" },
      { value: "End-to-End", label: "Project Support" },
      { value: "24/7", label: "Support" }
    ],
    cta: {
      titleStart: "Let's Build Your",
      titleHighlight: "Mobile App",
      description: "Have an app idea? Tell us what you want to build and our team will help you plan the next steps."
    }
  },
  "internet-marketing": createCategoryService({
    slug: "internet-marketing",
    name: "Internet Marketing",
    seoDescription: "Grow your online visibility and connect with the right customers through search, content, paid campaigns, and reputation management.",
    heroTitle: "Digital Marketing That Moves Your Business Forward",
    heroDescription: "Reach the right people with thoughtful online marketing strategies built around your business goals.",
    heroImage: "/assets/img/service/Modern-Digital-Marketing.png",
    trustItems: ["SEO Strategy", "Paid Campaigns", "Content Marketing", "Social Media", "Lead Generation", "Campaign Reporting", "Online Reputation", "Ongoing Optimization"],
    features: [
      { icon: "fa-search", title: "Search Engine Optimization", description: "Strengthen your organic visibility with technical, on-page, and content-focused SEO improvements.", accent: "#0D4892", bg: "#ecf3ff" },
      { icon: "fa-bullseye", title: "Performance Campaigns", description: "Plan measurable paid campaigns to reach relevant audiences and make the most of your advertising budget.", accent: "#6366f1", bg: "#eef2ff" },
      { icon: "fa-pen-nib", title: "Content & Social Media", description: "Create useful content and a consistent social presence that keeps your brand connected to customers.", accent: "#06b6d4", bg: "#ecfeff" },
      { icon: "fa-chart-line", title: "Analytics & Reporting", description: "Understand campaign performance with clear reporting and practical recommendations for improvement.", accent: "#10b981", bg: "#ecfdf5" },
      { icon: "fa-star", title: "Online Reputation", description: "Build trust by monitoring your online presence and supporting thoughtful customer engagement.", accent: "#8b5cf6", bg: "#f5f3ff" }
    ],
    process: {
      badge: "Our Marketing Process",
      titleStart: "A Clear Path to",
      titleHighlight: "Growth",
      subtitle: "We align strategy, campaigns, and measurement to your audience and business priorities.",
      steps: [
        { step: "01", title: "Understand", desc: "Review your goals, audience, market, and current digital presence.", icon: "fa-lightbulb", accent: "#0D4892", bg: "#fffbeb" },
        { step: "02", title: "Plan", desc: "Choose the right channels, priorities, and measurable campaign objectives.", icon: "fa-pen-ruler", accent: "#6366f1", bg: "#eef2ff" },
        { step: "03", title: "Launch", desc: "Build and manage campaigns with relevant content and audience targeting.", icon: "fa-rocket", accent: "#06b6d4", bg: "#ecfeff" },
        { step: "04", title: "Improve", desc: "Review results and refine the strategy based on campaign performance.", icon: "fa-chart-line", accent: "#10b981", bg: "#ecfdf5" }
      ]
    },
    recentWorks: [
      { title: "Search Visibility Strategy", url: "#", category: "SEO", location: "Organic Search", desc: "An SEO-focused approach to improve discoverability and connect content with relevant searches.", thumb: "/assets/img/service/seo.webp", popular: true, pages: "Custom", projectType: "SEO", delivery: "Ongoing", level: "Custom Plan", levelColor: "#4D96FF", rating: "5.0" },
      { title: "Digital Campaign Planning", url: "#", category: "Marketing", location: "Paid Media", desc: "A campaign plan connecting audience research, messaging, and performance measurement.", thumb: "/assets/img/service/digital-marketing.webp", popular: false, pages: "Custom", projectType: "Campaign", delivery: "By Scope", level: "Custom Plan", levelColor: "#6BCB77", rating: "5.0" }
    ],
    transformation: {
      eyebrow: "OUR MARKETING APPROACH",
      title: "Practical Digital Marketing, Focused on Your Goals.",
      description: "We bring strategy, campaign execution, and performance insights together to help your business build visibility and meaningful customer connections.",
      centerTextLine1: "DIGITAL",
      centerTextLine2: "GROWTH",
      quadrants: [
        { labelLine1: "Search", labelLine2: "Visibility", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "Paid", labelLine2: "Campaigns", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "Content", labelLine2: "Strategy", iconClass: "fa-solid fa-angles-left" },
        { labelLine1: "Measure", labelLine2: " & Improve", iconClass: "fa-solid fa-angles-right" }
      ]
    },
    pricing: {
      badge: "Marketing Plans",
      title: "Marketing Support That Fits Your Goals",
      subtitle: "Campaign scope and channel mix depend on your business. Talk to us for a tailored plan.",
      plans: [
        { name: "SEO STARTER", pages: "Core SEO", price: "Custom", period: "Quote", features: ["SEO Audit", "Keyword Research", "On-Page Recommendations", "Monthly Progress Review"], excluded: ["Paid Ad Spend", "Social Media Management"], popular: false },
        { name: "GROWTH PLAN", pages: "Multi-Channel", price: "Custom", period: "Quote", features: ["SEO Planning", "Campaign Management", "Content Recommendations", "Performance Reporting", "Ongoing Optimization"], excluded: [], popular: true },
        { name: "FULL SERVICE", pages: "Custom Strategy", price: "Custom", period: "Quote", features: ["Channel Strategy", "SEO & Paid Media", "Content Planning", "Reputation Support", "Regular Reporting"], excluded: [], popular: false }
      ]
    },
    stats: [
      { value: "SEO", label: "Search Strategy" },
      { value: "PPC", label: "Paid Campaigns" },
      { value: "Data-Led", label: "Improvements" },
      { value: "Ongoing", label: "Support" }
    ],
    cta: {
      titleStart: "Let's Grow Your",
      titleHighlight: "Online Reach",
      description: "Tell us about your audience and goals. We will help you find the right digital marketing approach."
    }
  }),
  "cms-development": createCategoryService({
    slug: "cms-development",
    name: "CMS Development",
    seoDescription: "Manage your website content with a custom content management solution. We build and customize CMS websites to make everyday updates easier.",
    heroTitle: "Manage Your Website with Confidence",
    heroDescription: "Get a content management website shaped around your team, your workflows, and your business needs.",
    heroImage: "/assets/img/service/CMS-Development-Tech-Banner.png",
    trustItems: ["WordPress", "Shopify", "WooCommerce", "Custom CMS", "Easy Content Updates", "Responsive Design", "SEO-Friendly Setup", "Ongoing Support"],
    features: [
      { icon: "fa-edit", title: "Easy Content Management", description: "Update pages, images, and everyday content through an interface designed for your team.", accent: "#0D4892", bg: "#ecf3ff" },
      { icon: "fa-cogs", title: "CMS Tailored to You", description: "Choose and configure a content management platform around your needs and existing workflows.", accent: "#6366f1", bg: "#eef2ff" },
      { icon: "fa-mobile-alt", title: "Responsive Websites", description: "Give visitors a consistent experience across desktop, tablet, and mobile devices.", accent: "#06b6d4", bg: "#ecfeff" },
      { icon: "fa-plug", title: "Useful Integrations", description: "Connect your CMS with forms, analytics, commerce tools, and other services your business uses.", accent: "#10b981", bg: "#ecfdf5" },
      { icon: "fa-shield-alt", title: "Reliable Maintenance", description: "Keep your platform updated and supported with practical maintenance and security care.", accent: "#8b5cf6", bg: "#f5f3ff" }
    ],
    process: {
      badge: "Our CMS Process",
      titleStart: "From Requirements to",
      titleHighlight: "Easy Updates",
      subtitle: "We set up the right platform and make sure your team can confidently manage its content.",
      steps: [
        { step: "01", title: "Requirements", desc: "Map your content, team workflows, and platform requirements.", icon: "fa-lightbulb", accent: "#0D4892", bg: "#fffbeb" },
        { step: "02", title: "Platform & Design", desc: "Select a suitable CMS and plan the structure and visual experience.", icon: "fa-layer-group", accent: "#6366f1", bg: "#eef2ff" },
        { step: "03", title: "Build & Configure", desc: "Develop the website, configure content tools, and connect required services.", icon: "fa-code", accent: "#06b6d4", bg: "#ecfeff" },
        { step: "04", title: "Train & Launch", desc: "Test the experience, guide your team, and prepare the site for launch.", icon: "fa-rocket", accent: "#10b981", bg: "#ecfdf5" }
      ]
    },
    recentWorks: [
      { title: "Content-Managed Website", url: "#", category: "CMS", location: "Business Website", desc: "A CMS website structure designed to make routine content updates straightforward.", thumb: "/assets/img/service/wordpress.png", popular: true, pages: "Custom", projectType: "CMS", delivery: "By Scope", level: "Custom Build", levelColor: "#4D96FF", rating: "5.0" },
      { title: "Online Store Management", url: "#", category: "Ecommerce CMS", location: "Online Store", desc: "A manageable store setup for organizing products and maintaining business content.", thumb: "/assets/img/service/shopify.png", popular: false, pages: "Custom", projectType: "CMS", delivery: "By Scope", level: "Custom Build", levelColor: "#6BCB77", rating: "5.0" }
    ],
    transformation: {
      eyebrow: "FLEXIBLE CONTENT PLATFORMS",
      title: "A Content Management Setup That Works for Your Team.",
      description: "From platform selection and setup to content workflows and support, we make it easier for your team to keep its website current.",
      centerTextLine1: "CONTENT",
      centerTextLine2: "MANAGEMENT",
      quadrants: [
        { labelLine1: "Platform", labelLine2: "Selection", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "Custom", labelLine2: "Website", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "Content", labelLine2: "Workflows", iconClass: "fa-solid fa-angles-left" },
        { labelLine1: "Updates", labelLine2: " & Support", iconClass: "fa-solid fa-angles-right" }
      ]
    },
    pricing: {
      badge: "CMS Packages",
      title: "A CMS Package for Your Website",
      subtitle: "Get a quote based on your chosen platform, content needs, integrations, and design requirements.",
      plans: [
        { name: "CMS STARTER", pages: "Essential Setup", price: "Custom", period: "Quote", features: ["CMS Installation", "Core Website Pages", "Responsive Theme Setup", "Content Editing Guidance"], excluded: ["Advanced Integrations", "Custom Modules"], popular: false },
        { name: "BUSINESS CMS", pages: "Custom Website", price: "Custom", period: "Quote", features: ["Custom Design", "CMS Configuration", "Content Migration", "Essential Integrations", "Launch Support"], excluded: [], popular: true },
        { name: "ADVANCED CMS", pages: "Extended Features", price: "Custom", period: "Quote", features: ["Advanced Customization", "Extended Integrations", "Role-Based Workflows", "Performance Review", "Ongoing Support"], excluded: [], popular: false }
      ]
    },
    stats: [
      { value: "WordPress", label: "CMS Websites" },
      { value: "Shopify", label: "Online Stores" },
      { value: "Custom", label: "Configurations" },
      { value: "Ongoing", label: "Support" }
    ],
    cta: {
      titleStart: "Make Website Updates",
      titleHighlight: "Easier",
      description: "Share your content and workflow needs, and we will help you choose and build the right CMS solution."
    }
  }),
  "graphic-designing": createCategoryService({
    slug: "graphic-designing",
    name: "Graphic Designing",
    seoDescription: "Build a consistent visual identity with professional graphic design for logos, brochures, business stationery, advertising, and digital campaigns.",
    heroTitle: "Design That Makes Your Brand Stand Out",
    heroDescription: "Create a distinctive and consistent brand presence across print, digital, and everyday business materials.",
    heroImage: "/assets/img/service/graphic-designing.png",
    trustItems: ["Logo Design", "Brand Identity", "Brochures", "Business Stationery", "Advertising Design", "Digital Graphics", "Print-Ready Files", "Custom Creative"],
    features: [
      { icon: "fa-pen-nib", title: "Brand Identity", description: "Create a recognizable visual direction that reflects your business and speaks to your audience.", accent: "#0D4892", bg: "#ecf3ff" },
      { icon: "fa-palette", title: "Marketing Materials", description: "Design brochures, flyers, catalogues, and advertisements that present your message clearly.", accent: "#6366f1", bg: "#eef2ff" },
      { icon: "fa-id-card", title: "Business Stationery", description: "Bring your brand into everyday use with cohesive business cards, letterheads, and stationery.", accent: "#06b6d4", bg: "#ecfeff" },
      { icon: "fa-share-alt", title: "Digital Graphics", description: "Prepare engaging creative assets for social media, websites, and digital campaigns.", accent: "#10b981", bg: "#ecfdf5" },
      { icon: "fa-print", title: "Print-Ready Artwork", description: "Receive carefully prepared designs suitable for professional printing and digital sharing.", accent: "#8b5cf6", bg: "#f5f3ff" }
    ],
    process: {
      badge: "Our Design Process",
      titleStart: "From Brief to",
      titleHighlight: "Finished Design",
      subtitle: "A collaborative creative process that keeps your goals and brand identity at the center.",
      steps: [
        { step: "01", title: "Creative Brief", desc: "Understand your brand, audience, purpose, and preferred style.", icon: "fa-lightbulb", accent: "#0D4892", bg: "#fffbeb" },
        { step: "02", title: "Concepts", desc: "Explore creative directions and develop a visual concept for your project.", icon: "fa-palette", accent: "#6366f1", bg: "#eef2ff" },
        { step: "03", title: "Refinement", desc: "Review the selected design and refine it with your feedback.", icon: "fa-pen-ruler", accent: "#06b6d4", bg: "#ecfeff" },
        { step: "04", title: "Final Delivery", desc: "Prepare the approved artwork for its intended print or digital use.", icon: "fa-file-export", accent: "#10b981", bg: "#ecfdf5" }
      ]
    },
    recentWorks: [
      { title: "Brand Identity Design", url: "#", category: "Branding", location: "Visual Identity", desc: "A cohesive identity direction for consistent use across business touchpoints.", thumb: "/assets/img/service/graphic-designer.webp", popular: true, pages: "Custom", projectType: "Branding", delivery: "By Scope", level: "Custom Design", levelColor: "#4D96FF", rating: "5.0" },
      { title: "Business Marketing Materials", url: "#", category: "Print Design", location: "Print & Digital", desc: "Coordinated promotional artwork shaped around a clear message and brand style.", thumb: "/assets/img/service/graphic-designer-software.webp", popular: false, pages: "Custom", projectType: "Creative", delivery: "By Scope", level: "Custom Design", levelColor: "#6BCB77", rating: "5.0" }
    ],
    transformation: {
      eyebrow: "CREATIVE BRAND SOLUTIONS",
      title: "Visual Communication That Brings Your Brand Together.",
      description: "We combine thoughtful design and consistent brand choices to help your business communicate clearly across print and digital channels.",
      centerTextLine1: "BRAND",
      centerTextLine2: "DESIGN",
      quadrants: [
        { labelLine1: "Visual", labelLine2: "Identity", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "Print", labelLine2: "Materials", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "Digital", labelLine2: "Graphics", iconClass: "fa-solid fa-angles-left" },
        { labelLine1: "Creative", labelLine2: "Direction", iconClass: "fa-solid fa-angles-right" }
      ]
    },
    pricing: {
      badge: "Design Packages",
      title: "Graphic Design Packages for Your Project",
      subtitle: "Pricing depends on the type and scope of creative work. Request a quote for your specific design needs.",
      plans: [
        { name: "SINGLE DESIGN", pages: "One Deliverable", price: "Custom", period: "Quote", features: ["Project Brief", "One Design Deliverable", "Digital File Delivery"], excluded: ["Multiple Concepts", "Print Production"], popular: false },
        { name: "BRAND ESSENTIALS", pages: "Multiple Assets", price: "Custom", period: "Quote", features: ["Creative Direction", "Coordinated Brand Assets", "Revision Discussion", "Digital & Print Files"], excluded: [], popular: true },
        { name: "CREATIVE SUPPORT", pages: "Ongoing Design", price: "Custom", period: "Quote", features: ["Ongoing Design Requests", "Campaign Creative", "Brand Consistency", "Flexible Scope"], excluded: [], popular: false }
      ]
    },
    stats: [
      { value: "Custom", label: "Creative Design" },
      { value: "Print", label: "Ready Artwork" },
      { value: "Digital", label: "Brand Assets" },
      { value: "One-to-One", label: "Collaboration" }
    ],
    cta: {
      titleStart: "Let's Create Your",
      titleHighlight: "Brand Identity",
      description: "Tell us what you are designing and where it will be used. We will help shape the right creative solution."
    }
  }),
  "ecommerce-solutions": createCategoryService({
    slug: "ecommerce-solutions",
    name: "Ecommerce Solutions",
    seoDescription: "Launch and grow your online store with ecommerce design and development, product catalog setup, payment integrations, and practical store support.",
    heroTitle: "An Online Store Designed for Your Customers",
    heroDescription: "Give shoppers a smooth path from browsing products to placing an order with a store built for your business.",
    heroImage: "/assets/img/service/ecm.png",
    trustItems: ["Online Store Design", "Product Catalogs", "Shopping Cart", "Payment Integration", "Mobile Shopping", "Store Management", "Ecommerce SEO", "Ongoing Support"],
    features: [
      { icon: "fa-store", title: "Custom Online Stores", description: "Build a clear storefront that presents your products and reflects your brand.", accent: "#0D4892", bg: "#ecf3ff" },
      { icon: "fa-box-open", title: "Product Catalog Setup", description: "Organize product details, categories, and images to help shoppers find what they need.", accent: "#6366f1", bg: "#eef2ff" },
      { icon: "fa-shopping-cart", title: "Smooth Checkout", description: "Create a straightforward cart and checkout journey with the payment options your customers need.", accent: "#06b6d4", bg: "#ecfeff" },
      { icon: "fa-mobile-alt", title: "Mobile Shopping", description: "Make browsing and purchasing convenient across phones, tablets, and desktop devices.", accent: "#10b981", bg: "#ecfdf5" },
      { icon: "fa-chart-line", title: "Store Growth Tools", description: "Connect analytics and marketing tools to support informed improvements to your store.", accent: "#8b5cf6", bg: "#f5f3ff" }
    ],
    process: {
      badge: "Our Ecommerce Process",
      titleStart: "From Product Catalog to",
      titleHighlight: "Checkout",
      subtitle: "We build your store around the products you sell and the experience your customers expect.",
      steps: [
        { step: "01", title: "Store Planning", desc: "Define your products, customer journey, platform, and business requirements.", icon: "fa-lightbulb", accent: "#0D4892", bg: "#fffbeb" },
        { step: "02", title: "Store Design", desc: "Design a storefront that presents your products clearly and supports easy browsing.", icon: "fa-palette", accent: "#6366f1", bg: "#eef2ff" },
        { step: "03", title: "Build & Integrate", desc: "Set up the catalog, shopping cart, payment services, and required integrations.", icon: "fa-code", accent: "#06b6d4", bg: "#ecfeff" },
        { step: "04", title: "Test & Launch", desc: "Test key shopping flows and prepare your store for customers.", icon: "fa-rocket", accent: "#10b981", bg: "#ecfdf5" }
      ]
    },
    recentWorks: [
      { title: "Online Store Experience", url: "#", category: "Ecommerce", location: "Online Store", desc: "A customer-focused store setup for clear product discovery and simple shopping.", thumb: "/assets/img/service/shopify.png", popular: true, pages: "Custom", projectType: "Store", delivery: "By Scope", level: "Custom Build", levelColor: "#4D96FF", rating: "5.0" },
      { title: "Product Catalog & Checkout", url: "#", category: "Ecommerce", location: "Shopping Journey", desc: "A streamlined product catalog and checkout flow for browsing across devices.", thumb: "/assets/img/service/wordpress.png", popular: false, pages: "Custom", projectType: "Checkout", delivery: "By Scope", level: "Custom Build", levelColor: "#6BCB77", rating: "5.0" }
    ],
    transformation: {
      eyebrow: "END-TO-END ECOMMERCE",
      title: "A Shopping Experience That Works for Your Business.",
      description: "From storefront design to product management and checkout, we bring the essential parts of your online store into one cohesive experience.",
      centerTextLine1: "ONLINE",
      centerTextLine2: "STORE",
      quadrants: [
        { labelLine1: "Product", labelLine2: "Catalog", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "Shopping", labelLine2: "Cart", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "Secure", labelLine2: "Checkout", iconClass: "fa-solid fa-angles-left" },
        { labelLine1: "Store", labelLine2: "Management", iconClass: "fa-solid fa-angles-right" }
      ]
    },
    pricing: {
      badge: "Ecommerce Packages",
      title: "Ecommerce Packages to Start Selling Online",
      subtitle: "Get a tailored quote based on your catalog size, platform, integrations, and store features.",
      plans: [
        { name: "STARTER STORE", pages: "Core Storefront", price: "Custom", period: "Quote", features: ["Store Setup", "Core Product Catalog", "Responsive Storefront", "Basic Checkout Setup"], excluded: ["Advanced Integrations", "Custom Workflows"], popular: false },
        { name: "BUSINESS STORE", pages: "Growing Catalog", price: "Custom", period: "Quote", features: ["Custom Store Design", "Product Categories", "Payment Integration", "Store Configuration", "Launch Support"], excluded: [], popular: true },
        { name: "ADVANCED STORE", pages: "Custom Ecommerce", price: "Custom", period: "Quote", features: ["Advanced Store Features", "Extended Integrations", "Custom Workflows", "Performance Review", "Ongoing Support"], excluded: [], popular: false }
      ]
    },
    stats: [
      { value: "Online", label: "Storefronts" },
      { value: "Secure", label: "Checkout Setup" },
      { value: "Mobile", label: "Shopping Experience" },
      { value: "Ongoing", label: "Store Support" }
    ],
    cta: {
      titleStart: "Ready to Start",
      titleHighlight: "Selling Online?",
      description: "Share your products and store goals, and we will help you plan an ecommerce solution that fits."
    }
  }),
  "domain-hosting": createCategoryService({
    slug: "domain-hosting",
    name: "Domain & Hosting",
    seoDescription: "Get the essentials for a dependable online presence, including domain registration, web hosting, business email, SSL certificates, and support.",
    heroTitle: "A Reliable Home for Your Website",
    heroDescription: "Choose the domain, hosting, and security services your business needs to stay available online.",
    heroImage: "/assets/img/service/cloud_computing.png",
    trustItems: ["Domain Registration", "Linux Hosting", "Windows Hosting", "VPS Hosting", "SSL Certificates", "Business Email", "Website Availability", "Technical Support"],
    features: [
      { icon: "fa-globe", title: "Domain Registration", description: "Find and register a domain name that gives your business a clear home online.", accent: "#0D4892", bg: "#ecf3ff" },
      { icon: "fa-server", title: "Web Hosting", description: "Choose a hosting option suited to your website, platform, and expected requirements.", accent: "#6366f1", bg: "#eef2ff" },
      { icon: "fa-cloud", title: "VPS Hosting", description: "Explore virtual server hosting for projects that need more control over their environment.", accent: "#06b6d4", bg: "#ecfeff" },
      { icon: "fa-lock", title: "SSL Certificates", description: "Set up SSL certificates to enable encrypted connections between your website and its visitors.", accent: "#10b981", bg: "#ecfdf5" },
      { icon: "fa-envelope", title: "Business Email", description: "Use email addresses connected to your domain for consistent business communication.", accent: "#8b5cf6", bg: "#f5f3ff" }
    ],
    process: {
      badge: "Our Hosting Process",
      titleStart: "Get Online with",
      titleHighlight: "Confidence",
      subtitle: "We help you select and configure the right domain and hosting essentials for your website.",
      steps: [
        { step: "01", title: "Assess Needs", desc: "Understand your website, platform, email, and hosting requirements.", icon: "fa-lightbulb", accent: "#0D4892", bg: "#fffbeb" },
        { step: "02", title: "Select Services", desc: "Choose a domain and hosting plan that suits your project and expected usage.", icon: "fa-server", accent: "#6366f1", bg: "#eef2ff" },
        { step: "03", title: "Configure", desc: "Set up hosting, domain settings, SSL, and business email as required.", icon: "fa-cogs", accent: "#06b6d4", bg: "#ecfeff" },
        { step: "04", title: "Support", desc: "Get help with service setup and ongoing hosting questions.", icon: "fa-headset", accent: "#10b981", bg: "#ecfdf5" }
      ]
    },
    recentWorks: [
      { title: "Website Hosting Setup", url: "#", category: "Hosting", location: "Web Infrastructure", desc: "A hosting configuration planned around the website platform and project requirements.", thumb: "/assets/img/service/cloud_computing.png", popular: true, pages: "Custom", projectType: "Hosting", delivery: "By Scope", level: "Custom Setup", levelColor: "#4D96FF", rating: "5.0" },
      { title: "Domain & Business Email", url: "#", category: "Domain Services", location: "Business Email", desc: "Domain and email services configured to support a consistent business presence.", thumb: "/assets/img/service/Website-Development.png", popular: false, pages: "Custom", projectType: "Domain", delivery: "By Scope", level: "Custom Setup", levelColor: "#6BCB77", rating: "5.0" }
    ],
    transformation: {
      eyebrow: "DOMAIN & HOSTING SERVICES",
      title: "The Essentials Behind a Dependable Online Presence.",
      description: "Bring your domain, hosting, SSL, and business email together with services selected to suit your website and business requirements.",
      centerTextLine1: "ONLINE",
      centerTextLine2: "PRESENCE",
      quadrants: [
        { labelLine1: "Domain", labelLine2: "Registration", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "Web", labelLine2: "Hosting", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "SSL", labelLine2: "Security", iconClass: "fa-solid fa-angles-left" },
        { labelLine1: "Business", labelLine2: "Email", iconClass: "fa-solid fa-angles-right" }
      ]
    },
    pricing: {
      badge: "Hosting Plans",
      title: "Choose Services for Your Website",
      subtitle: "Hosting and domain pricing depends on the service type, term, and resources required. Contact us for current options.",
      plans: [
        { name: "DOMAIN", pages: "Domain Registration", price: "Custom", period: "Quote", features: ["Domain Availability Check", "Registration Assistance", "DNS Setup Guidance"], excluded: ["Web Hosting", "Business Email"], popular: false },
        { name: "WEB PRESENCE", pages: "Hosting Essentials", price: "Custom", period: "Quote", features: ["Domain Guidance", "Hosting Setup", "SSL Setup Guidance", "Business Email Options"], excluded: [], popular: true },
        { name: "VPS & SUPPORT", pages: "Custom Hosting", price: "Custom", period: "Quote", features: ["VPS Hosting Options", "Configuration Guidance", "SSL & Domain Support", "Ongoing Technical Assistance"], excluded: [], popular: false }
      ]
    },
    stats: [
      { value: "Domain", label: "Registration" },
      { value: "Linux & Windows", label: "Hosting Options" },
      { value: "SSL", label: "Certificate Setup" },
      { value: "Business", label: "Email Services" }
    ],
    cta: {
      titleStart: "Get Your Website",
      titleHighlight: "Online",
      description: "Tell us what you need for your website, and we will help you choose the right domain and hosting services."
    }
  }),
  "digital-marketing": {
    slug: "digital-marketing",
    pageContent: {
      name: "Digital Marketing",
      heroLabel: "DIGITAL MARKETING SERVICES IN HIMACHAL & PAN-INDIA",
      breadcrumbTitle: "Digital Marketing Company in",
      breadcrumbLocation: "Himachal Pradesh",
      featureTitle: "Digital Marketing Agency in",
      featureLocation: "Shimla & Beyond",
      featureDescription: "Accelerate your brand growth with data-driven digital marketing. From targeted SEO and high-ROI PPC campaigns to social media marketing and conversion rate optimization, we help businesses expand visibility and convert visitors into loyal customers.",
      portfolioDescription: "Explore our high-impact digital marketing campaigns that deliver measurable ROI, customer engagement, and consistent lead generation."
    },
    seo: {
      title: "Digital Marketing Services | Gashwa Technologies",
      description: "Accelerate business growth with Gashwa Technologies' expert digital marketing services. SEO, Google Ads, Social Media, Content & Lead Generation."
    },
    hero: {
      slides: [
        {
          title: "Data-Driven Digital Marketing That Multiplies Your ROI",
          description: "Transform your brand presence with targeted search campaigns, organic ranking domination, and hyper-targeted advertising.",
          image: "/assets/img/service/Modern-Digital-Marketing.png"
        },
        {
          title: "Scale Your Business With Targeted Traffic & Leads",
          description: "We craft tailored multi-channel strategies that connect you directly with customers ready to buy your products and services.",
          image: "/assets/img/service/dm.png"
        }
      ],
      trustItems: ["Google Partner", "Meta Ads Expert", "ROI Driven", "SEO Specialists", "Conversion Rate Optimization", "24/7 Campaign Tracking", "10M+ Impressions Delivered", "Transparent Analytics"]
    },
    features: [
      { icon: "fa-search", title: "Search Engine Optimization (SEO)", description: "Rank higher on Google with on-page optimization, high-authority backlink building, and technical SEO that drives qualified organic traffic.", accent: "#0D4892", bg: "#ecf3ff" },
      { icon: "fa-bullseye", title: "Pay-Per-Click Advertising (PPC)", description: "Maximize conversions with targeted Google Search, Display, and Performance Max campaigns managed with ruthless budget efficiency.", accent: "#6366f1", bg: "#eef2ff" },
      { icon: "fa-share-nodes", title: "Social Media Marketing (SMM)", description: "Engage and grow active audiences across Instagram, Facebook, LinkedIn, and YouTube with creative content and targeted ad funnels.", accent: "#06b6d4", bg: "#ecfeff" },
      { icon: "fa-chart-pie", title: "Analytics & Conversion Optimization", description: "Deep dive into user behaviour data with Google Analytics 4, heatmaps, and funnel testing to maximize revenue per visitor.", accent: "#10b981", bg: "#ecfdf5" },
      { icon: "fa-envelope-open-text", title: "Content & Inbound Strategy", description: "Engaging blogs, authority articles, and email sequences that nurture prospects and position your company as the market leader.", accent: "#8b5cf6", bg: "#f5f3ff" }
    ],
    process: {
      badge: "Our Marketing Process",
      titleStart: "A Proven 4-Step",
      titleHighlight: "Growth Engine",
      subtitle: "We combine deep market research, performance creative, and algorithmic optimization to deliver consistent growth.",
      steps: [
        { step: "01", title: "Market Audit", desc: "Comprehensive analysis of competitors, audience search intent, and historical performance.", icon: "fa-lightbulb", accent: "#0D4892", bg: "#fffbeb" },
        { step: "02", title: "Strategy & Funnel", desc: "Designing customer acquisition funnels, keyword maps, and high-converting campaign angles.", icon: "fa-pen-ruler", accent: "#6366f1", bg: "#eef2ff" },
        { step: "03", title: "Campaign Launch", desc: "Launching cross-platform ads, SEO content, and landing pages with precise conversion tracking.", icon: "fa-rocket", accent: "#06b6d4", bg: "#ecfeff" },
        { step: "04", title: "Scale & Optimize", desc: "Continuous A/B testing, bid management, and revenue scaling based on live ROI data.", icon: "fa-chart-line", accent: "#10b981", bg: "#ecfdf5" }
      ]
    },
    recentWorks: [
      { title: "Travel Agency Organic Scale", url: "https://horizonboundtravels.com", category: "SEO & PPC", location: "Travel Industry", desc: "Scaled organic search queries by 340% in 6 months, generating 2,500+ qualified monthly travel bookings.", thumb: "/assets/img/service/seo.webp", popular: true, pages: "Campaign", projectType: "SEO Growth", delivery: "Ongoing", level: "High Impact", levelColor: "#4D96FF", rating: "4.9" },
      { title: "E-Commerce Lead Funnel", url: "#", category: "Paid Advertising", location: "Retail Brand", desc: "Generated a 4.6x Return On Ad Spend (ROAS) utilizing Meta ads and Google Shopping campaigns.", thumb: "/assets/img/service/digital-marketing.webp", popular: true, pages: "Ads", projectType: "Google & Meta", delivery: "Ongoing", level: "High ROI", levelColor: "#6BCB77", rating: "5.0" }
    ],
    transformation: {
      eyebrow: "OMNICHANNEL MARKETING",
      title: "Complete Growth Architecture for Modern Businesses.",
      description: "We unify search intent, audience engagement, creative messaging, and data analytics to drive sustained business profitability.",
      centerTextLine1: "GROWTH",
      centerTextLine2: "MARKETING",
      quadrants: [
        { labelLine1: "Search", labelLine2: "Optimization", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "Paid", labelLine2: "Advertising", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "Social", labelLine2: "Media", iconClass: "fa-solid fa-angles-left" },
        { labelLine1: "Analytics &", labelLine2: "ROI Scale", iconClass: "fa-solid fa-angles-right" }
      ]
    },
    pricing: {
      badge: "Growth Packages",
      title: "Performance-Driven Marketing Packages",
      subtitle: "Transparent marketing retainers tailored to boost visibility and acquire paying customers.",
      plans: [
        { name: "STARTER SEO", pages: "Local Growth", price: "11,999", period: "/Month", features: ["Up to 15 Target Keywords", "On-Page Optimization", "Google Business Profile Setup", "Monthly Ranking Report", "Standard Backlink Building", "Technical SEO Fixes"], excluded: ["Paid Ad Spend Management", "Social Media Graphics", "Video Marketing"], popular: false },
        { name: "PRO GROWTH", pages: "Multi-Channel", price: "24,999", period: "/Month", features: ["Up to 40 Target Keywords", "Full SEO + Content Strategy", "Google Ads Management", "Meta Ads Campaign Setup", "Bi-Weekly Strategy Calls", "Conversion Tracking Setup", "Monthly 12 Social Posts"], excluded: ["Dedicated Video Production"], popular: true },
        { name: "MARKET LEADER", pages: "Full Omnichannel", price: "44,999", period: "/Month", features: ["Unlimited Target Keywords", "Dedicated Marketing Strategist", "Cross-Platform Ad Scaling", "Full SMM & Content Engine", "CRO & Landing Page Tuning", "Real-Time Data Dashboard", "Weekly Sprint Reviews"], excluded: [], popular: false }
      ]
    },
    stats: [
      { value: "350%+", label: "Avg Traffic Growth" },
      { value: "4.8x", label: "Average ROAS" },
      { value: "150+", label: "Active Campaigns" },
      { value: "99%", label: "Client Retention" }
    ],
    cta: {
      titleStart: "Ready to Multiply Your",
      titleHighlight: "Sales & Leads?",
      description: "Schedule a free 30-minute growth strategy session with our senior digital marketing consultants."
    }
  },
  "security": {
    slug: "security",
    pageContent: {
      name: "Security System",
      heroLabel: "ENTERPRISE CYBERSECURITY & DIGITAL ASSET PROTECTION",
      breadcrumbTitle: "Security System & Cybersecurity in",
      breadcrumbLocation: "Himachal Pradesh",
      featureTitle: "Enterprise Security Solutions in",
      featureLocation: "Shimla & Worldwide",
      featureDescription: "Safeguard your digital infrastructure, customer data, and enterprise systems with robust cybersecurity solutions. From vulnerability assessments and cloud hardening to 24/7 security monitoring and compliance audits, we protect businesses from evolving threats.",
      portfolioDescription: "Discover how our cybersecurity engineering shields corporate networks, web applications, and customer databases from breaches and vulnerabilities."
    },
    seo: {
      title: "Security System & Cybersecurity Services | Gashwa Technologies",
      description: "Enterprise-grade cybersecurity, network protection, vulnerability testing, and 24/7 monitoring by Gashwa Technologies."
    },
    hero: {
      slides: [
        {
          title: "Zero-Trust Cybersecurity & Asset Protection",
          description: "Defend your web infrastructure, cloud databases, and customer records with proactive multi-layered threat detection and continuous security protocols.",
          image: "/assets/img/service/Security-System.png"
        },
        {
          title: "24/7 Threat Monitoring & Rapid Incident Response",
          description: "Rest easy knowing your digital perimeter is actively defended by enterprise firewalls, automated vulnerability scanning, and real-time alerts.",
          image: "/assets/img/service/service-details-1.jpg"
        }
      ],
      trustItems: ["Zero-Trust Architecture", "VAPT Audits", "Cloud Security", "DDoS Mitigation", "SSL/TLS Hardening", "24/7 Threat Watch", "Data Encryption", "ISO & GDPR Compliant"]
    },
    features: [
      { icon: "fa-shield-halved", title: "Vulnerability Assessment & Pentesting (VAPT)", description: "Proactively uncover security loopholes in your web applications, APIs, and servers before malicious actors can exploit them.", accent: "#0D4892", bg: "#ecf3ff" },
      { icon: "fa-lock", title: "Data Encryption & Zero Trust", description: "Military-grade AES-256 encryption at rest and in transit, combined with granular identity and access management.", accent: "#6366f1", bg: "#eef2ff" },
      { icon: "fa-network-wired", title: "Web Application Firewall (WAF) & DDoS Defense", description: "Filter malicious traffic, block bot attacks, and protect your web services from SQL injections, XSS, and DDoS surges.", accent: "#06b6d4", bg: "#ecfeff" },
      { icon: "fa-user-shield", title: "Compliance & Security Audits", description: "Ensure full adherence to global data privacy laws including GDPR, ISO 27001, and HIPAA compliance frameworks.", accent: "#10b981", bg: "#ecfdf5" },
      { icon: "fa-clock-rotate-left", title: "Automated Cloud Backups & Recovery", description: "Immutable snapshot backups and failover architectures guaranteeing zero data loss and instant business continuity.", accent: "#8b5cf6", bg: "#f5f3ff" }
    ],
    process: {
      badge: "Our Defense Framework",
      titleStart: "How We Protect Your",
      titleHighlight: "Digital Assets",
      subtitle: "A continuous, military-grade security lifecycle designed to prevent, detect, and neutralize threats.",
      steps: [
        { step: "01", title: "Threat Audit", desc: "Comprehensive scan and analysis of existing infrastructure, attack surfaces, and access controls.", icon: "fa-magnifying-glass", accent: "#0D4892", bg: "#fffbeb" },
        { step: "02", title: "Perimeter Hardening", desc: "Deploying custom WAF rules, SSL certificates, multi-factor authentication, and encrypted protocols.", icon: "fa-shield-halved", accent: "#6366f1", bg: "#eef2ff" },
        { step: "03", title: "Continuous Monitor", desc: "24/7 automated monitoring of system logs, traffic anomalies, and brute-force intrusion attempts.", icon: "fa-satellite-dish", accent: "#06b6d4", bg: "#ecfeff" },
        { step: "04", title: "Incident Defense", desc: "Instant automated containment, forensic investigation, and rapid recovery with detailed documentation.", icon: "fa-clipboard-check", accent: "#10b981", bg: "#ecfdf5" }
      ]
    },
    recentWorks: [
      { title: "Fintech Data Vault & WAF", url: "#", category: "Security", location: "Financial Sector", desc: "Implemented end-to-end encryption and custom WAF architecture blocking 100k+ malicious requests weekly.", thumb: "/assets/img/service/Security-System.png", popular: true, pages: "Audited", projectType: "VAPT & WAF", delivery: "3 Weeks", level: "Enterprise", levelColor: "#FF6B6B", rating: "5.0" },
      { title: "Healthcare HIPAA Shield", url: "#", category: "Compliance", location: "Healthcare Cloud", desc: "Achieved 100% HIPAA and GDPR compliance for patient records management with automated audit logs.", thumb: "/assets/img/service/service-details-1.jpg", popular: true, pages: "Certified", projectType: "Compliance", delivery: "4 Weeks", level: "High Level", levelColor: "#4D96FF", rating: "4.9" }
    ],
    transformation: {
      eyebrow: "HOLISTIC CYBER DEFENSE",
      title: "360-Degree Digital Security & Data Protection.",
      description: "We architect robust security layers that secure every touchpoint—from public API endpoints down to storage drives.",
      centerTextLine1: "CYBER",
      centerTextLine2: "DEFENSE",
      quadrants: [
        { labelLine1: "Perimeter", labelLine2: "Firewalls", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "VAPT &", labelLine2: "Audits", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "Data", labelLine2: "Encryption", iconClass: "fa-solid fa-angles-left" },
        { labelLine1: "24/7 Threat", labelLine2: "Monitoring", iconClass: "fa-solid fa-angles-right" }
      ]
    },
    pricing: {
      badge: "Security Plans",
      title: "Comprehensive Security Packages",
      subtitle: "Defend your operations with structured security and monitoring tiers designed for businesses of all sizes.",
      plans: [
        { name: "CORE SHIELD", pages: "Single Website", price: "14,999", period: "/Year", features: ["Full Vulnerability Scan", "SSL/TLS Setup & Hardening", "Brute Force Defense", "Automated Daily Backups", "Basic WAF Protection", "Incident Recovery Support"], excluded: ["24/7 SOC Monitoring", "Deep Code Audit", "Penetration Testing"], popular: false },
        { name: "BUSINESS SENTINEL", pages: "Cloud Infrastructure", price: "34,999", period: "/Year", features: ["Full VAPT Assessment", "Custom Cloud WAF Setup", "24/7 Real-Time Anomaly Watch", "Database Encryption Audit", "Role-Based Access Control", "Automated Weekly Snapshots", "Quarterly Compliance Check"], excluded: ["Dedicated Security Officer"], popular: true },
        { name: "ENTERPRISE FORTRESS", pages: "Full Corporate Stack", price: "Custom", period: "Quote", features: ["Continuous Red Team Testing", "Dedicated SOC Analyst", "Zero-Trust Architecture", "Full GDPR/ISO Compliance", "Custom DDoS Mitigation", "Immediate Incident SLA (<15m)", "Staff Security Training"], excluded: [], popular: false }
      ]
    },
    stats: [
      { value: "99.99%", label: "Threat Block Rate" },
      { value: "0", label: "Breaches Incurred" },
      { value: "24/7", label: "SOC Surveillance" },
      { value: "500+", label: "Servers Hardened" }
    ],
    cta: {
      titleStart: "Lock Down Your",
      titleHighlight: "Digital Infrastructure",
      description: "Get in touch with our certified cybersecurity specialists for an urgent vulnerability assessment."
    }
  },
  "ui-ux": {
    slug: "ui-ux",
    pageContent: {
      name: "UI/UX Designing",
      heroLabel: "USER EXPERIENCE & USER INTERFACE DESIGN STUDIO",
      breadcrumbTitle: "UI/UX Design Company in",
      breadcrumbLocation: "Himachal Pradesh",
      featureTitle: "Modern UI/UX Design in",
      featureLocation: "Shimla & Across India",
      featureDescription: "Create digital experiences people love to use. Our UI/UX design studio combines in-depth user research, wireframing, high-fidelity Figma prototyping, and user psychology to build intuitive, visually stunning interfaces that drive conversions.",
      portfolioDescription: "Explore our design case studies featuring human-centered digital products, mobile apps, SaaS dashboards, and modern web portals."
    },
    seo: {
      title: "UI/UX Design Services | Gashwa Technologies",
      description: "Professional UI/UX design services. Wireframing, interactive Figma prototypes, design systems, and conversion-centered digital interfaces."
    },
    hero: {
      slides: [
        {
          title: "Modern & Engaging Interfaces Designed Around Your Users",
          description: "We craft digital products that seamlessly blend aesthetic beauty, effortless usability, and proven behavioral psychology.",
          image: "/assets/img/service/ui-ux.png"
        },
        {
          title: "Intuitive User Journeys That Multiply Conversions",
          description: "From wireframes to interactive Figma prototypes and scalable design systems, we bring your vision to life with precision.",
          image: "/assets/img/service/representation-user-experience.webp"
        }
      ],
      trustItems: ["Figma Specialists", "Design Systems", "User Research", "Interactive Prototyping", "Mobile-First UX", "Micro-Interactions", "Accessibility (WCAG)", "Pixel-Perfect Handover"]
    },
    features: [
      { icon: "fa-pen-ruler", title: "User Research & Persona Mapping", description: "We uncover customer pain points and behavioral patterns through quantitative data and qualitative user interviews.", accent: "#0D4892", bg: "#ecf3ff" },
      { icon: "fa-layer-group", title: "Wireframing & Information Architecture", description: "Structure complex workflows into intuitive, clean page layouts and navigation trees that feel natural from first touch.", accent: "#6366f1", bg: "#eef2ff" },
      { icon: "fa-wand-magic-sparkles", title: "High-Fidelity Visual Design", description: "Stunning visual styling with thoughtful typography, harmonious color palettes, modern glassmorphism, and responsive grids.", accent: "#06b6d4", bg: "#ecfeff" },
      { icon: "fa-cubes", title: "Scalable Design Systems", description: "Atomic component libraries in Figma with reusable variants, tokens, and documentation for seamless developer integration.", accent: "#10b981", bg: "#ecfdf5" },
      { icon: "fa-mobile-screen", title: "Interactive Prototyping & Testing", description: "Clickable prototypes simulating realistic micro-animations and user flows before writing a single line of code.", accent: "#8b5cf6", bg: "#f5f3ff" }
    ],
    process: {
      badge: "Design Lifecycle",
      titleStart: "From Concept to",
      titleHighlight: "Pixel-Perfect Product",
      subtitle: "A user-centered design sprint framework tested and perfected across hundreds of successful digital products.",
      steps: [
        { step: "01", title: "Discovery & Research", desc: "Mapping customer personas, user journeys, market benchmarks, and product goals.", icon: "fa-lightbulb", accent: "#0D4892", bg: "#fffbeb" },
        { step: "02", title: "Wireframing", desc: "Rapid low-fidelity wireframing to establish core information architecture and workflows.", icon: "fa-diagram-project", accent: "#6366f1", bg: "#eef2ff" },
        { step: "03", title: "UI Design & Systems", desc: "Designing rich visual interfaces, typography scales, iconography, and reusable UI components.", icon: "fa-palette", accent: "#06b6d4", bg: "#ecfeff" },
        { step: "04", title: "Prototyping & QA", desc: "Building clickable prototypes, running usability tests, and delivering dev-ready Figma specs.", icon: "fa-circle-check", accent: "#10b981", bg: "#ecfdf5" }
      ]
    },
    recentWorks: [
      { title: "SaaS Analytics Dashboard UI", url: "#", category: "Web App", location: "SaaS Platform", desc: "Complete dashboard redesign simplifying complex data visualizations, leading to a 42% increase in user retention.", thumb: "/assets/img/service/ui-ux.png", popular: true, pages: "25 Screens", projectType: "Dashboard", delivery: "3 Weeks", level: "Mastery", levelColor: "#4D96FF", rating: "5.0" },
      { title: "Mobile Banking & Wallet UX", url: "#", category: "Mobile App", location: "Fintech", desc: "Intuitive mobile app UI with frictionless biometric onboarding, instant transfers, and dark mode support.", thumb: "/assets/img/service/representation-user-experience.webp", popular: true, pages: "40 Screens", projectType: "iOS & Android", delivery: "4 Weeks", level: "Custom Design", levelColor: "#6BCB77", rating: "4.9" }
    ],
    transformation: {
      eyebrow: "HUMAN-CENTERED DESIGN",
      title: "Design That Connects Emotion with Usability.",
      description: "We don't just make apps look modern—we engineer smooth interactions that reduce friction and inspire loyalty.",
      centerTextLine1: "USER",
      centerTextLine2: "EXPERIENCE",
      quadrants: [
        { labelLine1: "User", labelLine2: "Research", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "Wireframes &", labelLine2: "Architecture", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "Visual", labelLine2: "Systems", iconClass: "fa-solid fa-angles-left" },
        { labelLine1: "Interactive", labelLine2: "Prototypes", iconClass: "fa-solid fa-angles-right" }
      ]
    },
    pricing: {
      badge: "Design Packages",
      title: "UI/UX Design Packages",
      subtitle: "Transparent pricing for landing pages, web applications, and complete digital product design.",
      plans: [
        { name: "LANDING UX", pages: "Up to 5 Screens", price: "19,999", period: "/-", features: ["Competitor Benchmark", "Wireframes + High-Fidelity UI", "Mobile & Desktop Responsive", "Figma Source File Access", "Iconography & Assets Export", "2 Revision Rounds"], excluded: ["Complex Design System", "Interactive Prototype", "User Testing"], popular: false },
        { name: "PRODUCT UI/UX", pages: "Up to 20 Screens", price: "39,999", period: "/-", features: ["Deep User Persona Mapping", "Complete Information Architecture", "High-Fidelity Visual Design", "Interactive Clickable Prototype", "Component Library (Figma)", "Developer Handoff Specs", "Unlimited Revisions in Scope"], excluded: ["Custom Illustration Sets"], popular: true },
        { name: "DESIGN SYSTEM PRO", pages: "Full Product Suite", price: "Custom", period: "Quote", features: ["End-to-End Product Architecture", "Full Multi-Platform Design System", "Micro-Interactions & Animations", "Live User Testing Sessions", "Dev Collaboration Support", "Accessibility Compliance (WCAG)", "Design Governance Guidelines"], excluded: [], popular: false }
      ]
    },
    stats: [
      { value: "300+", label: "Apps & Sites Designed" },
      { value: "45%", label: "Avg Conversion Lift" },
      { value: "100%", label: "Figma Dev Ready" },
      { value: "4.9/5", label: "Client Satisfaction" }
    ],
    cta: {
      titleStart: "Bring Your Product Vision",
      titleHighlight: "To Life",
      description: "Share your project requirements and let our UI/UX designers create an experience your customers will love."
    }
  },
  "web-development": {
    slug: "web-development",
    pageContent: {
      name: "Web Development",
      heroLabel: "HIGH-PERFORMANCE WEB DEVELOPMENT COMPANY IN HIMACHAL",
      breadcrumbTitle: "Web Development Company in",
      breadcrumbLocation: "Himachal Pradesh",
      featureTitle: "Full-Stack Web Development in",
      featureLocation: "Shimla & Across India",
      featureDescription: "We build blazing-fast, secure, and modern websites and enterprise web applications. From custom Next.js and React interfaces to robust backends, database architectures, and API integrations, our engineering team turns your business vision into dependable digital software.",
      portfolioDescription: "Explore web portals, high-converting platforms, and enterprise web solutions engineered with scalable code and lightning speed."
    },
    seo: {
      title: "Web Development Services | Gashwa Technologies",
      description: "High-performance web development services by Gashwa Technologies. Custom Next.js, React, Node.js, and enterprise-grade web applications."
    },
    hero: {
      slides: [
        {
          title: "High-Performance Websites Built for Modern Businesses",
          description: "Engineered with clean code, lightning-fast Core Web Vitals, and responsive interfaces that look breathtaking on every screen.",
          image: "/assets/img/service/web-development-picture.png"
        },
        {
          title: "Full-Stack Web Engineering That Scales Seamlessly",
          description: "From custom frontend experiences to database architecture, API integrations, and cloud deployment, we build software that lasts.",
          image: "/assets/img/service/Website-Development.png"
        }
      ],
      trustItems: ["Next.js & React", "TypeScript", "Node.js & Python", "High Speed (90+ Vitals)", "Mobile Responsive", "Database Architecture", "API Integration", "24/7 Server Support"]
    },
    features: [
      { icon: "fa-code", title: "Custom Web Applications", description: "Modern, modular web applications built with Next.js, React, and TypeScript for maximum speed and maintainability.", accent: "#0D4892", bg: "#ecf3ff" },
      { icon: "fa-server", title: "Scalable Backend & APIs", description: "High-throughput RESTful and GraphQL APIs engineered on Node.js and cloud microservices for seamless performance.", accent: "#6366f1", bg: "#eef2ff" },
      { icon: "fa-database", title: "Robust Database Design", description: "Secure, high-availability PostgreSQL, MySQL, and MongoDB databases structured for rapid querying and zero data loss.", accent: "#06b6d4", bg: "#ecfeff" },
      { icon: "fa-bolt", title: "Core Web Vitals & Speed", description: "Sub-second load times, image CDNs, and server-side rendering ensuring optimal Google rankings and bounce rate reduction.", accent: "#10b981", bg: "#ecfdf5" },
      { icon: "fa-shield-halved", title: "Enterprise Security & CMS Integration", description: "Built-in CSRF/XSS protection, secure user authentication, and seamless integration with headless CMS and payment gateways.", accent: "#8b5cf6", bg: "#f5f3ff" }
    ],
    process: {
      badge: "Engineering Workflow",
      titleStart: "How We Engineer Your",
      titleHighlight: "Web Platform",
      subtitle: "A systematic agile development cycle ensuring milestone clarity, bug-free code, and on-time delivery.",
      steps: [
        { step: "01", title: "Architecture & Stack", desc: "Detailed architectural blueprint, database schema planning, and security specifications.", icon: "fa-sitemap", accent: "#0D4892", bg: "#fffbeb" },
        { step: "02", title: "Agile Development", desc: "Sprint-based frontend and backend development with weekly review demos and code reviews.", icon: "fa-laptop-code", accent: "#6366f1", bg: "#eef2ff" },
        { step: "03", title: "QA & Security Testing", desc: "Comprehensive cross-browser, responsive, load, and automated unit testing for zero bugs.", icon: "fa-vial-circle-check", accent: "#06b6d4", bg: "#ecfeff" },
        { step: "04", title: "Cloud Launch & Support", desc: "Seamless deployment with CI/CD automation, SSL setup, and 12 months of guaranteed maintenance.", icon: "fa-rocket", accent: "#10b981", bg: "#ecfdf5" }
      ]
    },
    recentWorks: [
      { title: "High-Converting Corporate Portal", url: "https://horizonboundtravels.com", category: "Dynamic Portal", location: "Travel Tech", desc: "Dynamic Next.js booking platform with instant query calculation, real-time availability, and sub-second load times.", thumb: "/assets/img/recentworks/horizonboundtravels.png", popular: true, pages: "24 Pages", projectType: "Full-Stack", delivery: "3 Weeks", level: "Enterprise", levelColor: "#4D96FF", rating: "4.9" },
      { title: "Creative Media Portfolio", url: "https://whiteoakpictures.in", category: "Media", location: "Cinematography", desc: "Stunning media showcase with optimized 4K video playback, dynamic galleries, and seamless contact inquiry routing.", thumb: "/assets/img/recentworks/whiteoakpictures.png", popular: true, pages: "12 Pages", projectType: "Dynamic Showcase", delivery: "2 Weeks", level: "Moderate", levelColor: "#6BCB77", rating: "5.0" }
    ],
    transformation: {
      eyebrow: "MODERN TECH STACK",
      title: "Cutting-Edge Full-Stack Web Development.",
      description: "We leverage the latest frameworks and cloud solutions to build digital platforms that are fast, intuitive, and future-proof.",
      centerTextLine1: "WEB",
      centerTextLine2: "TECH",
      quadrants: [
        { labelLine1: "Modern", labelLine2: "Frontend", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "Scalable", labelLine2: "Backend", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "Secure", labelLine2: "Databases", iconClass: "fa-solid fa-angles-left" },
        { labelLine1: "Cloud", labelLine2: "Deployment", iconClass: "fa-solid fa-angles-right" }
      ]
    },
    pricing: {
      badge: "Development Packages",
      title: "Scalable Web Development Packages",
      subtitle: "Transparent pricing with zero hidden fees, custom designed and coded for your specific requirements.",
      plans: [
        { name: "DYNAMIC WEB", pages: "Up to 10 Pages", price: "14,999", period: "/-", features: ["Custom Frontend Code", "Mobile Responsive UI", "Contact & Enquiry Forms", "Admin Management Panel", "Basic SEO Setup", "SSL & Free Hosting 1 Yr", "12 Months Technical Support"], excluded: ["Payment Gateway", "Custom API Integrations"], popular: false },
        { name: "BUSINESS PRO", pages: "Up to 25 Pages", price: "24,999", period: "/-", features: ["Next.js / React Architecture", "Custom Database Integration", "Payment Gateway Setup", "Interactive User Dashboard", "Advanced Core Web Vitals", "SSL Certificate & Domain", "12 Months Support"], excluded: ["Custom Microservices"], popular: true },
        { name: "ENTERPRISE APP", pages: "Custom Scope", price: "Custom", period: "Quote", features: ["Full Custom Web Application", "Microservices Backend Architecture", "Role-Based Authentication", "Third-Party ERP/CRM Sync", "Automated CI/CD Pipeline", "High-Availability Cloud Hosting", "Dedicated Development Team"], excluded: [], popular: false }
      ]
    },
    stats: [
      { value: "1000+", label: "Websites Launched" },
      { value: "99.9%", label: "Uptime Reliability" },
      { value: "<1s", label: "Average Page Load" },
      { value: "10+ Yrs", label: "Engineering Experience" }
    ],
    cta: {
      titleStart: "Ready to Build Your",
      titleHighlight: "High-Performance Website?",
      description: "Get in touch with our web architects today to turn your requirements into a powerful digital solution."
    }
  },
  "cloud-services": {
    slug: "cloud-services",
    pageContent: {
      name: "Cloud Services",
      heroLabel: "SCALABLE CLOUD SOLUTIONS & DEVOPS INFRASTRUCTURE",
      breadcrumbTitle: "Cloud Services & Hosting in",
      breadcrumbLocation: "Himachal Pradesh",
      featureTitle: "Scalable Cloud Architecture in",
      featureLocation: "Shimla & Global",
      featureDescription: "Accelerate your digital transformation with high-availability cloud infrastructure and DevOps automation. From AWS, Google Cloud, and Azure migrations to Docker containerization, Kubernetes orchestration, and 24/7 cloud management, we keep your applications always online.",
      portfolioDescription: "Explore cloud architectures engineered for 99.99% uptime, auto-scaling traffic surges, and enterprise-grade data security."
    },
    seo: {
      title: "Cloud Services & Infrastructure Solutions | Gashwa Technologies",
      description: "Enterprise cloud hosting, AWS & Azure migration, Kubernetes, DevOps, and managed cloud infrastructure by Gashwa Technologies."
    },
    hero: {
      slides: [
        {
          title: "Scalable Cloud Solutions for Modern Digital Businesses",
          description: "Power your websites and applications with high-availability cloud infrastructure engineered for peak traffic and zero downtime.",
          image: "/assets/img/service/cloud_computing.png"
        },
        {
          title: "DevOps Automation & Cloud Migration Experts",
          description: "Seamlessly migrate to AWS, Azure, or Google Cloud with automated CI/CD pipelines and proactive infrastructure monitoring.",
          image: "/assets/img/service/Website-Development.png"
        }
      ],
      trustItems: ["AWS Partner", "Azure Certified", "Google Cloud", "Kubernetes & Docker", "CI/CD Pipelines", "99.99% Uptime SLA", "24/7 Cloud Support", "Disaster Recovery"]
    },
    features: [
      { icon: "fa-cloud", title: "Cloud Architecture & Migration", description: "Effortless migration of legacy systems to AWS, Microsoft Azure, or GCP with zero business disruption and data integrity.", accent: "#0D4892", bg: "#ecf3ff" },
      { icon: "fa-cubes-stacked", title: "Containerization & Kubernetes", description: "Microservices deployment with Docker and Kubernetes for frictionless scaling, resource isolation, and instant deployments.", accent: "#6366f1", bg: "#eef2ff" },
      { icon: "fa-gears", title: "DevOps & CI/CD Pipelines", description: "Automate code builds, automated testing, and zero-downtime production deployments with GitHub Actions and modern CI tools.", accent: "#06b6d4", bg: "#ecfeff" },
      { icon: "fa-database", title: "Disaster Recovery & High Availability", description: "Multi-zone replication, automated daily snapshots, and rapid failover protocols guaranteeing business continuity.", accent: "#10b981", bg: "#ecfdf5" },
      { icon: "fa-chart-line", title: "Cloud Cost & Performance Optimization", description: "Continuous resource rightsizing, auto-scaling policies, and caching layers to reduce monthly cloud expenditure by up to 40%.", accent: "#8b5cf6", bg: "#f5f3ff" }
    ],
    process: {
      badge: "Our Cloud Framework",
      titleStart: "How We Scale Your",
      titleHighlight: "Cloud Ecosystem",
      subtitle: "A battle-tested cloud migration and management process designed for security, performance, and efficiency.",
      steps: [
        { step: "01", title: "Cloud Readiness Audit", desc: "Analyzing current workloads, bandwidth requirements, and designing an optimized cloud roadmap.", icon: "fa-clipboard-list", accent: "#0D4892", bg: "#fffbeb" },
        { step: "02", title: "Architecture Blueprint", desc: "Designing VPC networks, IAM security policies, load balancers, and container clusters.", icon: "fa-network-wired", accent: "#6366f1", bg: "#eef2ff" },
        { step: "03", title: "Migration & CI/CD", desc: "Zero-downtime data migration and configuring automated deployment pipelines.", icon: "fa-cloud-arrow-up", accent: "#06b6d4", bg: "#ecfeff" },
        { step: "04", title: "24/7 Managed Cloud", desc: "Continuous performance monitoring, security patches, auto-scaling, and proactive support.", icon: "fa-headset", accent: "#10b981", bg: "#ecfdf5" }
      ]
    },
    recentWorks: [
      { title: "Enterprise AWS Auto-Scaling", url: "#", category: "Cloud", location: "E-Commerce", desc: "Architected high-availability AWS ECS cluster handling 500k+ concurrent holiday shoppers with zero latency.", thumb: "/assets/img/service/cloud_computing.png", popular: true, pages: "Cluster", projectType: "AWS Cloud", delivery: "3 Weeks", level: "Enterprise", levelColor: "#4D96FF", rating: "5.0" },
      { title: "Multi-Cloud DevOps Pipeline", url: "#", category: "DevOps", location: "SaaS Platform", desc: "Implemented Kubernetes and GitHub Actions CI/CD pipeline reducing deployment cycles from days to minutes.", thumb: "/assets/img/service/Website-Development.png", popular: true, pages: "Pipeline", projectType: "DevOps", delivery: "2 Weeks", level: "Custom Setup", levelColor: "#6BCB77", rating: "4.9" }
    ],
    transformation: {
      eyebrow: "NEXT-GEN CLOUD",
      title: "Resilient Cloud Infrastructure Built for Growth.",
      description: "We engineer high-availability cloud foundations that protect your applications from spikes, failures, and security threats.",
      centerTextLine1: "CLOUD",
      centerTextLine2: "DEVOPS",
      quadrants: [
        { labelLine1: "Cloud", labelLine2: "Architecture", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "DevOps &", labelLine2: "CI/CD", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "Security &", labelLine2: "Compliance", iconClass: "fa-solid fa-angles-left" },
        { labelLine1: "24/7 Managed", labelLine2: "Monitoring", iconClass: "fa-solid fa-angles-right" }
      ]
    },
    pricing: {
      badge: "Cloud Plans",
      title: "Managed Cloud Infrastructure Packages",
      subtitle: "Flexible cloud management and DevOps tiers tailored to your traffic volume and technical needs.",
      plans: [
        { name: "CLOUD STARTER", pages: "Single Server", price: "9,999", period: "/Month", features: ["Cloud Server Setup (AWS/Linode)", "Nginx / Apache Hardening", "Automated Daily Backups", "SSL Installation & Auto-Renew", "Basic Server Monitoring", "Monthly OS Security Updates"], excluded: ["Multi-Server Auto-Scaling", "Kubernetes Clustering", "24/7 Emergency SLA"], popular: false },
        { name: "CLOUD BUSINESS", pages: "High Traffic", price: "24,999", period: "/Month", features: ["Load Balanced Cluster Setup", "Database Replication & Backups", "CDN & Redis Caching Setup", "CI/CD Deployment Automation", "24/7 Real-Time Cloud Monitoring", "Cost Optimization Reviews", "1-Hour Incident Response"], excluded: ["Dedicated DevOps Engineer"], popular: true },
        { name: "ENTERPRISE HYBRID", pages: "Custom Enterprise", price: "Custom", period: "Quote", features: ["Multi-Cloud / Hybrid Setup", "Kubernetes (EKS/GKE) Cluster", "Zero-Downtime Deployment Pipeline", "Disaster Recovery Site (Active-Active)", "15-Minute Critical Incident SLA", "Dedicated Senior DevOps Lead", "Compliance & Security Audits"], excluded: [], popular: false }
      ]
    },
    stats: [
      { value: "99.99%", label: "Uptime SLA" },
      { value: "<15m", label: "Critical Response Time" },
      { value: "40%", label: "Avg Cloud Cost Saved" },
      { value: "24/7/365", label: "Live Monitoring" }
    ],
    cta: {
      titleStart: "Ready to Modernize Your",
      titleHighlight: "Cloud Infrastructure?",
      description: "Consult with our certified cloud architects to design a fast, resilient, and cost-effective cloud environment."
    }
  },
  "security-system": {
    slug: "security-system",
    pageContent: {
      name: "Security System",
      heroLabel: "ENTERPRISE CYBERSECURITY & DIGITAL ASSET PROTECTION",
      breadcrumbTitle: "Security System & Cybersecurity in",
      breadcrumbLocation: "Himachal Pradesh",
      featureTitle: "Enterprise Security Solutions in",
      featureLocation: "Shimla & Worldwide",
      featureDescription: "Safeguard your digital infrastructure, customer data, and enterprise systems with robust cybersecurity solutions. From vulnerability assessments and cloud hardening to 24/7 security monitoring and compliance audits, we protect businesses from evolving threats.",
      portfolioDescription: "Discover how our cybersecurity engineering shields corporate networks, web applications, and customer databases from breaches and vulnerabilities."
    },
    seo: {
      title: "Security System & Cybersecurity Services | Gashwa Technologies",
      description: "Enterprise-grade cybersecurity, network protection, vulnerability testing, and 24/7 monitoring by Gashwa Technologies."
    },
    hero: {
      slides: [
        {
          title: "Zero-Trust Cybersecurity & Asset Protection",
          description: "Defend your web infrastructure, cloud databases, and customer records with proactive multi-layered threat detection and continuous security protocols.",
          image: "/assets/img/service/Security-System.png"
        },
        {
          title: "24/7 Threat Monitoring & Rapid Incident Response",
          description: "Rest easy knowing your digital perimeter is actively defended by enterprise firewalls, automated vulnerability scanning, and real-time alerts.",
          image: "/assets/img/service/service-details-1.jpg"
        }
      ],
      trustItems: ["Zero-Trust Architecture", "VAPT Audits", "Cloud Security", "DDoS Mitigation", "SSL/TLS Hardening", "24/7 Threat Watch", "Data Encryption", "ISO & GDPR Compliant"]
    },
    features: [
      { icon: "fa-shield-halved", title: "Vulnerability Assessment & Pentesting (VAPT)", description: "Proactively uncover security loopholes in your web applications, APIs, and servers before malicious actors can exploit them.", accent: "#0D4892", bg: "#ecf3ff" },
      { icon: "fa-lock", title: "Data Encryption & Zero Trust", description: "Military-grade AES-256 encryption at rest and in transit, combined with granular identity and access management.", accent: "#6366f1", bg: "#eef2ff" },
      { icon: "fa-network-wired", title: "Web Application Firewall (WAF) & DDoS Defense", description: "Filter malicious traffic, block bot attacks, and protect your web services from SQL injections, XSS, and DDoS surges.", accent: "#06b6d4", bg: "#ecfeff" },
      { icon: "fa-user-shield", title: "Compliance & Security Audits", description: "Ensure full adherence to global data privacy laws including GDPR, ISO 27001, and HIPAA compliance frameworks.", accent: "#10b981", bg: "#ecfdf5" },
      { icon: "fa-clock-rotate-left", title: "Automated Cloud Backups & Recovery", description: "Immutable snapshot backups and failover architectures guaranteeing zero data loss and instant business continuity.", accent: "#8b5cf6", bg: "#f5f3ff" }
    ],
    process: {
      badge: "Our Defense Framework",
      titleStart: "How We Protect Your",
      titleHighlight: "Digital Assets",
      subtitle: "A continuous, military-grade security lifecycle designed to prevent, detect, and neutralize threats.",
      steps: [
        { step: "01", title: "Threat Audit", desc: "Comprehensive scan and analysis of existing infrastructure, attack surfaces, and access controls.", icon: "fa-magnifying-glass", accent: "#0D4892", bg: "#fffbeb" },
        { step: "02", title: "Perimeter Hardening", desc: "Deploying custom WAF rules, SSL certificates, multi-factor authentication, and encrypted protocols.", icon: "fa-shield-halved", accent: "#6366f1", bg: "#eef2ff" },
        { step: "03", title: "Continuous Monitor", desc: "24/7 automated monitoring of system logs, traffic anomalies, and brute-force intrusion attempts.", icon: "fa-satellite-dish", accent: "#06b6d4", bg: "#ecfeff" },
        { step: "04", title: "Incident Defense", desc: "Instant automated containment, forensic investigation, and rapid recovery with detailed documentation.", icon: "fa-clipboard-check", accent: "#10b981", bg: "#ecfdf5" }
      ]
    },
    recentWorks: [
      { title: "Fintech Data Vault & WAF", url: "#", category: "Security", location: "Financial Sector", desc: "Implemented end-to-end encryption and custom WAF architecture blocking 100k+ malicious requests weekly.", thumb: "/assets/img/service/Security-System.png", popular: true, pages: "Audited", projectType: "VAPT & WAF", delivery: "3 Weeks", level: "Enterprise", levelColor: "#FF6B6B", rating: "5.0" },
      { title: "Healthcare HIPAA Shield", url: "#", category: "Compliance", location: "Healthcare Cloud", desc: "Achieved 100% HIPAA and GDPR compliance for patient records management with automated audit logs.", thumb: "/assets/img/service/service-details-1.jpg", popular: true, pages: "Certified", projectType: "Compliance", delivery: "4 Weeks", level: "High Level", levelColor: "#4D96FF", rating: "4.9" }
    ],
    transformation: {
      eyebrow: "HOLISTIC CYBER DEFENSE",
      title: "360-Degree Digital Security & Data Protection.",
      description: "We architect robust security layers that secure every touchpoint—from public API endpoints down to storage drives.",
      centerTextLine1: "CYBER",
      centerTextLine2: "DEFENSE",
      quadrants: [
        { labelLine1: "Perimeter", labelLine2: "Firewalls", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "VAPT &", labelLine2: "Audits", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "Data", labelLine2: "Encryption", iconClass: "fa-solid fa-angles-left" },
        { labelLine1: "24/7 Threat", labelLine2: "Monitoring", iconClass: "fa-solid fa-angles-right" }
      ]
    },
    pricing: {
      badge: "Security Plans",
      title: "Comprehensive Security Packages",
      subtitle: "Defend your operations with structured security and monitoring tiers designed for businesses of all sizes.",
      plans: [
        { name: "CORE SHIELD", pages: "Single Website", price: "14,999", period: "/Year", features: ["Full Vulnerability Scan", "SSL/TLS Setup & Hardening", "Brute Force Defense", "Automated Daily Backups", "Basic WAF Protection", "Incident Recovery Support"], excluded: ["24/7 SOC Monitoring", "Deep Code Audit", "Penetration Testing"], popular: false },
        { name: "BUSINESS SENTINEL", pages: "Cloud Infrastructure", price: "34,999", period: "/Year", features: ["Full VAPT Assessment", "Custom Cloud WAF Setup", "24/7 Real-Time Anomaly Watch", "Database Encryption Audit", "Role-Based Access Control", "Automated Weekly Snapshots", "Quarterly Compliance Check"], excluded: ["Dedicated Security Officer"], popular: true },
        { name: "ENTERPRISE FORTRESS", pages: "Full Corporate Stack", price: "Custom", period: "Quote", features: ["Continuous Red Team Testing", "Dedicated SOC Analyst", "Zero-Trust Architecture", "Full GDPR/ISO Compliance", "Custom DDoS Mitigation", "Immediate Incident SLA (<15m)", "Staff Security Training"], excluded: [], popular: false }
      ]
    },
    stats: [
      { value: "99.99%", label: "Threat Block Rate" },
      { value: "0", label: "Breaches Incurred" },
      { value: "24/7", label: "SOC Surveillance" },
      { value: "500+", label: "Servers Hardened" }
    ],
    cta: {
      titleStart: "Lock Down Your",
      titleHighlight: "Digital Infrastructure",
      description: "Get in touch with our certified cybersecurity specialists for an urgent vulnerability assessment."
    }
  },
  "ui-ux-designing": {
    slug: "ui-ux-designing",
    pageContent: {
      name: "UI/UX Designing",
      heroLabel: "USER EXPERIENCE & USER INTERFACE DESIGN STUDIO",
      breadcrumbTitle: "UI/UX Design Company in",
      breadcrumbLocation: "Himachal Pradesh",
      featureTitle: "Modern UI/UX Design in",
      featureLocation: "Shimla & Across India",
      featureDescription: "Create digital experiences people love to use. Our UI/UX design studio combines in-depth user research, wireframing, high-fidelity Figma prototyping, and user psychology to build intuitive, visually stunning interfaces that drive conversions.",
      portfolioDescription: "Explore our design case studies featuring human-centered digital products, mobile apps, SaaS dashboards, and modern web portals."
    },
    seo: {
      title: "UI/UX Design Services | Gashwa Technologies",
      description: "Professional UI/UX design services. Wireframing, interactive Figma prototypes, design systems, and conversion-centered digital interfaces."
    },
    hero: {
      slides: [
        {
          title: "Modern & Engaging Interfaces Designed Around Your Users",
          description: "We craft digital products that seamlessly blend aesthetic beauty, effortless usability, and proven behavioral psychology.",
          image: "/assets/img/service/ui-ux.png"
        },
        {
          title: "Intuitive User Journeys That Multiply Conversions",
          description: "From wireframes to interactive Figma prototypes and scalable design systems, we bring your vision to life with precision.",
          image: "/assets/img/service/representation-user-experience.webp"
        }
      ],
      trustItems: ["Figma Specialists", "Design Systems", "User Research", "Interactive Prototyping", "Mobile-First UX", "Micro-Interactions", "Accessibility (WCAG)", "Pixel-Perfect Handover"]
    },
    features: [
      { icon: "fa-pen-ruler", title: "User Research & Persona Mapping", description: "We uncover customer pain points and behavioral patterns through quantitative data and qualitative user interviews.", accent: "#0D4892", bg: "#ecf3ff" },
      { icon: "fa-layer-group", title: "Wireframing & Information Architecture", description: "Structure complex workflows into intuitive, clean page layouts and navigation trees that feel natural from first touch.", accent: "#6366f1", bg: "#eef2ff" },
      { icon: "fa-wand-magic-sparkles", title: "High-Fidelity Visual Design", description: "Stunning visual styling with thoughtful typography, harmonious color palettes, modern glassmorphism, and responsive grids.", accent: "#06b6d4", bg: "#ecfeff" },
      { icon: "fa-cubes", title: "Scalable Design Systems", description: "Atomic component libraries in Figma with reusable variants, tokens, and documentation for seamless developer integration.", accent: "#10b981", bg: "#ecfdf5" },
      { icon: "fa-mobile-screen", title: "Interactive Prototyping & Testing", description: "Clickable prototypes simulating realistic micro-animations and user flows before writing a single line of code.", accent: "#8b5cf6", bg: "#f5f3ff" }
    ],
    process: {
      badge: "Design Lifecycle",
      titleStart: "From Concept to",
      titleHighlight: "Pixel-Perfect Product",
      subtitle: "A user-centered design sprint framework tested and perfected across hundreds of successful digital products.",
      steps: [
        { step: "01", title: "Discovery & Research", desc: "Mapping customer personas, user journeys, market benchmarks, and product goals.", icon: "fa-lightbulb", accent: "#0D4892", bg: "#fffbeb" },
        { step: "02", title: "Wireframing", desc: "Rapid low-fidelity wireframing to establish core information architecture and workflows.", icon: "fa-diagram-project", accent: "#6366f1", bg: "#eef2ff" },
        { step: "03", title: "UI Design & Systems", desc: "Designing rich visual interfaces, typography scales, iconography, and reusable UI components.", icon: "fa-palette", accent: "#06b6d4", bg: "#ecfeff" },
        { step: "04", title: "Prototyping & QA", desc: "Building clickable prototypes, running usability tests, and delivering dev-ready Figma specs.", icon: "fa-circle-check", accent: "#10b981", bg: "#ecfdf5" }
      ]
    },
    recentWorks: [
      { title: "SaaS Analytics Dashboard UI", url: "#", category: "Web App", location: "SaaS Platform", desc: "Complete dashboard redesign simplifying complex data visualizations, leading to a 42% increase in user retention.", thumb: "/assets/img/service/ui-ux.png", popular: true, pages: "25 Screens", projectType: "Dashboard", delivery: "3 Weeks", level: "Mastery", levelColor: "#4D96FF", rating: "5.0" },
      { title: "Mobile Banking & Wallet UX", url: "#", category: "Mobile App", location: "Fintech", desc: "Intuitive mobile app UI with frictionless biometric onboarding, instant transfers, and dark mode support.", thumb: "/assets/img/service/representation-user-experience.webp", popular: true, pages: "40 Screens", projectType: "iOS & Android", delivery: "4 Weeks", level: "Custom Design", levelColor: "#6BCB77", rating: "4.9" }
    ],
    transformation: {
      eyebrow: "HUMAN-CENTERED DESIGN",
      title: "Design That Connects Emotion with Usability.",
      description: "We don't just make apps look modern—we engineer smooth interactions that reduce friction and inspire loyalty.",
      centerTextLine1: "USER",
      centerTextLine2: "EXPERIENCE",
      quadrants: [
        { labelLine1: "User", labelLine2: "Research", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "Wireframes &", labelLine2: "Architecture", iconClass: "fa-solid fa-angles-right" },
        { labelLine1: "Visual", labelLine2: "Systems", iconClass: "fa-solid fa-angles-left" },
        { labelLine1: "Interactive", labelLine2: "Prototypes", iconClass: "fa-solid fa-angles-right" }
      ]
    },
    pricing: {
      badge: "Design Packages",
      title: "UI/UX Design Packages",
      subtitle: "Transparent pricing for landing pages, web applications, and complete digital product design.",
      plans: [
        { name: "LANDING UX", pages: "Up to 5 Screens", price: "19,999", period: "/-", features: ["Competitor Benchmark", "Wireframes + High-Fidelity UI", "Mobile & Desktop Responsive", "Figma Source File Access", "Iconography & Assets Export", "2 Revision Rounds"], excluded: ["Complex Design System", "Interactive Prototype", "User Testing"], popular: false },
        { name: "PRODUCT UI/UX", pages: "Up to 20 Screens", price: "39,999", period: "/-", features: ["Deep User Persona Mapping", "Complete Information Architecture", "High-Fidelity Visual Design", "Interactive Clickable Prototype", "Component Library (Figma)", "Developer Handoff Specs", "Unlimited Revisions in Scope"], excluded: ["Custom Illustration Sets"], popular: true },
        { name: "DESIGN SYSTEM PRO", pages: "Full Product Suite", price: "Custom", period: "Quote", features: ["End-to-End Product Architecture", "Full Multi-Platform Design System", "Micro-Interactions & Animations", "Live User Testing Sessions", "Dev Collaboration Support", "Accessibility Compliance (WCAG)", "Design Governance Guidelines"], excluded: [], popular: false }
      ]
    },
    stats: [
      { value: "300+", label: "Apps & Sites Designed" },
      { value: "45%", label: "Avg Conversion Lift" },
      { value: "100%", label: "Figma Dev Ready" },
      { value: "4.9/5", label: "Client Satisfaction" }
    ],
    cta: {
      titleStart: "Bring Your Product Vision",
      titleHighlight: "To Life",
      description: "Share your project requirements and let our UI/UX designers create an experience your customers will love."
    }
  }
};
