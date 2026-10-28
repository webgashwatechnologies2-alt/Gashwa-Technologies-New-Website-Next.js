import { ProjectCategory, FAQ, Service, PricingPlan, WorkProcess, Counter, TrustReview, TeamMember, Testimonial, BlogPost } from '@/types';

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  { title: 'Website Designing', icon: '/assets/img/icon/projectItemIcon1_1.svg' },
  { title: 'Digital Marketing', icon: '/assets/img/icon/projectItemIcon1_2.svg' },
  { title: 'Mobile App Development', icon: '/assets/img/icon/projectItemIcon1_3.svg' },
  { title: 'CMS Development', icon: '/assets/img/icon/projectItemIcon1_4.svg' },
  { title: 'Graphic Designing', icon: '/assets/img/icon/projectItemIcon1_5.svg' },
];

export const FAQS: FAQ[] = [
  {
    question: 'Should I hire a website designer or web designing company',
    answer: "If your main purpose is to financially online selling your products like your machine, accessories or services with famous web design companies in Mumbai, India, depending on your need, then you could opt for a web designing company. Agency provides complete branding services at a very lower cost.",
  },
  {
    question: 'How to choose the right web design company for business?',
    answer: "You must consider these 3 important points before hiring a web design company for business:\n\n• Added Benefits – View the added benefits that come by default or as new options with a site designing e.g. social media page added, mobile responsive added or Google map create.\n• Brand Strength – Understand how strong the company brand is and how possible it is to prepare on-time services in case if you want to live your website.\n• Budget – Choose the right web design company for business that fits in your budget & offers excellent discount options to suit your needs.",
  },
  {
    question: 'Do I need website designing services?',
    answer: "If your business is financially dependent on online or if you have bulk products or online services like a clothing store, online training etc. then you should get a website designing services.",
  },
  {
    question: 'Which is the best website design agency for business?',
    answer: "In your need, the best website design agency for you will be the one that gives services to your team members quickly and without any hassle. SEO TASK is one of the most strong and we provide customized designs for our valuable clients within 2 weeks.",
  },
  {
    question: 'How long does it take to design a website?',
    answer: "The time required depends on the size and complexity of your website. A basic business website usually takes 1–2 weeks, while larger eCommerce or custom websites may take 3–6 weeks. We always provide a project timeline before starting the work.",
  },
  {
    question: 'Will my website be mobile-friendly and SEO optimized?',
    answer: "Yes. Every website we design is fully responsive, ensuring it works smoothly on desktops, tablets, and smartphones. We also follow basic SEO best practices such as fast loading speed, clean code, proper meta tags, and search engine-friendly structure to improve your online visibility.",
  },
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'WEB DESIGNING & DEVELOPMENT',
    description: 'Web design focuses on website appearance and user experience on the internet, distinct from software development.',
    icon: '/assets/img/icon/serviceIcon1_1.svg',
    link: '/services',
  },
  {
    id: 3,
    title: 'SEARCH ENGINE OPTIMIZATION',
    description: 'Enhancing website traffic quality and quantity from search engines, SEO targets unpaid traffic, not direct or paid traffic.',
    icon: '/assets/img/icon/serviceIcon1_4.svg',
    link: '/services',
  },
  {
    id: 4,
    title: 'DIGITAL MARKETING',
    description: 'Online marketing utilizes digital technology, like the internet and mobile devices, to promote products and services.',
    icon: '/assets/img/icon/serviceIcon1_1.svg',
    link: '/services',
  },
  {
    id: 5,
    title: 'GRAPHIC DESIGNING',
    description: 'Graphic designers craft visual concepts to inspire, inform, and captivate through computer software and manual skills.',
    icon: '/assets/img/icon/serviceIcon1_2.svg',
    link: '/services',
  },
  {
    id: 6,
    title: 'DOMAIN & HOSTING',
    description: 'Domain: Website identifier. Web hosting: Server space for website files, making it accessible online.',
    icon: '/assets/img/icon/serviceIcon1_4.svg',
    link: '/services',
  },
  {
    id: 7,
    title: 'MOBILE APP DEVELOPMENT',
    description: 'Mobile app development involves crafting software for mobile devices, often using network connections for remote computing,',
    icon: '/assets/img/icon/serviceIcon1_3.svg',
    link: '/services',
  },
  {
    id: 8,
    title: 'CMS DEVELOPMENT',
    description: 'CMS development focuses on crafting customized systems for effortless web content creation, storage, organization, editing, and publication.',
    icon: '/assets/img/icon/serviceIcon1_3.svg',
    link: '/services',
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 1,
    title: 'Regular Plans',
    monthlyPrice: 49,
    yearlyPrice: 490,
    featured: false,
    features: [
      { included: true, text: '100 GB SSD Storage' },
      { included: true, text: 'Weekly Backups' },
      { included: true, text: 'Unlimited Free SSL' },
      { included: true, text: '24/7 system Monitoring' },
      { included: true, text: 'Free Domain ($9.99 value)' },
      { included: false, text: 'Frame 164236' },
      { included: false, text: '20+ Payment Methods' },
    ],
  },
  {
    id: 2,
    title: 'Premium Plans',
    monthlyPrice: 99,
    yearlyPrice: 990,
    featured: true,
    features: [
      { included: true, text: '200 GB SSD Storage' },
      { included: true, text: 'Daily Backups' },
      { included: true, text: 'Unlimited Free SSL' },
      { included: true, text: '24/7 system Monitoring' },
      { included: true, text: 'Free Domain ($9.99 value)' },
      { included: true, text: 'Frame 164236' },
      { included: true, text: '20+ Payment Methods' },
    ],
  },
  {
    id: 3,
    title: 'Enterprise Plans',
    monthlyPrice: 199,
    yearlyPrice: 1990,
    featured: false,
    features: [
      { included: true, text: '500 GB SSD Storage' },
      { included: true, text: 'Hourly Backups' },
      { included: true, text: 'Unlimited Free SSL' },
      { included: true, text: '24/7 Priority Support' },
      { included: true, text: 'Free Domain ($9.99 value)' },
      { included: true, text: 'Frame 164236' },
      { included: true, text: '50+ Payment Methods' },
    ],
  },
];

export const WORK_PROCESSES: WorkProcess[] = [
  {
    id: 1,
    number: '1',
    title: 'Planning and Analysis',
    description: 'Effective IT projects start with meticulous planning and comprehensive analysis. We ensure alignment with your business goals, setting the foundation for successful technology solutions.',
    icon: 'fa-solid fa-chart-line',
  },
  {
    id: 2,
    number: '2',
    title: 'Development',
    description: 'Development is the core of our IT company, where skilled teams design and create innovative software, applications, and systems, driving digital transformation and business success.',
    icon: 'fa-solid fa-code',
  },
  {
    id: 3,
    number: '3',
    title: 'Testing',
    description: 'Testing and Quality Assurance: Our rigorous testing processes identify and rectify issues, ensuring our IT solutions meet the highest standards of performance, security, and reliability.',
    icon: 'fa-solid fa-vial-circle-check',
  },
  {
    id: 4,
    number: '4',
    title: 'Deployment',
    description: 'Deployment is a crucial phase in our IT workflow. We seamlessly transition solutions from development to live environments, ensuring minimal disruptions and optimal performance',
    icon: 'fa-solid fa-rocket',
  },
  {
    id: 5,
    number: '5',
    title: 'Maintenance',
    description: 'Maintenance and support are integral to our services. We offer proactive system care, regular updates, and responsive assistance, ensuring your IT infrastructure operates smoothly and securely.',
    icon: 'fa-solid fa-screwdriver-wrench',
  },
  {
    id: 6,
    number: '6',
    title: 'Continuous Improvement',
    description: 'Continuous improvement is ingrained in our culture. We adapt, innovate, and refine processes relentlessly, fostering a dynamic environment that fuels progress and enhances our services.',
    icon: 'fa-solid fa-arrow-trend-up',
  },
  {
    id: 7,
    number: '7',
    title: 'HTML5',
    description: 'We boast a certified team of HTML5 developers skilled in seamless migration and integration across cutting-edge technologies. Rely on our experts for exceptional HTML5 migrations',
    icon: 'fa-brands fa-html5',
  },
  {
    id: 8,
    number: '8',
    title: 'Webflow',
    description: 'We specialize in empowering SaaS, IT, and B2B firms to acquire more clients through Webflow websites. Our agency offers design, development, SEO, ongoing maintenance.',
    icon: 'fa-solid fa-globe',
  },
  {
    id: 9,
    number: '9',
    title: 'Shopify',
    description: 'Traditional website themes often require intricate CSS adjustments for achieving ideal responsiveness, making the configuration process complex.',
    icon: 'fa-brands fa-shopify',
  },
  {
    id: 10,
    number: '10',
    title: 'Wordpress',
    description: 'Select from a vast array of pre-designed templates, sparing you the need to create your website from the ground up. Choose your preferred design, modify the content, and your site is',
    icon: 'fa-brands fa-wordpress',
  },
];

export const COUNTERS: Counter[] = [
  { value: 2500, suffix: '+', label: 'Finished Assignments' },
  { value: 99, suffix: '%', label: 'Satisfaction Guaranteed !' },
  { value: 3500, suffix: '+', label: 'Customers Helped' },
  { value: 10, suffix: 'Years', label: 'Many Years in Progress' },
];

export const TRUST_REVIEWS: TrustReview[] = [
  {
    platform: 'Trustpilot',
    reviews: 450,
    rating: 3,
  },
  {
    platform: 'Google',
    reviews: 450,
    rating: 3,
  },
];

export const BRAND_LOGOS: string[] = [
  '/assets/img/brand-logo/brandLogo1_1.svg',
  '/assets/img/brand-logo/brandLogo1_2.svg',
  '/assets/img/brand-logo/brandLogo1_3.svg',
  '/assets/img/brand-logo/brandLogo1_4.svg',
  '/assets/img/brand-logo/brandLogo1_5.svg',
];

export const TEAM_MEMBERS: TeamMember[] = [
  { name: 'Gashwa Technologies', role: 'Web Designer', image: '/assets/img/team/teamone.png' },
  { name: 'Gashwa Technologies', role: 'Digital Marketing Expert', image: '/assets/img/team/teamone.png' },
  { name: 'Gashwa Technologies', role: 'Mobile App Developer', image: '/assets/img/team/teamone.png' },
  { name: 'Gashwa Technologies', role: 'SEO Specialist', image: '/assets/img/team/teamone.png' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Satisfied Client',
    role: 'Business Owner',
    image: '/assets/img/testimonial/clinent1.png',
    text: 'Gashwa Technologies completely transformed our online presence. Their team delivered a stunning website design that exceeded all our expectations. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Happy Customer',
    role: 'E-commerce Entrepreneur',
    image: '/assets/img/testimonial/client2.png',
    text: "We partnered with Gashwa Technologies for our digital marketing campaign and the results were phenomenal. Our website traffic increased by 300% within 3 months!",
    rating: 5,
  },
  {
    name: 'Loyal Client',
    role: 'IT Manager',
    image: '/assets/img/testimonial/clinent3.png',
    text: 'Gashwa Technologies offers exceptional value for money. The comprehensive IT solutions and dedicated support team make them the best IT company in Shimla, Himachal Pradesh.',
    rating: 5,
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Top 10 Web Design Trends in Himachal Pradesh for 2026',
    image: '/assets/img/blog/blogThumb1_1.jpg',
    tag: 'Web Design',
    date: 'JANUARY 15, 2026',
    author: 'Gashwa Team',
    role: 'Web Experts',
    profileImage: '/assets/img/blog/blogProfile1_1.png',
  },
  {
    title: 'How SEO Can Transform Your Business in Shimla',
    image: '/assets/img/blog/blogThumb1_2.jpg',
    tag: 'Digital Marketing',
    date: 'FEBRUARY 20, 2026',
    author: 'Gashwa Team',
    role: 'SEO Specialists',
    profileImage: '/assets/img/blog/blogProfile1_2.png',
  },
  {
    title: 'Mobile App Development: Android vs iOS in 2026',
    image: '/assets/img/blog/blogThumb1_3.jpg',
    tag: 'Technology',
    date: 'MARCH 10, 2026',
    author: 'Gashwa Team',
    role: 'App Developers',
    profileImage: '/assets/img/blog/blogProfile1_3.png',
  },
];
