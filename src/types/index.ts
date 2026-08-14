export type Experience = {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Education = {
  id: number;
  degree: string;
  school: string;
  startDate: string;
  endDate: string;
  description?: string;
  thesisTitle?: string;
  advisor?: string;
  researchGroup?: {
    name: string;
    url: string;
  };
};

export type CourseCategory = 'bootcamp' | 'online';

export type Course = {
  id: number;
  title: string;
  institution: string;
  category: CourseCategory;
  completedAt: string;
  workloadHours?: number;
  description?: string;
};

export type PublicationType =
  | 'tcc'
  | 'conference-paper'
  | 'extended-abstract'
  | 'abstract';

export type Publication = {
  id: number;
  title: string;
  type: PublicationType;
  authors: string;
  event: string;
  location?: string;
  publisher?: string;
  year: string;
  pages?: string;
  description?: string;
  pdfUrl?: string;
  externalUrl?: string;
};

export type Service = {
  name: string;
  description: string;
  image: string;
};

export type Work = {
  id: number;
  title: string;
  category: string;
  thumbnailUrl: string;
  description?: string;
  images: string[];
  previewUrl?: string;
  publishedAt: string;
  featureList: string[];
  featured?: boolean;
  attributes: {
    name: string;
    value: string | number;
  }[];
};
