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
}[];
