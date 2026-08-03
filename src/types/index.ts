export type Project = {
  slug: string;
  index: string;
  title: string;
  category: "Beauty" | "HoReCa" | "Health" | "Sport" | "Personal Brand";
  niche: string;
  year: number;
  description: string;
  accentColor: string;
  services: string[];
  heroImage: string;
  gallery: string[];
  duration: string;
  role: string;
  concept: string;
};

export type BusinessType = {
  id: string;
  title: string;
  description: string;
  priceFrom: number;
  duration: string;
  features: string[];
  accentColor: string;
};

export type Service = {
  index: string;
  title: string;
  description: string;
  priceFrom: number;
  duration: string;
  features: string[];
};

export type CalculatorInput = {
  type: "landing" | "multipage" | "redesign" | "catalog";
  pages: number;
  cms: boolean;
  catalog: boolean;
  form: boolean;
  booking: boolean;
  multilingual: boolean;
  urgent: boolean;
};
