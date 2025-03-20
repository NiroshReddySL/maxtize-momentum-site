
import { ReactNode } from "react";

export interface ServiceContentSection {
  id: string;
  title: string;
  content: string | ReactNode;
  image?: string;
  imageAlt?: string;
  flipped?: boolean;
  backgroundColor?: string;
  translations?: {
    [key: string]: {
      title: string;
      content: string | ReactNode;
      imageAlt?: string;
    }
  };
}

export interface ServiceContentType {
  id: string;
  relatedServices: string[];
  sections: ServiceContentSection[];
  testimonials?: {
    name: string;
    company: string;
    comment: string;
    avatar?: string;
    rating?: number;
    translations?: {
      [key: string]: {
        comment: string;
      }
    };
  }[];
  faq?: {
    question: string;
    answer: string;
    translations?: {
      [key: string]: {
        question: string;
        answer: string;
      }
    };
  }[];
}
