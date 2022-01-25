import IRepository from "../../../interfaces/IRepository";

interface IRepositoryCard {
  repository: IRepository;
}

const RepositoryCard = ({ repository }: IRepositoryCard): JSX.Element => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          {repository && repository.name && repository.name.length > 30
            ? `${repository.name.substring(0, 30)}...`
            : repository.name}

          {repository && !repository.name && "No name for this repository"}
        </h5>
        <p>By: {repository.owner.login}</p>
        <hr />

        <div className="row card-text">
          <div className="col-5">
            <div>
              <strong>{repository.stargazers_count} star(s)</strong>
            </div>
          </div>

          <div className="col-7">
            <div>
              <strong>{repository.watchers_count} watcher(s)</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepositoryCard;
