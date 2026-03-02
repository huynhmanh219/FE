/**
 * TypeScript type definitions for the landing page
 */

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  originalPrice: string | null;
  image: string;
  tag: string | null;
  category: "tarot" | "crystals" | "fengshui" | "incense";
}

export interface ValueProp {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  product: string;
  date: string;
}

export interface WaitlistSubmission {
  name: string;
  email: string;
  phone?: string;
  interests: string[];
  submittedAt: string;
  source?: string;
}
