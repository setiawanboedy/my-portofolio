import { ReactNode } from "react";

export interface NavLink {
  name: string;
  path: string;
}

export interface SocialLink {
  icon: ReactNode;
  path: string;
}

export interface StatItem {
  num: number;
  text: string;
}

export interface ProjectStack {
  name: string;
}

export interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: ProjectStack[];
  image: string;
  live: string;
  github: string;
  badge?: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
  highlights?: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  highlights?: string[];
}

export interface SkillItem {
  icon: ReactNode;
  name: string;
}

export interface AboutInfoItem {
  fieldName: string;
  fieldValue: string;
}

export interface ServiceItem {
  num: string;
  title: string;
  description: string;
  href: string;
}

export interface ContactInfoItem {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
}
