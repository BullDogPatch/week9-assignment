export type User = {
  first_name: string;
  last_name: string;
  bio: string;
  location: string;
  profile_url?: string;
  username: string;
};

export type Posts = {
  username: string;
  id: number;
  title: string;
  image: string;
  description: string;
  created_at: string;
}[];

export type UserPost = {
  username: string;
  id: number;
  title: string;
  image: string;
  description: string;
  created_at: string;
};
