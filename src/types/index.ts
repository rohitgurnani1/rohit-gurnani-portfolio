export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  comingSoon?: boolean;
};

export type TimelineEntry = {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  highlight?: boolean;
};

export type SkillCategory = {
  name: string;
  skills: string[];
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  category: string;
  readingTime: string;
  published: boolean;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};
