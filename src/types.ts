export interface Skill {
  name: string;
  category: string;
  subCategory?: string;
  proficiency: number; // 0-100
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  features: string[];
  architecture?: string;
  role?: string;
  teamName?: string;
  impact?: string;
  imagePlaceholderColor: string; // Tailored placeholder aesthetic
  image?: string; // URL for the actual project screenshot
  githubUrl?: string;
  link?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
