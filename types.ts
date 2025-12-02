export interface EbookLink {
  language: string;
  flag: string;
  url: string;
}

export interface CourseLink {
  title: string;
  language: string;
  flag: string;
  url: string;
}

export interface Testimonial {
  id: number;
  content: string;
  author: string;
  course: string;
  highlightColor: 'primary' | 'accent';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: 'Facebook' | 'Instagram' | 'Linkedin' | 'Twitter'; // Using string references for Lucide mapping
}