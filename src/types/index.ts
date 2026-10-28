// Project Types and Interfaces

export interface ProjectCategory {
  title: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  link: string;
}

export interface PricingPlan {
  id: number;
  title: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: PricingFeature[];
  featured?: boolean;
}

export interface PricingFeature {
  included: boolean;
  text: string;
}

export interface WorkProcess {
  id: number;
  number: string;
  title: string;
  description: string;
  icon?: string;
  active?: boolean;
}

export interface Counter {
  value: number;
  suffix: string;
  label: string;
}

export interface TrustReview {
  platform: string;
  reviews: number;
  rating: number;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

export interface BlogPost {
  title: string;
  image: string;
  tag: string;
  date: string;
  author: string;
  role: string;
  profileImage: string;
}
