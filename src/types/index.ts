import type { ElementType } from "react";

export interface FeaturesType {
  icon: ElementType; // Changed from ReactNode to ElementType
  title: string;
  description: string;
  animation?: any;
}
