
// No changes needed to AuthorType
export interface AuthorType {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface BlogPostType {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  publishDate: string;
  author: AuthorType;
  category: string;
  tags: string[];
  featured: boolean;
  // We're using slug as the unique identifier instead of id
}
