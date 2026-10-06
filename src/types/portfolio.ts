export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: 'Brand & Spatial' | 'Systems & Fintech' | 'Editorial & Web' | 'E-Commerce' | 'Architecture';
  year: string;
  client: string;
  role: string;
  timeline: string;
  liveUrl?: string;
  image: string;
  summary: string;
  challenge: string;
  approach: string;
  decisions: {
    title: string;
    description: string;
  }[];
  outcomes: {
    metric: string;
    label: string;
  }[];
  featured: boolean;
  layoutVariant: 'hero-featured' | 'two-column' | 'full-width' | 'offset';
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'Engineering' | 'Design Systems' | 'Architecture' | 'Creative Direction';
  publishedDate: string;
  readTime: string;
  summary: string;
  heroImage: string;
  content: string[];
  takeaways: string[];
  featured?: boolean;
}

export type PageRoute = 
  | { type: 'home' }
  | { type: 'work' }
  | { type: 'case-study'; slug: string }
  | { type: 'about' }
  | { type: 'blog' }
  | { type: 'blog-post'; slug: string }
  | { type: 'contact' }
  | { type: 'handoff-guide' };
