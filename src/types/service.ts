
import { ReactNode } from "react";

export interface ServiceTranslation {
  title: string;
  description: string;
  features: string[];
}

export interface ServiceType {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  translations?: {
    [key: string]: ServiceTranslation;
  };
}
