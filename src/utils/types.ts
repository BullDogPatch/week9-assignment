export type User = {
  first_name: string;
  last_name: string;
  bio: string;
  location: string;
  profile_url?: string;
  username: string;
};

export type Posts = {
  id: number;
  title: string;
  description: string;
  image: string;
  likes: number;
  created_at: string;
  username: string;
  clerk_id: string;
}[];

export type UserPost = {
  id: number;
  title: string;
  description: string;
  image: string;
  likes: number;
  created_at: string;
  username: string;
  clerk_id: string;
};
