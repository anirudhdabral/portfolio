import type { IconType } from "react-icons/lib";

export type TExperience = {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type TProject = {
  id: number;
  name: string;
  description: string;
  link?: string;
  image: string;
  technologies?: string[];
  clientProject?: boolean;
};

export type TSkill = {
  id: number;
  name: string;
  icon: string;
  category: string;
};

export type TSocial = {
  id: number;
  name: string;
  icon: IconType;
  url: string;
};
export type TContact = {
  id: number;
  name: string;
  email: string;
  message: string;
};

export type THero = {
  id: number;
  description: string;
  socials: TSocial[];
  image: string;
  name: string;
  skills: string[];
  role: string;
  passion: string;
};
