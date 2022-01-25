import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRepository } from "../../context/RepositoryContext";
import IRepository from "../../interfaces/IRepository";
import { search } from "../../services/SearchService";
import CardLoader from "../common/CardLoader";
import SpinnerLoader from "../common/SpinnerLoader";
import RepositoryCard from "./components/RepositoryCard";

const Search = (): JSX.Element => {
  const [repository, setRepository] = useState<string>("");
  const [repositories, setRepositories] = useState<IRepository[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { setRepositoryContext }: any = useRepository();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (repository !== "") {
      setIsLoading(true);

      try {
        const repositories = (await search(repository)) as IRepository[];
        setRepositories(repositories);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    }
  };

  const handleClick = (repository: IRepository): void => {
    setRepositoryContext(repository);
    navigate(`/${repository.id}`);
  }

  return (
    <>
      <form className="row g-3 align-items-center" onSubmit={handleSubmit}>
        <div className="col-12 col-md-11">
          <label className="visually-hidden" htmlFor="repository">
            Repository Name
          </label>
          <div className="input-group">
            <div className="input-group-text">@</div>
            <input
              type="text"
              className="form-control"
              id="repository"
              placeholder="Github Repository Name"
              value={repository}
              onChange={(e) => setRepository(e.target.value)}
            />
          </div>
        </div>

        <div className="col-12 col-md-1">
          <button type="submit" className="btn btn-primary">
            {isLoading ? <SpinnerLoader /> : "Submit"}
          </button>
        </div>
      </form>

      <hr className="col-12 col-md-12 mb-5" />

      {repositories.length > 0 && (
        <>
          <div className="row g-5 mb-5">
            {isLoading ? (
              <>
                {[1, 2, 3].map((i) => (
                  <div className="col-4" key={i}>
                    <CardLoader />
                  </div>
                ))}
              </>
            ) : (
              repositories.map((repository: IRepository) => (
                <div
                  className="col-4 repo-card"
                  key={repository.id}
                  onClick={() => handleClick(repository)}
                >
                  <RepositoryCard repository={repository} />
                </div>
              ))
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Search;
