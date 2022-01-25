import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";
import IRepository from "../interfaces/IRepository";

const ARCTIC_SHORE_REPO = "ARCTIC_SHORE_REPO";
const RepositoryContext = createContext({});

interface IRepositoryProvider {
  children: any;
}

export const RepositoryProvider = ({ children }: IRepositoryProvider): JSX.Element => {
  const [repository, setRepository] = useState<IRepository>();

  useEffect(() => {
    const repository = window.localStorage.getItem(ARCTIC_SHORE_REPO);
    if (repository) setRepository(JSON.parse(repository));
    else setRepository(undefined);
  }, []);

  const setRepositoryContext = (repository: IRepository): void => {
    window.localStorage.setItem(ARCTIC_SHORE_REPO, JSON.stringify(repository));
    setRepository(repository);
  }
  
  return (
    <RepositoryContext.Provider value={{repository, setRepositoryContext}}>
      {children}
    </RepositoryContext.Provider>
  );
}

export const useRepository = () => useContext(RepositoryContext);
