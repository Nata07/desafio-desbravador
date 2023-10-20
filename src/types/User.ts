export interface User {
  name: string;
  avatar_url: string;
  email: string;
  bio: string;
  login: string;
  following: number;
  followers: number;
}

export interface UserProps {
  user: User
}