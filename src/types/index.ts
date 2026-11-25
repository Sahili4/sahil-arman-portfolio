export interface NavItem {
  label: string;
  href: string;
}

export interface Technology {
  name: string;
  category: 'backend' | 'frontend' | 'mobile' | 'database' | 'tools';
  description: string;
  iconName: string;
  highlight?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  keyContributions: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
  architectureOverview: string;
  challengesAndSolutions: string[];
  liveUrl?: string;
  githubUrl?: string;
  isFeatured: boolean;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  capabilities: string[];
  deliverables: string[];
  bestFor: string;
  iconName: string;
  contactProjectType: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  shortDescription: string;
  details: string[];
  deliverables: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  experienceYears: string;
  location: string;
  timezone: string;
  availability: string;
  targetRegions: string[];
  workType: string;
  positioning: string;
  bioParagraphs: string[];
  philosophy: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
  };
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  company?: string;
  projectType: string;
  budget?: string;
  projectDetails: string;
  _gotcha?: string;
}
