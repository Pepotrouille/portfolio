export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface TimelineItem {
  id: string;
  titleKey: string;
  descriptionKey?: string;
  date1: string;
  date2?: string;
  placeKey?: string;
  icon?: string;
  color?: string;
}

export interface Project {
  id: string;
  titleKey: string;
  descriptionKey?: string;
  categoryKey: string;
  linkOnClick?: string;
  skillKeys?: string[];
  imageName?: string;
}

export interface HexagonInformation {
  id: string;
  title?: string;
  description?: string;
  titleKey?: string;
  descriptionKey?: string;
  imageName?: string;
  linkOnClick?: string;
  categoryKey: string;
  color?: string;
}

export type Skill = HexagonInformation;

export interface SkillCategory {
  id: string;
  titleKey: string;
  skills: Skill[];
}

export type Social = HexagonInformation;
