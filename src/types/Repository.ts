export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  private: boolean;
  language: string;
  stargazers_count: number;
}

export interface RepositoryItemProps {
  repository: Repository
}

