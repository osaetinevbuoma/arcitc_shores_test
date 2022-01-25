import IRepository from "../../../interfaces/IRepository";

interface IOwner {
  repository: IRepository;
}

const Owner = ({ repository }: IOwner): JSX.Element => {
  return (
    <>
      <h3>Owner Details</h3>

      <div className="mb-3 row">
        <label htmlFor="repositoryName" className="col-sm-2 col-form-label">
          <strong>Owner</strong>
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="repositoryName"
            value={repository.owner.login}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="repositoryName" className="col-sm-2 col-form-label">
          <strong>Avatar</strong>
        </label>
        <div className="col-sm-10">
          <img src={repository.owner.avatar_url} width={150} alt={repository.owner.login} />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="repositoryName" className="col-sm-2 col-form-label">
          <strong>GitHub URL</strong>
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="repositoryName"
            value={repository.owner.html_url}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="repositoryName" className="col-sm-2 col-form-label">
          <strong>Followers URL</strong>
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="repositoryName"
            value={repository.owner.followers_url}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="repositoryName" className="col-sm-2 col-form-label">
          <strong>Following URL</strong>
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="repositoryName"
            value={repository.owner.following_url}
          />
        </div>
      </div>
    </>
  );
}

export default Owner;
