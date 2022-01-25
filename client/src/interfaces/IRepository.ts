import IOwner from "./IOwner";

interface IRepository {
  id: number;
  name?: string;
  full_name?: string;
  description?: string;
  stargazers_count?: number;
  watchers_count?: number;
  language?: string;
  default_branch?: string;
  forks?: number;
  forks_count?: number;
  created_at?: Date | string;
  updated_at?: Date | string;
  owner: IOwner;
}

export default IRepository;
