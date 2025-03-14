
import { ReactNode } from 'react';

export interface ServiceType {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}
