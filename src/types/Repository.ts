export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  private: boolean;
  language: string;
}

export interface RepositoryItemProps {
  repository: Repository
}

