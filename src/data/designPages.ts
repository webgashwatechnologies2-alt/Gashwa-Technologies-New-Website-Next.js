export type DesignServiceCard = {
  icon: string;
  title: string;
  image: string;
  description: string;
  href: string;
};

export type DesignVisionFeature = {
  icon: string;
  title: string;
  description: string;
};

export type BusinessEnquiryData = {
  image?: string;
  badgeTag?: string;
  badgeTitle?: string;
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  titleEnd?: string;
  description?: string;
  descriptionHighlight?: string;
  formEyebrow?: string;
  formTitle?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type DesignPageData = {
  slug: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
  };
  hero: {
    title: string;
    backgroundImage: string;
  };
  marquee: string[];
  businessEnquiry?: BusinessEnquiryData;
  serviceCards: {
    headline: string;
    items: DesignServiceCard[];
  };
  vision: {
    eyebrow: string;
    title: string;
    description: string;
    mainImage: string;
    gridImages: { src: string; alt: string }[];
    features: DesignVisionFeature[];
    ctaLabel: string;
    ctaHref: string;
  };
  about: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    paragraphs: string[];
    ctaTitle: string;
    ctaSubtitle: string;
    phone: string;
    phoneHref: string;
    locationsIn: string[];
    locationsIntl: string[];
  };
  faq?: {
    eyebrow?: string;
    title?: string;
    titleHighlight?: string;
    subtitle?: string;
    items: FaqItem[];
    ctaLabel?: string;
    ctaHref?: string;
  };
};

const LOCATIONS_IN = [
  "Punjab",
  "Haryana",
  "Himachal Pradesh",
  "Chandigarh",
  "Jammu & Kashmir",
  "Uttar Pradesh",
  "Delhi",
  "Uttarakhand",
];

const LOCATIONS_INTL = ["Canada", "USA", "UK", "Australia"];

const DEFAULT_VISION: DesignPageData["vision"] = {
  eyebrow: "Our Vision",
  title: "Driving Innovation: Our Vision at Gashwa Technologies",
  description:
    "At Gashwa Technologies, we envision a future where businesses of all sizes have access to cutting-edge technology solutions that drive growth, efficiency, and innovation. Our vision is to be the trusted partner that empowers organizations to transform their digital presence and achieve their strategic objectives.",
  mainImage: "/assets/img/hero/gashwatechgroupimage.jpg",
  gridImages: [
    { src: "/assets/img/hero/sliderr4.jpg", alt: "Working together" },
    { src: "/assets/img/hero/abtnew.jpg", alt: "Team discussion" },
  ],
  features: [
    {
      icon: "fa-network-wired",
      title: "Network Infrastructure Solutions",
      description:
        "Build a reliable and secure network infrastructure that supports your business operations enables seamless",
    },
    {
      icon: "fa-server",
      title: "Managed IT Services",
      description:
        "Focus on your core business activities while we take care of your IT needs with our managed IT services.",
    },
  ],
  ctaLabel: "Get A Quote",
  ctaHref: "/contact",
};

const DEFAULT_FAQ: NonNullable<DesignPageData["faq"]> = {
  eyebrow: "GOT QUESTIONS?",
  title: "Frequently Asked",
  titleHighlight: "Questions",
  subtitle: "Everything you need to know about our website designing and development services. Still have doubts? Feel free to contact our expert team.",
  ctaLabel: "Still have questions? Contact Us",
  ctaHref: "/contact",
  items: [
    {
      question: "How long does it take to design and develop a website?",
      answer: "The timeline depends on the complexity and scope of the project. A standard business website typically takes 2–4 weeks, while a more complex e-commerce or dynamic website can take 4–8 weeks. We always share a detailed project timeline before starting work.",
    },
    {
      question: "How much does a website cost at Gashwa Technologies?",
      answer: "Our website packages start from ₹7,999 and vary based on the number of pages, features, and customisation required. We offer transparent pricing with no hidden costs. Contact us for a free quote tailored to your specific requirements.",
    },
    {
      question: "Will my website be mobile-friendly and responsive?",
      answer: "Absolutely. Every website we design is fully responsive and tested across all major devices — smartphones, tablets, laptops, and desktops — ensuring a seamless user experience for all your visitors regardless of screen size.",
    },
    {
      question: "Do you provide SEO-friendly website design?",
      answer: "Yes. All our websites are built with SEO best practices in mind, including proper heading structure, semantic HTML, optimised page speed, meta tags, alt texts, and clean URL structures — giving your website a strong foundation for search engine rankings.",
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Yes, we specialise in website redesigning. Whether you want a complete visual overhaul, improved performance, or better UX/UI, our team can analyse your current website and deliver a modern, high-performing redesign that aligns with your business goals.",
    },
    {
      question: "Will I be able to update my website content myself?",
      answer: "Yes. We can build your website on a user-friendly CMS (Content Management System) such as WordPress, giving you the ability to update pages, add blog posts, and manage content easily — no technical knowledge required.",
    },
    {
      question: "Do you offer website maintenance and support after launch?",
      answer: "Yes, we offer comprehensive post-launch support and maintenance packages. This includes security updates, performance monitoring, content updates, bug fixes, and technical support to ensure your website stays secure and up-to-date.",
    },
  ],
};

export const designPages: Record<string, DesignPageData> = {
  "static-web-designing": {
    slug: "static-web-designing",
    seo: {
      title: "Static Website Designing Company in Shimla | Gashwa Technologies",
      description: "Gashwa Technologies provides modern, responsive and performance-focused static website designing services in Shimla, Himachal Pradesh and across India.",
      keywords: [
        "static website designing",
        "web design company Shimla",
        "website designing Himachal",
        "custom web design",
        "static web development",
      ],
      ogTitle: "Static Website Designing Company in Shimla | Gashwa Technologies",
      ogDescription: "Modern and responsive static website designing services by Gashwa Technologies.",
    },
    hero: {
      title: "Static Web Designing",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "STATIC WEBSITE DESIGNING COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      "website designing company in Himachal",
      "Welcome to Gashwa Technologies, your premier destination for static website designing services in Himachal Shimla. We specialize in creating stunning and user-friendly websites that are tailored to meet your unique business needs.",
      "At Gashwa Technologies, we understand that every business is different, and that's why we take a personalized approach to static web design.",
      "Our static website designing services encompass a wide range of solutions to cater to various industries and business sizes.",
      "Website Designing and Development services.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India.",
      "Internationaly for Canada, USA, UK, Australia",
    ],
    serviceCards: {
      headline: "STATIC WEBSITE DESIGNING COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-palette",
          title: "Static Web Design",
          image: "/assets/img/service/swebdesign.png",
          description: "Create a visually appealing static website tailored to your brand identity, business goals and target audience.",
          href: "/custom-website-designing",
        },
        {
          icon: "fa-mobile-screen-button",
          title: "Responsive & Performance",
          image: "/assets/img/service/responsive-performance.png",
          description: "Build clean, efficient and responsive static websites that perform smoothly across devices and modern browsers.",
          href: "/static-web-designing",
        },
        {
          icon: "fa-headset",
          title: "User Experience & Support",
          image: "/assets/img/service/expp.png",
          description: "Deliver seamless navigation, clear call-to-actions and engaging content with ongoing website maintenance and support.",
          href: "/contact",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Static Website Designing Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your premier destination for static website designing services in Himachal Shimla. We specialize in creating stunning and user-friendly websites that are tailored to meet your unique business needs. With our expertise and dedication to excellence, we strive to provide you with a website that not only captivates your audience but also drives tangible results for your business.",
        "At Gashwa Technologies, we understand that every business is different, and that's why we take a personalized approach to static web design. Our team of skilled designers and developers work closely with you to understand your goals, brand identity, and target audience. We then combine our creative flair with the latest industry trends and technologies to craft a visually appealing and intuitive website that effectively represents your business.",
        "Our static website designing services encompass a wide range of solutions to cater to various industries and business sizes. Whether you need a simple informational website, a portfolio site, or a landing page, we have the expertise to deliver a solution that aligns with your objectives. Our websites are built using clean and efficient coding practices, ensuring optimal performance, scalability, and compatibility across different devices and browsers.",
        "In addition to visually appealing designs, we focus on creating a seamless user experience. We understand the importance of intuitive navigation, clear call-to-actions, and engaging content to keep your visitors hooked and encourage them to take desired actions. Our team works on crafting compelling content that effectively communicates your brand message, showcases your products or services, and helps you establish credibility in your industry.",
        "When you choose Gashwa Technologies for your static web design needs, you can expect professionalism, attention to detail, and timely project delivery. Our commitment to excellence extends beyond the launch of your website, as we offer ongoing maintenance and support to ensure your online presence remains secure and up-to-date.",
        "Take your online presence to new heights with Gashwa Technologies' static website designing services. Contact us today to discuss your project and let us transform your vision into a captivating reality.",
      ],
      ctaTitle: "Need a quote on static web designing project?",
      ctaSubtitle: "Contact us today — we're happy to help.",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },

  "custom-website-designing": {
    slug: "custom-website-designing",
    seo: {
      title: "Custom Website Designing Company in Shimla | Gashwa Technologies",
      description: "Gashwa Technologies provides modern, responsive and performance-focused custom website designing services in Shimla, Himachal Pradesh and across India.",
      keywords: [
        "custom website designing",
        "web design company Shimla",
        "website designing Himachal",
        "custom web design",
        "web development services",
      ],
      ogTitle: "Custom Website Designing Company in Shimla | Gashwa Technologies",
      ogDescription: "Modern and responsive custom website designing services by Gashwa Technologies.",
    },
    hero: {
      title: "Custom Website Designing",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "CUSTOM WEBSITE DESIGNING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      "website designing company in Himachal",
      "Welcome to Gashwa Technologies, your premier destination for custom web design services in Himachal Shimla. We specialize in creating stunning and user-friendly websites that are tailored to meet your unique business needs.",
      "At Gashwa Technologies, we understand that every business is different, and that's why we take a personalized approach to web design.",
      "Our web design services encompass a wide range of solutions to cater to various industries and business sizes.",
      "Website Designing and Development services.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India.",
      "Internationaly for Canada,USA, UK, Australia",
    ],
    serviceCards: {
      headline: "CUSTOM WEBSITE DESIGNING COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-palette",
          title: "Custom Web Design",
          image: "/assets/img/service/custom-web-design.png",
          description: "Create stunning and user-friendly websites tailored to your unique business needs, brand identity, goals and target audience.",
          href: "/custom-website-designing",
        },
        {
          icon: "fa-code",
          title: "Clean & Scalable Development",
          image: "/assets/img/service/responsive-performance.png",
          description: "Build websites using clean and efficient coding practices for optimal performance, scalability and compatibility across devices and browsers.",
          href: "/dynamic-website-designing",
        },
        {
          icon: "fa-users",
          title: "User Experience & Support",
          image: "/assets/img/service/expp.png",
          description: "Create intuitive navigation, clear call-to-actions and engaging content with ongoing maintenance and support for your website.",
          href: "/contact",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Custom Website Designing Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your premier destination for custom web design services in Himachal Shimla. We specialize in creating stunning and user-friendly websites that are tailored to meet your unique business needs. With our expertise and dedication to excellence, we strive to provide you with a website that not only captivates your audience but also drives tangible results for your business.",
        "At Gashwa Technologies, we understand that every business is different, and that's why we take a personalized approach to web design. Our team of skilled designers and developers work closely with you to understand your goals, brand identity, and target audience. We then combine our creative flair with the latest industry trends and technologies to craft a visually appealing and intuitive website that effectively represents your business.",
        "Our web design services encompass a wide range of solutions to cater to various industries and business sizes. Whether you need a simple informational website, an e-commerce platform, or a complex web application, we have the expertise to deliver a solution that aligns with your objectives. Our websites are built using clean and efficient coding practices, ensuring optimal performance, scalability, and compatibility across different devices and browsers.",
        "In addition to visually appealing designs, we focus on creating a seamless user experience. We understand the importance of intuitive navigation, clear call-to-actions, and engaging content to keep your visitors hooked and encourage them to take desired actions. Our team works on crafting compelling content that effectively communicates your brand message, showcases your products or services, and helps you establish credibility in your industry.",
        "When you choose Gashwa Technologies for your web design needs, you can expect professionalism, attention to detail, and timely project delivery. Our commitment to excellence extends beyond the launch of your website, as we offer ongoing maintenance and support to ensure your online presence remains secure and up-to-date.",
        "Take your online presence to new heights with Gashwa Technologies' custom web design services. Contact us today to discuss your project and let us transform your vision into a captivating reality.",
      ],
      ctaTitle: "Need a quote on Custom web designing Project?",
      ctaSubtitle: "Contact us today — we're happy to help.",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "dynamic-website-designing": {
    slug: "dynamic-website-designing",
    seo: {
      title: "Dynamic Website Designing Company in Shimla | Gashwa Technologies",
      description: "Gashwa Technologies provides custom dynamic website designing services in Shimla, Himachal Pradesh and across India. We create interactive, scalable and user-friendly dynamic websites tailored to your business needs.",
      keywords: [
        "dynamic website designing",
        "dynamic website designing Shimla",
        "dynamic web designing Shimla",
        "dynamic website development",
        "dynamic website Himachal Pradesh",
        "custom dynamic website",
        "CMS website development",
        "interactive website development",
        "dynamic web development services",
      ],
      ogTitle: "Dynamic Website Designing Company in Shimla | Gashwa Technologies",
      ogDescription: "Create interactive, scalable and user-friendly dynamic websites with Gashwa Technologies in Shimla, Himachal Pradesh.",
    },
    hero: {
      title: "Dynamic Website Designing",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "DYNAMIC WEBSITE DESIGNING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      "website designing company in Himachal",
      "Welcome to Gashwa Technologies, your premier destination for custom dynamic website designing services in Himachal Shimla. We specialize in creating stunning and interactive websites that are tailored to meet your unique business needs.",
      "At Gashwa Technologies, we understand that a dynamic website is crucial for businesses that require frequent updates, user interactivity, and dynamic content.",
      "Our team of skilled designers and developers are well-versed in the latest technologies and frameworks to create dynamic websites that can adapt and evolve with your business.",
      "We utilize content management systems (CMS) that empower you with the ability to update and manage your website effortlessly, without requiring technical expertise.",
      "Whether you need a dynamic e-commerce platform, a news portal, or a community-driven website, our team has the expertise to bring your vision to life.",
      "Website Designing and Development services.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India.",
      "Internationaly for Canada, USA, UK, Australia",
    ],
    serviceCards: {
      headline: "DYNAMIC WEBSITE DESIGNING COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-code",
          title: "Dynamic Web Development",
          image: "/assets/img/service/custom-web-design.png",
          description: "Create interactive and dynamic websites tailored to your unique business requirements, goals and target audience.",
          href: "/dynamic-website-designing",
        },
        {
          icon: "fa-database",
          title: "CMS Integration",
          image: "/assets/img/service/responsive-performance.png",
          description: "Manage and update your website effortlessly with content management systems designed for flexible and dynamic content.",
          href: "/cms-development",
        },
        {
          icon: "fa-layer-group",
          title: "Scalable & Interactive",
          image: "/assets/img/service/expp.png",
          description: "Build scalable websites with interactive elements, intuitive navigation and engaging content for better user participation.",
          href: "/contact",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Dynamic Website Designing Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your premier destination for custom dynamic website designing services in Himachal Shimla. We specialize in creating stunning and interactive websites that are tailored to meet your unique business needs. With our expertise and dedication to excellence, we strive to provide you with a website that not only captivates your audience but also delivers a seamless user experience.",
        "At Gashwa Technologies, we understand that a dynamic website is crucial for businesses that require frequent updates, user interactivity, and dynamic content. Our team of skilled designers and developers are well-versed in the latest technologies and frameworks to create dynamic websites that can adapt and evolve with your business.",
        "When you choose our dynamic website designing services, we work closely with you to understand your goals, brand identity, and target audience. This allows us to create a website that not only reflects your unique vision but also incorporates dynamic features that enhance user engagement.",
        "Our dynamic websites are built using clean and efficient coding practices, ensuring optimal performance, scalability, and compatibility across different devices and browsers. We utilize content management systems (CMS) that empower you with the ability to update and manage your website effortlessly, without requiring technical expertise.",
        "Whether you need a dynamic e-commerce platform, a news portal, or a community-driven website, our team has the expertise to bring your vision to life. We focus on creating a seamless user experience by implementing intuitive navigation, interactive elements, and engaging content. This helps you attract and retain visitors, encourage user participation, and drive conversions.",
        "At Gashwa Technologies, we value our clients and strive to exceed their expectations. From concept to launch, we ensure a smooth and transparent process, keeping you informed and involved at every stage of development. Our team provides ongoing maintenance and support to ensure your dynamic website remains secure, up-to-date, and optimized for performance.",
        "Elevate your online presence with Gashwa Technologies' custom dynamic website designing services. Contact us today to discuss your project and let us create a dynamic website that sets you apart from the competition.",
      ],
      ctaTitle: "Need a quote on Dynamic web designing Project?",
      ctaSubtitle: "Contact us today — we're happy to help.",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "landing-page-designing": {
    slug: "landing-page-designing",
    seo: {
      title: "Landing Page Designing Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides custom landing page design services in Shimla, Himachal Pradesh and across India. We create impactful, responsive and conversion-focused landing pages designed to engage visitors and generate leads.",
      keywords: [
        "landing page designing",
        "landing page designing Shimla",
        "landing page design Shimla",
        "landing page development",
        "landing page designing Himachal Pradesh",
        "custom landing page design",
        "conversion focused landing page",
        "responsive landing page design",
        "lead generation landing page",
        "landing page design services",
      ],
      ogTitle:
        "Landing Page Designing Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Create impactful, responsive and conversion-focused landing pages with Gashwa Technologies in Shimla, Himachal Pradesh.",
    },
    hero: {
      title: "Landing Page Designing",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "LANDING PAGE DESIGNING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      "website designing company in Himachal",
      "Welcome to Gashwa Technologies, your trusted provider of custom landing page design services in Himachal Shimla. We specialize in creating impactful and conversion-focused landing pages that help businesses maximize their online presence.",
      "At Gashwa Technologies, we understand the critical role that landing pages play in your digital marketing strategy.",
      "A well-designed landing page serves as a powerful tool to engage visitors, generate leads, and increase conversions.",
      "Our team of skilled designers and developers work closely with you to understand your goals, target audience, and unique selling propositions.",
      "We leverage our creative talent and industry best practices to craft visually stunning and user-friendly landing pages that leave a lasting impression.",
      "Our landing page designs are optimized for conversions with compelling call-to-actions, persuasive content, and visually appealing elements.",
      "We ensure that your landing page is fully responsive, loads quickly, and provides an intuitive user experience across different devices and browsers.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over India.",
      "Internationally for Canada, USA, UK, Australia",
    ],
    serviceCards: {
      headline:
        "LANDING PAGE DESIGNING COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-code",
          title: "Custom Landing Page Design",
          image: "/assets/img/service/lpd.png",
          description:
            "Create visually stunning and customized landing pages designed around your business goals, target audience and unique requirements.",
          href: "/landing-page-designing",
        },
        {
          icon: "fa-bullseye",
          title: "Conversion Focused Design",
          image: "/assets/img/service/cfd.png",
          description:
            "Strategically designed landing pages with compelling content and call-to-actions to help engage visitors and generate leads.",
          href: "/digital-marketing-company-in-shimla",
        },
        {
          icon: "fa-mobile-screen",
          title: "Responsive & Fast",
          image: "/assets/img/service/expp.png",
          description:
            "Build responsive landing pages that load quickly and provide a seamless experience across desktop, tablet and mobile devices.",
          href: "/contact",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Landing Page Designing Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your trusted provider of custom landing page design services in Himachal Shimla. We specialize in creating impactful and conversion-focused landing pages that help businesses maximize their online presence. With our expertise and dedication to excellence, we are committed to delivering landing pages that not only captivate your audience but also drive measurable results for your business.",
        "At Gashwa Technologies, we understand the critical role that landing pages play in your digital marketing strategy. A well-designed landing page serves as a powerful tool to engage visitors, generate leads, and increase conversions. That's why our team of skilled designers and developers work closely with you to understand your goals, target audience, and unique selling propositions.",
        "We leverage our creative talent and industry best practices to craft visually stunning and user-friendly landing pages that leave a lasting impression. Whether you need a landing page for a specific product or service, a promotional campaign, or a lead generation effort, we have the expertise to create a tailored solution that aligns with your objectives.",
        "Our landing page designs are not only aesthetically pleasing but also optimized for conversions. We strategically place compelling call-to-actions, persuasive content, and visually appealing elements to guide your visitors towards taking desired actions.",
        "We pay attention to every detail, ensuring that your landing page is fully responsive, loads quickly, and provides an intuitive and seamless user experience across different devices and browsers.",
        "When you choose Gashwa Technologies for your landing page design needs, you can expect professionalism, attention to detail, and a commitment to your success. Our dedicated team works diligently to deliver high-quality results within the agreed-upon timelines.",
        "Partner with Gashwa Technologies and unlock the potential of your online marketing efforts with our custom landing page design services. Contact us today to discuss your project requirements, and let us create a captivating landing page that drives conversions and propels your business forward.",
      ],
      ctaTitle: "Need a quote on Landing Page Designing Project?",
      ctaSubtitle: "Contact us today — we're happy to help.",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "responsive-web-designing": {
    slug: "responsive-web-designing",
    seo: {
      title: "Responsive Website Designing Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides custom responsive website designing services in Shimla, Himachal Pradesh and across India. We create visually appealing and user-friendly websites that adapt seamlessly to different screen sizes and devices.",
      keywords: [
        "responsive website designing",
        "responsive website designing Shimla",
        "responsive web design Shimla",
        "responsive website design Himachal Pradesh",
        "responsive web designing services",
        "custom responsive website",
        "mobile responsive website",
        "responsive website development",
        "website designing Shimla",
        "website designing company in Himachal",
      ],
      ogTitle:
        "Responsive Website Designing Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Create custom, responsive and user-friendly websites with Gashwa Technologies in Shimla, Himachal Pradesh.",
    },
    hero: {
      title: "Responsive Website Designing",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "RESPONSIVE WEBSITE DESIGNING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      "website designing company in Himachal",
      "Welcome to Gashwa Technologies, your trusted destination for custom, responsive website designing services in Himachal Shimla. We are dedicated to creating visually appealing and user-friendly websites that adapt seamlessly to various screen sizes and devices.",
      "At Gashwa Technologies, we understand the importance of having a responsive website in today's digital landscape.",
      "With the increasing use of mobile devices, it is crucial to provide your visitors with an optimal browsing experience, regardless of the device they use.",
      "Our team of experienced designers and developers excels at crafting responsive websites that not only look stunning but also function flawlessly across desktops, laptops, tablets, and smartphones.",
      "When you choose our responsive website designing services, we take the time to understand your business objectives, target audience, and brand identity.",
      "Our websites are built using the latest technologies and industry best practices, ensuring fast loading times, smooth navigation, and seamless user interactions.",
      "One of the key benefits of responsive web design is that it eliminates the need for separate mobile and desktop versions of your website.",
      "Whether your visitors are accessing your website on a small smartphone screen or a large desktop monitor, they will have a seamless and engaging experience.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India.",
      "Internationally for Canada, USA, UK, Australia",
    ],
    serviceCards: {
      headline:
        "RESPONSIVE WEBSITE DESIGNING COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-mobile-screen-button",
          title: "Responsive Web Design",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Create visually appealing and user-friendly websites that adapt seamlessly across desktops, laptops, tablets and smartphones.",
          href: "/responsive-web-designing",
        },
        {
          icon: "fa-bolt",
          title: "Fast & Smooth Performance",
          image: "/assets/img/service/cfd.png",
          description:
            "Build responsive websites with fast loading times, smooth navigation and seamless user interactions across different devices.",
          href: "/responsive-web-designing",
        },
        {
          icon: "fa-laptop-mobile",
          title: "Multi-Device Experience",
          image: "/assets/img/service/expp.png",
          description:
            "Deliver a consistent and engaging browsing experience across mobile, tablet, laptop and desktop screen sizes.",
          href: "/contact",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Responsive Website Designing Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your trusted destination for custom, responsive website designing services in Himachal Shimla. We are dedicated to creating visually appealing and user-friendly websites that adapt seamlessly to various screen sizes and devices.",
        "At Gashwa Technologies, we understand the importance of having a responsive website in today's digital landscape. With the increasing use of mobile devices, it is crucial to provide your visitors with an optimal browsing experience, regardless of the device they use. Our team of experienced designers and developers excels at crafting responsive websites that not only look stunning but also function flawlessly across desktops, laptops, tablets, and smartphones.",
        "When you choose our responsive website designing services, we take the time to understand your business objectives, target audience, and brand identity. With this information, we create a visually captivating design that aligns with your brand image. Our websites are built using the latest technologies and industry best practices, ensuring fast loading times, smooth navigation, and seamless user interactions.",
        "One of the key benefits of responsive web design is that it eliminates the need for separate mobile and desktop versions of your website. This not only saves you time and resources but also ensures a consistent user experience across all devices. Whether your visitors are accessing your website on a small smartphone screen or a large desktop monitor, they will have a seamless and engaging experience.",
        "At Gashwa Technologies, we believe that a responsive website is more than just a design trend – it is a necessity for businesses looking to succeed in the digital world. Our team is committed to delivering high-quality, responsive websites that help you make a lasting impression on your audience and drive meaningful results for your business.",
        "Get in touch with Gashwa Technologies today to discuss your requirements and let us create a custom, responsive website that sets you apart from the competition and ensures your online success.",
      ],
      ctaTitle: "Need a quote on Responsive web designing Project?",
      ctaSubtitle: "Contact us today — we're happy to help.",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "website-redesigning": {
    slug: "website-redesigning",
    seo: {
      title: "Website Redesigning Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides custom website redesigning services in Shimla, Himachal Pradesh and across India. We transform outdated websites into modern, visually appealing and user-friendly platforms.",
      keywords: [
        "website redesigning",
        "website redesigning Shimla",
        "website redesigning Himachal Pradesh",
        "website redesigning company Shimla",
        "website redesign services",
        "custom website redesign",
        "website revamp Shimla",
        "responsive website redesign",
        "website redesign company in Himachal",
        "website redesigning services",
      ],
      ogTitle:
        "Website Redesigning Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Revamp your outdated website with custom website redesigning services by Gashwa Technologies in Shimla, Himachal Pradesh.",
    },
    hero: {
      title: "Website Redesigning",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "WEBSITE REDESIGNING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      "WEBSITE REDESIGNING COMPANY IN HIMACHAL",
      "Welcome to Gashwa Technologies, your trusted partner for custom website redesigning services in Himachal Shimla. If your existing website is outdated, lacks functionality, or fails to meet your current business requirements, we are here to help you breathe new life into your online presence.",
      "At Gashwa Technologies, we understand the importance of keeping up with the ever-evolving digital landscape.",
      "Our team of experienced designers and developers specializes in website redesigning, transforming your outdated website into a modern, visually appealing, and user-friendly platform.",
      "We take a comprehensive approach to website redesigning, considering factors such as your business goals, target audience, and industry trends.",
      "Our team conducts a thorough analysis of your existing website, identifying areas for improvement and incorporating your valuable feedback.",
      "Whether it's revamping the design, enhancing functionality, optimizing for mobile devices, or improving user experience, we tailor our solutions to meet your specific needs.",
      "With our expertise in website redesigning, we not only enhance the aesthetics of your website but also optimize its performance.",
      "We ensure that your redesigned website is responsive, loads quickly, and offers a seamless user experience across various devices and browsers.",
      "By implementing best practices in search engine optimization (SEO), we help improve your website's visibility and increase organic traffic.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India.",
      "Internationally for Canada, USA, UK, Australia",
    ],
    serviceCards: {
      headline:
        "WEBSITE REDESIGNING COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-rotate",
          title: "Website Redesign",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Transform outdated websites into modern, visually appealing and user-friendly platforms tailored to your business requirements.",
          href: "/website-redesigning",
        },
        {
          icon: "fa-mobile-screen-button",
          title: "Responsive & Performance",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Improve website performance with responsive design, faster loading times and a seamless experience across devices and browsers.",
          href: "/responsive-web-designing",
        },
        {
          icon: "fa-chart-line",
          title: "SEO & User Experience",
          image: "/assets/img/service/expp.png",
          description:
            "Enhance user experience, improve website visibility and support organic traffic growth with SEO best practices.",
          href: "/search-engine-optimization",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Website Redesigning Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your trusted partner for custom website redesigning services in Himachal Shimla. If your existing website is outdated, lacks functionality, or fails to meet your current business requirements, we are here to help you breathe new life into your online presence.",
        "At Gashwa Technologies, we understand the importance of keeping up with the ever-evolving digital landscape. Our team of experienced designers and developers specializes in website redesigning, transforming your outdated website into a modern, visually appealing, and user-friendly platform.",
        "We take a comprehensive approach to website redesigning, considering factors such as your business goals, target audience, and industry trends. Our team conducts a thorough analysis of your existing website, identifying areas for improvement and incorporating your valuable feedback. Whether it's revamping the design, enhancing functionality, optimizing for mobile devices, or improving user experience, we tailor our solutions to meet your specific needs.",
        "With our expertise in website redesigning, we not only enhance the aesthetics of your website but also optimize its performance. We ensure that your redesigned website is responsive, loads quickly, and offers a seamless user experience across various devices and browsers. By implementing best practices in search engine optimization (SEO), we help improve your website's visibility and increase organic traffic.",
        "At Gashwa Technologies, we believe that a successful website redesign is more than just a visual facelift. We focus on creating compelling content that engages your audience, effectively communicates your brand message, and drives conversions. Our team of talented content writers crafts persuasive copy that resonates with your target market and showcases the unique value your business offers.",
        "When you choose Gashwa Technologies for your website redesigning project, you can expect a collaborative and transparent process. We work closely with you throughout every step, ensuring that your vision is realized and that the final product exceeds your expectations. Our commitment to excellence extends beyond the redesign, as we provide ongoing support and maintenance to keep your website running smoothly.",
        "Elevate your online presence with Gashwa Technologies' website redesigning services. Contact us today to discuss your project and let us revitalize your website to achieve your business goals.",
      ],
      ctaTitle: "Need a quote on Website redesigning Project?",
      ctaSubtitle: "Contact us today — we're happy to help.",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "responsive-web-development": {
    slug: "responsive-web-development",
    seo: {
      title: "Responsive Website Development Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides custom responsive website development services in Shimla, Himachal Pradesh and across India. We create stunning, user-friendly and responsive websites tailored to your unique business needs.",
      keywords: [
        "responsive website development",
        "responsive web development",
        "responsive website development Shimla",
        "responsive website development Himachal Pradesh",
        "responsive website development company Shimla",
        "responsive web development company",
        "responsive website design Shimla",
        "custom responsive website",
        "responsive website development services",
        "mobile friendly website development",
        "website development company in Himachal",
        "responsive web development company in Shimla",
      ],
      ogTitle:
        "Responsive Website Development Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get custom responsive website development services from Gashwa Technologies in Shimla, Himachal Pradesh. We create stunning, user-friendly and responsive websites tailored to your business needs.",
    },
    hero: {
      title: "Responsive Website Development",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "RESPONSIVE WEBSITE DEVELOPMENT COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      "RESPONSIVE WEBSITE DEVELOPMENT COMPANY IN HIMACHAL",
      "Welcome to Gashwa Technologies, your premier destination for custom responsive website development services in Himachal Shimla. We specialize in creating stunning and user-friendly websites that are tailored to meet your unique business needs. With our expertise and dedication to excellence, we strive to provide you with a website that not only captivates your audience but also drives tangible results for your business.",
      "At Gashwa Technologies, we understand that every business is different, and that's why we take a personalized approach to website development. Our team of skilled developers works closely with you to understand your goals, brand identity, and target audience. We then combine our technical expertise with the latest industry trends and technologies to craft a responsive website that effectively represents your business.",
      "Our responsive website development services encompass a wide range of solutions to cater to various industries and business sizes. Whether you need a simple informational website, an e-commerce platform, or a complex web application, we have the expertise to deliver a solution that aligns with your objectives. Our websites are built using responsive design principles, ensuring optimal performance and a seamless user experience across different devices and screen sizes.",
      "In addition to responsive designs, we focus on creating a seamless user experience. We understand the importance of intuitive navigation, clear call-to-actions, and engaging content to keep your visitors hooked and encourage them to take desired actions. Our team works on crafting compelling content that effectively communicates your brand message, showcases your products or services, and helps you establish credibility in your industry.",
      "When you choose Gashwa Technologies for your responsive website development needs, you can expect professionalism, attention to detail, and timely project delivery. We value our clients and prioritize their satisfaction above all else. Our commitment to excellence extends beyond the launch of your website, as we offer ongoing maintenance and support to ensure your online presence remains secure and up-to-date.",
      "Take your online presence to new heights with Gashwa Technologies' custom responsive website development services. Contact us today to discuss your project and let us transform your vision into a captivating reality.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India.",
      "Internationally for Canada, USA, UK, Australia",
      "Need a quote on Responsive web development Project ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "RESPONSIVE WEBSITE DEVELOPMENT COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-code",
          title: "Responsive Website Development",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Create stunning and user-friendly responsive websites tailored to your unique business needs, goals and target audience.",
          href: "/responsive-web-development",
        },
        {
          icon: "fa-mobile-screen-button",
          title: "Responsive Web Design",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Build responsive websites that provide optimal performance and a seamless user experience across different devices and screen sizes.",
          href: "/responsive-web-designing",
        },
        {
          icon: "fa-chart-line",
          title: "User Experience",
          image: "/assets/img/service/expp.png",
          description:
            "Improve user experience with intuitive navigation, clear call-to-actions and engaging content that effectively communicates your brand message.",
          href: "/search-engine-optimization",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Responsive Website Development Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your premier destination for custom responsive website development services in Himachal Shimla. We specialize in creating stunning and user-friendly websites that are tailored to meet your unique business needs. With our expertise and dedication to excellence, we strive to provide you with a website that not only captivates your audience but also drives tangible results for your business.",
        "At Gashwa Technologies, we understand that every business is different, and that's why we take a personalized approach to website development. Our team of skilled developers works closely with you to understand your goals, brand identity, and target audience. We then combine our technical expertise with the latest industry trends and technologies to craft a responsive website that effectively represents your business.",
        "Our responsive website development services encompass a wide range of solutions to cater to various industries and business sizes. Whether you need a simple informational website, an e-commerce platform, or a complex web application, we have the expertise to deliver a solution that aligns with your objectives. Our websites are built using responsive design principles, ensuring optimal performance and a seamless user experience across different devices and screen sizes.",
        "In addition to responsive designs, we focus on creating a seamless user experience. We understand the importance of intuitive navigation, clear call-to-actions, and engaging content to keep your visitors hooked and encourage them to take desired actions. Our team works on crafting compelling content that effectively communicates your brand message, showcases your products or services, and helps you establish credibility in your industry.",
        "When you choose Gashwa Technologies for your responsive website development needs, you can expect professionalism, attention to detail, and timely project delivery. We value our clients and prioritize their satisfaction above all else. Our commitment to excellence extends beyond the launch of your website, as we offer ongoing maintenance and support to ensure your online presence remains secure and up-to-date.",
        "Take your online presence to new heights with Gashwa Technologies' custom responsive website development services. Contact us today to discuss your project and let us transform your vision into a captivating reality.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      ],
      ctaTitle: "Need a quote on Responsive web development Project ?.",
      ctaSubtitle:
        "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "php-development": {
    slug: "php-development",
    seo: {
      title: "PHP Web Development Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides custom PHP web development services in Shimla, Himachal Pradesh and across India. We deliver high-quality, robust and scalable PHP web solutions tailored to your business requirements.",
      keywords: [
        "PHP web development",
        "PHP web development Shimla",
        "PHP web development Himachal Pradesh",
        "PHP web development company Shimla",
        "PHP development company",
        "PHP development services",
        "custom PHP web development",
        "PHP website development",
        "PHP web application development",
        "PHP developers Shimla",
        "PHP development company in Himachal",
        "PHP web development services",
      ],
      ogTitle:
        "PHP Web Development Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get custom PHP web development services from Gashwa Technologies in Shimla, Himachal Pradesh. We deliver robust, scalable and high-quality PHP web solutions for businesses.",
    },
    hero: {
      title: "PHP Web Development",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "PHP WEB DEVELOPMENT COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      "PHP WEB DEVELOPMENT COMPANY IN HIMACHAL",
      "Welcome to Gashwa Technologies, your leading provider of custom PHP web development services in Himachal Shimla. We are dedicated to delivering high-quality and robust web solutions that cater to your unique business requirements. With our expertise and commitment to excellence, we strive to empower your online presence and help your business thrive in the digital world.",
      "At Gashwa Technologies, we understand the significance of a well-developed website in today's competitive landscape. Our team of skilled PHP developers possesses extensive experience in crafting dynamic and scalable web applications using PHP, a versatile and widely adopted programming language. Whether you need a simple website or a complex web application, we have the skills and knowledge to bring your vision to life.",
      "Our PHP web development services encompass a wide range of solutions designed to meet the diverse needs of businesses across various industries. From custom website development and e-commerce platforms to content management systems and enterprise-level applications, we have the capability to deliver tailored solutions that align with your specific goals.",
      "By leveraging the power of PHP, we ensure that your website or web application is not only visually appealing but also efficient and reliable. Our development process adheres to industry best practices and coding standards, ensuring clean, well-structured code that is easily maintainable and scalable. We also focus on optimizing performance to provide your users with a seamless and enjoyable browsing experience.",
      "At Gashwa Technologies, we believe in collaborative partnerships with our clients. We work closely with you to understand your business objectives, target audience, and desired features. Our team combines your insights with our technical expertise to create a tailor-made solution that meets your expectations.",
      "When you choose Gashwa Technologies as your PHP web development partner, you can expect a transparent and client-centric approach. We prioritize effective communication, timely project delivery, and exceptional customer service. Our commitment doesn't end with the launch of your website or application – we provide ongoing support and maintenance to ensure its smooth operation and security.",
      "Elevate your online presence with Gashwa Technologies' custom PHP web development services. Contact us today to discuss your project requirements and let us embark on a journey to success together.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "If you have an app idea or wish to create a website using PHP Web Development Services, let us know. We have developed many websites and business solutions for organizations across industries. We have a team of highly experienced and talented developers that can fulfill your business requirements and goals. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "PHP WEB DEVELOPMENT COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-code",
          title: "Custom PHP Development",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Develop custom PHP websites and web applications tailored to your unique business requirements, goals and target audience.",
          href: "/php-development",
        },
        {
          icon: "fa-cart-shopping",
          title: "PHP E-Commerce Development",
          image: "/assets/img/service/ecommerce.png",
          description:
            "Build efficient and scalable PHP-based e-commerce platforms designed to provide a seamless shopping experience for your customers.",
          href: "/ecommerce-website-development",
        },
        {
          icon: "fa-gears",
          title: "PHP Web Applications",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Create dynamic and scalable PHP web applications with clean code, reliable performance and functionality tailored to your business.",
          href: "/web-application-development",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "PHP Web Development Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your leading provider of custom PHP web development services in Himachal Shimla. We are dedicated to delivering high-quality and robust web solutions that cater to your unique business requirements. With our expertise and commitment to excellence, we strive to empower your online presence and help your business thrive in the digital world.",
        "At Gashwa Technologies, we understand the significance of a well-developed website in today's competitive landscape. Our team of skilled PHP developers possesses extensive experience in crafting dynamic and scalable web applications using PHP, a versatile and widely adopted programming language. Whether you need a simple website or a complex web application, we have the skills and knowledge to bring your vision to life.",
        "Our PHP web development services encompass a wide range of solutions designed to meet the diverse needs of businesses across various industries. From custom website development and e-commerce platforms to content management systems and enterprise-level applications, we have the capability to deliver tailored solutions that align with your specific goals.",
        "By leveraging the power of PHP, we ensure that your website or web application is not only visually appealing but also efficient and reliable. Our development process adheres to industry best practices and coding standards, ensuring clean, well-structured code that is easily maintainable and scalable. We also focus on optimizing performance to provide your users with a seamless and enjoyable browsing experience.",
        "At Gashwa Technologies, we believe in collaborative partnerships with our clients. We work closely with you to understand your business objectives, target audience, and desired features. Our team combines your insights with our technical expertise to create a tailor-made solution that meets your expectations.",
        "When you choose Gashwa Technologies as your PHP web development partner, you can expect a transparent and client-centric approach. We prioritize effective communication, timely project delivery, and exceptional customer service. Our commitment doesn't end with the launch of your website or application – we provide ongoing support and maintenance to ensure its smooth operation and security.",
        "Elevate your online presence with Gashwa Technologies' custom PHP web development services. Contact us today to discuss your project requirements and let us embark on a journey to success together.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "If you have an app idea or wish to create a website using PHP Web Development Services, let us know. We have developed many websites and business solutions for organizations across industries. We have a team of highly experienced and talented developers that can fulfill your business requirements and goals. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on PHP Web Development Project ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "laravel-development": {
    slug: "laravel-development",
    seo: {
      title: "Laravel Web Development Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides custom Laravel web development services in Shimla, Himachal Pradesh and across India. We build robust, scalable and secure Laravel web applications tailored to your business requirements.",
      keywords: [
        "Laravel web development",
        "Laravel web development Shimla",
        "Laravel web development Himachal Pradesh",
        "Laravel web development company Shimla",
        "Laravel development company",
        "Laravel development services",
        "custom Laravel web development",
        "Laravel website development",
        "Laravel web application development",
        "Laravel developers Shimla",
        "Laravel development company in Himachal",
        "Laravel web development services",
      ],
      ogTitle:
        "Laravel Web Development Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get custom Laravel web development services from Gashwa Technologies in Shimla, Himachal Pradesh. We build robust, scalable and secure Laravel web applications for businesses.",
    },
    hero: {
      title: "Laravel Web Development",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "LARAVEL WEB DEVELOPMENT COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      "LARAVEL WEB DEVELOPMENT COMPANY IN HIMACHAL",
      "Welcome to Gashwa Technologies, your premier destination for custom Laravel web development services in Himachal Shimla. We specialize in building robust and scalable web applications using the Laravel framework, empowering your business with cutting-edge technology.",
      "At Gashwa Technologies, we understand the importance of a powerful online presence in today's competitive digital landscape. With our Laravel web development services, we aim to provide you with a feature-rich and secure website or web application that meets your specific requirements and exceeds your expectations.",
      "Laravel, known for its elegance and simplicity, is a popular PHP framework that enables rapid development of high-quality web applications. Our skilled team of Laravel developers leverages the framework's extensive features, such as its expressive syntax, modular packaging system, and robust ORM, to deliver custom solutions tailored to your business needs.",
      "Whether you need a simple web application, an e-commerce platform, or a complex enterprise-level solution, our Laravel expertise ensures that your project is in capable hands. We follow industry best practices and coding standards to create clean, efficient, and maintainable code, resulting in a reliable and scalable application.",
      "At Gashwa Technologies, we believe that collaboration is key to success. Our team works closely with you to understand your objectives, target audience, and desired functionalities. We provide regular updates and maintain transparent communication throughout the development process, ensuring that your vision is realized every step of the way.",
      "Our Laravel web development services include but are not limited to:",
      "Custom web application development",
      "E-commerce website development",
      "API development and integration",
      "Database design and optimization",
      "Migration and upgradation of existing Laravel projects",
      "Third-party service integration",
      "Performance optimization and scalability",
      "Ongoing maintenance and support",
      "When you choose Gashwa Technologies for your Laravel web development needs, you can expect a result-oriented approach, attention to detail, and timely project delivery. We are dedicated to providing you with a seamless development experience and ensuring your complete satisfaction.",
      "Elevate your online presence with Gashwa Technologies' custom Laravel web development services. Contact us today to discuss your project requirements and let us turn your ideas into reality.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on a Laravel Web Development Project ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "LARAVEL WEB DEVELOPMENT COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-code",
          title: "Custom Laravel Development",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Build robust and scalable Laravel web applications tailored to your unique business requirements, goals and target audience.",
          href: "/laravel-development",
        },
        {
          icon: "fa-cart-shopping",
          title: "Laravel E-Commerce Development",
          image: "/assets/img/service/ecommerce.png",
          description:
            "Develop secure and scalable Laravel-based e-commerce platforms designed to provide a seamless shopping experience for your customers.",
          href: "/ecommerce-website-development",
        },
        {
          icon: "fa-gears",
          title: "Laravel Web Applications",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Create feature-rich Laravel web applications with clean, efficient and maintainable code, reliable performance and scalable functionality.",
          href: "/web-application-development",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Laravel Web Development Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your premier destination for custom Laravel web development services in Himachal Shimla. We specialize in building robust and scalable web applications using the Laravel framework, empowering your business with cutting-edge technology.",
        "At Gashwa Technologies, we understand the importance of a powerful online presence in today's competitive digital landscape. With our Laravel web development services, we aim to provide you with a feature-rich and secure website or web application that meets your specific requirements and exceeds your expectations.",
        "Laravel, known for its elegance and simplicity, is a popular PHP framework that enables rapid development of high-quality web applications. Our skilled team of Laravel developers leverages the framework's extensive features, such as its expressive syntax, modular packaging system, and robust ORM, to deliver custom solutions tailored to your business needs.",
        "Whether you need a simple web application, an e-commerce platform, or a complex enterprise-level solution, our Laravel expertise ensures that your project is in capable hands. We follow industry best practices and coding standards to create clean, efficient, and maintainable code, resulting in a reliable and scalable application.",
        "At Gashwa Technologies, we believe that collaboration is key to success. Our team works closely with you to understand your objectives, target audience, and desired functionalities. We provide regular updates and maintain transparent communication throughout the development process, ensuring that your vision is realized every step of the way.",
        "Our Laravel web development services include but are not limited to: Custom web application development, E-commerce website development, API development and integration, Database design and optimization, Migration and upgradation of existing Laravel projects, Third-party service integration, Performance optimization and scalability, Ongoing maintenance and support.",
        "When you choose Gashwa Technologies for your Laravel web development needs, you can expect a result-oriented approach, attention to detail, and timely project delivery. We are dedicated to providing you with a seamless development experience and ensuring your complete satisfaction.",
        "Elevate your online presence with Gashwa Technologies' custom Laravel web development services. Contact us today to discuss your project requirements and let us turn your ideas into reality.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on a Laravel Web Development Project ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on a Laravel Web Development Project ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "website-maintenance": {
    slug: "website-maintenance",
    seo: {
      title: "Website Maintenance Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides comprehensive website maintenance services in Shimla, Himachal Pradesh and surrounding areas. We keep websites secure, up-to-date, optimized and performing at their best.",
      keywords: [
        "Website Maintenance",
        "Website Maintenance company in Shimla",
        "Website Maintenance services Shimla",
        "Website Maintenance Himachal Pradesh",
        "Website Maintenance company Himachal",
        "Website maintenance services",
        "Website maintenance Shimla",
        "Website maintenance company in Himachal",
        "Website security maintenance",
        "Website performance optimization",
        "Website support and maintenance",
        "Website updates Shimla",
        "Website maintenance services in Himachal",
        "Website maintenance company in India",
        "IT company in Himachal",
      ],
      ogTitle:
        "Website Maintenance Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get comprehensive website maintenance services from Gashwa Technologies in Shimla, Himachal Pradesh. Keep your website secure, updated, optimized and performing at its best.",
    },
    hero: {
      title: "Website Maintenance",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "WEBSITE MAINTENANCE COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      "WEBSITE MAINTENANCE COMPANY IN HIMACHAL",
      "Welcome to Gashwa Technologies, your trusted partner for comprehensive website maintenance services in Himachal Shimla. We understand that maintaining a website can be a time-consuming and technically challenging task, which is why we offer top-notch services to ensure your website remains secure, up-to-date, and performing optimally.",
      "At Gashwa Technologies, we recognize that a well-maintained website is essential for delivering a seamless user experience and achieving your business goals. Our team of skilled professionals is equipped with the expertise and tools to handle all aspects of website maintenance, allowing you to focus on your core business activities.",
      "Our website maintenance services cover a wide range of areas to address your specific needs. Whether it's regular content updates, software updates, security monitoring, or performance optimization, we have you covered. We work closely with you to understand your requirements and tailor a maintenance plan that aligns with your business objectives.",
      "With our proactive approach to website maintenance, we ensure that your website remains secure against potential threats and vulnerabilities. We implement robust security measures, including regular backups, malware scanning, and patch management, to safeguard your valuable data and protect your visitors' trust.",
      "In addition to security, we also focus on keeping your website up-to-date with the latest technologies and industry standards. Our team stays abreast of emerging trends and best practices to ensure that your website remains compatible across various devices and browsers. We handle software updates, plugin installations, and compatibility testing to maintain a seamless user experience.",
      "Furthermore, we understand the importance of fresh and engaging content for attracting and retaining visitors. Our website maintenance services include content updates, such as adding new pages, blog posts, or product descriptions, to keep your website relevant and informative. We can also assist with search engine optimization (SEO) strategies to improve your website's visibility and rankings.",
      "Partnering with Gashwa Technologies for website maintenance means you can rely on our expertise, professionalism, and prompt support. We prioritize the satisfaction of our clients and strive to deliver exceptional service at all times.",
      "Take the hassle out of website maintenance and let Gashwa Technologies take care of it for you. Contact us today to discuss your requirements and ensure your website remains at its best.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on Website Maintenance Project ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "WEBSITE MAINTENANCE COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-screwdriver-wrench",
          title: "Website Maintenance",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Keep your website secure, up-to-date and performing optimally with comprehensive website maintenance services tailored to your business needs.",
          href: "/website-maintenance",
        },
        {
          icon: "fa-shield-halved",
          title: "Website Security",
          image: "/assets/img/service/ecommerce.png",
          description:
            "Protect your website and valuable data with regular backups, malware scanning, patch management and proactive security monitoring.",
          href: "/website-maintenance",
        },
        {
          icon: "fa-gauge-high",
          title: "Website Performance Optimization",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Improve website performance, compatibility and user experience through software updates, plugin installations and performance optimization.",
          href: "/website-maintenance",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Website Maintenance Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your trusted partner for comprehensive website maintenance services in Himachal Shimla. We understand that maintaining a website can be a time-consuming and technically challenging task, which is why we offer top-notch services to ensure your website remains secure, up-to-date, and performing optimally.",
        "At Gashwa Technologies, we recognize that a well-maintained website is essential for delivering a seamless user experience and achieving your business goals. Our team of skilled professionals is equipped with the expertise and tools to handle all aspects of website maintenance, allowing you to focus on your core business activities.",
        "Our website maintenance services cover a wide range of areas to address your specific needs. Whether it's regular content updates, software updates, security monitoring, or performance optimization, we have you covered. We work closely with you to understand your requirements and tailor a maintenance plan that aligns with your business objectives.",
        "With our proactive approach to website maintenance, we ensure that your website remains secure against potential threats and vulnerabilities. We implement robust security measures, including regular backups, malware scanning, and patch management, to safeguard your valuable data and protect your visitors' trust.",
        "In addition to security, we also focus on keeping your website up-to-date with the latest technologies and industry standards. Our team stays abreast of emerging trends and best practices to ensure that your website remains compatible across various devices and browsers. We handle software updates, plugin installations, and compatibility testing to maintain a seamless user experience.",
        "Furthermore, we understand the importance of fresh and engaging content for attracting and retaining visitors. Our website maintenance services include content updates, such as adding new pages, blog posts, or product descriptions, to keep your website relevant and informative. We can also assist with search engine optimization (SEO) strategies to improve your website's visibility and rankings.",
        "Partnering with Gashwa Technologies for website maintenance means you can rely on our expertise, professionalism, and prompt support. We prioritize the satisfaction of our clients and strive to deliver exceptional service at all times.",
        "Take the hassle out of website maintenance and let Gashwa Technologies take care of it for you. Contact us today to discuss your requirements and ensure your website remains at its best.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on Website Maintenance Project ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on Website Maintenance Project ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "iphone-app-development": {
    slug: "iphone-app-development",
    seo: {
      title: "iPhone Mobile Application Development Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides custom iPhone mobile application development services in Shimla, Himachal Pradesh and across India. We develop innovative, user-friendly and secure iPhone apps tailored to your business requirements.",
      keywords: [
        "iPhone mobile application development",
        "iPhone application development Shimla",
        "iPhone app development Himachal Pradesh",
        "iPhone mobile application development company Shimla",
        "iPhone app development company",
        "iPhone app development services",
        "custom iPhone app development",
        "iOS application development",
        "iOS app development Shimla",
        "iPhone developers Shimla",
        "iPhone app development company in Himachal",
        "iPhone mobile application development services",
      ],
      ogTitle:
        "iPhone Mobile Application Development Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get custom iPhone mobile application development services from Gashwa Technologies in Shimla, Himachal Pradesh. We develop innovative, secure and user-friendly iPhone apps for businesses.",
    },
    hero: {
      title: "iPhone Mobile Application Development",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "IPHONE MOBILE APPLICATION DEVELOPMENT COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      "IPHONE MOBILE APPLICATION DEVELOPMENT COMPANY IN HIMACHAL",
      "Welcome to Gashwa Technologies, your premier provider of custom iPhone mobile application services in Himachal Shimla. At Gashwa Technologies, we specialize in developing innovative and user-friendly mobile applications that cater to your unique business requirements. Our team of experienced iPhone app developers combines creativity, technical expertise, and industry best practices to deliver exceptional results.",
      "With the ever-growing popularity of iPhones and the iOS platform, having a mobile application can be a game-changer for your business. Our goal is to help you leverage the power of mobile technology and provide your customers with a seamless and engaging mobile experience.",
      "When you choose Gashwa Technologies for your iPhone app development needs, you can expect a comprehensive and collaborative approach. We work closely with you to understand your business goals, target audience, and specific app requirements. Our team then translates your ideas into a visually appealing and feature-rich application that aligns with your brand identity.",
      "Our iPhone app development process adheres to industry best practices and follows Apple's guidelines to ensure your application meets the highest standards of quality, security, and performance. We leverage the latest iOS technologies and frameworks to create apps that are not only visually stunning but also intuitive and user-friendly.",
      "Whether you need a productivity app, an e-commerce platform, a gaming application, or any other type of iPhone app, we have the expertise to deliver a solution that exceeds your expectations. We focus on seamless navigation, efficient functionality, and an intuitive user interface to enhance user engagement and satisfaction.",
      "At Gashwa Technologies, we value our clients and believe in building long-term partnerships. We provide continuous support and maintenance services to ensure your iPhone app remains up-to-date, secure, and optimized for performance. Our team is dedicated to your success and will go the extra mile to ensure your satisfaction.",
      "Take your business to new heights with Gashwa Technologies' custom iPhone mobile application services. Contact us today to discuss your project and let us bring your app idea to life.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on iPhone Application Development Project ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "IPHONE MOBILE APPLICATION DEVELOPMENT COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-mobile-screen-button",
          title: "iPhone App Development",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Develop innovative and user-friendly iPhone applications tailored to your unique business requirements, goals and target audience.",
          href: "/iphone-mobile-application-development",
        },
        {
          icon: "fa-cart-shopping",
          title: "iPhone E-Commerce Apps",
          image: "/assets/img/service/ecommerce.png",
          description:
            "Build feature-rich iPhone e-commerce applications with seamless navigation, efficient functionality and engaging user experiences.",
          href: "/iphone-mobile-application-development",
        },
        {
          icon: "fa-gears",
          title: "iOS App Support & Maintenance",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Keep your iPhone applications secure, updated and optimized with continuous support and maintenance services.",
          href: "/iphone-mobile-application-development",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "iPhone Mobile Application Development Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your premier provider of custom iPhone mobile application services in Himachal Shimla. At Gashwa Technologies, we specialize in developing innovative and user-friendly mobile applications that cater to your unique business requirements. Our team of experienced iPhone app developers combines creativity, technical expertise, and industry best practices to deliver exceptional results.",
        "With the ever-growing popularity of iPhones and the iOS platform, having a mobile application can be a game-changer for your business. Our goal is to help you leverage the power of mobile technology and provide your customers with a seamless and engaging mobile experience.",
        "When you choose Gashwa Technologies for your iPhone app development needs, you can expect a comprehensive and collaborative approach. We work closely with you to understand your business goals, target audience, and specific app requirements. Our team then translates your ideas into a visually appealing and feature-rich application that aligns with your brand identity.",
        "Our iPhone app development process adheres to industry best practices and follows Apple's guidelines to ensure your application meets the highest standards of quality, security, and performance. We leverage the latest iOS technologies and frameworks to create apps that are not only visually stunning but also intuitive and user-friendly.",
        "Whether you need a productivity app, an e-commerce platform, a gaming application, or any other type of iPhone app, we have the expertise to deliver a solution that exceeds your expectations. We focus on seamless navigation, efficient functionality, and an intuitive user interface to enhance user engagement and satisfaction.",
        "At Gashwa Technologies, we value our clients and believe in building long-term partnerships. We provide continuous support and maintenance services to ensure your iPhone app remains up-to-date, secure, and optimized for performance. Our team is dedicated to your success and will go the extra mile to ensure your satisfaction.",
        "Take your business to new heights with Gashwa Technologies' custom iPhone mobile application services. Contact us today to discuss your project and let us bring your app idea to life.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on iPhone Application Development Project ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on iPhone Application Development Project ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "android-app-development": {
    slug: "android-app-development",
    seo: {
      title: "Android Mobile Application Development Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides custom Android mobile application development services in Shimla, Himachal Pradesh and across India. We create innovative, user-friendly and high-quality Android apps tailored to your business requirements.",
      keywords: [
        "Android mobile application development",
        "Android application development Shimla",
        "Android app development Himachal Pradesh",
        "Android mobile application development company Shimla",
        "Android app development company",
        "Android app development services",
        "custom Android app development",
        "Android application development",
        "Android app development Shimla",
        "Android developers Shimla",
        "Android app development company in Himachal",
        "Android mobile application development services",
        "Android Application Development company in Himachal",
        "Android App Development in Himachal",
        "Android Application Development Service in Himachal",
        "Android Application Development Himachal",
        "Android App Development",
        "IT company in Himachal",
      ],
      ogTitle:
        "Android Mobile Application Development Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get custom Android mobile application development services from Gashwa Technologies in Shimla, Himachal Pradesh. We create innovative, user-friendly and high-quality Android apps for businesses.",
    },
    hero: {
      title: "Android Mobile Application Development",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "ANDROID MOBILE APPLICATION DEVELOPMENT COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      "ANDROID MOBILE APPLICATION DEVELOPMENT COMPANY IN HIMACHAL",
      "Welcome to Gashwa Technologies, your premier destination for custom Android mobile application services in Himachal Shimla. We specialize in creating innovative and user-friendly mobile applications that are tailored to meet your specific business requirements. With our expertise and dedication to excellence, we strive to provide you with an app that not only enhances your business operations but also delivers a seamless and engaging experience for your users.",
      "At Gashwa Technologies, we understand the power of mobile technology in today's digital landscape. Our team of skilled developers and designers works closely with you to understand your app's objectives, target audience, and unique features. With this knowledge, we conceptualize, design, and develop high-quality Android applications that align with your brand identity and resonate with your users.",
      "Our Android mobile application services encompass a wide range of solutions to cater to various industries and business sizes. Whether you need a simple utility app, a social networking platform, or a complex enterprise-level application, we have the expertise to deliver a solution that meets your needs. Our apps are built using the latest tools and technologies, ensuring compatibility across various Android devices and versions.",
      "At Gashwa Technologies, we place a strong emphasis on user experience (UX) design. We understand the importance of intuitive navigation, smooth functionality, and visually appealing interfaces to captivate and retain users. Our team works diligently to create a seamless and immersive experience within your app, maximizing user engagement and satisfaction.",
      "When you choose Gashwa Technologies for your Android mobile application development, you can expect a professional and collaborative approach. We involve you at every stage of the development process, ensuring that your app meets your expectations and business goals. Our team also provides ongoing support and maintenance to keep your app up-to-date and optimized for performance.",
      "Elevate your business to new heights with Gashwa Technologies' custom Android mobile application services. Contact us today to discuss your project, and let us transform your app idea into a reality that drives success for your business.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on Android App Development Project ?. Contact Us today +91-9805034219",
      "Other Related Tags : Android Application Development company in Himachal | Android App Development in Himachal | Android Application Development Service in Himachal | Android Application Development Himachal | Android App Development | IT company in Himachal",
    ],
    serviceCards: {
      headline:
        "ANDROID MOBILE APPLICATION DEVELOPMENT COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-mobile-screen-button",
          title: "Android App Development",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Develop innovative and user-friendly Android applications tailored to your specific business requirements, goals and target audience.",
          href: "/android-app-development",
        },
        {
          icon: "fa-cart-shopping",
          title: "Android E-Commerce Apps",
          image: "/assets/img/service/ecommerce.png",
          description:
            "Build high-quality Android e-commerce applications with smooth functionality, intuitive navigation and engaging user experiences.",
          href: "/android-app-development",
        },
        {
          icon: "fa-gears",
          title: "Android App Support & Maintenance",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Keep your Android applications up-to-date and optimized for performance with ongoing support and maintenance services.",
          href: "/android-app-development",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Android Mobile Application Development Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your premier destination for custom Android mobile application services in Himachal Shimla. We specialize in creating innovative and user-friendly mobile applications that are tailored to meet your specific business requirements. With our expertise and dedication to excellence, we strive to provide you with an app that not only enhances your business operations but also delivers a seamless and engaging experience for your users.",
        "At Gashwa Technologies, we understand the power of mobile technology in today's digital landscape. Our team of skilled developers and designers works closely with you to understand your app's objectives, target audience, and unique features. With this knowledge, we conceptualize, design, and develop high-quality Android applications that align with your brand identity and resonate with your users.",
        "Our Android mobile application services encompass a wide range of solutions to cater to various industries and business sizes. Whether you need a simple utility app, a social networking platform, or a complex enterprise-level application, we have the expertise to deliver a solution that meets your needs. Our apps are built using the latest tools and technologies, ensuring compatibility across various Android devices and versions.",
        "At Gashwa Technologies, we place a strong emphasis on user experience (UX) design. We understand the importance of intuitive navigation, smooth functionality, and visually appealing interfaces to captivate and retain users. Our team works diligently to create a seamless and immersive experience within your app, maximizing user engagement and satisfaction.",
        "When you choose Gashwa Technologies for your Android mobile application development, you can expect a professional and collaborative approach. We involve you at every stage of the development process, ensuring that your app meets your expectations and business goals. Our team also provides ongoing support and maintenance to keep your app up-to-date and optimized for performance.",
        "Elevate your business to new heights with Gashwa Technologies' custom Android mobile application services. Contact us today to discuss your project, and let us transform your app idea into a reality that drives success for your business.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on Android App Development Project ?. Contact Us today +91-9805034219",
        "Other Related Tags : Android Application Development company in Himachal | Android App Development in Himachal | Android Application Development Service in Himachal | Android Application Development Himachal | Android App Development | IT company in Himachal",
      ],
      ctaTitle: "Need a quote on Android App Development Project ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "search-engine-optimizing": {
    slug: "search-engine-optimizing",
    seo: {
      title: "Search Engine Optimization Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides professional Search Engine Optimization (SEO) services in Shimla, Himachal Pradesh and surrounding areas. We specialize in improving website visibility, search engine rankings and organic traffic.",
      keywords: [
        "Search Engine Optimization",
        "SEO company in Shimla",
        "SEO services Shimla",
        "SEO company in Himachal Pradesh",
        "Search Engine Optimization Himachal",
        "SEO services in Himachal",
        "SEO company Shimla Himachal",
        "Search Engine Optimization company in Shimla",
        "SEO services in Shimla",
        "SEO experts Shimla",
        "SEO packages Shimla",
        "SEO services Himachal Pradesh",
        "Search engine optimization services",
        "SEO company in Himachal",
        "SEO services India",
        "IT company in Himachal",
      ],
      ogTitle:
        "Search Engine Optimization Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get professional Search Engine Optimization services from Gashwa Technologies in Shimla, Himachal Pradesh. Improve your website visibility and search engine rankings with customized SEO strategies.",
    },
    hero: {
      title: "Search Engine Optimization",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "SEARCH ENGINE OPTIMIZATION COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies - your trusted provider of Search Engine Optimization (SEO) services in Himachal, catering to clients in Shimla and surrounding areas. We specialize in optimizing websites to improve their visibility and ranking on search engine result pages (SERPs).",
      "Why Choose Gashwa Technologies for Search Engine Optimization in Himachal?",
      "Experienced SEO Professionals: Our team comprises skilled SEO experts who stay up-to-date with the latest industry trends and best practices. They possess the knowledge and expertise to develop effective SEO strategies tailored to your specific business goals.",
      "Comprehensive SEO Services: We offer a wide range of SEO services to help your website gain organic visibility. From keyword research and on-page optimization to link building and content marketing, we cover all aspects of SEO to ensure optimal results.",
      "Data-Driven Approach: Our SEO strategies are backed by thorough research and analysis. We conduct in-depth keyword research to identify the most relevant and high-performing keywords for your business. Additionally, we analyze website data and user behavior to make data-driven decisions and continually optimize your SEO campaigns.",
      "Transparent Reporting: We believe in transparency and keeping our clients informed about the progress of their SEO campaigns. Our detailed reports provide insights into key metrics, such as keyword rankings, organic traffic, and conversion rates, allowing you to track the success and ROI of your SEO investments.",
      "Customized Solutions: At Gashwa Technologies, we understand that each business is unique. We tailor our SEO strategies to align with your specific industry, target audience, and objectives. Our goal is to deliver customized solutions that drive meaningful results and help you outshine your competition.",
      "Partner with Gashwa Technologies for exceptional SEO services in Himachal. Contact us today to take your website's visibility and online presence to new heights!",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on Search engine optimization Company ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "SEARCH ENGINE OPTIMIZATION COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-magnifying-glass",
          title: "SEO Website Optimization",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Improve website visibility and search engine rankings through keyword research, on-page optimization, content optimization and website analysis.",
          href: "/search-engine-optimizing",
        },
        {
          icon: "fa-chart-line",
          title: "Local SEO",
          image: "/assets/img/service/ecommerce.png",
          description:
            "Strengthen your local online presence with Google Map integration, Google My Business setup and optimization, local citations and classifieds.",
          href: "/search-engine-optimizing",
        },
        {
          icon: "fa-link",
          title: "Off Page SEO",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Build website authority through social sharing, guest blogging, broken backlink building, resource link building and competitor backlink research.",
          href: "/search-engine-optimizing",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Search Engine Optimization Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies - your trusted provider of Search Engine Optimization (SEO) services in Himachal, catering to clients in Shimla and surrounding areas. We specialize in optimizing websites to improve their visibility and ranking on search engine result pages (SERPs).",
        "Our team comprises skilled SEO experts who stay up-to-date with the latest industry trends and best practices. They possess the knowledge and expertise to develop effective SEO strategies tailored to your specific business goals.",
        "We offer a wide range of SEO services to help your website gain organic visibility. From keyword research and on-page optimization to link building and content marketing, we cover all aspects of SEO to ensure optimal results.",
        "Our SEO strategies are backed by thorough research and analysis. We conduct in-depth keyword research to identify the most relevant and high-performing keywords for your business. Additionally, we analyze website data and user behavior to make data-driven decisions and continually optimize your SEO campaigns.",
        "We believe in transparency and keeping our clients informed about the progress of their SEO campaigns. Our detailed reports provide insights into key metrics, such as keyword rankings, organic traffic, and conversion rates, allowing you to track the success and ROI of your SEO investments.",
        "At Gashwa Technologies, we understand that each business is unique. We tailor our SEO strategies to align with your specific industry, target audience, and objectives. Our goal is to deliver customized solutions that drive meaningful results and help you outshine your competition.",
        "Partner with Gashwa Technologies for exceptional SEO services in Himachal. Contact us today to take your website's visibility and online presence to new heights!",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on Search engine optimization Company ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on Search engine optimization Company ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "performance-marketing": {
    slug: "performance-marketing",
    seo: {
      title: "Performance Marketing Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides professional performance marketing services in Shimla, Himachal Pradesh and beyond. We help businesses achieve their marketing goals through strategic, customized and data-driven campaigns.",
      keywords: [
        "Performance Marketing",
        "Performance Marketing company in Shimla",
        "Performance Marketing services Shimla",
        "Performance Marketing company in Himachal Pradesh",
        "Performance Marketing Himachal",
        "Performance Marketing services in Himachal",
        "Performance Marketing company Shimla Himachal",
        "Performance Marketing services in Shimla",
        "Performance Marketing agency Shimla",
        "Performance Marketing experts Shimla",
        "Performance Marketing strategies",
        "Data-driven marketing Shimla",
        "Performance Marketing services India",
        "Digital Marketing company in Himachal",
        "IT company in Himachal",
      ],
      ogTitle:
        "Performance Marketing Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get professional performance marketing services from Gashwa Technologies in Shimla, Himachal Pradesh. We create strategic and data-driven campaigns tailored to your business goals.",
    },
    hero: {
      title: "Performance Marketing",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "PERFORMANCE MARKETING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies - your premier provider of performance marketing services in Himachal, serving clients in Shimla and beyond. We specialize in helping businesses achieve their marketing goals through strategic and data-driven campaigns.",
      "Why Choose Gashwa Technologies for Performance Marketing in Himachal?",
      "Results-Driven Approach: We believe in delivering tangible results for our clients. Our team of experienced marketers utilizes innovative strategies and industry best practices to drive targeted traffic, increase conversions, and maximize your return on investment.",
      "Customized Strategies: We understand that every business is unique, and that's why we develop tailored marketing strategies to suit your specific needs and objectives. Whether you're looking to boost brand awareness, generate leads, or increase sales, we have the expertise to create a customized plan that aligns with your goals.",
      "Data and Analytics: We believe in the power of data to drive informed decision-making. Our team leverages advanced analytics tools to gather valuable insights about your target audience, campaign performance, and market trends. This data-driven approach allows us to optimize your marketing efforts for maximum impact.",
      "Transparent Communication: At Gashwa Technologies, we prioritize clear and open communication with our clients. We provide regular reports and updates on the progress of your campaigns, ensuring that you stay informed about the results we're achieving and the strategies we're implementing.",
      "Expert Team: Our team of skilled marketers is passionate about staying up-to-date with the latest trends and techniques in performance marketing. With their in-depth knowledge and industry expertise, they are equipped to deliver exceptional results for your business.",
      "Whether you're a small local business or a large enterprise, Gashwa Technologies is here to help you achieve your marketing objectives through effective performance marketing strategies. Contact us today to discuss your requirements and let us take your marketing efforts to new heights!",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on a Performance Marketing Company ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "PERFORMANCE MARKETING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-bullseye",
          title: "Results-Driven Marketing",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Drive targeted traffic, increase conversions and maximize return on investment through innovative strategies and industry best practices.",
          href: "/performance-marketing",
        },
        {
          icon: "fa-chart-line",
          title: "Data-Driven Marketing",
          image: "/assets/img/service/ecommerce.png",
          description:
            "Use advanced analytics and campaign insights to understand your target audience, market trends and optimize marketing efforts.",
          href: "/performance-marketing",
        },
        {
          icon: "fa-gears",
          title: "Customized Marketing Strategies",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Develop tailored performance marketing strategies aligned with your specific business needs, objectives and marketing goals.",
          href: "/performance-marketing",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Performance Marketing Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies - your premier provider of performance marketing services in Himachal, serving clients in Shimla and beyond. We specialize in helping businesses achieve their marketing goals through strategic and data-driven campaigns.",
        "We believe in delivering tangible results for our clients. Our team of experienced marketers utilizes innovative strategies and industry best practices to drive targeted traffic, increase conversions, and maximize your return on investment.",
        "We understand that every business is unique, and that's why we develop tailored marketing strategies to suit your specific needs and objectives. Whether you're looking to boost brand awareness, generate leads, or increase sales, we have the expertise to create a customized plan that aligns with your goals.",
        "We believe in the power of data to drive informed decision-making. Our team leverages advanced analytics tools to gather valuable insights about your target audience, campaign performance, and market trends. This data-driven approach allows us to optimize your marketing efforts for maximum impact.",
        "At Gashwa Technologies, we prioritize clear and open communication with our clients. We provide regular reports and updates on the progress of your campaigns, ensuring that you stay informed about the results we're achieving and the strategies we're implementing.",
        "Our team of skilled marketers is passionate about staying up-to-date with the latest trends and techniques in performance marketing. With their in-depth knowledge and industry expertise, they are equipped to deliver exceptional results for your business.",
        "Whether you're a small local business or a large enterprise, Gashwa Technologies is here to help you achieve your marketing objectives through effective performance marketing strategies. Contact us today to discuss your requirements and let us take your marketing efforts to new heights!",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on a Performance Marketing Company ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on a Performance Marketing Company ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "digital-marketing": {
    slug: "digital-marketing",
    seo: {
      title: "Digital Marketing Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides comprehensive digital marketing services in Shimla, Himachal Pradesh and surrounding areas. We help businesses boost their online presence through SEO, PPC, social media, email, content marketing and more.",
      keywords: [
        "Digital Marketing",
        "Digital Marketing company in Shimla",
        "Digital Marketing services Shimla",
        "Digital Marketing company in Himachal Pradesh",
        "Digital Marketing Himachal",
        "Digital Marketing services in Himachal",
        "Digital Marketing company Shimla Himachal",
        "Digital Marketing services in Shimla",
        "Digital Marketing agency Shimla",
        "Digital Marketing experts Shimla",
        "SEO services Shimla",
        "PPC advertising Shimla",
        "Social Media Marketing Shimla",
        "Content Marketing Shimla",
        "Email Marketing Shimla",
        "Online Reputation Management Shimla",
        "Digital Marketing services India",
        "IT company in Himachal",
      ],
      ogTitle:
        "Digital Marketing Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get comprehensive digital marketing services from Gashwa Technologies in Shimla, Himachal Pradesh. Boost your online presence with customized digital marketing strategies.",
    },
    hero: {
      title: "Digital Marketing",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "DIGITAL MARKETING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies, your trusted digital marketing partner in Himachal, serving clients in Shimla and surrounding areas. We offer a comprehensive range of digital marketing services designed to boost your online presence and drive success for your business.",
      "Our Digital Marketing Services in Himachal:",
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click (PPC) Advertising",
      "Social Media Marketing",
      "Email Marketing",
      "Content Marketing",
      "Online Reputation Management",
      "Affiliate marketing",
      "Social Media Optimization",
      "At Gashwa Technologies, we understand the importance of a strong online presence in today's digital landscape. Our team of experienced professionals will work closely with you to develop a customized digital marketing strategy that aligns with your business goals and targets your specific audience.",
      "With our expertise in search engine optimization, we can help improve your website's visibility in search engine results, drive organic traffic, and increase your online visibility. Our pay-per-click advertising services will help you reach your target audience effectively through targeted ads and optimized campaigns.",
      "Social media marketing is another key component of our digital marketing services. We can assist you in harnessing the power of social media platforms to engage with your audience, build brand awareness, and drive conversions.",
      "Email marketing remains an effective strategy for nurturing leads and staying connected with your customer base. We can help you create engaging email campaigns that drive customer loyalty and generate repeat business.",
      "Content marketing is vital for establishing thought leadership and providing valuable information to your target audience. Our content marketing services encompass content creation, optimization, and distribution to boost your brand's authority and reach.",
      "Online reputation management is crucial in today's digital age. We can monitor and manage your online reputation, ensuring that your brand image remains positive and impactful.",
      "Our team also specializes in conversion rate optimization, focusing on maximizing your website's performance and driving higher conversion rates. Through data analysis and testing, we can identify and implement strategies that optimize user experience and increase conversions.",
      "At Gashwa Technologies, we believe in transparency and accountability. We provide detailed analytics and reporting to track the performance of your digital marketing campaigns, enabling you to make data-driven decisions and measure your return on investment.",
      "Partner with Gashwa Technologies for comprehensive digital marketing services in Himachal. Contact us today to discuss your requirements and embark on a journey towards online success.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on a Digital Marketing Company ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "DIGITAL MARKETING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-magnifying-glass",
          title: "Search Engine Optimization",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Improve your website's visibility in search engine results, drive organic traffic and increase your online visibility through SEO.",
          href: "/search-engine-optimizing",
        },
        {
          icon: "fa-bullseye",
          title: "Pay-Per-Click Advertising",
          image: "/assets/img/service/ecommerce.png",
          description:
            "Reach your target audience effectively through targeted ads and optimized pay-per-click advertising campaigns.",
          href: "/pay-per-click",
        },
        {
          icon: "fa-share-nodes",
          title: "Social Media Marketing",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Harness the power of social media platforms to engage with your audience, build brand awareness and drive conversions.",
          href: "/social-media-marketing",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Digital Marketing Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your trusted digital marketing partner in Himachal, serving clients in Shimla and surrounding areas. We offer a comprehensive range of digital marketing services designed to boost your online presence and drive success for your business.",
        "Our digital marketing services include Search Engine Optimization (SEO), Pay-Per-Click (PPC) Advertising, Social Media Marketing, Email Marketing, Content Marketing, Online Reputation Management, Affiliate marketing and Social Media Optimization.",
        "At Gashwa Technologies, we understand the importance of a strong online presence in today's digital landscape. Our team of experienced professionals will work closely with you to develop a customized digital marketing strategy that aligns with your business goals and targets your specific audience.",
        "With our expertise in search engine optimization, we can help improve your website's visibility in search engine results, drive organic traffic, and increase your online visibility. Our pay-per-click advertising services will help you reach your target audience effectively through targeted ads and optimized campaigns.",
        "Social media marketing is another key component of our digital marketing services. We can assist you in harnessing the power of social media platforms to engage with your audience, build brand awareness, and drive conversions.",
        "Email marketing remains an effective strategy for nurturing leads and staying connected with your customer base. We can help you create engaging email campaigns that drive customer loyalty and generate repeat business.",
        "Content marketing is vital for establishing thought leadership and providing valuable information to your target audience. Our content marketing services encompass content creation, optimization, and distribution to boost your brand's authority and reach.",
        "Online reputation management is crucial in today's digital age. We can monitor and manage your online reputation, ensuring that your brand image remains positive and impactful.",
        "Our team also specializes in conversion rate optimization, focusing on maximizing your website's performance and driving higher conversion rates. Through data analysis and testing, we can identify and implement strategies that optimize user experience and increase conversions.",
        "At Gashwa Technologies, we believe in transparency and accountability. We provide detailed analytics and reporting to track the performance of your digital marketing campaigns, enabling you to make data-driven decisions and measure your return on investment.",
        "Partner with Gashwa Technologies for comprehensive digital marketing services in Himachal. Contact us today to discuss your requirements and embark on a journey towards online success.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on a Digital Marketing Company ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on a Digital Marketing Company ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "pay-per-click-advertising": {
    slug: "pay-per-click-advertising",
    seo: {
      title: "Pay Per Click Service Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides targeted and effective Pay Per Click (PPC) services in Shimla, Himachal Pradesh and surrounding areas. We help businesses drive targeted traffic, increase conversions and boost online visibility.",
      keywords: [
        "Pay Per Click",
        "Pay Per Click company in Shimla",
        "PPC services Shimla",
        "Pay Per Click services in Himachal",
        "PPC Advertising company in Himachal",
        "PPC Services in Himachal",
        "PPC Advertising Service in Himachal",
        "PPC Management in Himachal",
        "Google PPC Ads Shimla",
        "Facebook PPC Ads Shimla",
        "PPC Management Company in Himachal",
        "Pay Per Click Advertising Shimla",
        "Pay Per Click Marketing Company in Himachal",
        "Digital Marketing Company in Himachal",
        "IT company in Himachal",
      ],
      ogTitle:
        "Pay Per Click Service Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get targeted and effective Pay Per Click services from Gashwa Technologies in Shimla, Himachal Pradesh. Drive targeted traffic, increase conversions and boost your online visibility.",
    },
    hero: {
      title: "Pay Per Click",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "PAY PER CLICK SERVICE COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies, your trusted provider of Pay Per Click (PPC) services in Himachal, catering to clients in Shimla and surrounding areas. We specialize in delivering targeted and effective PPC campaigns that drive results for your business.",
      "What sets our PPC services apart?",
      "Strategic Campaign Planning: Our team of experienced professionals will work closely with you to understand your business goals and target audience. We develop tailored PPC strategies that align with your objectives, ensuring maximum return on investment (ROI).",
      "Keyword Research and Optimization: We conduct in-depth keyword research to identify the most relevant and high-performing keywords for your PPC campaigns. By optimizing your ads with the right keywords, we help you reach your target audience and increase click-through rates.",
      "Ad Copy Creation: Our skilled copywriters craft compelling and engaging ad copies that attract attention and drive clicks. We focus on creating persuasive ad content that highlights your unique selling points and encourages users to take action.",
      "Bid Management and Optimization: We closely monitor and manage your PPC bids to ensure optimal performance and cost-efficiency. Through continuous optimization, we strive to achieve a higher ad position while keeping your budget under control.",
      "Performance Tracking and Reporting: With advanced tracking tools and analytics, we provide detailed reports on the performance of your PPC campaigns. Our comprehensive insights help you make informed decisions and refine your strategies for better results.",
      "Partner with Gashwa Technologies for exceptional PPC services in Himachal. Let us help you drive targeted traffic, increase conversions, and boost your online visibility. Contact us today to discuss your PPC needs!",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada,USA, UK, Australia",
      "Need a quote on a Pay Per Click Project ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "PAY PER CLICK SERVICE COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-bullseye",
          title: "Strategic Campaign Planning",
          image: "/assets/img/service/ecommerce.png",
          description:
            "Develop tailored PPC strategies aligned with your business goals and target audience to maximize return on investment.",
          href: "/pay-per-click",
        },
        {
          icon: "fa-magnifying-glass",
          title: "Keyword Research and Optimization",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Identify relevant and high-performing keywords and optimize your PPC ads to reach your target audience and increase click-through rates.",
          href: "/pay-per-click",
        },
        {
          icon: "fa-chart-line",
          title: "Performance Tracking and Reporting",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Track PPC campaign performance with detailed analytics and reporting to refine strategies and achieve better results.",
          href: "/pay-per-click",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Pay Per Click Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your trusted provider of Pay Per Click (PPC) services in Himachal, catering to clients in Shimla and surrounding areas. We specialize in delivering targeted and effective PPC campaigns that drive results for your business.",
        "Our PPC services include Strategic Campaign Planning, Keyword Research and Optimization, Ad Copy Creation, Bid Management and Optimization, and Performance Tracking and Reporting.",
        "Our team of experienced professionals will work closely with you to understand your business goals and target audience. We develop tailored PPC strategies that align with your objectives, ensuring maximum return on investment (ROI).",
        "We conduct in-depth keyword research to identify the most relevant and high-performing keywords for your PPC campaigns. By optimizing your ads with the right keywords, we help you reach your target audience and increase click-through rates.",
        "Our skilled copywriters craft compelling and engaging ad copies that attract attention and drive clicks. We focus on creating persuasive ad content that highlights your unique selling points and encourages users to take action.",
        "We closely monitor and manage your PPC bids to ensure optimal performance and cost-efficiency. Through continuous optimization, we strive to achieve a higher ad position while keeping your budget under control.",
        "With advanced tracking tools and analytics, we provide detailed reports on the performance of your PPC campaigns. Our comprehensive insights help you make informed decisions and refine your strategies for better results.",
        "Partner with Gashwa Technologies for exceptional PPC services in Himachal. Let us help you drive targeted traffic, increase conversions, and boost your online visibility. Contact us today to discuss your PPC needs!",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada,USA, UK, Australia",
        "Need a quote on a Pay Per Click Project ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on a Pay Per Click Project ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "online-reputation-management": {
    slug: "online-reputation-management",
    seo: {
      title: "Online Reputation Management Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides online reputation management services in Shimla, Himachal Pradesh and surrounding areas. We help businesses and individuals monitor, manage and build a positive online reputation.",
      keywords: [
        "Online Reputation Management",
        "Online Reputation Management company in Shimla",
        "Online Reputation Management services Shimla",
        "Online Reputation Management company in Himachal Pradesh",
        "Online Reputation Management Himachal",
        "Online Reputation Management services in Himachal",
        "Online Reputation Management company Shimla Himachal",
        "Online Reputation Management services in Shimla",
        "Online Reputation Management agency Shimla",
        "Online Reputation Management experts Shimla",
        "Review Management Shimla",
        "Brand Monitoring Shimla",
        "Reputation Management Shimla",
        "SEO services Shimla",
        "Digital Marketing Company in Himachal",
        "IT company in Himachal",
      ],
      ogTitle:
        "Online Reputation Management Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get professional online reputation management services from Gashwa Technologies in Shimla, Himachal Pradesh. Monitor, manage and build a positive online reputation.",
    },
    hero: {
      title: "Online Reputation Management",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "ONLINE REPUTATION MANAGEMENT COMPANY SHIMLA: GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies, your trusted partner for online reputation management services in Himachal, serving clients in Shimla and beyond.",
      "In today's digital world, maintaining a positive online reputation is crucial for businesses and individuals alike. That's where we come in.",
      "Our Online Reputation Management Services:",
      "Monitoring and Analysis: We continuously monitor various online platforms, including social media, review sites, and search engine results, to keep track of your online reputation.",
      "Strategy Development: Based on our analysis, we develop tailored strategies to address any negative content or reviews, and promote positive aspects of your brand.",
      "Content Management: Our team of experts creates and manages engaging and relevant content to enhance your online reputation.",
      "Review Management: We actively manage and respond to customer reviews, ensuring timely and professional interactions that reflect positively on your business.",
      "Search Engine Optimization (SEO): We optimize your online presence, ensuring that positive content ranks higher in search engine results, pushing down any negative content.",
      "Brand Monitoring: We keep a close eye on your brand mentions across various channels, promptly addressing any issues or concerns to maintain a positive brand image.",
      "At Gashwa Technologies, we understand that a positive online reputation is vital for your success. Our dedicated team is here to support you in building and managing a stellar online presence. Contact us today to learn how our online reputation management services can benefit you.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on Online Reputation Management Company ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "ONLINE REPUTATION MANAGEMENT COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-chart-line",
          title: "Monitoring and Analysis",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Continuously monitor social media, review sites and search engine results to keep track of your online reputation.",
          href: "/online-reputation-managements",
        },
        {
          icon: "fa-bullseye",
          title: "Strategy Development",
          image: "/assets/img/service/ecommerce.png",
          description:
            "Develop tailored strategies to address negative content or reviews and promote positive aspects of your brand.",
          href: "/online-reputation-managements",
        },
        {
          icon: "fa-share-nodes",
          title: "Review Management",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Manage and respond to customer reviews with timely and professional interactions that reflect positively on your business.",
          href: "/online-reputation-managements",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Online Reputation Management Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your trusted partner for online reputation management services in Himachal, serving clients in Shimla and beyond.",
        "In today's digital world, maintaining a positive online reputation is crucial for businesses and individuals alike. That's where we come in.",
        "Our online reputation management services include Monitoring and Analysis, Strategy Development, Content Management, Review Management, Search Engine Optimization (SEO), and Brand Monitoring.",
        "We continuously monitor various online platforms, including social media, review sites, and search engine results, to keep track of your online reputation.",
        "Based on our analysis, we develop tailored strategies to address any negative content or reviews, and promote positive aspects of your brand. Our team of experts also creates and manages engaging and relevant content to enhance your online reputation.",
        "We actively manage and respond to customer reviews, ensuring timely and professional interactions that reflect positively on your business.",
        "We optimize your online presence, ensuring that positive content ranks higher in search engine results, pushing down any negative content. We also keep a close eye on your brand mentions across various channels, promptly addressing any issues or concerns to maintain a positive brand image.",
        "At Gashwa Technologies, we understand that a positive online reputation is vital for your success. Our dedicated team is here to support you in building and managing a stellar online presence. Contact us today to learn how our online reputation management services can benefit you.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on Online Reputation Management Company ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on Online Reputation Management Company ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "wordpress-development": {
    slug: "wordpress-development",
    seo: {
      title: "WordPress Development Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides custom WordPress development services in Shimla, Himachal Pradesh. We create dynamic, robust and user-friendly WordPress websites tailored to your business requirements.",
      keywords: [
        "WordPress Development",
        "WordPress Development company in Shimla",
        "WordPress Development services Shimla",
        "WordPress Development company in Himachal Pradesh",
        "WordPress Development Himachal",
        "WordPress Development services in Himachal",
        "WordPress Development company Shimla Himachal",
        "WordPress Development services in Shimla",
        "WordPress website development Shimla",
        "Custom WordPress Development Shimla",
        "WordPress theme development Shimla",
        "WordPress CMS development Shimla",
        "WordPress e-commerce development Shimla",
        "WordPress website design Shimla",
        "WordPress developers Shimla",
        "IT company in Himachal",
      ],
      ogTitle:
        "WordPress Development Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get custom WordPress development services from Gashwa Technologies in Shimla, Himachal Pradesh. Build a dynamic, robust and high-performance WordPress website for your business.",
    },
    hero: {
      title: "WordPress Development",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "WORDPRESS DEVELOPMENT COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies, your premier destination for custom WordPress development services in Himachal Shimla. We specialize in creating dynamic and robust websites powered by the popular WordPress platform. With our expertise and commitment to excellence, we aim to provide you with a WordPress website that not only meets your specific requirements but also delivers exceptional performance and user experience.",
      "At Gashwa Technologies, we understand the power of WordPress as a flexible and scalable content management system (CMS). Whether you need a simple blog, a corporate website, an e-commerce store, or a complex web application, our team of skilled developers can transform your vision into a reality using the vast capabilities of WordPress.",
      "Our WordPress development services are tailored to cater to businesses of all sizes and industries. We start by thoroughly understanding your business objectives, target audience, and unique selling points. This allows us to customize your WordPress website to align perfectly with your brand identity and effectively showcase your products or services.",
      "With our expertise in WordPress theme development, we can create visually appealing designs that reflect your brand's personality and resonate with your target audience. Our team ensures that your website's design is not only aesthetically pleasing but also optimized for user experience and conversion. We focus on creating intuitive navigation, clear call-to-actions, and engaging layouts to keep your visitors engaged and encourage them to take desired actions.",
      "As WordPress is known for its extensibility, we utilize its vast plugin ecosystem to add functionality and features that enhance your website's performance and user engagement. Whether it's integrating social media feeds, implementing advanced search capabilities, or setting up a seamless e-commerce experience, our developers have the expertise to leverage the right plugins and extend the capabilities of your WordPress website.",
      "When you choose Gashwa Technologies for your WordPress development needs, you can expect professionalism, attention to detail, and timely project delivery. We value our clients and strive to exceed their expectations at every step of the development process. Our team provides ongoing maintenance and support, ensuring that your WordPress website remains secure, up-to-date, and optimized for performance.",
      "Elevate your online presence with Gashwa Technologies' custom WordPress development services. Contact us today to discuss your project requirements and let us build a WordPress website that propels your business to new heights.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on WordPress Development Project ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "WORDPRESS DEVELOPMENT COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-wordpress",
          title: "Custom WordPress Development",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Create dynamic and robust WordPress websites tailored to your business requirements, brand identity and target audience.",
          href: "/wordpress-development",
        },
        {
          icon: "fa-paintbrush",
          title: "WordPress Theme Development",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Develop visually appealing WordPress themes optimized for user experience, conversion, intuitive navigation and engaging layouts.",
          href: "/wordpress-development",
        },
        {
          icon: "fa-puzzle-piece",
          title: "WordPress Plugin Integration",
          image: "/assets/img/service/ecommerce.png",
          description:
            "Leverage the WordPress plugin ecosystem to add functionality, enhance performance and create seamless user experiences.",
          href: "/wordpress-development",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "WordPress Development Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your premier destination for custom WordPress development services in Himachal Shimla. We specialize in creating dynamic and robust websites powered by the popular WordPress platform. With our expertise and commitment to excellence, we aim to provide you with a WordPress website that not only meets your specific requirements but also delivers exceptional performance and user experience.",
        "At Gashwa Technologies, we understand the power of WordPress as a flexible and scalable content management system (CMS). Whether you need a simple blog, a corporate website, an e-commerce store, or a complex web application, our team of skilled developers can transform your vision into a reality using the vast capabilities of WordPress.",
        "Our WordPress development services are tailored to cater to businesses of all sizes and industries. We start by thoroughly understanding your business objectives, target audience, and unique selling points. This allows us to customize your WordPress website to align perfectly with your brand identity and effectively showcase your products or services.",
        "With our expertise in WordPress theme development, we can create visually appealing designs that reflect your brand's personality and resonate with your target audience. Our team ensures that your website's design is not only aesthetically pleasing but also optimized for user experience and conversion. We focus on creating intuitive navigation, clear call-to-actions, and engaging layouts to keep your visitors engaged and encourage them to take desired actions.",
        "As WordPress is known for its extensibility, we utilize its vast plugin ecosystem to add functionality and features that enhance your website's performance and user engagement. Whether it's integrating social media feeds, implementing advanced search capabilities, or setting up a seamless e-commerce experience, our developers have the expertise to leverage the right plugins and extend the capabilities of your WordPress website.",
        "When you choose Gashwa Technologies for your WordPress development needs, you can expect professionalism, attention to detail, and timely project delivery. We value our clients and strive to exceed their expectations at every step of the development process. Our team provides ongoing maintenance and support, ensuring that your WordPress website remains secure, up-to-date, and optimized for performance.",
        "Elevate your online presence with Gashwa Technologies' custom WordPress development services. Contact us today to discuss your project requirements and let us build a WordPress website that propels your business to new heights.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on WordPress Development Project ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on WordPress Development Project ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "shopify-development": {
    slug: "shopify-development",
    seo: {
      title: "Shopify Development Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides custom Shopify development services in Shimla, Himachal Pradesh. We create robust, high-performing and user-friendly Shopify stores designed to drive sales and maximize conversions.",
      keywords: [
        "Shopify Development",
        "Shopify Development company in Shimla",
        "Shopify Development services Shimla",
        "Shopify Development company in Himachal Pradesh",
        "Shopify Development Himachal",
        "Shopify Development services in Himachal",
        "Shopify Development company Shimla Himachal",
        "Shopify Development services in Shimla",
        "Shopify store development Shimla",
        "Custom Shopify Development Shimla",
        "Shopify theme customization Shimla",
        "Shopify e-commerce development Shimla",
        "Shopify developers Shimla",
        "Shopify Development Company Himachal",
        "E-commerce Development Shimla",
        "IT company in Himachal",
      ],
      ogTitle:
        "Shopify Development Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get custom Shopify development services from Gashwa Technologies in Shimla, Himachal Pradesh. Build a robust, high-performing and user-friendly Shopify store for your online business.",
    },
    hero: {
      title: "Shopify Development",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "SHOPIFY DEVELOPMENT COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies, your premier destination for custom Shopify development services in Himachal Shimla. We specialize in creating robust and high-performing Shopify stores that empower businesses to thrive in the ever-expanding e-commerce landscape. With our expertise and dedication to excellence, we strive to provide you with a seamless and user-friendly online shopping experience.",
      "At Gashwa Technologies, we understand the importance of a well-designed and fully functional e-commerce website in driving sales and maximizing conversions. Our team of experienced Shopify developers works closely with you to understand your specific business requirements, brand identity, and target audience. We then leverage the power of the Shopify platform to build a visually appealing and feature-rich online store that reflects your unique brand and effectively showcases your products.",
      "Whether you're just starting out or looking to revamp your existing online store, our Shopify development services offer a comprehensive range of solutions to cater to your needs. From theme customization and responsive design to payment gateway integration and inventory management, we handle every aspect of your Shopify store development process.",
      "Our Shopify experts combine their technical proficiency with a deep understanding of e-commerce best practices to create a website that not only looks stunning but also drives results. We ensure that your Shopify store is optimized for search engines, offering seamless navigation, fast page loading speeds, and mobile responsiveness to provide an exceptional user experience across devices.",
      "As a full-service Shopify development agency, we are committed to your success. We not only focus on the initial launch of your store but also provide ongoing support and maintenance to keep your e-commerce platform running smoothly. Our team stays updated with the latest Shopify updates and industry trends, allowing us to implement new features and functionalities to enhance your store's performance.",
      "Join hands with Gashwa Technologies for your Shopify development needs and unlock the potential of your online business. Contact us today to discuss your project and let us create a customized Shopify store that drives growth and sets you apart from the competition.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on Shopify Development Company ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "SHOPIFY DEVELOPMENT COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-shopify",
          title: "Custom Shopify Development",
          image: "/assets/img/service/ecommerce.png",
          description:
            "Build robust and high-performing Shopify stores tailored to your business requirements, brand identity and target audience.",
          href: "/shopify-development",
        },
        {
          icon: "fa-paintbrush",
          title: "Shopify Theme Customization",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Create visually appealing and responsive Shopify store designs that effectively showcase your products and provide a seamless shopping experience.",
          href: "/shopify-development",
        },
        {
          icon: "fa-cart-shopping",
          title: "Shopify E-commerce Solutions",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Implement payment gateway integration, inventory management, search optimization and other features to enhance your Shopify store.",
          href: "/shopify-development",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Shopify Development Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your premier destination for custom Shopify development services in Himachal Shimla. We specialize in creating robust and high-performing Shopify stores that empower businesses to thrive in the ever-expanding e-commerce landscape. With our expertise and dedication to excellence, we strive to provide you with a seamless and user-friendly online shopping experience.",
        "At Gashwa Technologies, we understand the importance of a well-designed and fully functional e-commerce website in driving sales and maximizing conversions. Our team of experienced Shopify developers works closely with you to understand your specific business requirements, brand identity, and target audience. We then leverage the power of the Shopify platform to build a visually appealing and feature-rich online store that reflects your unique brand and effectively showcases your products.",
        "Whether you're just starting out or looking to revamp your existing online store, our Shopify development services offer a comprehensive range of solutions to cater to your needs. From theme customization and responsive design to payment gateway integration and inventory management, we handle every aspect of your Shopify store development process.",
        "Our Shopify experts combine their technical proficiency with a deep understanding of e-commerce best practices to create a website that not only looks stunning but also drives results. We ensure that your Shopify store is optimized for search engines, offering seamless navigation, fast page loading speeds, and mobile responsiveness to provide an exceptional user experience across devices.",
        "As a full-service Shopify development agency, we are committed to your success. We not only focus on the initial launch of your store but also provide ongoing support and maintenance to keep your e-commerce platform running smoothly. Our team stays updated with the latest Shopify updates and industry trends, allowing us to implement new features and functionalities to enhance your store's performance.",
        "Join hands with Gashwa Technologies for your Shopify development needs and unlock the potential of your online business. Contact us today to discuss your project and let us create a customized Shopify store that drives growth and sets you apart from the competition.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on Shopify Development Company ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on Shopify Development Company ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "woocommerce-development": {
    slug: "woocommerce-development",
    seo: {
      title: "WooCommerce Development Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides custom WooCommerce development services in Shimla, Himachal Pradesh. We create powerful, scalable and secure e-commerce solutions using the WooCommerce platform.",
      keywords: [
        "WooCommerce Development",
        "WooCommerce Development company in Shimla",
        "WooCommerce Development services Shimla",
        "WooCommerce Development company in Himachal Pradesh",
        "WooCommerce Development Himachal",
        "WooCommerce Development services in Himachal",
        "WooCommerce Development company Shimla Himachal",
        "WooCommerce Development services in Shimla",
        "WooCommerce website development Shimla",
        "Custom WooCommerce Development Shimla",
        "WooCommerce theme development Shimla",
        "WooCommerce e-commerce development Shimla",
        "WooCommerce developers Shimla",
        "WooCommerce Development Company Himachal",
        "E-commerce Development Shimla",
        "IT company in Himachal",
      ],
      ogTitle:
        "WooCommerce Development Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get custom WooCommerce development services from Gashwa Technologies in Shimla, Himachal Pradesh. Build powerful, scalable and secure e-commerce solutions for your business.",
    },
    hero: {
      title: "WooCommerce Development",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "WOO-COMMERCE DEVELOPMENT COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies, your trusted partner for custom WooCommerce development services in Himachal Shimla. As a leading web development company, we specialize in creating powerful and scalable e-commerce solutions using the WooCommerce platform. With our expertise and dedication to excellence, we are committed to helping your business thrive in the online marketplace.",
      "At Gashwa Technologies, we understand that a successful e-commerce website requires a combination of stunning design, seamless functionality, and secure payment processing. Our team of experienced developers works closely with you to understand your specific business requirements, target audience, and branding guidelines. We then leverage the flexibility and robustness of WooCommerce to build an online store that not only showcases your products but also enhances the shopping experience for your customers.",
      "Our WooCommerce development services cover a wide range of solutions, including but not limited to:",
      "Custom WooCommerce theme design and development",
      "Product catalog setup and management",
      "Payment gateway integration",
      "Shopping cart customization",
      "Order management and tracking systems",
      "Inventory management solutions",
      "Shipping and tax configurations",
      "Responsive and mobile-friendly designs",
      "Third-party plugin integration",
      "With Gashwa Technologies, you can rest assured that your WooCommerce website will be built to the highest industry standards. We focus on creating user-friendly interfaces, intuitive navigation, and seamless checkout processes to maximize conversions and customer satisfaction. Our team also ensures that your online store is optimized for search engines, improving its visibility and driving organic traffic to your site.",
      "As a client-centered company, we pride ourselves on delivering projects on time and within budget. We believe in transparent communication, and our team will keep you updated throughout the development process, addressing any questions or concerns that may arise. Even after the launch of your website, we provide ongoing support and maintenance to ensure your online store remains secure, up-to-date, and fully functional.",
      "Elevate your e-commerce business with Gashwa Technologies' custom WooCommerce development services. Contact us today to discuss your project requirements, and let us help you achieve success in the digital marketplace.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on woo-commerce Development Company ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "WOO-COMMERCE DEVELOPMENT COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-cart-shopping",
          title: "Custom WooCommerce Development",
          image: "/assets/img/service/ecommerce.png",
          description:
            "Create powerful and scalable WooCommerce e-commerce solutions tailored to your business requirements, target audience and branding.",
          href: "/woo-commerce-development",
        },
        {
          icon: "fa-paintbrush",
          title: "WooCommerce Theme Development",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Develop user-friendly and responsive WooCommerce designs with intuitive navigation and seamless shopping experiences.",
          href: "/woo-commerce-development",
        },
        {
          icon: "fa-credit-card",
          title: "Payment Gateway Integration",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Integrate secure payment gateways and create seamless checkout processes to improve customer satisfaction and maximize conversions.",
          href: "/woo-commerce-development",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "WooCommerce Development Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your trusted partner for custom WooCommerce development services in Himachal Shimla. As a leading web development company, we specialize in creating powerful and scalable e-commerce solutions using the WooCommerce platform. With our expertise and dedication to excellence, we are committed to helping your business thrive in the online marketplace.",
        "At Gashwa Technologies, we understand that a successful e-commerce website requires a combination of stunning design, seamless functionality, and secure payment processing. Our team of experienced developers works closely with you to understand your specific business requirements, target audience, and branding guidelines. We then leverage the flexibility and robustness of WooCommerce to build an online store that not only showcases your products but also enhances the shopping experience for your customers.",
        "Our WooCommerce development services include custom WooCommerce theme design and development, product catalog setup and management, payment gateway integration, shopping cart customization, order management and tracking systems, inventory management solutions, shipping and tax configurations, responsive and mobile-friendly designs, and third-party plugin integration.",
        "With Gashwa Technologies, you can rest assured that your WooCommerce website will be built to the highest industry standards. We focus on creating user-friendly interfaces, intuitive navigation, and seamless checkout processes to maximize conversions and customer satisfaction. Our team also ensures that your online store is optimized for search engines, improving its visibility and driving organic traffic to your site.",
        "As a client-centered company, we pride ourselves on delivering projects on time and within budget. We believe in transparent communication, and our team will keep you updated throughout the development process, addressing any questions or concerns that may arise. Even after the launch of your website, we provide ongoing support and maintenance to ensure your online store remains secure, up-to-date, and fully functional.",
        "Elevate your e-commerce business with Gashwa Technologies' custom WooCommerce development services. Contact us today to discuss your project requirements, and let us help you achieve success in the digital marketplace.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on woo-commerce Development Company ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on woo-commerce Development Company ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "square-space-development": {
    slug: "square-space-development",
    seo: {
      title: "Squarespace Development Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides custom Squarespace development services in Shimla, Himachal Pradesh. We create stunning, functional and user-friendly websites using the powerful Squarespace platform.",
      keywords: [
        "Squarespace Development",
        "Squarespace Development company in Shimla",
        "Squarespace Development services Shimla",
        "Squarespace Development company in Himachal Pradesh",
        "Squarespace Development Himachal",
        "Squarespace Development services in Himachal",
        "Squarespace Development company Shimla Himachal",
        "Squarespace Development services in Shimla",
        "Squarespace website development Shimla",
        "Custom Squarespace Development Shimla",
        "Squarespace website design Shimla",
        "Squarespace e-commerce development Shimla",
        "Squarespace developers Shimla",
        "Squarespace Development Company Himachal",
        "Website Development Shimla",
        "IT company in Himachal",
      ],
      ogTitle:
        "Squarespace Development Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get custom Squarespace development services from Gashwa Technologies in Shimla, Himachal Pradesh. Build stunning, functional and user-friendly websites for your business.",
    },
    hero: {
      title: "Squarespace Development",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "SQUARESPACE DEVELOPMENT COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies, your trusted partner for custom Squarespace development services in Himachal Shimla. We specialize in creating stunning and functional websites using the power of Squarespace, a user-friendly and robust website building platform. With our expertise and dedication to excellence, we strive to provide you with a website that not only represents your brand effectively but also delivers exceptional user experiences.",
      "At Gashwa Technologies, we understand the importance of a strong online presence for businesses of all sizes. Our team of skilled Squarespace developers combines their technical prowess with creative thinking to bring your vision to life. Whether you need a simple portfolio website, an e-commerce store, or a comprehensive corporate website, we have the expertise to cater to your specific requirements.",
      "Squarespace offers a range of powerful features and customizable templates that serve as a solid foundation for your website. We leverage the platform's flexibility to design and develop unique and visually appealing websites that align with your brand identity. Our developers meticulously craft each element, ensuring a seamless integration of your content, images, and videos to create a cohesive and engaging user experience.",
      "With Squarespace, you can easily manage and update your website without any coding knowledge. We provide comprehensive training and support to empower you to take control of your online presence. Additionally, we offer maintenance and optimization services to ensure your Squarespace website remains secure, performs optimally, and stays up-to-date with the latest industry standards.",
      "When you choose Gashwa Technologies for your Squarespace development needs, you can expect professionalism, attention to detail, and timely project delivery. We prioritize your satisfaction and work closely with you to understand your goals and objectives. Our team is committed to exceeding your expectations, from the initial design concept to the final launch of your website.",
      "Elevate your online presence with Gashwa Technologies' custom Squarespace development services. Contact us today to discuss your project and let us create a visually stunning and functional website that helps you achieve your business goals.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on Squarespace Development Company ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "SQUARESPACE DEVELOPMENT COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-laptop-code",
          title: "Custom Squarespace Development",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Create stunning and functional Squarespace websites tailored to your brand, business requirements and target audience.",
          href: "/squarespace-development",
        },
        {
          icon: "fa-palette",
          title: "Squarespace Website Design",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Design unique and visually appealing Squarespace websites with seamless integration of content, images and videos.",
          href: "/squarespace-development",
        },
        {
          icon: "fa-gears",
          title: "Squarespace Maintenance & Optimization",
          image: "/assets/img/service/website-maintenance.png",
          description:
            "Keep your Squarespace website secure, optimized and up-to-date with ongoing maintenance, support and optimization services.",
          href: "/squarespace-development",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Squarespace Development Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your trusted partner for custom Squarespace development services in Himachal Shimla. We specialize in creating stunning and functional websites using the power of Squarespace, a user-friendly and robust website building platform. With our expertise and dedication to excellence, we strive to provide you with a website that not only represents your brand effectively but also delivers exceptional user experiences.",
        "At Gashwa Technologies, we understand the importance of a strong online presence for businesses of all sizes. Our team of skilled Squarespace developers combines their technical prowess with creative thinking to bring your vision to life. Whether you need a simple portfolio website, an e-commerce store, or a comprehensive corporate website, we have the expertise to cater to your specific requirements.",
        "Squarespace offers a range of powerful features and customizable templates that serve as a solid foundation for your website. We leverage the platform's flexibility to design and develop unique and visually appealing websites that align with your brand identity. Our developers meticulously craft each element, ensuring a seamless integration of your content, images, and videos to create a cohesive and engaging user experience.",
        "With Squarespace, you can easily manage and update your website without any coding knowledge. We provide comprehensive training and support to empower you to take control of your online presence. Additionally, we offer maintenance and optimization services to ensure your Squarespace website remains secure, performs optimally, and stays up-to-date with the latest industry standards.",
        "When you choose Gashwa Technologies for your Squarespace development needs, you can expect professionalism, attention to detail, and timely project delivery. We prioritize your satisfaction and work closely with you to understand your goals and objectives. Our team is committed to exceeding your expectations, from the initial design concept to the final launch of your website.",
        "Elevate your online presence with Gashwa Technologies' custom Squarespace development services. Contact us today to discuss your project and let us create a visually stunning and functional website that helps you achieve your business goals.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on Squarespace Development Company ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on Squarespace Development Company ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "magento-web-development": {
    slug: "magento-web-development",
    seo: {
      title: "Magento Development Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides custom Magento development services in Shimla, Himachal Pradesh. We create powerful, scalable and secure Magento solutions that help businesses build and grow successful online stores.",
      keywords: [
        "Magento Development",
        "Magento Development company in Shimla",
        "Magento Development services Shimla",
        "Magento Development company in Himachal Pradesh",
        "Magento Development Himachal",
        "Magento Development services in Himachal",
        "Magento Development company Shimla Himachal",
        "Magento Development services in Shimla",
        "Magento website development Shimla",
        "Custom Magento Development Shimla",
        "Magento theme customization Shimla",
        "Magento e-commerce development Shimla",
        "Magento developers Shimla",
        "Magento Development Company Himachal",
        "E-commerce Development Shimla",
        "IT company in Himachal",
      ],
      ogTitle:
        "Magento Development Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get custom Magento development services from Gashwa Technologies in Shimla, Himachal Pradesh. Build powerful, scalable and secure Magento solutions for your online business.",
    },
    hero: {
      title: "Magento Development",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "MAGENTO DEVELOPMENT COMPANY IN HIMACHAL: GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies, your premier destination for custom Magento development services in Himachal Shimla.",
      "At Gashwa Technologies, we specialize in creating powerful and scalable Magento solutions that empower your online business. Whether you are planning to launch a new e-commerce store or looking to enhance the functionality of your existing Magento website, our experienced team is here to help.",
      "Magento is a leading e-commerce platform renowned for its flexibility, robustness, and extensive feature set. With our expertise in Magento development, we can tailor a solution that meets your specific business requirements. Our team works closely with you to understand your goals, target audience, and desired functionalities, enabling us to design and develop a Magento website that delivers exceptional user experiences and drives conversions.",
      "As a full-service Magento development agency, we offer a comprehensive range of services. From Magento theme customization and extension development to payment gateway integration and performance optimization, we cover all aspects of Magento development. Our developers are well-versed in the latest Magento standards and best practices, ensuring that your website is secure, scalable, and optimized for speed.",
      "At Gashwa Technologies, we understand the importance of seamless integration and smooth user experiences. We can integrate your Magento store with various third-party systems, such as ERP software, CRM systems, shipping providers, and more, to streamline your business operations and enhance customer satisfaction.",
      "When you choose Gashwa Technologies for your Magento development needs, you can expect professionalism, attention to detail, and transparent communication. We prioritize your satisfaction and strive to exceed your expectations at every stage of the development process.",
      "Take your online business to new heights with Gashwa Technologies' custom Magento development services. Contact us today to discuss your project and let our expert team turn your vision into a reality.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on Magento Development Company ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "MAGENTO DEVELOPMENT COMPANY IN HIMACHAL: GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-cart-shopping",
          title: "Custom Magento Development",
          image: "/assets/img/service/ecommerce.png",
          description:
            "Create powerful and scalable Magento solutions tailored to your business goals, target audience and desired functionalities.",
          href: "/magento-development",
        },
        {
          icon: "fa-paintbrush",
          title: "Magento Theme & Extension Development",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Customize Magento themes and develop extensions to enhance your e-commerce store with powerful and flexible functionality.",
          href: "/magento-development",
        },
        {
          icon: "fa-plug",
          title: "Magento Integration & Optimization",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Integrate Magento with ERP, CRM, shipping providers and other systems while optimizing your website for security, scalability and speed.",
          href: "/magento-development",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Magento Development Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your premier destination for custom Magento development services in Himachal Shimla.",
        "At Gashwa Technologies, we specialize in creating powerful and scalable Magento solutions that empower your online business. Whether you are planning to launch a new e-commerce store or looking to enhance the functionality of your existing Magento website, our experienced team is here to help.",
        "Magento is a leading e-commerce platform renowned for its flexibility, robustness, and extensive feature set. With our expertise in Magento development, we can tailor a solution that meets your specific business requirements. Our team works closely with you to understand your goals, target audience, and desired functionalities, enabling us to design and develop a Magento website that delivers exceptional user experiences and drives conversions.",
        "As a full-service Magento development agency, we offer a comprehensive range of services. From Magento theme customization and extension development to payment gateway integration and performance optimization, we cover all aspects of Magento development. Our developers are well-versed in the latest Magento standards and best practices, ensuring that your website is secure, scalable, and optimized for speed.",
        "At Gashwa Technologies, we understand the importance of seamless integration and smooth user experiences. We can integrate your Magento store with various third-party systems, such as ERP software, CRM systems, shipping providers, and more, to streamline your business operations and enhance customer satisfaction.",
        "When you choose Gashwa Technologies for your Magento development needs, you can expect professionalism, attention to detail, and transparent communication. We prioritize your satisfaction and strive to exceed your expectations at every stage of the development process.",
        "Take your online business to new heights with Gashwa Technologies' custom Magento development services. Contact us today to discuss your project and let our expert team turn your vision into a reality.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on Magento Development Company ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on Magento Development Company ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "drupal-web-development": {
    slug: "drupal-web-development",
    seo: {
      title: "Drupal Development Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides custom Drupal development services in Shimla, Himachal Pradesh. We create secure, scalable and high-performance Drupal websites and web applications tailored to your business needs.",
      keywords: [
        "Drupal Development",
        "Drupal Development company in Shimla",
        "Drupal Development services Shimla",
        "Drupal Development company in Himachal Pradesh",
        "Drupal Development Himachal",
        "Drupal Development services in Himachal",
        "Drupal Development company Shimla Himachal",
        "Drupal Development services in Shimla",
        "Drupal website development Shimla",
        "Custom Drupal Development Shimla",
        "Drupal CMS development Shimla",
        "Drupal web application development Shimla",
        "Drupal developers Shimla",
        "Drupal Development Company Himachal",
        "CMS Development Shimla",
        "IT company in Himachal",
      ],
      ogTitle:
        "Drupal Development Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get custom Drupal development services from Gashwa Technologies in Shimla, Himachal Pradesh. Build secure, scalable and user-friendly Drupal websites and web applications.",
    },
    hero: {
      title: "Drupal Development",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "DRUPEL DEVELOPMENT COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies, your trusted partner for custom Drupal development services in Himachal Shimla. With our expertise and dedication, we offer comprehensive solutions to help you harness the power of Drupal, one of the most robust and flexible content management systems available.",
      "At Gashwa Technologies, we understand the unique requirements of businesses in Himachal Shimla, and our Drupal development services are tailored to meet your specific needs. Whether you are a small business looking for a simple website or a large enterprise requiring a complex web application, we have the skills and experience to deliver exceptional results.",
      "Our team of highly skilled Drupal developers is well-versed in the latest Drupal technologies and follows best practices to build websites that are secure, scalable, and optimized for performance. We collaborate closely with you to understand your goals, target audience, and desired functionalities, ensuring that the final product exceeds your expectations.",
      "With Drupal's extensive module ecosystem and flexibility, we can incorporate a wide range of features and functionalities into your website. Whether it's e-commerce capabilities, social media integration, multilingual support, or custom content types, we can tailor your Drupal site to meet your specific requirements.",
      "At Gashwa Technologies, we prioritize user experience and ensure that your Drupal website is intuitive, visually appealing, and optimized for conversions. We focus on creating responsive designs that look and perform flawlessly across different devices and screen sizes. Our team pays meticulous attention to detail, ensuring that your website is user-friendly, with clear navigation, engaging content, and strong calls-to-action.",
      "As a full-service Drupal development company, we offer end-to-end solutions, from strategy and planning to development, deployment, and ongoing maintenance. We are committed to delivering projects on time and within budget, and we provide dedicated support to address any issues or updates you may require in the future.",
      "Partner with Gashwa Technologies for your Drupal development needs in Himachal Shimla and unlock the full potential of this powerful CMS. Contact us today to discuss your project and let us create a Drupal website that drives your business forward.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on Drupal Development Company ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "DRUPEL DEVELOPMENT COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-laptop-code",
          title: "Custom Drupal Development",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Build secure, scalable and high-performance Drupal websites and web applications tailored to your specific business requirements.",
          href: "/drupel-development",
        },
        {
          icon: "fa-puzzle-piece",
          title: "Drupal Module Integration",
          image: "/assets/img/service/ecommerce.png",
          description:
            "Extend your Drupal website with e-commerce, social media integration, multilingual support, custom content types and other required features.",
          href: "/drupel-development",
        },
        {
          icon: "fa-mobile-screen-button",
          title: "Responsive Drupal Development",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Create intuitive, visually appealing and responsive Drupal websites that perform flawlessly across different devices and screen sizes.",
          href: "/drupel-development",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Drupal Development Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your trusted partner for custom Drupal development services in Himachal Shimla. With our expertise and dedication, we offer comprehensive solutions to help you harness the power of Drupal, one of the most robust and flexible content management systems available.",
        "At Gashwa Technologies, we understand the unique requirements of businesses in Himachal Shimla, and our Drupal development services are tailored to meet your specific needs. Whether you are a small business looking for a simple website or a large enterprise requiring a complex web application, we have the skills and experience to deliver exceptional results.",
        "Our team of highly skilled Drupal developers is well-versed in the latest Drupal technologies and follows best practices to build websites that are secure, scalable, and optimized for performance. We collaborate closely with you to understand your goals, target audience, and desired functionalities, ensuring that the final product exceeds your expectations.",
        "With Drupal's extensive module ecosystem and flexibility, we can incorporate a wide range of features and functionalities into your website. Whether it's e-commerce capabilities, social media integration, multilingual support, or custom content types, we can tailor your Drupal site to meet your specific requirements.",
        "At Gashwa Technologies, we prioritize user experience and ensure that your Drupal website is intuitive, visually appealing, and optimized for conversions. We focus on creating responsive designs that look and perform flawlessly across different devices and screen sizes. Our team pays meticulous attention to detail, ensuring that your website is user-friendly, with clear navigation, engaging content, and strong calls-to-action.",
        "As a full-service Drupal development company, we offer end-to-end solutions, from strategy and planning to development, deployment, and ongoing maintenance. We are committed to delivering projects on time and within budget, and we provide dedicated support to address any issues or updates you may require in the future.",
        "Partner with Gashwa Technologies for your Drupal development needs in Himachal Shimla and unlock the full potential of this powerful CMS. Contact us today to discuss your project and let us create a Drupal website that drives your business forward.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on Drupal Development Company ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on Drupal Development Company ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "jhoomla-web-development": {
    slug: "jhoomla-web-development",
    seo: {
      title: "Joomla Development Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides custom Joomla development services in Shimla, Himachal Pradesh. We create robust, dynamic and secure Joomla websites, e-commerce platforms and custom web applications.",
      keywords: [
        "Joomla Development",
        "Joomla Development company in Shimla",
        "Joomla Development services Shimla",
        "Joomla Development company in Himachal Pradesh",
        "Joomla Development Himachal",
        "Joomla Development services in Himachal",
        "Joomla Development company Shimla Himachal",
        "Joomla Development services in Shimla",
        "Joomla website development Shimla",
        "Custom Joomla Development Shimla",
        "Joomla CMS development Shimla",
        "Joomla e-commerce development Shimla",
        "Joomla web application development Shimla",
        "Joomla developers Shimla",
        "Joomla Development Company Himachal",
        "CMS Development Shimla",
        "IT company in Himachal",
      ],
      ogTitle:
        "Joomla Development Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get custom Joomla development services from Gashwa Technologies in Shimla, Himachal Pradesh. Build robust, dynamic and secure Joomla websites and web applications for your business.",
    },
    hero: {
      title: "Joomla Development",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "JOOMLA DEVELOPMENT COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies, your leading provider of custom Joomla development services in Himachal Shimla. We specialize in creating robust and dynamic websites using Joomla, a powerful content management system (CMS) trusted by millions of businesses worldwide. With our expertise and dedication to excellence, we aim to deliver Joomla-based solutions that empower your online presence and drive business growth.",
      "At Gashwa Technologies, we understand that every business has unique requirements, and Joomla provides the flexibility to meet those needs effectively. Our team of experienced Joomla developers possesses in-depth knowledge of the platform and stays updated with the latest trends and advancements in Joomla development.",
      "Whether you need a simple Joomla website, a complex e-commerce platform, or a custom web application, we have the skills and resources to bring your vision to life. Our development process begins with a thorough understanding of your business goals, target audience, and desired functionalities. We then create a tailored Joomla solution that not only reflects your brand identity but also enhances user experience and drives conversions.",
      "With Joomla's extensive range of features and extensions, we can integrate various functionalities into your website, such as user registration, content management, e-commerce capabilities, social media integration, and much more. Our developers follow industry best practices and coding standards to ensure your Joomla website is secure, scalable, and optimized for performance.",
      "At Gashwa Technologies, we believe that a successful website goes beyond aesthetics and functionality. That's why we pay equal attention to the content strategy of your Joomla website. Our team of content creators can assist you in crafting engaging, SEO-friendly content that effectively communicates your brand message and engages your target audience.",
      "When you choose Gashwa Technologies for your Joomla development needs, you can expect professionalism, reliability, and a commitment to delivering exceptional results. We take pride in our transparent communication, timely project delivery, and ongoing support to ensure your Joomla website remains up-to-date and performs optimally.",
      "Elevate your online presence with Gashwa Technologies' custom Joomla development services. Contact us today to discuss your project and leverage the power of Joomla to take your business to new heights.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on Joomla Development Company ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "JOOMLA DEVELOPMENT COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-laptop-code",
          title: "Custom Joomla Development",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Create robust and dynamic Joomla websites tailored to your business goals, target audience and desired functionalities.",
          href: "/joomla-development",
        },
        {
          icon: "fa-cart-shopping",
          title: "Joomla E-commerce Development",
          image: "/assets/img/service/ecommerce.png",
          description:
            "Develop flexible Joomla e-commerce platforms with powerful features and extensions to support your online business.",
          href: "/joomla-development",
        },
        {
          icon: "fa-puzzle-piece",
          title: "Joomla Extensions & Integration",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Integrate user registration, content management, social media and other functionalities while keeping your Joomla website secure and optimized.",
          href: "/joomla-development",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Joomla Development Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your leading provider of custom Joomla development services in Himachal Shimla. We specialize in creating robust and dynamic websites using Joomla, a powerful content management system (CMS) trusted by millions of businesses worldwide. With our expertise and dedication to excellence, we aim to deliver Joomla-based solutions that empower your online presence and drive business growth.",
        "At Gashwa Technologies, we understand that every business has unique requirements, and Joomla provides the flexibility to meet those needs effectively. Our team of experienced Joomla developers possesses in-depth knowledge of the platform and stays updated with the latest trends and advancements in Joomla development.",
        "Whether you need a simple Joomla website, a complex e-commerce platform, or a custom web application, we have the skills and resources to bring your vision to life. Our development process begins with a thorough understanding of your business goals, target audience, and desired functionalities. We then create a tailored Joomla solution that not only reflects your brand identity but also enhances user experience and drives conversions.",
        "With Joomla's extensive range of features and extensions, we can integrate various functionalities into your website, such as user registration, content management, e-commerce capabilities, social media integration, and much more. Our developers follow industry best practices and coding standards to ensure your Joomla website is secure, scalable, and optimized for performance.",
        "At Gashwa Technologies, we believe that a successful website goes beyond aesthetics and functionality. That's why we pay equal attention to the content strategy of your Joomla website. Our team of content creators can assist you in crafting engaging, SEO-friendly content that effectively communicates your brand message and engages your target audience.",
        "When you choose Gashwa Technologies for your Joomla development needs, you can expect professionalism, reliability, and a commitment to delivering exceptional results. We take pride in our transparent communication, timely project delivery, and ongoing support to ensure your Joomla website remains up-to-date and performs optimally.",
        "Elevate your online presence with Gashwa Technologies' custom Joomla development services. Contact us today to discuss your project and leverage the power of Joomla to take your business to new heights.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on Joomla Development Company ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on Joomla Development Company ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "zencart-web-development": {
    slug: "zencart-web-development",
    seo: {
      title: "ZenCart Development Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides custom ZenCart development services in Shimla, Himachal Pradesh. We create robust, feature-rich and scalable e-commerce solutions tailored to your business needs.",
      keywords: [
        "ZenCart Development",
        "ZenCart Development company in Shimla",
        "ZenCart Development services Shimla",
        "ZenCart Development company in Himachal Pradesh",
        "ZenCart Development Himachal",
        "ZenCart Development services in Himachal",
        "ZenCart Development company Shimla Himachal",
        "ZenCart Development services in Shimla",
        "ZenCart website development Shimla",
        "Custom ZenCart Development Shimla",
        "ZenCart e-commerce development Shimla",
        "ZenCart developers Shimla",
        "ZenCart Development Company Himachal",
        "E-commerce Development Shimla",
        "Online Store Development Shimla",
        "IT company in Himachal",
      ],
      ogTitle:
        "ZenCart Development Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get custom ZenCart development services from Gashwa Technologies in Shimla, Himachal Pradesh. Build robust, feature-rich and scalable e-commerce solutions for your online business.",
    },
    hero: {
      title: "ZenCart Development",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "ZENCART DEVELOPMENT COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies, your trusted provider of ZenCart development services in Himachal Shimla. As a leading web development agency, we specialize in harnessing the power of ZenCart to create robust and feature-rich e-commerce solutions that drive your online business to success.",
      "ZenCart is a powerful open-source e-commerce platform that offers a wide range of functionalities and customization options. With our expertise in ZenCart development, we can help you build a professional online store that showcases your products, engages your customers, and maximizes your sales potential.",
      "At Gashwa Technologies, we understand that every business is unique, and that's why we take a tailored approach to ZenCart development. Our team of skilled developers works closely with you to understand your business requirements, target audience, and branding. We then leverage the flexibility of ZenCart to create a fully customized e-commerce solution that aligns with your vision and meets your specific needs.",
      "From designing visually appealing and user-friendly interfaces to integrating secure payment gateways, managing inventory, and implementing effective marketing tools, we handle every aspect of ZenCart development to ensure a seamless online shopping experience for your customers. Our solutions are designed to be scalable and adaptable, allowing your e-commerce store to grow and evolve alongside your business.",
      "With Gashwa Technologies as your ZenCart development partner, you can expect top-notch quality, attention to detail, and timely project delivery. We strive to exceed your expectations and provide you with a robust and reliable e-commerce platform that drives conversions and boosts your online business performance.",
      "Furthermore, our commitment to your success goes beyond the development phase. We offer ongoing maintenance and support services to ensure your ZenCart store remains secure, up-to-date, and optimized for performance. Our team is always ready to assist you with any technical issues, updates, or enhancements that may arise, allowing you to focus on growing your business.",
      "Elevate your online store to new heights with Gashwa Technologies' ZenCart development services. Contact us today to discuss your project requirements and let us empower your e-commerce business with a powerful and efficient online platform.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on Zencart Development Company ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "ZENCART DEVELOPMENT COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-cart-shopping",
          title: "Custom ZenCart Development",
          image: "/assets/img/service/ecommerce.png",
          description:
            "Create fully customized ZenCart e-commerce solutions tailored to your business requirements, target audience and branding.",
          href: "/zencart-development",
        },
        {
          icon: "fa-credit-card",
          title: "ZenCart Payment & Store Integration",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Build seamless online shopping experiences with secure payment gateways, inventory management and effective marketing tools.",
          href: "/zencart-development",
        },
        {
          icon: "fa-gears",
          title: "ZenCart Maintenance & Support",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Keep your ZenCart store secure, up-to-date and optimized for performance with ongoing maintenance, technical support and enhancements.",
          href: "/zencart-development",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "ZenCart Development Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your trusted provider of ZenCart development services in Himachal Shimla. As a leading web development agency, we specialize in harnessing the power of ZenCart to create robust and feature-rich e-commerce solutions that drive your online business to success.",
        "ZenCart is a powerful open-source e-commerce platform that offers a wide range of functionalities and customization options. With our expertise in ZenCart development, we can help you build a professional online store that showcases your products, engages your customers, and maximizes your sales potential.",
        "At Gashwa Technologies, we understand that every business is unique, and that's why we take a tailored approach to ZenCart development. Our team of skilled developers works closely with you to understand your business requirements, target audience, and branding. We then leverage the flexibility of ZenCart to create a fully customized e-commerce solution that aligns with your vision and meets your specific needs.",
        "From designing visually appealing and user-friendly interfaces to integrating secure payment gateways, managing inventory, and implementing effective marketing tools, we handle every aspect of ZenCart development to ensure a seamless online shopping experience for your customers. Our solutions are designed to be scalable and adaptable, allowing your e-commerce store to grow and evolve alongside your business.",
        "With Gashwa Technologies as your ZenCart development partner, you can expect top-notch quality, attention to detail, and timely project delivery. We strive to exceed your expectations and provide you with a robust and reliable e-commerce platform that drives conversions and boosts your online business performance.",
        "Furthermore, our commitment to your success goes beyond the development phase. We offer ongoing maintenance and support services to ensure your ZenCart store remains secure, up-to-date, and optimized for performance. Our team is always ready to assist you with any technical issues, updates, or enhancements that may arise, allowing you to focus on growing your business.",
        "Elevate your online store to new heights with Gashwa Technologies' ZenCart development services. Contact us today to discuss your project requirements and let us empower your e-commerce business with a powerful and efficient online platform.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on Zencart Development Company ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on Zencart Development Company ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "oscommerce-web-development": {
    slug: "oscommerce-web-development",
    seo: {
      title: "osCommerce Development Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides professional osCommerce development services in Shimla, Himachal Pradesh. We create powerful, customized and user-friendly e-commerce solutions using osCommerce.",
      keywords: [
        "osCommerce Development",
        "osCommerce Development company in Shimla",
        "osCommerce Development services Shimla",
        "osCommerce Development company in Himachal Pradesh",
        "osCommerce Development Himachal",
        "osCommerce Development services in Himachal",
        "osCommerce Development company Shimla Himachal",
        "osCommerce Development services in Shimla",
        "osCommerce website development Shimla",
        "Custom osCommerce Development Shimla",
        "osCommerce e-commerce development Shimla",
        "osCommerce developers Shimla",
        "osCommerce Development Company Himachal",
        "E-commerce Development Shimla",
        "Online Store Development Shimla",
        "IT company in Himachal",
      ],
      ogTitle:
        "osCommerce Development Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get professional osCommerce development services from Gashwa Technologies in Shimla, Himachal Pradesh. Build powerful, customized and user-friendly e-commerce solutions.",
    },
    hero: {
      title: "osCommerce Development",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "OSCOMMERCE DEVELOPMENT COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies, your leading provider of professional osCommerce development services in Himachal Shimla. With our expertise and dedication to excellence, we specialize in creating powerful and customized e-commerce solutions using osCommerce.",
      "At Gashwa Technologies, we understand the unique requirements of businesses looking to establish an online presence and effectively sell their products or services. Our osCommerce development services are designed to meet these needs and deliver exceptional results.",
      "osCommerce is a feature-rich and robust e-commerce platform that offers a wide range of functionalities for building and managing online stores. With our extensive experience in osCommerce development, we can help you create a dynamic and user-friendly e-commerce website that drives conversions and enhances customer satisfaction.",
      "Our team of skilled osCommerce developers has a deep understanding of the platform and stays up to date with the latest trends and advancements in e-commerce technology. We work closely with you to understand your business goals, target audience, and specific requirements, enabling us to tailor the osCommerce solution to your exact needs.",
      "Whether you need a brand new osCommerce store or want to enhance an existing one, we have the expertise to deliver. Our osCommerce development services include customized theme design, seamless integration of payment gateways, product catalog setup, secure shopping cart implementation, and robust backend administration features.",
      "At Gashwa Technologies, we prioritize user experience and ensure that your osCommerce website is intuitive, visually appealing, and easy to navigate. We optimize your online store for performance and search engine visibility, helping you attract more customers and generate higher revenue.",
      "When you choose Gashwa Technologies for your osCommerce development needs, you can expect professionalism, attention to detail, and on-time project delivery. We are dedicated to your satisfaction and offer ongoing maintenance and support to keep your osCommerce store running smoothly.",
      "Ready to take your e-commerce business to new heights? Contact Gashwa Technologies today to discuss your osCommerce development project, and let us help you create a powerful online store that drives success.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on OsCommerce Development Company ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "OSCOMMERCE DEVELOPMENT COMPANY IN SHIMLA : GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-cart-shopping",
          title: "Custom osCommerce Development",
          image: "/assets/img/service/ecommerce.png",
          description:
            "Create powerful and customized osCommerce stores tailored to your business goals, target audience and specific requirements.",
          href: "/oscommerce-development",
        },
        {
          icon: "fa-paintbrush",
          title: "osCommerce Theme & Store Setup",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Develop visually appealing and user-friendly stores with customized themes, product catalogs and secure shopping cart functionality.",
          href: "/oscommerce-development",
        },
        {
          icon: "fa-credit-card",
          title: "Payment Gateway & Optimization",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Integrate payment gateways and optimize your osCommerce store for performance, search engine visibility and a smooth shopping experience.",
          href: "/oscommerce-development",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "osCommerce Development Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your leading provider of professional osCommerce development services in Himachal Shimla. With our expertise and dedication to excellence, we specialize in creating powerful and customized e-commerce solutions using osCommerce.",
        "At Gashwa Technologies, we understand the unique requirements of businesses looking to establish an online presence and effectively sell their products or services. Our osCommerce development services are designed to meet these needs and deliver exceptional results.",
        "osCommerce is a feature-rich and robust e-commerce platform that offers a wide range of functionalities for building and managing online stores. With our extensive experience in osCommerce development, we can help you create a dynamic and user-friendly e-commerce website that drives conversions and enhances customer satisfaction.",
        "Our team of skilled osCommerce developers has a deep understanding of the platform and stays up to date with the latest trends and advancements in e-commerce technology. We work closely with you to understand your business goals, target audience, and specific requirements, enabling us to tailor the osCommerce solution to your exact needs.",
        "Whether you need a brand new osCommerce store or want to enhance an existing one, we have the expertise to deliver. Our osCommerce development services include customized theme design, seamless integration of payment gateways, product catalog setup, secure shopping cart implementation, and robust backend administration features.",
        "At Gashwa Technologies, we prioritize user experience and ensure that your osCommerce website is intuitive, visually appealing, and easy to navigate. We optimize your online store for performance and search engine visibility, helping you attract more customers and generate higher revenue.",
        "When you choose Gashwa Technologies for your osCommerce development needs, you can expect professionalism, attention to detail, and on-time project delivery. We are dedicated to your satisfaction and offer ongoing maintenance and support to keep your osCommerce store running smoothly.",
        "Ready to take your e-commerce business to new heights? Contact Gashwa Technologies today to discuss your osCommerce development project, and let us help you create a powerful online store that drives success.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on OsCommerce Development Company ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on OsCommerce Development Company ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "typo3-web-development": {
    slug: "typo3-web-development",
    seo: {
      title: "TYPO3 Web Development Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides TYPO3 web development services in Shimla, Himachal Pradesh. We create robust, user-friendly, secure and scalable TYPO3 websites and web applications tailored to your business needs.",
      keywords: [
        "TYPO3 Development",
        "TYPO3 Web Development company in Shimla",
        "TYPO3 Development services Shimla",
        "TYPO3 Development company in Himachal Pradesh",
        "TYPO3 Development Himachal",
        "TYPO3 Development services in Himachal",
        "TYPO3 Development company Shimla Himachal",
        "TYPO3 Development services in Shimla",
        "TYPO3 website development Shimla",
        "Custom TYPO3 Development Shimla",
        "TYPO3 CMS development Shimla",
        "TYPO3 web application development Shimla",
        "TYPO3 developers Shimla",
        "TYPO3 Development Company Himachal",
        "CMS Development Shimla",
        "IT company in Himachal",
      ],
      ogTitle:
        "TYPO3 Web Development Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get professional TYPO3 web development services from Gashwa Technologies in Shimla, Himachal Pradesh. Build secure, responsive and scalable TYPO3 websites and web applications.",
    },
    hero: {
      title: "TYPO3 Web Development",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "TYPO3 WEB DEVELOPMENT COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies, your trusted destination for TYPO3 web development services in Himachal Shimla. We are a leading web development agency specializing in TYPO3, one of the most powerful and flexible content management systems (CMS) available today.",
      "At Gashwa Technologies, we understand the importance of a robust and user-friendly website to drive your online presence and business growth. With our expertise in TYPO3 development, we are committed to delivering high-quality websites that not only meet your specific requirements but also exceed your expectations.",
      "Our team of skilled TYPO3 developers has extensive experience in harnessing the full potential of this feature-rich CMS. Whether you need a simple brochure website, a complex e-commerce platform, or a custom web application, we have the technical know-how to bring your vision to life.",
      "When you choose Gashwa Technologies for TYPO3 web development, you can expect a tailored solution that aligns with your unique business goals and objectives. We begin by thoroughly understanding your requirements and conducting in-depth research to develop a strategic plan for your website.",
      "Our TYPO3 web development process involves meticulous attention to detail at every stage. From wireframing and design to coding and testing, we ensure that your website is not only visually appealing but also highly functional and intuitive for users. We focus on creating responsive websites that adapt seamlessly to different devices, ensuring an optimal user experience across desktops, tablets, and mobile devices.",
      "At Gashwa Technologies, we prioritize quality and performance. Our TYPO3 websites are built using clean and efficient coding practices, resulting in fast load times, search engine friendliness, and scalability for future growth. We also pay close attention to security measures, implementing robust security features to protect your website and users' data.",
      "As your trusted partner, we provide ongoing support and maintenance services to keep your TYPO3 website up-to-date, secure, and running smoothly. We understand that technology evolves rapidly, and we stay abreast of the latest TYPO3 developments to ensure your website remains competitive in the digital landscape.",
      "Elevate your online presence with Gashwa Technologies' TYPO3 web development services. Contact us today to discuss your project requirements and let us help you create a dynamic and engaging online platform for your business.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on TYPO3 Development Company ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "TYPO3 WEB DEVELOPMENT COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-laptop-code",
          title: "Custom TYPO3 Development",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Create tailored TYPO3 websites and web applications aligned with your unique business goals, requirements and objectives.",
          href: "/typo3-development",
        },
        {
          icon: "fa-mobile-screen-button",
          title: "Responsive TYPO3 Development",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Build responsive TYPO3 websites that adapt seamlessly across desktops, tablets and mobile devices for an optimal user experience.",
          href: "/typo3-development",
        },
        {
          icon: "fa-shield-halved",
          title: "TYPO3 Support & Maintenance",
          image: "/assets/img/service/website-maintenance.png",
          description:
            "Keep your TYPO3 website secure, updated and running smoothly with ongoing support, maintenance and performance-focused development.",
          href: "/typo3-development",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "TYPO3 Web Development Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your trusted destination for TYPO3 web development services in Himachal Shimla. We are a leading web development agency specializing in TYPO3, one of the most powerful and flexible content management systems (CMS) available today.",
        "At Gashwa Technologies, we understand the importance of a robust and user-friendly website to drive your online presence and business growth. With our expertise in TYPO3 development, we are committed to delivering high-quality websites that not only meet your specific requirements but also exceed your expectations.",
        "Our team of skilled TYPO3 developers has extensive experience in harnessing the full potential of this feature-rich CMS. Whether you need a simple brochure website, a complex e-commerce platform, or a custom web application, we have the technical know-how to bring your vision to life.",
        "When you choose Gashwa Technologies for TYPO3 web development, you can expect a tailored solution that aligns with your unique business goals and objectives. We begin by thoroughly understanding your requirements and conducting in-depth research to develop a strategic plan for your website.",
        "Our TYPO3 web development process involves meticulous attention to detail at every stage. From wireframing and design to coding and testing, we ensure that your website is not only visually appealing but also highly functional and intuitive for users. We focus on creating responsive websites that adapt seamlessly to different devices, ensuring an optimal user experience across desktops, tablets, and mobile devices.",
        "At Gashwa Technologies, we prioritize quality and performance. Our TYPO3 websites are built using clean and efficient coding practices, resulting in fast load times, search engine friendliness, and scalability for future growth. We also pay close attention to security measures, implementing robust security features to protect your website and users' data.",
        "As your trusted partner, we provide ongoing support and maintenance services to keep your TYPO3 website up-to-date, secure, and running smoothly. We understand that technology evolves rapidly, and we stay abreast of the latest TYPO3 developments to ensure your website remains competitive in the digital landscape.",
        "Elevate your online presence with Gashwa Technologies' TYPO3 web development services. Contact us today to discuss your project requirements and let us help you create a dynamic and engaging online platform for your business.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on TYPO3 Development Company ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on TYPO3 Development Company ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "logo-designing": {
    slug: "logo-designing",
    seo: {
      title: "Logo Designing Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides professional logo designing services in Shimla, Himachal Pradesh. We create visually stunning, impactful, unique and memorable logos that effectively represent your brand identity.",
      keywords: [
        "Logo Designing",
        "Logo Designing company in Shimla",
        "Logo Designing services Shimla",
        "Logo Designing company in Himachal Pradesh",
        "Logo Designing Himachal",
        "Logo Designing services in Himachal",
        "Logo Designing company Shimla Himachal",
        "Logo Designing services in Shimla",
        "Custom Logo Design Shimla",
        "Professional Logo Designing Shimla",
        "Logo Design Company Himachal",
        "Brand Logo Design Shimla",
        "Creative Logo Designing Shimla",
        "Logo Designers Shimla",
        "Graphic Design Company Shimla",
        "IT company in Himachal",
      ],
      ogTitle:
        "Logo Designing Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get professional logo designing services from Gashwa Technologies in Shimla, Himachal Pradesh. Create a unique, memorable and impactful logo that builds a strong brand identity.",
    },
    hero: {
      title: "Logo Designing",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "LOGO DESIGNING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies, your reliable destination for professional logo designing services in Himachal Shimla. We specialize in creating visually stunning and impactful logos that effectively represent your brand identity. With our expertise and artistic approach, we strive to deliver a logo that not only stands out but also leaves a lasting impression on your target audience.",
      "At Gashwa Technologies, we understand the significance of a well-designed logo in establishing a strong brand presence. Our team of skilled designers works closely with you to understand your business values, target market, and design preferences. We then translate these insights into a unique and memorable logo that reflects the essence of your brand.",
      "Our logo design process is collaborative and iterative, ensuring that your vision is at the forefront. We start by conducting in-depth research to gain a comprehensive understanding of your industry, competitors, and target audience. This research forms the foundation for creating a logo that effectively communicates your brand's message and differentiates you from the competition.",
      "Using the latest design tools and techniques, we explore various concepts and present you with a range of logo options. We take your feedback into account and refine the chosen design until it perfectly aligns with your brand's personality and objectives. Our goal is to create a logo that not only visually appeals to your audience but also resonates with your brand values.",
      "At Gashwa Technologies, we believe in the power of simplicity and versatility. We ensure that your logo is scalable, making it suitable for various applications, including digital platforms, print media, signage, and merchandise. Our attention to detail and precision in design ensure that your logo maintains its integrity and clarity across different sizes and formats.",
      "Choosing Gashwa Technologies for your logo designing needs means choosing professionalism, creativity, and reliability. We are dedicated to delivering high-quality logos that leave a lasting impact and help you build a strong brand identity.",
      "Contact Gashwa Technologies today to discuss your logo design requirements, and let us create a logo that becomes the visual cornerstone of your brand.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on Logo-designing Company ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "LOGO DESIGNING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-pen-nib",
          title: "Custom Logo Design",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Create unique and memorable logos that reflect your brand identity, values, personality and business objectives.",
          href: "/logo-designing",
        },
        {
          icon: "fa-lightbulb",
          title: "Creative Logo Concepts",
          image: "/assets/img/service/creative-design.png",
          description:
            "Explore creative logo concepts based on research, industry insights, competitors and your target audience.",
          href: "/logo-designing",
        },
        {
          icon: "fa-layer-group",
          title: "Scalable Logo Design",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Design versatile logos that maintain clarity and integrity across digital platforms, print media, signage and merchandise.",
          href: "/logo-designing",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Logo Designing Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your reliable destination for professional logo designing services in Himachal Shimla. We specialize in creating visually stunning and impactful logos that effectively represent your brand identity. With our expertise and artistic approach, we strive to deliver a logo that not only stands out but also leaves a lasting impression on your target audience.",
        "At Gashwa Technologies, we understand the significance of a well-designed logo in establishing a strong brand presence. Our team of skilled designers works closely with you to understand your business values, target market, and design preferences. We then translate these insights into a unique and memorable logo that reflects the essence of your brand.",
        "Our logo design process is collaborative and iterative, ensuring that your vision is at the forefront. We start by conducting in-depth research to gain a comprehensive understanding of your industry, competitors, and target audience. This research forms the foundation for creating a logo that effectively communicates your brand's message and differentiates you from the competition.",
        "Using the latest design tools and techniques, we explore various concepts and present you with a range of logo options. We take your feedback into account and refine the chosen design until it perfectly aligns with your brand's personality and objectives. Our goal is to create a logo that not only visually appeals to your audience but also resonates with your brand values.",
        "At Gashwa Technologies, we believe in the power of simplicity and versatility. We ensure that your logo is scalable, making it suitable for various applications, including digital platforms, print media, signage, and merchandise. Our attention to detail and precision in design ensure that your logo maintains its integrity and clarity across different sizes and formats.",
        "Choosing Gashwa Technologies for your logo designing needs means choosing professionalism, creativity, and reliability. We are dedicated to delivering high-quality logos that leave a lasting impact and help you build a strong brand identity.",
        "Contact Gashwa Technologies today to discuss your logo design requirements, and let us create a logo that becomes the visual cornerstone of your brand.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on Logo-designing Company ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on Logo-designing Company ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "catalogue-designing": {
    slug: "catalogue-designing",
    seo: {
      title: "Catalogue Designing Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides professional catalogue designing services in Shimla, Himachal Pradesh. We create visually stunning and impactful catalogues that showcase your products and captivate your target audience.",
      keywords: [
        "Catalogue Designing",
        "Catalogue Designing company in Shimla",
        "Catalogue Designing services Shimla",
        "Catalogue Designing company in Himachal Pradesh",
        "Catalogue Designing Himachal",
        "Catalogue Designing services in Himachal",
        "Catalogue Designing company Shimla Himachal",
        "Catalogue Designing services in Shimla",
        "Custom Catalogue Design Shimla",
        "Professional Catalogue Designing Shimla",
        "Product Catalogue Design Shimla",
        "Digital Catalogue Designing Shimla",
        "Print Catalogue Design Shimla",
        "Catalogue Designers Shimla",
        "Graphic Design Company Shimla",
        "IT company in Himachal",
      ],
      ogTitle:
        "Catalogue Designing Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get professional catalogue designing services from Gashwa Technologies in Shimla, Himachal Pradesh. Create visually appealing catalogues that showcase your products and strengthen your brand presentation.",
    },
    hero: {
      title: "Catalogue Designing",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "CATALOGUE DESIGNING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies, your reliable partner for catalogue designing services in Himachal Shimla. We specialize in creating visually stunning and impactful catalogues that effectively showcase your products and captivate your target audience. With our expertise in design and marketing, we strive to help your business make a lasting impression.",
      "At Gashwa Technologies, we understand that a well-designed catalogue is an essential tool for promoting your products and driving sales. Our team of talented designers and content strategists work closely with you to understand your brand, target audience, and specific objectives. We then combine our creative skills with industry best practices to craft a catalogue that effectively communicates your brand identity and showcases your products in the most appealing way.",
      "Our catalogue designing services encompass the entire process, from conceptualization to final printing. We pay meticulous attention to detail to ensure that every aspect of your catalogue, including layout, typography, colors, and imagery, is carefully curated to create a cohesive and visually pleasing experience. Whether you need a digital catalogue or a print-ready version, we can deliver a solution that meets your requirements.",
      "With our expertise in visual storytelling and persuasive content, we ensure that your catalogue goes beyond being a mere product listing. We focus on creating engaging and informative descriptions, highlighting key features and benefits, and utilizing compelling visuals to evoke desire and drive action. Our goal is to create a catalogue that not only grabs attention but also encourages readers to explore further and make a purchase.",
      "At Gashwa Technologies, we pride ourselves on delivering high-quality catalogues within agreed timelines and budget. We understand the importance of a strong visual identity in today's competitive market, and our designs are tailored to reflect your unique brand personality. Whether you are launching a new product line or revamping your existing catalogue, we are committed to helping you make a powerful impact.",
      "Elevate your product presentation with Gashwa Technologies' catalogue designing services. Contact us today to discuss your project requirements and let our team of experts create a catalogue that sets you apart from the competition.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Catalouge Designing Company ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "CATALOGUE DESIGNING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-book-open",
          title: "Custom Catalogue Design",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Create visually stunning catalogues tailored to your brand, target audience and specific business objectives.",
          href: "/catalogue-designing",
        },
        {
          icon: "fa-images",
          title: "Product Catalogue Design",
          image: "/assets/img/service/creative-design.png",
          description:
            "Showcase your products with engaging layouts, compelling visuals, informative descriptions and persuasive content.",
          href: "/catalogue-designing",
        },
        {
          icon: "fa-print",
          title: "Digital & Print Catalogues",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Design cohesive digital catalogues and print-ready versions with carefully curated layouts, typography, colors and imagery.",
          href: "/catalogue-designing",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Catalogue Designing Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your reliable partner for catalogue designing services in Himachal Shimla. We specialize in creating visually stunning and impactful catalogues that effectively showcase your products and captivate your target audience. With our expertise in design and marketing, we strive to help your business make a lasting impression.",
        "At Gashwa Technologies, we understand that a well-designed catalogue is an essential tool for promoting your products and driving sales. Our team of talented designers and content strategists work closely with you to understand your brand, target audience, and specific objectives. We then combine our creative skills with industry best practices to craft a catalogue that effectively communicates your brand identity and showcases your products in the most appealing way.",
        "Our catalogue designing services encompass the entire process, from conceptualization to final printing. We pay meticulous attention to detail to ensure that every aspect of your catalogue, including layout, typography, colors, and imagery, is carefully curated to create a cohesive and visually pleasing experience. Whether you need a digital catalogue or a print-ready version, we can deliver a solution that meets your requirements.",
        "With our expertise in visual storytelling and persuasive content, we ensure that your catalogue goes beyond being a mere product listing. We focus on creating engaging and informative descriptions, highlighting key features and benefits, and utilizing compelling visuals to evoke desire and drive action. Our goal is to create a catalogue that not only grabs attention but also encourages readers to explore further and make a purchase.",
        "At Gashwa Technologies, we pride ourselves on delivering high-quality catalogues within agreed timelines and budget. We understand the importance of a strong visual identity in today's competitive market, and our designs are tailored to reflect your unique brand personality. Whether you are launching a new product line or revamping your existing catalogue, we are committed to helping you make a powerful impact.",
        "Elevate your product presentation with Gashwa Technologies' catalogue designing services. Contact us today to discuss your project requirements and let our team of experts create a catalogue that sets you apart from the competition.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Catalouge Designing Company ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Catalouge Designing Company ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "flyer-designing": {
    slug: "flyer-designing",
    seo: {
      title: "Flyer Designing Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides professional flyer designing services in Shimla, Himachal Pradesh. We create eye-catching and impactful flyers that effectively promote your business, events, products and services.",
      keywords: [
        "Flyer Designing",
        "Flyer Designing company in Shimla",
        "Flyer Designing services Shimla",
        "Flyer Designing company in Himachal Pradesh",
        "Flyer Designing Himachal",
        "Flyer Designing services in Himachal",
        "Flyer Designing company Shimla Himachal",
        "Flyer Designing services in Shimla",
        "Custom Flyer Design Shimla",
        "Professional Flyer Designing Shimla",
        "Business Flyer Design Shimla",
        "Promotional Flyer Design Shimla",
        "Event Flyer Designing Shimla",
        "Creative Flyer Designers Shimla",
        "Graphic Design Company Shimla",
        "IT company in Himachal",
      ],
      ogTitle:
        "Flyer Designing Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get professional flyer designing services from Gashwa Technologies in Shimla, Himachal Pradesh. Create eye-catching and impactful flyers for your business, events, products and promotional campaigns.",
    },
    hero: {
      title: "Flyer Designing",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "FLYER DESIGNING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies, your trusted destination for professional flyer designing services in Himachal Shimla. We specialize in creating eye-catching and impactful flyers that effectively promote your business, events, products, or services. With our expertise and creative flair, we aim to provide you with compelling designs that captivate your target audience.",
      "At Gashwa Technologies, we understand the power of a well-designed flyer in grabbing attention and conveying your message effectively. Our team of skilled designers combines their artistic talents with a deep understanding of marketing principles to create visually appealing flyers that stand out from the crowd.",
      "Whether you need a flyer for a corporate event, a promotional campaign, a product launch, or any other purpose, we have the skills and experience to deliver outstanding results. We work closely with you to understand your specific requirements, target audience, and desired objectives. This enables us to create custom designs that align with your brand identity and effectively communicate your message.",
      "Our flyer designs are crafted with a focus on clarity, creativity, and visual impact. We pay attention to every detail, from typography and color selection to layout and imagery, to ensure that your flyer stands out and conveys your message effectively. We strike a balance between aesthetics and functionality, ensuring that your flyer not only looks great but also delivers the intended information clearly and concisely.",
      "When you choose Gashwa Technologies for your flyer designing needs, you can expect professionalism, promptness, and top-notch customer service. We value our clients and strive to exceed their expectations in every project we undertake. Our goal is to help you make a lasting impression with your flyers and achieve your marketing objectives.",
      "Elevate your promotional efforts with Gashwa Technologies' flyer designing services. Contact us today to discuss your requirements and let us create visually stunning and impactful flyers that help you stand out from the competition.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on Flyer designing Project ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "FLYER DESIGNING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-file-lines",
          title: "Custom Flyer Design",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Create custom flyer designs aligned with your brand identity, target audience, specific requirements and marketing objectives.",
          href: "/flyer-designing",
        },
        {
          icon: "fa-bullhorn",
          title: "Promotional Flyer Design",
          image: "/assets/img/service/creative-design.png",
          description:
            "Design eye-catching flyers for promotional campaigns, product launches, business promotions, events and services.",
          href: "/flyer-designing",
        },
        {
          icon: "fa-palette",
          title: "Creative Flyer Designing",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Combine creative layouts, typography, colors and imagery to create visually impactful flyers that communicate your message clearly.",
          href: "/flyer-designing",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Flyer Designing Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your trusted destination for professional flyer designing services in Himachal Shimla. We specialize in creating eye-catching and impactful flyers that effectively promote your business, events, products, or services. With our expertise and creative flair, we aim to provide you with compelling designs that captivate your target audience.",
        "At Gashwa Technologies, we understand the power of a well-designed flyer in grabbing attention and conveying your message effectively. Our team of skilled designers combines their artistic talents with a deep understanding of marketing principles to create visually appealing flyers that stand out from the crowd.",
        "Whether you need a flyer for a corporate event, a promotional campaign, a product launch, or any other purpose, we have the skills and experience to deliver outstanding results. We work closely with you to understand your specific requirements, target audience, and desired objectives. This enables us to create custom designs that align with your brand identity and effectively communicate your message.",
        "Our flyer designs are crafted with a focus on clarity, creativity, and visual impact. We pay attention to every detail, from typography and color selection to layout and imagery, to ensure that your flyer stands out and conveys your message effectively. We strike a balance between aesthetics and functionality, ensuring that your flyer not only looks great but also delivers the intended information clearly and concisely.",
        "When you choose Gashwa Technologies for your flyer designing needs, you can expect professionalism, promptness, and top-notch customer service. We value our clients and strive to exceed their expectations in every project we undertake. Our goal is to help you make a lasting impression with your flyers and achieve your marketing objectives.",
        "Elevate your promotional efforts with Gashwa Technologies' flyer designing services. Contact us today to discuss your requirements and let us create visually stunning and impactful flyers that help you stand out from the competition.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on Flyer designing Project ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on Flyer designing Project ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "brochure-designing": {
    slug: "brochure-designing",
    seo: {
      title: "Brochure Designing Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies is a leading brochure designing company in Shimla, Himachal Pradesh. We create visually stunning and impactful brochures that effectively communicate your brand message and captivate your target audience.",
      keywords: [
        "Brochure Designing",
        "Brochure Designing company in Shimla",
        "Brochure Designing services Shimla",
        "Brochure Designing company in Himachal Pradesh",
        "Brochure Designing Himachal",
        "Brochure Designing services in Himachal",
        "Brochure Designing company Shimla Himachal",
        "Brochure Designing services in Shimla",
        "Custom Brochure Design Shimla",
        "Professional Brochure Designing Shimla",
        "Corporate Brochure Design Shimla",
        "Marketing Brochure Design Shimla",
        "Product Brochure Designing Shimla",
        "Creative Brochure Designers Shimla",
        "Graphic Design Company Shimla",
        "IT company in Himachal",
      ],
      ogTitle:
        "Brochure Designing Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get professional brochure designing services from Gashwa Technologies in Shimla, Himachal Pradesh. Create visually appealing brochures that communicate your brand message and engage your target audience.",
    },
    hero: {
      title: "Brochure Designing",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "BROUCHER DESIGNING COMPANIES SHIMLA: GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies, a leading brochure designing company in Himachal Shimla. We specialize in creating visually stunning and impactful brochures that effectively communicate your brand message and captivate your target audience. With our expertise and creative prowess, we strive to deliver exceptional brochure designs that leave a lasting impression.",
      "At Gashwa Technologies, we understand the importance of a well-designed brochure in conveying your unique value proposition. Whether you need a brochure for marketing purposes, product showcases, or corporate profiles, we have the skills and experience to create a design that aligns with your objectives and resonates with your audience.",
      "Our brochure designing process begins with a comprehensive understanding of your business, target market, and desired outcomes. We work closely with you to capture your vision and translate it into an aesthetically pleasing and informative design. Our team of talented designers utilizes cutting-edge design tools and techniques to create visually striking layouts, captivating images, and compelling content that engages and inspires your readers.",
      "At Gashwa Technologies, we believe that a successful brochure design is a harmonious blend of creativity, functionality, and effective communication. Our designers pay meticulous attention to detail, ensuring that your brochure not only looks visually appealing but also effectively communicates your key messages, highlights your offerings, and drives action.",
      "With our brochure designing services, you can expect a collaborative and seamless experience. We value your inputs and actively involve you throughout the design process, seeking your feedback and incorporating necessary revisions to ensure your satisfaction. Our team is committed to delivering high-quality brochures within agreed timelines, ensuring that your marketing campaigns stay on track.",
      "Partner with Gashwa Technologies for all your brochure designing needs in Himachal Shimla. Let us help you create a compelling and visually captivating brochure that sets you apart from the competition. Contact us today to discuss your requirements and unleash the power of exceptional brochure design for your business success.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on Broucher Designing Project ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "BROUCHER DESIGNING COMPANIES SHIMLA: GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-book-open",
          title: "Custom Brochure Design",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Create custom brochure designs that align with your business objectives, brand message, target market and audience.",
          href: "/brochure-designing",
        },
        {
          icon: "fa-bullhorn",
          title: "Marketing Brochure Design",
          image: "/assets/img/service/creative-design.png",
          description:
            "Design compelling marketing brochures that communicate key messages, highlight offerings and help drive customer action.",
          href: "/brochure-designing",
        },
        {
          icon: "fa-layer-group",
          title: "Corporate & Product Brochures",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Create visually captivating brochures for corporate profiles, product showcases and business marketing campaigns.",
          href: "/brochure-designing",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Brochure Designing Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, a leading brochure designing company in Himachal Shimla. We specialize in creating visually stunning and impactful brochures that effectively communicate your brand message and captivate your target audience. With our expertise and creative prowess, we strive to deliver exceptional brochure designs that leave a lasting impression.",
        "At Gashwa Technologies, we understand the importance of a well-designed brochure in conveying your unique value proposition. Whether you need a brochure for marketing purposes, product showcases, or corporate profiles, we have the skills and experience to create a design that aligns with your objectives and resonates with your audience.",
        "Our brochure designing process begins with a comprehensive understanding of your business, target market, and desired outcomes. We work closely with you to capture your vision and translate it into an aesthetically pleasing and informative design. Our team of talented designers utilizes cutting-edge design tools and techniques to create visually striking layouts, captivating images, and compelling content that engages and inspires your readers.",
        "At Gashwa Technologies, we believe that a successful brochure design is a harmonious blend of creativity, functionality, and effective communication. Our designers pay meticulous attention to detail, ensuring that your brochure not only looks visually appealing but also effectively communicates your key messages, highlights your offerings, and drives action.",
        "With our brochure designing services, you can expect a collaborative and seamless experience. We value your inputs and actively involve you throughout the design process, seeking your feedback and incorporating necessary revisions to ensure your satisfaction. Our team is committed to delivering high-quality brochures within agreed timelines, ensuring that your marketing campaigns stay on track.",
        "Partner with Gashwa Technologies for all your brochure designing needs in Himachal Shimla. Let us help you create a compelling and visually captivating brochure that sets you apart from the competition. Contact us today to discuss your requirements and unleash the power of exceptional brochure design for your business success.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on Broucher Designing Project ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on Broucher Designing Project ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "business-card-designing": {
    slug: "business-card-designing",
    seo: {
      title: "Business Card Designing Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides professional business card designing services in Shimla, Himachal Pradesh. We create visually appealing, impactful and customized business card designs that leave a lasting impression.",
      keywords: [
        "Business Card Designing",
        "Business Card Designing company in Shimla",
        "Business Card Designing services Shimla",
        "Business Card Designing company in Himachal Pradesh",
        "Business Card Designing Himachal",
        "Business Card Designing services in Himachal",
        "Business Card Designing company Shimla Himachal",
        "Business Card Designing services in Shimla",
        "Custom Business Card Design Shimla",
        "Professional Business Card Designing Shimla",
        "Creative Business Card Design Shimla",
        "Business Card Design Company Himachal",
        "Corporate Business Card Design Shimla",
        "Business Card Designers Shimla",
        "Graphic Design Company Shimla",
        "IT company in Himachal",
      ],
      ogTitle:
        "Business Card Designing Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get professional business card designing services from Gashwa Technologies in Shimla, Himachal Pradesh. Create customized and impactful business card designs that represent your brand professionally.",
    },
    hero: {
      title: "Business Card Designing",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "BUSINESS CARD DESIGNING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies, your premier destination for professional business card designing services in Himachal Shimla. We are a leading company specializing in creating visually appealing and impactful business card designs that leave a lasting impression on your clients and partners.",
      "At Gashwa Technologies, we understand the significance of a well-designed business card in making a memorable first impression. Our experienced team of designers combines creativity with a deep understanding of your brand to craft unique and customized business card designs that reflect your professionalism and convey your brand message effectively.",
      "When you choose us for your business card design needs, we take the time to understand your business objectives, target audience, and industry niche. This allows us to create designs that resonate with your brand identity and make a statement in the competitive market.",
      "We offer a range of business card design options to suit your preferences and requirements. Whether you prefer a minimalist and modern design or a more vibrant and eye-catching approach, our team will work closely with you to bring your vision to life. We pay attention to every detail, including font selection, color schemes, and layout, to ensure that your business card stands out from the crowd.",
      "In addition to aesthetic appeal, we prioritize functionality and usability in our designs. We ensure that essential information such as your name, job title, contact details, and company logo are prominently displayed, making it easy for recipients to reach out to you. Our designs also consider the appropriate sizing and dimensions for printing, ensuring that your business cards are of the highest quality.",
      "At Gashwa Technologies, we pride ourselves on delivering exceptional customer service. We believe in open communication and collaboration throughout the design process, allowing you to provide feedback and make necessary revisions. Our goal is to exceed your expectations and deliver business card designs that truly represent your brand identity.",
      "Elevate your professional image with Gashwa Technologies' business card designing services. Contact us today to discuss your requirements and let us create a business card design that sets you apart from the competition.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada,USA, UK, Australia",
      "Need a quote on Business Card designing Project ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "BUSINESS CARD DESIGNING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-address-card",
          title: "Custom Business Card Design",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Create unique and customized business card designs that reflect your professionalism, brand identity and business message.",
          href: "/business-card-designing",
        },
        {
          icon: "fa-palette",
          title: "Creative Business Card Design",
          image: "/assets/img/service/creative-design.png",
          description:
            "Design modern, minimalist, vibrant and eye-catching business cards tailored to your preferences and requirements.",
          href: "/business-card-designing",
        },
        {
          icon: "fa-print",
          title: "Print-Ready Business Cards",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Create functional and print-ready business card designs with proper sizing, dimensions and high-quality layouts.",
          href: "/business-card-designing",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Business Card Designing Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your premier destination for professional business card designing services in Himachal Shimla. We are a leading company specializing in creating visually appealing and impactful business card designs that leave a lasting impression on your clients and partners.",
        "At Gashwa Technologies, we understand the significance of a well-designed business card in making a memorable first impression. Our experienced team of designers combines creativity with a deep understanding of your brand to craft unique and customized business card designs that reflect your professionalism and convey your brand message effectively.",
        "When you choose us for your business card design needs, we take the time to understand your business objectives, target audience, and industry niche. This allows us to create designs that resonate with your brand identity and make a statement in the competitive market.",
        "We offer a range of business card design options to suit your preferences and requirements. Whether you prefer a minimalist and modern design or a more vibrant and eye-catching approach, our team will work closely with you to bring your vision to life. We pay attention to every detail, including font selection, color schemes, and layout, to ensure that your business card stands out from the crowd.",
        "In addition to aesthetic appeal, we prioritize functionality and usability in our designs. We ensure that essential information such as your name, job title, contact details, and company logo are prominently displayed, making it easy for recipients to reach out to you. Our designs also consider the appropriate sizing and dimensions for printing, ensuring that your business cards are of the highest quality.",
        "At Gashwa Technologies, we pride ourselves on delivering exceptional customer service. We believe in open communication and collaboration throughout the design process, allowing you to provide feedback and make necessary revisions. Our goal is to exceed your expectations and deliver business card designs that truly represent your brand identity.",
        "Elevate your professional image with Gashwa Technologies' business card designing services. Contact us today to discuss your requirements and let us create a business card design that sets you apart from the competition.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada,USA, UK, Australia",
        "Need a quote on Business Card designing Project ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on Business Card designing Project ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "letterhead-designing": {
    slug: "letterhead-designing",
    seo: {
      title: "Letterhead Designing Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies is a leading letterhead designing company in Shimla, Himachal Pradesh. We create professional and captivating letterhead designs that enhance your brand identity and make a lasting impression.",
      keywords: [
        "Letterhead Designing",
        "Letterhead Designing company in Shimla",
        "Letterhead Designing services Shimla",
        "Letterhead Designing company in Himachal Pradesh",
        "Letterhead Designing Himachal",
        "Letterhead Designing services in Himachal",
        "Letterhead Designing company Shimla Himachal",
        "Letterhead Designing services in Shimla",
        "Custom Letterhead Design Shimla",
        "Professional Letterhead Designing Shimla",
        "Corporate Letterhead Design Shimla",
        "Business Letterhead Design Shimla",
        "Creative Letterhead Designing Shimla",
        "Letterhead Designers Shimla",
        "Graphic Design Company Shimla",
        "IT company in Himachal",
      ],
      ogTitle:
        "Letterhead Designing Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get professional letterhead designing services from Gashwa Technologies in Shimla, Himachal Pradesh. Create professional, print-ready letterhead designs that represent your brand identity.",
    },
    hero: {
      title: "Letterhead Designing",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "LETTERHEAD DESIGNING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies, the leading letterhead designing company in Himachal Shimla. We specialize in creating professional and captivating letterhead designs that enhance your brand identity and make a lasting impression. With our expertise in graphic design and attention to detail, we can create letterheads that truly represent your business.",
      "At Gashwa Technologies, we understand the significance of a well-designed letterhead in establishing your brand credibility. Our team of skilled designers works closely with you to understand your brand values, target audience, and design preferences. We then translate that information into a visually appealing and impactful letterhead design.",
      "Our letterhead designs are tailored to reflect your unique brand identity. We focus on incorporating your logo, color scheme, and typography to create a cohesive and consistent look. Our aim is to design letterheads that not only showcase professionalism but also leave a memorable impression on your clients, partners, and stakeholders.",
      "With Gashwa Technologies, you can expect top-notch quality and attention to detail in every letterhead design. We understand that letterheads play a crucial role in business correspondence, so we ensure that the designs are print-ready and adhere to industry standards. Whether you need letterheads for official letters, invoices, or any other business communication, we've got you covered.",
      "Our commitment to client satisfaction is paramount, and we strive to deliver exceptional results that exceed your expectations. We work with efficiency and dedication to meet your project timelines while maintaining the highest level of craftsmanship.",
      "Elevate your brand image with Gashwa Technologies' letterhead designing services. Contact us today to discuss your requirements and let our creative team bring your brand to life through stunning letterhead designs.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada,USA, UK, Australia",
      "Need a quote on Letterhead designing Project ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "LETTERHEAD DESIGNING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-file-lines",
          title: "Custom Letterhead Design",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Create custom letterhead designs that reflect your unique brand identity, values, logo, color scheme and typography.",
          href: "/letterhead-designing",
        },
        {
          icon: "fa-palette",
          title: "Creative Letterhead Design",
          image: "/assets/img/service/creative-design.png",
          description:
            "Design professional and captivating letterheads that create a cohesive brand look and leave a memorable impression.",
          href: "/letterhead-designing",
        },
        {
          icon: "fa-print",
          title: "Print-Ready Letterhead Design",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Create high-quality, print-ready letterhead designs suitable for official letters, invoices and business communication.",
          href: "/letterhead-designing",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Letterhead Designing Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, the leading letterhead designing company in Himachal Shimla. We specialize in creating professional and captivating letterhead designs that enhance your brand identity and make a lasting impression. With our expertise in graphic design and attention to detail, we can create letterheads that truly represent your business.",
        "At Gashwa Technologies, we understand the significance of a well-designed letterhead in establishing your brand credibility. Our team of skilled designers works closely with you to understand your brand values, target audience, and design preferences. We then translate that information into a visually appealing and impactful letterhead design.",
        "Our letterhead designs are tailored to reflect your unique brand identity. We focus on incorporating your logo, color scheme, and typography to create a cohesive and consistent look. Our aim is to design letterheads that not only showcase professionalism but also leave a memorable impression on your clients, partners, and stakeholders.",
        "With Gashwa Technologies, you can expect top-notch quality and attention to detail in every letterhead design. We understand that letterheads play a crucial role in business correspondence, so we ensure that the designs are print-ready and adhere to industry standards. Whether you need letterheads for official letters, invoices, or any other business communication, we've got you covered.",
        "Our commitment to client satisfaction is paramount, and we strive to deliver exceptional results that exceed your expectations. We work with efficiency and dedication to meet your project timelines while maintaining the highest level of craftsmanship.",
        "Elevate your brand image with Gashwa Technologies' letterhead designing services. Contact us today to discuss your requirements and let our creative team bring your brand to life through stunning letterhead designs.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada,USA, UK, Australia",
        "Need a quote on Letterhead designing Project ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on Letterhead designing Project ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "advertisement-designing": {
    slug: "advertisement-designing",
    seo: {
      title: "Advertisement Designing Company in Himachal | Gashwa Technologies",
      description:
        "Gashwa Technologies provides professional advertisement designing services in Himachal Pradesh. We create impactful print, social media and video advertisements that capture attention, communicate your message and support your advertising goals.",
      keywords: [
        "Advertisement Designing",
        "Advertisement Designing company in Himachal",
        "Advertisement Designing services Himachal",
        "Advertisement Designing company in Shimla",
        "Advertisement Designing services Shimla",
        "Advertisement Designing company in Himachal Pradesh",
        "Advertisement Designing Himachal",
        "Print Advertisement Designing Shimla",
        "Newspaper Advertisement Design Shimla",
        "Magazine Advertisement Design Shimla",
        "Social Media Advertisement Design Shimla",
        "Video Advertisement Designing Shimla",
        "Creative Advertising Agency Himachal",
        "Advertising Design Company Shimla",
        "Advertisement Designers Shimla",
        "Graphic Design Company Shimla",
      ],
      ogTitle:
        "Advertisement Designing Company in Himachal | Gashwa Technologies",
      ogDescription:
        "Get professional advertisement designing services from Gashwa Technologies in Himachal Pradesh. Create memorable print, social media and video advertisements for your business.",
    },
    hero: {
      title: "Advertisement Designing",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "ADVERTISEMENT DESIGNING COMPANY IN HIMACHAL: GASHWA TECHNOLOGIES",
      "We are involved in presenting an exclusive range of Advertisement Designing Services. Offered array of services is rendered using best quality materials by the highly talented quality professionals with the help of new technology procedures. These services are widely appreciated owing to its reliability and timely execution. of our letterhead types means and which one you should opt for.",
      "Advertising design is the art of persuasion embedded in storytelling to capture an audience’s attention and inspire them to take a desired action. No all advertising agencies are created equal.",
      "We have experience creating print Ads for placement in newspapers, magazines, flyer, direct mail, and newsletters. We can help you cut through the clutter and deliver memorable print Ads that drive results. If you’re looking for an Ad Agency that creates original creative advertising that works, our team will deliver.",
      "Social media platforms like Facebook, LinkedIn, and Twitter have their own advertising platforms with custom pricing models. You can determine which one is right for you and your brand depends on a number of factors.",
      "Gashwa Technologies crafts an Ad campaign to help you meet your desired goals. Your Ad’s creative elements must align perfectly with each other, your goals, and your branding. You must pair the right image with the right words to convince your prospects to take that all-important next action.",
      "We produce video Ads for placement on TV and online. Our video marketing services are tailor-made to provide custom animated and live action video Ads for business large and small.Use video to explain your business, sell your products and services, make a public announcement, and compliment your current advertising campaign. We’ve been working to advance the adoption of digital video as the primary advertising tool for business.Now you can use explainer videos to connect with audiences around the world on many platforms all at the same time. We have the tools you need to create and deliver video advertising from TV and beyond.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Shimla, Haryana, Himachal Pradesh, Himachal, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand and across all over the Himachal.",
      "Need a quote on Advertisement designing Company ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "ADVERTISEMENT DESIGNING COMPANY IN HIMACHAL: GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-newspaper",
          title: "Print Advertisement Design",
          image: "/assets/img/service/creative-design.png",
          description:
            "Create memorable print advertisements for newspapers, magazines, flyers, direct mail and newsletters that communicate your message effectively.",
          href: "/advertisement-designing",
        },
        {
          icon: "fa-share-nodes",
          title: "Social Media Advertisement",
          image: "/assets/img/service/social-media-marketing.png",
          description:
            "Design creative social media advertisements aligned with your brand, goals and platform requirements to reach your target audience.",
          href: "/advertisement-designing",
        },
        {
          icon: "fa-video",
          title: "Video Advertisement Design",
          image: "/assets/img/service/video-marketing.png",
          description:
            "Create custom animated and live action video advertisements for TV and online platforms to explain, promote and market your business.",
          href: "/advertisement-designing",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Advertisement Designing Services",
      titleHighlight: " in Himachal Pradesh",
      paragraphs: [
        "We are involved in presenting an exclusive range of Advertisement Designing Services. Offered array of services is rendered using best quality materials by the highly talented quality professionals with the help of new technology procedures. These services are widely appreciated owing to its reliability and timely execution. of our letterhead types means and which one you should opt for.",
        "Advertising design is the art of persuasion embedded in storytelling to capture an audience’s attention and inspire them to take a desired action. No all advertising agencies are created equal.",
        "We have experience creating print Ads for placement in newspapers, magazines, flyer, direct mail, and newsletters. We can help you cut through the clutter and deliver memorable print Ads that drive results. If you’re looking for an Ad Agency that creates original creative advertising that works, our team will deliver.",
        "Social media platforms like Facebook, LinkedIn, and Twitter have their own advertising platforms with custom pricing models. You can determine which one is right for you and your brand depends on a number of factors.",
        "Gashwa Technologies crafts an Ad campaign to help you meet your desired goals. Your Ad’s creative elements must align perfectly with each other, your goals, and your branding. You must pair the right image with the right words to convince your prospects to take that all-important next action.",
        "We produce video Ads for placement on TV and online. Our video marketing services are tailor-made to provide custom animated and live action video Ads for business large and small.Use video to explain your business, sell your products and services, make a public announcement, and compliment your current advertising campaign. We’ve been working to advance the adoption of digital video as the primary advertising tool for business.Now you can use explainer videos to connect with audiences around the world on many platforms all at the same time. We have the tools you need to create and deliver video advertising from TV and beyond.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Shimla, Haryana, Himachal Pradesh, Himachal, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand and across all over the Himachal.",
        "Need a quote on Advertisement designing Company ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on Advertisement designing Company ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "signature-designing": {
    slug: "signature-designing",
    seo: {
      title: "Signature Designing Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies is a leading signature designing company in Himachal Shimla providing creative and professional signature design services for personal, corporate, email and business branding needs.",
      keywords: [
        "Signature Designing",
        "Signature Designing Company in Shimla",
        "Signature Designing Company in Himachal",
        "Signature Designing Services Shimla",
        "Signature Designing Services Himachal",
        "Signature Designing Company in Himachal Pradesh",
        "Signature Design Shimla",
        "Signature Design Himachal",
        "Personal Signature Designing Shimla",
        "Corporate Signature Designing Shimla",
        "Email Signature Designing Shimla",
        "Creative Signature Design Company Shimla",
        "Professional Signature Designing Shimla",
        "Brand Signature Design Shimla",
        "Graphic Design Company Shimla",
      ],
      ogTitle:
        "Signature Designing Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get professional and creative signature designing services from Gashwa Technologies in Shimla, Himachal Pradesh for personal, corporate, email and business branding needs.",
    },
    hero: {
      title: "Signature Designing",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "SIGNATURE DESIGNING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies, the leading signature designing company in Himachal Shimla. We are dedicated to providing exceptional design services that leave a lasting impression. With our expertise and passion for creativity, we bring your brand's essence to life through unique and captivating signature designs.",
      "At Gashwa Technologies, we understand that a well-crafted signature is more than just a visual representation of your brand. It is a powerful tool that communicates your brand's personality, values, and professionalism. Our team of skilled designers possesses a keen eye for detail and a deep understanding of design principles, allowing us to create signature designs that make a statement.",
      "When you choose Gashwa Technologies for your signature design needs, you can expect a collaborative approach. We work closely with you to understand your brand identity, target audience, and design preferences. This collaboration ensures that we create a signature design that not only aligns with your brand but also resonates with your intended audience.",
      "Our signature design services cover a wide range of needs, including personal signatures, corporate signatures, email signatures, and more. We focus on creating designs that are visually striking, memorable, and reflective of your brand's values. Each element, from typography to colors to graphics, is carefully selected to create a harmonious and impactful signature.",
      "At Gashwa Technologies, we prioritize quality and customer satisfaction. Our team works diligently to deliver signature designs that exceed your expectations. We understand the importance of timely delivery and adhere to strict deadlines, ensuring that your signature design is ready when you need it.",
      "Join the ranks of satisfied clients who have benefited from our signature design services. Contact Gashwa Technologies today to discuss your requirements, and let us create a signature design that truly represents your brand's uniqueness and leaves a lasting impression on your audience.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on Signature designing Company ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "SIGNATURE DESIGNING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-signature",
          title: "Personal Signature Designing",
          image: "/assets/img/service/creative-design.png",
          description:
            "Create unique and captivating personal signature designs that reflect your personality and leave a lasting impression.",
          href: "/signature-designing",
        },
        {
          icon: "fa-building",
          title: "Corporate Signature Designing",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Design professional corporate signatures that communicate your brand's personality, values and professionalism.",
          href: "/signature-designing",
        },
        {
          icon: "fa-envelope",
          title: "Email Signature Designing",
          image: "/assets/img/service/creative-design.png",
          description:
            "Create visually striking and memorable email signatures that align with your brand identity and business requirements.",
          href: "/signature-designing",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Signature Designing Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, the leading signature designing company in Himachal Shimla. We are dedicated to providing exceptional design services that leave a lasting impression. With our expertise and passion for creativity, we bring your brand's essence to life through unique and captivating signature designs.",
        "At Gashwa Technologies, we understand that a well-crafted signature is more than just a visual representation of your brand. It is a powerful tool that communicates your brand's personality, values, and professionalism. Our team of skilled designers possesses a keen eye for detail and a deep understanding of design principles, allowing us to create signature designs that make a statement.",
        "When you choose Gashwa Technologies for your signature design needs, you can expect a collaborative approach. We work closely with you to understand your brand identity, target audience, and design preferences. This collaboration ensures that we create a signature design that not only aligns with your brand but also resonates with your intended audience.",
        "Our signature design services cover a wide range of needs, including personal signatures, corporate signatures, email signatures, and more. We focus on creating designs that are visually striking, memorable, and reflective of your brand's values. Each element, from typography to colors to graphics, is carefully selected to create a harmonious and impactful signature.",
        "At Gashwa Technologies, we prioritize quality and customer satisfaction. Our team works diligently to deliver signature designs that exceed your expectations. We understand the importance of timely delivery and adhere to strict deadlines, ensuring that your signature design is ready when you need it.",
        "Join the ranks of satisfied clients who have benefited from our signature design services. Contact Gashwa Technologies today to discuss your requirements, and let us create a signature design that truly represents your brand's uniqueness and leaves a lasting impression on your audience.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on Signature designing Company ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on Signature designing Company ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "billboard-designing": {
    slug: "billboard-designing",
    seo: {
      title: "Billboard Designing Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides professional billboard designing services in Shimla and Himachal Pradesh. We create attractive, impactful and memorable billboard designs that effectively communicate your brand message.",
      keywords: [
        "Billboard Designing",
        "Billboard Designing Company in Shimla",
        "Billboard Designing Company in Himachal",
        "Billboard Designing Services Shimla",
        "Billboard Designing Services Himachal",
        "Billboard Designing Company in Himachal Pradesh",
        "Billboard Design Shimla",
        "Billboard Design Himachal",
        "Creative Billboard Designing Shimla",
        "Outdoor Advertising Design Shimla",
        "Billboard Advertisement Design Shimla",
        "Advertising Design Company Shimla",
        "Graphic Design Company Shimla",
        "Creative Advertising Agency Himachal",
        "Billboard Designers Shimla",
      ],
      ogTitle:
        "Billboard Designing Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get professional billboard designing services from Gashwa Technologies in Shimla, Himachal Pradesh. Create attractive and impactful billboard designs for your brand.",
    },
    hero: {
      title: "Billboard Designing",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "BILLBOARD DESIGNING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      "Gashwa Technologies provides professional Billboard Designing Services with creative and impactful designs that help businesses attract attention and communicate their brand message effectively.",
      "Our billboard designing services focus on creating visually appealing designs that are easy to understand and memorable. We combine creative concepts, typography, colors, graphics and brand elements to create effective outdoor advertising designs.",
      "At Gashwa Technologies, we understand that billboard advertisements need to capture attention quickly. Our skilled designers create clear and engaging billboard designs that communicate your message effectively to your target audience.",
      "We work closely with our clients to understand their business, brand identity, target audience and advertising requirements. This collaborative approach helps us create billboard designs that are aligned with your marketing goals and brand image.",
      "Our billboard design services are suitable for businesses looking to promote products, services, offers, events and brand awareness through outdoor advertising. We focus on delivering professional designs that make your advertising message stand out.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on Billboard designing Company ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "BILLBOARD DESIGNING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-bullhorn",
          title: "Outdoor Billboard Design",
          image: "/assets/img/service/creative-design.png",
          description:
            "Create attractive and impactful outdoor billboard designs that capture attention and communicate your advertising message clearly.",
          href: "/billboard-designing",
        },
        {
          icon: "fa-palette",
          title: "Creative Billboard Design",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Develop creative billboard concepts using engaging graphics, typography, colors and brand elements to make your advertisement memorable.",
          href: "/billboard-designing",
        },
        {
          icon: "fa-ad",
          title: "Billboard Advertisement Design",
          image: "/assets/img/service/creative-design.png",
          description:
            "Design professional billboard advertisements for promoting products, services, offers, events and brand awareness through outdoor advertising.",
          href: "/billboard-designing",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Billboard Designing Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Gashwa Technologies provides professional Billboard Designing Services with creative and impactful designs that help businesses attract attention and communicate their brand message effectively.",
        "Our billboard designing services focus on creating visually appealing designs that are easy to understand and memorable. We combine creative concepts, typography, colors, graphics and brand elements to create effective outdoor advertising designs.",
        "At Gashwa Technologies, we understand that billboard advertisements need to capture attention quickly. Our skilled designers create clear and engaging billboard designs that communicate your message effectively to your target audience.",
        "We work closely with our clients to understand their business, brand identity, target audience and advertising requirements. This collaborative approach helps us create billboard designs that are aligned with your marketing goals and brand image.",
        "Our billboard design services are suitable for businesses looking to promote products, services, offers, events and brand awareness through outdoor advertising. We focus on delivering professional designs that make your advertising message stand out.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on Billboard designing Company ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on Billboard designing Company ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "label-designing": {
    slug: "label-designing",
    seo: {
      title: "Label Designing Company in Himachal | Gashwa Technologies",
      description:
        "Gashwa Technologies provides professional label designing services in Himachal Pradesh. We create captivating, visually appealing and custom label designs that represent your brand, attract customers and enhance product packaging.",
      keywords: [
        "Label Designing",
        "Label Designing Company in Himachal",
        "Label Designing Company in Shimla",
        "Label Designing Services Himachal",
        "Label Designing Services Shimla",
        "Label Designing Company in Himachal Pradesh",
        "Label Design Shimla",
        "Label Design Himachal",
        "Product Label Designing Shimla",
        "Packaging Label Design Shimla",
        "Custom Label Designing Shimla",
        "Creative Label Design Company Shimla",
        "Product Packaging Design Shimla",
        "Brand Label Designing Shimla",
        "Graphic Design Company Shimla",
      ],
      ogTitle:
        "Label Designing Company in Himachal | Gashwa Technologies",
      ogDescription:
        "Get professional label designing services from Gashwa Technologies in Himachal Pradesh. Create attractive and custom product label designs that enhance your packaging and branding.",
    },
    hero: {
      title: "Label Designing",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "LABEL DESIGNING COMPANY IN HIMACHAL: GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies, the leading label designing company in Himachal Shimla. We are dedicated to providing top-notch label design services that will make your products stand out in the market. With our expertise and creativity, we strive to deliver captivating and visually appealing label designs that effectively represent your brand and attract customers.",
      "At Gashwa Technologies, we understand that labels play a crucial role in product packaging and branding. They not only provide essential information but also serve as a powerful marketing tool. That's why we take a meticulous approach to label design, paying attention to every detail to create designs that are not only aesthetically pleasing but also communicate your brand identity and values.",
      "Our team of skilled designers has a deep understanding of design principles and the latest industry trends. We work closely with you to understand your product, target audience, and branding requirements. With this knowledge, we craft unique and custom label designs that reflect your product's essence and create a lasting impression.",
      "At Gashwa Technologies, we believe in delivering excellence through creativity and innovation. Our label designs are visually appealing, engaging, and tailored to meet your specific needs. We pay attention to color schemes, typography, imagery, and layout to create harmonious and eye-catching designs that grab attention on the shelves.",
      "Furthermore, we understand the importance of incorporating regulatory information, barcode integration, and product details on labels. Our designs seamlessly integrate all necessary elements while maintaining a visually pleasing and balanced composition.",
      "When you choose Gashwa Technologies as your label designing partner, you can expect professionalism, timely delivery, and exceptional customer service. We are committed to exceeding your expectations and ensuring your satisfaction with our designs.",
      "Elevate your product packaging and branding with Gashwa Technologies' label design services. Contact us today to discuss your requirements and let us create stunning label designs that make a lasting impression on your customers.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on Label designing Company ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "LABEL DESIGNING COMPANY IN HIMACHAL: GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-tags",
          title: "Product Label Designing",
          image: "/assets/img/service/creative-design.png",
          description:
            "Create captivating and visually appealing product label designs that effectively represent your brand and attract customers.",
          href: "/label-designing",
        },
        {
          icon: "fa-box-open",
          title: "Packaging Label Design",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Design harmonious and eye-catching labels that enhance product packaging while communicating your brand identity and values.",
          href: "/label-designing",
        },
        {
          icon: "fa-barcode",
          title: "Barcode & Product Information Design",
          image: "/assets/img/service/creative-design.png",
          description:
            "Integrate regulatory information, barcode details and product information into balanced and visually pleasing label designs.",
          href: "/label-designing",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Label Designing Services",
      titleHighlight: " in Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, the leading label designing company in Himachal Shimla. We are dedicated to providing top-notch label design services that will make your products stand out in the market. With our expertise and creativity, we strive to deliver captivating and visually appealing label designs that effectively represent your brand and attract customers.",
        "At Gashwa Technologies, we understand that labels play a crucial role in product packaging and branding. They not only provide essential information but also serve as a powerful marketing tool. That's why we take a meticulous approach to label design, paying attention to every detail to create designs that are not only aesthetically pleasing but also communicate your brand identity and values.",
        "Our team of skilled designers has a deep understanding of design principles and the latest industry trends. We work closely with you to understand your product, target audience, and branding requirements. With this knowledge, we craft unique and custom label designs that reflect your product's essence and create a lasting impression.",
        "At Gashwa Technologies, we believe in delivering excellence through creativity and innovation. Our label designs are visually appealing, engaging, and tailored to meet your specific needs. We pay attention to color schemes, typography, imagery, and layout to create harmonious and eye-catching designs that grab attention on the shelves.",
        "Furthermore, we understand the importance of incorporating regulatory information, barcode integration, and product details on labels. Our designs seamlessly integrate all necessary elements while maintaining a visually pleasing and balanced composition.",
        "When you choose Gashwa Technologies as your label designing partner, you can expect professionalism, timely delivery, and exceptional customer service. We are committed to exceeding your expectations and ensuring your satisfaction with our designs.",
        "Elevate your product packaging and branding with Gashwa Technologies' label design services. Contact us today to discuss your requirements and let us create stunning label designs that make a lasting impression on your customers.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on Label designing Company ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on Label designing Company ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "e-commerce-website-development": {
    slug: "e-commerce-website-development",
    seo: {
      title: "E-Commerce Website Development Company in Himachal | Gashwa Technologies",
      description:
        "Gashwa Technologies provides professional e-commerce website development services in Himachal Pradesh. We create secure, responsive and user-friendly online stores designed to showcase products and support business growth.",
      keywords: [
        "E-Commerce Website Development",
        "E-Commerce Website Development Company in Himachal",
        "E-Commerce Website Development Company in Shimla",
        "E-Commerce Website Development Services Himachal",
        "E-Commerce Website Development Services Shimla",
        "E-Commerce Website Development Company in Himachal Pradesh",
        "E-Commerce Website Development Shimla",
        "E-Commerce Website Development Himachal",
        "Online Store Development Shimla",
        "E-Commerce Website Design Shimla",
        "E-Commerce Development Company Shimla",
        "Custom E-Commerce Website Development Shimla",
        "Responsive E-Commerce Website Development Shimla",
        "E-Commerce Web Design Company Himachal",
        "Online Shopping Website Development Shimla",
      ],
      ogTitle:
        "E-Commerce Website Development Company in Himachal | Gashwa Technologies",
      ogDescription:
        "Get professional e-commerce website development services from Gashwa Technologies in Himachal Pradesh. Build a responsive, secure and user-friendly online store for your business.",
    },
    hero: {
      title: "E-Commerce Website Development",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "E-COMMERCE WEBSITE DEVELOPMENT COMPANY IN HIMACHAL: GASHWA TECHNOLOGIES",
      "Gashwa Technologies provides professional E-Commerce Website Development Services to help businesses establish a strong online presence and sell products or services through secure, responsive and user-friendly websites.",
      "Our e-commerce website development services focus on creating attractive online stores that provide a smooth shopping experience. We develop websites with clear product presentation, easy navigation and features that help businesses manage and grow their online stores.",
      "At Gashwa Technologies, we understand that an e-commerce website needs to be easy to use, responsive and reliable. Our team works closely with clients to understand their products, business requirements, target audience and goals before creating an online store tailored to their needs.",
      "We create e-commerce websites with organized product categories, detailed product pages, shopping cart functionality and convenient checkout experiences. Our designs are focused on providing customers with a simple and engaging way to browse products and complete purchases.",
      "Our e-commerce website development services are suitable for businesses of different sizes and industries. We focus on creating scalable and professional online stores that represent your brand and provide a strong foundation for online business growth.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on E-Commerce Website Development Company ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "E-COMMERCE WEBSITE DEVELOPMENT COMPANY IN HIMACHAL: GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-cart-shopping",
          title: "Online Store Development",
          image: "/assets/img/service/ecommerce.png",
          description:
            "Develop professional online stores with attractive product presentation, easy navigation and shopping features for your business.",
          href: "/e-commerce-website-development",
        },
        {
          icon: "fa-mobile-screen",
          title: "Responsive E-Commerce Development",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Create responsive e-commerce websites that provide a smooth and user-friendly shopping experience across different devices.",
          href: "/e-commerce-website-development",
        },
        {
          icon: "fa-credit-card",
          title: "E-Commerce Website Design",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Design engaging e-commerce websites with organized products, shopping cart functionality and convenient checkout experiences.",
          href: "/e-commerce-website-development",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "E-Commerce Website Development Services",
      titleHighlight: " in Himachal Pradesh",
      paragraphs: [
        "Gashwa Technologies provides professional E-Commerce Website Development Services to help businesses establish a strong online presence and sell products or services through secure, responsive and user-friendly websites.",
        "Our e-commerce website development services focus on creating attractive online stores that provide a smooth shopping experience. We develop websites with clear product presentation, easy navigation and features that help businesses manage and grow their online stores.",
        "At Gashwa Technologies, we understand that an e-commerce website needs to be easy to use, responsive and reliable. Our team works closely with clients to understand their products, business requirements, target audience and goals before creating an online store tailored to their needs.",
        "We create e-commerce websites with organized product categories, detailed product pages, shopping cart functionality and convenient checkout experiences. Our designs are focused on providing customers with a simple and engaging way to browse products and complete purchases.",
        "Our e-commerce website development services are suitable for businesses of different sizes and industries. We focus on creating scalable and professional online stores that represent your brand and provide a strong foundation for online business growth.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on E-Commerce Website Development Company ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on E-Commerce Website Development Company ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "domain-registration": {
    slug: "domain-registration",
    seo: {
      title: "Domain Registration Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies is a trusted domain registration company in Shimla, Himachal Pradesh providing comprehensive domain registration services with a wide range of domain extensions and professional assistance.",
      keywords: [
        "Domain Registration",
        "Domain Registration Company in Shimla",
        "Domain Registration Company in Himachal",
        "Domain Registration Services Shimla",
        "Domain Registration Services Himachal",
        "Domain Registration Company in Himachal Pradesh",
        "Domain Registration Shimla",
        "Domain Registration Himachal",
        "Domain Name Registration Shimla",
        "Domain Name Registration Himachal",
        "Domain Registration Services India",
        "Buy Domain Name Shimla",
        "Domain Name Services Shimla",
        "Domain Registration Company Himachal Pradesh",
      ],
      ogTitle:
        "Domain Registration Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Register your domain with Gashwa Technologies in Shimla, Himachal Pradesh. Choose from a wide range of domain extensions and establish a strong online identity for your business.",
    },
    hero: {
      title: "Domain Registration",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "DOMAIN REGISTRATION COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies, your trusted domain registration company in Himachal, specifically serving Shimla and the surrounding regions. We are dedicated to providing comprehensive domain registration services to help you establish a strong online presence for your business.",
      "At Gashwa Technologies, we understand that choosing the right domain name is crucial for your brand identity and online visibility. Our experienced team of professionals is here to guide you through the domain registration process, ensuring that you secure a domain name that perfectly represents your business and aligns with your goals.",
      "We offer a wide range of domain extension options, allowing you to select the one that best suits your business niche and target audience. Whether you're looking for a .com, .net, .org, or any other popular extension, we have you covered.",
      "Our domain registration process is simple, efficient, and hassle-free. Once you have chosen your desired domain name, our team will swiftly check its availability and assist you in completing the registration process. We handle all the technical aspects, ensuring that your domain is registered securely and promptly.",
      "When you choose Gashwa Technologies for your domain registration needs, you benefit from our commitment to exceptional customer service. We are available to address any questions or concerns you may have, providing you with prompt assistance and guidance throughout the entire process.",
      "In addition to domain registration, Gashwa Technologies offers a range of complementary services to help you maximize the potential of your online presence. From website design and development to digital marketing strategies, we have the expertise to create a comprehensive online strategy tailored to your business needs.",
      "Don't let your online presence be limited by a generic domain name. Choose Gashwa Technologies as your domain registration partner and secure a domain name that sets you apart from the competition. Contact us today to get started on establishing a strong and memorable online identity for your business in Himachal, Shimla, and beyond.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on a Domain Registration ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "DOMAIN REGISTRATION COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-globe",
          title: "Domain Name Registration",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Register a domain name that represents your business, supports your brand identity and helps establish a strong online presence.",
          href: "/domain-registration",
        },
        {
          icon: "fa-list",
          title: "Domain Extension Selection",
          image: "/assets/img/service/ecommerce.png",
          description:
            "Choose from a wide range of domain extensions such as .com, .net, .org and other popular options suited to your business.",
          href: "/domain-registration",
        },
        {
          icon: "fa-shield-halved",
          title: "Secure Domain Registration",
          image: "/assets/img/service/website-maintenance.png",
          description:
            "Get professional assistance with domain availability checks and a secure, prompt and hassle-free registration process.",
          href: "/domain-registration",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Domain Registration Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your trusted domain registration company in Himachal, specifically serving Shimla and the surrounding regions. We are dedicated to providing comprehensive domain registration services to help you establish a strong online presence for your business.",
        "At Gashwa Technologies, we understand that choosing the right domain name is crucial for your brand identity and online visibility. Our experienced team of professionals is here to guide you through the domain registration process, ensuring that you secure a domain name that perfectly represents your business and aligns with your goals.",
        "We offer a wide range of domain extension options, allowing you to select the one that best suits your business niche and target audience. Whether you're looking for a .com, .net, .org, or any other popular extension, we have you covered.",
        "Our domain registration process is simple, efficient, and hassle-free. Once you have chosen your desired domain name, our team will swiftly check its availability and assist you in completing the registration process. We handle all the technical aspects, ensuring that your domain is registered securely and promptly.",
        "When you choose Gashwa Technologies for your domain registration needs, you benefit from our commitment to exceptional customer service. We are available to address any questions or concerns you may have, providing you with prompt assistance and guidance throughout the entire process.",
        "In addition to domain registration, Gashwa Technologies offers a range of complementary services to help you maximize the potential of your online presence. From website design and development to digital marketing strategies, we have the expertise to create a comprehensive online strategy tailored to your business needs.",
        "Don't let your online presence be limited by a generic domain name. Choose Gashwa Technologies as your domain registration partner and secure a domain name that sets you apart from the competition. Contact us today to get started on establishing a strong and memorable online identity for your business in Himachal, Shimla, and beyond.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on a Domain Registration ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on a Domain Registration ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "linux-hosting": {
    slug: "linux-hosting",
    seo: {
      title: "Linux Hosting Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies is a premier Linux hosting company in Himachal Pradesh providing reliable, secure, scalable and high-performance Linux hosting services for businesses in Shimla and beyond.",
      keywords: [
        "Linux Hosting",
        "Linux Hosting Company in Shimla",
        "Linux Hosting Company in Himachal",
        "Linux Hosting Services Shimla",
        "Linux Hosting Services Himachal",
        "Linux Hosting Company in Himachal Pradesh",
        "Linux Hosting Shimla",
        "Linux Hosting Himachal",
        "Web Hosting Company Shimla",
        "Linux Web Hosting Shimla",
        "Secure Linux Hosting Shimla",
        "Reliable Linux Hosting Shimla",
        "Scalable Linux Hosting Himachal",
        "Linux Server Hosting Shimla",
        "Linux Hosting Provider Himachal Pradesh",
      ],
      ogTitle:
        "Linux Hosting Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get reliable, secure, scalable and high-performance Linux hosting services from Gashwa Technologies in Shimla and Himachal Pradesh with dedicated technical support.",
    },
    hero: {
      title: "Linux Hosting",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "LINUX HOSTING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies - your premier Linux hosting company in Himachal, serving clients in Shimla and beyond. We are dedicated to providing top-notch hosting services tailored to meet your specific needs. With our expertise and commitment to excellence, we aim to be your trusted partner in all your hosting requirements.",
      "Reliable Infrastructure: Our state-of-the-art infrastructure ensures high uptime and performance for your website. We employ robust servers and cutting-edge technologies to deliver a seamless hosting experience.",
      "Enhanced Security: At Gashwa Technologies, we understand the importance of keeping your data safe. That's why we implement stringent security measures, including firewalls, malware scanning, and encryption protocols to safeguard your website and sensitive information.",
      "Scalability and Flexibility: As your online presence grows, your hosting needs may change. With Gashwa Technologies, you have the flexibility to scale your hosting resources seamlessly, ensuring that your website can handle increasing traffic and demands.",
      "24/7 Technical Support: We value your satisfaction, which is why our dedicated support team is available round the clock to assist you with any hosting-related queries or issues you may encounter.",
      "Competitive Pricing: We believe that quality hosting should be affordable. At Gashwa Technologies, we offer competitive pricing plans that deliver excellent value for your investment.",
      "Whether you are a small business, a startup, or an established enterprise, Gashwa Technologies has the right Linux hosting solutions to propel your online presence. Partner with us today and experience reliable, secure, and high-performance hosting services in Himachal and Shimla.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on a Linux Hosting ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "LINUX HOSTING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-server",
          title: "Reliable Linux Hosting",
          image: "/assets/img/service/website-maintenance.png",
          description:
            "Get reliable Linux hosting infrastructure with robust servers and technologies designed to provide high uptime and website performance.",
          href: "/linux-hosting",
        },
        {
          icon: "fa-shield-halved",
          title: "Secure Linux Hosting",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Protect your website and sensitive information with security measures including firewalls, malware scanning and encryption protocols.",
          href: "/linux-hosting",
        },
        {
          icon: "fa-chart-line",
          title: "Scalable Linux Hosting",
          image: "/assets/img/service/ecommerce.png",
          description:
            "Scale your hosting resources as your online presence grows and handle increasing website traffic and demands with flexibility.",
          href: "/linux-hosting",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Linux Hosting Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies - your premier Linux hosting company in Himachal, serving clients in Shimla and beyond. We are dedicated to providing top-notch hosting services tailored to meet your specific needs. With our expertise and commitment to excellence, we aim to be your trusted partner in all your hosting requirements.",
        "Our state-of-the-art infrastructure ensures high uptime and performance for your website. We employ robust servers and cutting-edge technologies to deliver a seamless hosting experience.",
        "At Gashwa Technologies, we understand the importance of keeping your data safe. That's why we implement stringent security measures, including firewalls, malware scanning, and encryption protocols to safeguard your website and sensitive information.",
        "As your online presence grows, your hosting needs may change. With Gashwa Technologies, you have the flexibility to scale your hosting resources seamlessly, ensuring that your website can handle increasing traffic and demands.",
        "We value your satisfaction, which is why our dedicated support team is available round the clock to assist you with any hosting-related queries or issues you may encounter.",
        "We believe that quality hosting should be affordable. At Gashwa Technologies, we offer competitive pricing plans that deliver excellent value for your investment.",
        "Whether you are a small business, a startup, or an established enterprise, Gashwa Technologies has the right Linux hosting solutions to propel your online presence. Partner with us today and experience reliable, secure, and high-performance hosting services in Himachal and Shimla.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on a Linux Hosting ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on a Linux Hosting ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "windows-hosting": {
    slug: "windows-hosting",
    seo: {
      title: "Windows Hosting Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides professional Windows hosting services in Himachal Pradesh with robust infrastructure, enhanced security, high uptime, scalability, expert technical support and competitive pricing.",
      keywords: [
        "Windows Hosting",
        "Windows Hosting Company in Shimla",
        "Windows Hosting Company in Himachal",
        "Windows Hosting Services Shimla",
        "Windows Hosting Services Himachal",
        "Windows Hosting Company in Himachal Pradesh",
        "Windows Hosting Shimla",
        "Windows Hosting Himachal",
        "Windows Web Hosting Shimla",
        "Windows Server Hosting Shimla",
        "Secure Windows Hosting Shimla",
        "Reliable Windows Hosting Shimla",
        "Scalable Windows Hosting Himachal",
        "Windows Hosting Provider Himachal Pradesh",
        "Web Hosting Company Shimla",
      ],
      ogTitle:
        "Windows Hosting Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get reliable and secure Windows hosting services from Gashwa Technologies in Shimla and Himachal Pradesh with high uptime, scalable resources and expert technical support.",
    },
    hero: {
      title: "Windows Hosting",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "WINDOWS HOSTING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies, your leading Windows hosting company in Himachal Pradesh, serving clients in Shimla and the surrounding areas. We specialize in providing high-quality hosting services tailored to meet your unique requirements. With our expertise and dedication, we aim to be your trusted partner for all your Windows hosting needs.",
      "Robust Infrastructure: Our state-of-the-art infrastructure ensures optimal performance and reliability for your website. We utilize powerful servers and cutting-edge technologies to deliver a seamless hosting experience.",
      "Enhanced Security: We prioritize the security of your data. Our hosting solutions include robust security measures such as firewalls, regular backups, and malware scanning to safeguard your website from threats and vulnerabilities.",
      "High Uptime Guarantee: We understand the importance of keeping your website online. Our hosting services come with a high uptime guarantee, ensuring that your website remains accessible to your visitors at all times.",
      "Scalability and Flexibility: As your business grows, we ensure that your hosting plan can scale accordingly. Our flexible hosting solutions allow you to upgrade or downgrade your resources based on your evolving needs, ensuring optimal performance and cost efficiency.",
      "Expert Technical Support: Our experienced technical support team is available round the clock to assist you with any hosting-related queries or issues. We pride ourselves on providing prompt and reliable support to ensure a smooth hosting experience.",
      "Competitive Pricing: We offer competitive pricing plans that provide excellent value for your investment. Our hosting packages are designed to suit businesses of all sizes, from startups to enterprises.",
      "At Gashwa Technologies, we are committed to delivering superior Windows hosting services in Himachal Pradesh. Contact us today to discuss your hosting requirements and let us help you establish a robust online presence.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on a Windows Hosting ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "WINDOWS HOSTING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-server",
          title: "Robust Windows Hosting",
          image: "/assets/img/service/website-maintenance.png",
          description:
            "Get reliable Windows hosting with powerful servers and cutting-edge technologies designed for optimal website performance and reliability.",
          href: "/windows-hosting",
        },
        {
          icon: "fa-shield-halved",
          title: "Secure Windows Hosting",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Protect your website and data with robust security measures including firewalls, regular backups and malware scanning.",
          href: "/windows-hosting",
        },
        {
          icon: "fa-chart-line",
          title: "Scalable Windows Hosting",
          image: "/assets/img/service/ecommerce.png",
          description:
            "Scale your hosting resources according to your growing business needs with flexible plans designed for optimal performance and cost efficiency.",
          href: "/windows-hosting",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Windows Hosting Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your leading Windows hosting company in Himachal Pradesh, serving clients in Shimla and the surrounding areas. We specialize in providing high-quality hosting services tailored to meet your unique requirements. With our expertise and dedication, we aim to be your trusted partner for all your Windows hosting needs.",
        "Our state-of-the-art infrastructure ensures optimal performance and reliability for your website. We utilize powerful servers and cutting-edge technologies to deliver a seamless hosting experience.",
        "We prioritize the security of your data. Our hosting solutions include robust security measures such as firewalls, regular backups, and malware scanning to safeguard your website from threats and vulnerabilities.",
        "We understand the importance of keeping your website online. Our hosting services come with a high uptime guarantee, ensuring that your website remains accessible to your visitors at all times.",
        "As your business grows, we ensure that your hosting plan can scale accordingly. Our flexible hosting solutions allow you to upgrade or downgrade your resources based on your evolving needs, ensuring optimal performance and cost efficiency.",
        "Our experienced technical support team is available round the clock to assist you with any hosting-related queries or issues. We pride ourselves on providing prompt and reliable support to ensure a smooth hosting experience.",
        "We offer competitive pricing plans that provide excellent value for your investment. Our hosting packages are designed to suit businesses of all sizes, from startups to enterprises.",
        "At Gashwa Technologies, we are committed to delivering superior Windows hosting services in Himachal Pradesh. Contact us today to discuss your hosting requirements and let us help you establish a robust online presence.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on a Windows Hosting ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on a Windows Hosting ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "vps-hosting": {
    slug: "vps-hosting",
    seo: {
      title: "VPS Hosting Company in Shimla | Gashwa Technologies",
      description:
        "Gashwa Technologies provides reliable and scalable VPS hosting services in Himachal Pradesh. Get powerful virtualization, dedicated CPU and RAM, enhanced security, reliable connectivity and 24/7 expert support.",
      keywords: [
        "VPS Hosting",
        "VPS Hosting Company in Shimla",
        "VPS Hosting Company in Himachal",
        "VPS Hosting Services Shimla",
        "VPS Hosting Services Himachal",
        "VPS Hosting Company in Himachal Pradesh",
        "VPS Hosting Shimla",
        "VPS Hosting Himachal",
        "Virtual Private Server Hosting Shimla",
        "VPS Server Hosting Shimla",
        "Scalable VPS Hosting Himachal",
        "Secure VPS Hosting Shimla",
        "Reliable VPS Hosting Shimla",
        "Managed VPS Hosting Himachal",
        "VPS Hosting Provider Himachal Pradesh",
      ],
      ogTitle:
        "VPS Hosting Company in Shimla | Gashwa Technologies",
      ogDescription:
        "Get reliable and scalable VPS hosting services from Gashwa Technologies in Shimla and Himachal Pradesh with powerful virtualization, enhanced security and expert 24/7 support.",
    },
    hero: {
      title: "VPS Hosting",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "VPS HOSTING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies - your premier VPS hosting provider in Himachal, serving clients in Shimla and surrounding areas. We offer reliable and scalable VPS hosting solutions to meet the diverse needs of businesses and individuals alike.",
      "Powerful Virtualization: Our VPS hosting utilizes cutting-edge virtualization technology, ensuring optimal performance and resource allocation. With dedicated CPU and RAM, you can enjoy enhanced speed and stability for your website or application.",
      "Flexibility and Scalability: Our VPS hosting plans provide you with the flexibility to customize your server environment according to your specific requirements. Whether you need additional resources or want to upgrade your plan, we offer seamless scalability to accommodate your growing needs.",
      "Enhanced Security: We prioritize the security of your data and applications. Our VPS hosting solutions include robust security measures such as firewalls, regular backups, and proactive monitoring to safeguard your valuable information against threats.",
      "Reliable Network Connectivity: We ensure reliable network connectivity with multiple high-speed internet connections and redundant network infrastructure. This helps minimize downtime and ensures seamless accessibility to your VPS hosting environment.",
      "Expert Support: Our team of experienced professionals is available 24/7 to provide you with technical assistance and support. We are dedicated to delivering prompt and efficient solutions to any hosting-related queries or concerns you may have.",
      "Partner with Gashwa Technologies for reliable and feature-rich VPS hosting services in Himachal. Experience the power and flexibility of virtual private servers tailored to your specific needs. Get in touch with us today to discuss your hosting requirements and embark on a seamless hosting journey.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on a VPS Hosting ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "VPS HOSTING COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-server",
          title: "Powerful VPS Hosting",
          image: "/assets/img/service/website-maintenance.png",
          description:
            "Get powerful VPS hosting with cutting-edge virtualization technology, dedicated CPU and RAM for enhanced speed, stability and resource allocation.",
          href: "/vps-hosting",
        },
        {
          icon: "fa-chart-line",
          title: "Flexible & Scalable VPS",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Customize your server environment and seamlessly scale hosting resources according to your specific requirements and growing needs.",
          href: "/vps-hosting",
        },
        {
          icon: "fa-shield-halved",
          title: "Secure VPS Hosting",
          image: "/assets/img/service/ecommerce.png",
          description:
            "Protect your data and applications with firewalls, regular backups and proactive monitoring designed to safeguard your valuable information.",
          href: "/vps-hosting",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "VPS Hosting Services",
      titleHighlight: " in Shimla, Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies - your premier VPS hosting provider in Himachal, serving clients in Shimla and surrounding areas. We offer reliable and scalable VPS hosting solutions to meet the diverse needs of businesses and individuals alike.",
        "Our VPS hosting utilizes cutting-edge virtualization technology, ensuring optimal performance and resource allocation. With dedicated CPU and RAM, you can enjoy enhanced speed and stability for your website or application.",
        "Our VPS hosting plans provide you with the flexibility to customize your server environment according to your specific requirements. Whether you need additional resources or want to upgrade your plan, we offer seamless scalability to accommodate your growing needs.",
        "We prioritize the security of your data and applications. Our VPS hosting solutions include robust security measures such as firewalls, regular backups, and proactive monitoring to safeguard your valuable information against threats.",
        "We ensure reliable network connectivity with multiple high-speed internet connections and redundant network infrastructure. This helps minimize downtime and ensures seamless accessibility to your VPS hosting environment.",
        "Our team of experienced professionals is available 24/7 to provide you with technical assistance and support. We are dedicated to delivering prompt and efficient solutions to any hosting-related queries or concerns you may have.",
        "Partner with Gashwa Technologies for reliable and feature-rich VPS hosting services in Himachal. Experience the power and flexibility of virtual private servers tailored to your specific needs. Get in touch with us today to discuss your hosting requirements and embark on a seamless hosting journey.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on a VPS Hosting ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on a VPS Hosting ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "ssl-certification": {
    slug: "ssl-certification",
    seo: {
      title: "SSL Certification Company in Himachal | Gashwa Technologies",
      description:
        "Gashwa Technologies provides professional SSL certification services in Himachal Pradesh to secure websites, protect customer information, establish encrypted connections and support data privacy.",
      keywords: [
        "SSL Certification",
        "SSL Certification Company in Himachal",
        "SSL Certification Company in Shimla",
        "SSL Certification Services Himachal",
        "SSL Certification Services Shimla",
        "SSL Certification Company in Himachal Pradesh",
        "SSL Certificate Shimla",
        "SSL Certificate Himachal",
        "Website Security SSL Shimla",
        "Secure Website Certification Shimla",
        "SSL Security Services Himachal",
        "Website SSL Certificate Shimla",
        "SSL Certificate Provider Himachal Pradesh",
        "Website Security Company Shimla",
        "SSL Certification Services India",
      ],
      ogTitle:
        "SSL Certification Company in Himachal | Gashwa Technologies",
      ogDescription:
        "Secure your website with SSL certification from Gashwa Technologies in Himachal Pradesh. Protect customer information with encrypted connections and enhanced website security.",
    },
    hero: {
      title: "SSL Certification",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "SSL CERTIFICATION COMPANY IN HIMACHAL: GASHWA TECHNOLOGIES",
      "Secure Your Website with SSL Certification. At Gashwa Technologies, we prioritize the security of your website. That's why we offer SSL certification services to ensure that your data and your customers' information are protected.",
      "SSL (Secure Sockets Layer) certification is a security protocol that establishes an encrypted connection between a web server and a browser. It provides an extra layer of security, preventing unauthorized access, data breaches, and information theft.",
      "Enhanced Security: SSL certification encrypts the data transmitted between the user's browser and your website, making it extremely difficult for hackers to intercept and decipher sensitive information such as login credentials, credit card details, and personal data.",
      "Trust and Credibility: Having an SSL certificate demonstrates to your visitors and customers that you prioritize their security. It instills trust and confidence, encouraging them to engage with your website, make transactions, and share their information without hesitation.",
      "Improved Search Engine Rankings: Search engines like Google consider SSL certification as a ranking signal. By securing your website with SSL, you can potentially improve your search engine rankings, leading to increased visibility and organic traffic.",
      "Protection against Phishing Attacks: SSL certificates help protect your website from phishing attacks. Phishing involves fraudulent attempts to collect sensitive information by impersonating a trustworthy entity. SSL certification adds an extra layer of validation, ensuring that users are interacting with the legitimate version of your website.",
      "Compliance with Data Protection Regulations: SSL certification is often required to comply with data protection regulations, such as the General Data Protection Regulation (GDPR). By implementing SSL, you demonstrate your commitment to data privacy and legal compliance.",
      "With our expertise in web security, Gashwa Technologies is your ideal partner for SSL certification in Himachal, including Shimla and surrounding areas. Our team of professionals will guide you through the process, helping you select the right SSL certificate for your needs and ensuring its seamless integration with your website.",
      "Contact us today to secure your website with SSL certification and enjoy the peace of mind that comes with robust security measures.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on a SSL Certification ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "SSL CERTIFICATION COMPANY IN HIMACHAL: GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-lock",
          title: "Enhanced Website Security",
          image: "/assets/img/service/website-maintenance.png",
          description:
            "Secure sensitive information with SSL certification that encrypts data transmitted between your website and visitors' browsers.",
          href: "/ssl-certification",
        },
        {
          icon: "fa-shield-halved",
          title: "SSL Security Protection",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Add an extra layer of validation and protection against unauthorized access, data breaches, information theft and phishing attacks.",
          href: "/ssl-certification",
        },
        {
          icon: "fa-certificate",
          title: "SSL Certificate Integration",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Get professional guidance in selecting the right SSL certificate and seamlessly integrating it with your website.",
          href: "/ssl-certification",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "SSL Certification Services",
      titleHighlight: " in Himachal Pradesh",
      paragraphs: [
        "Secure Your Website with SSL Certification. At Gashwa Technologies, we prioritize the security of your website. That's why we offer SSL certification services to ensure that your data and your customers' information are protected.",
        "SSL (Secure Sockets Layer) certification is a security protocol that establishes an encrypted connection between a web server and a browser. It provides an extra layer of security, preventing unauthorized access, data breaches, and information theft.",
        "SSL certification encrypts the data transmitted between the user's browser and your website, making it extremely difficult for hackers to intercept and decipher sensitive information such as login credentials, credit card details, and personal data.",
        "Having an SSL certificate demonstrates to your visitors and customers that you prioritize their security. It instills trust and confidence, encouraging them to engage with your website, make transactions, and share their information without hesitation.",
        "Search engines like Google consider SSL certification as a ranking signal. By securing your website with SSL, you can potentially improve your search engine rankings, leading to increased visibility and organic traffic.",
        "SSL certificates help protect your website from phishing attacks. Phishing involves fraudulent attempts to collect sensitive information by impersonating a trustworthy entity. SSL certification adds an extra layer of validation, ensuring that users are interacting with the legitimate version of your website.",
        "SSL certification is often required to comply with data protection regulations, such as the General Data Protection Regulation (GDPR). By implementing SSL, you demonstrate your commitment to data privacy and legal compliance.",
        "With our expertise in web security, Gashwa Technologies is your ideal partner for SSL certification in Himachal, including Shimla and surrounding areas. Our team of professionals will guide you through the process, helping you select the right SSL certificate for your needs and ensuring its seamless integration with your website.",
        "Contact us today to secure your website with SSL certification and enjoy the peace of mind that comes with robust security measures.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on a SSL Certification ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on a SSL Certification ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },
  "business-email-companies": {
    slug: "business-email-companies",
    seo: {
      title: "Business Email Company in Himachal | Gashwa Technologies",
      description:
        "Gashwa Technologies provides reliable, secure and scalable business email services in Himachal Pradesh, serving businesses in Shimla and surrounding areas with professional email solutions.",
      keywords: [
        "Business Email",
        "Business Email Company in Himachal",
        "Business Email Company in Shimla",
        "Business Email Services Himachal",
        "Business Email Services Shimla",
        "Business Email Company in Himachal Pradesh",
        "Professional Business Email Shimla",
        "Business Email Hosting Himachal",
        "Secure Business Email Shimla",
        "Business Email Solutions Himachal",
        "Corporate Email Services Shimla",
        "Professional Email Services Himachal",
        "Business Email Provider Himachal Pradesh",
        "Business Email Hosting Shimla",
        "Business Email Services India",
      ],
      ogTitle:
        "Business Email Company in Himachal | Gashwa Technologies",
      ogDescription:
        "Get reliable, secure and scalable business email services from Gashwa Technologies in Himachal Pradesh, with professional email addresses, secure communication and dedicated support.",
    },
    hero: {
      title: "Business Email",
      backgroundImage: "/assets/img/bg/breadcrumb.png",
    },
    marquee: [
      "BUSINESS EMAIL COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      "Welcome to Gashwa Technologies, your trusted provider of business email services in Himachal, serving clients in Shimla and surrounding areas. We specialize in delivering reliable and secure email solutions tailored to meet the unique needs of businesses like yours.",
      "With our expertise and dedication to excellence, we strive to be your preferred choice for all your business email requirements.",
      "Professional Email Addresses: Present a polished and professional image to your clients and stakeholders with custom email addresses that match your domain name. Our business email services allow you to create multiple email accounts for different team members, departments, or specific purposes.",
      "Secure and Encrypted Communication: We understand the importance of data security in today's digital landscape. That's why our business email services are equipped with robust security features, including encryption, spam filters, and virus protection, to ensure that your confidential information remains safe and secure.",
      "Reliable and Scalable: Our infrastructure is designed to deliver a seamless email experience, with high uptime and fast performance. Whether you have a small business or a large enterprise, our scalable solutions can accommodate your growing needs.",
      "User-Friendly Interface: Our intuitive email interface makes it easy for you to manage your email accounts, set up forwarding and autoresponders, organize your inbox, and access your emails from anywhere using webmail or your preferred email client.",
      "Dedicated Support: We pride ourselves on providing exceptional customer support. Our team of experts is available to assist you with any email-related queries or technical issues you may encounter, ensuring a smooth and hassle-free experience.",
      "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
      "Need a quote on Business Email Project ?. Contact Us today +91-9805034219",
    ],
    serviceCards: {
      headline:
        "BUSINESS EMAIL COMPANY IN SHIMLA: GASHWA TECHNOLOGIES",
      items: [
        {
          icon: "fa-envelope",
          title: "Professional Email Addresses",
          image: "/assets/img/service/custom-web-design.png",
          description:
            "Create professional email addresses matching your domain name with multiple accounts for team members, departments, or specific purposes.",
          href: "/business-email",
        },
        {
          icon: "fa-shield-halved",
          title: "Secure Email Communication",
          image: "/assets/img/service/website-maintenance.png",
          description:
            "Protect confidential business information with encryption, spam filters, virus protection, and secure email communication.",
          href: "/business-email",
        },
        {
          icon: "fa-server",
          title: "Reliable and Scalable Email",
          image: "/assets/img/service/responsive-performance.png",
          description:
            "Get reliable email infrastructure with high uptime, fast performance, and scalable solutions for businesses of different sizes.",
          href: "/business-email",
        },
      ],
    },
    vision: DEFAULT_VISION,
    about: {
      eyebrow: "ABOUT GASHWA TECHNOLOGIES",
      title: "Business Email Services",
      titleHighlight: " in Himachal Pradesh",
      paragraphs: [
        "Welcome to Gashwa Technologies, your trusted provider of business email services in Himachal, serving clients in Shimla and surrounding areas. We specialize in delivering reliable and secure email solutions tailored to meet the unique needs of businesses like yours.",
        "With our expertise and dedication to excellence, we strive to be your preferred choice for all your business email requirements.",
        "Present a polished and professional image to your clients and stakeholders with custom email addresses that match your domain name. Our business email services allow you to create multiple email accounts for different team members, departments, or specific purposes.",
        "We understand the importance of data security in today's digital landscape. Our business email services are equipped with robust security features, including encryption, spam filters, and virus protection, to ensure that your confidential information remains safe and secure.",
        "Our infrastructure is designed to deliver a seamless email experience, with high uptime and fast performance. Whether you have a small business or a large enterprise, our scalable solutions can accommodate your growing needs.",
        "Our intuitive email interface makes it easy for you to manage your email accounts, set up forwarding and autoresponders, organize your inbox, and access your emails from anywhere using webmail or your preferred email client.",
        "We pride ourselves on providing exceptional customer support. Our team of experts is available to assist you with any email-related queries or technical issues you may encounter, ensuring a smooth and hassle-free experience.",
        "GASHWA TECHNOLOGIES have been the first choice for many small and large businesses throughout Punjab, Haryana, Himachal Pradesh, Chandigarh, Jammu & Kashmir, Uttar Pradesh, Delhi, Uttrakhand across all over the India. Internationaly for Canada, USA, UK, Australia",
        "Need a quote on Business Email Project ?. Contact Us today +91-9805034219",
      ],
      ctaTitle: "Need a quote on Business Email Project ?.",
      ctaSubtitle: "Contact Us today",
      phone: "+91-9805034219",
      phoneHref: "tel:+919805034219",
      locationsIn: LOCATIONS_IN,
      locationsIntl: LOCATIONS_INTL,
    },
    faq: DEFAULT_FAQ,
  },

};

export function getDesignPage(slug: string): DesignPageData | undefined {
  return designPages[slug];
}

export function getDesignPageMetadata(slug: string) {
  const data = designPages[slug];
  if (!data) return {};

  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    openGraph: {
      title: data.seo.ogTitle,
      description: data.seo.ogDescription,
      type: "website" as const,
    },
  };
}
