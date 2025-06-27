export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface TimelineItem {
  id: string;
  title: string;
  description?: string;
  date1: string;
  date2: string;
  icon?: string;
  color?: string;
}
