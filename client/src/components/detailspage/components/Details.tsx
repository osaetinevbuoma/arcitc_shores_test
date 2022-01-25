import IRepository from "../../../interfaces/IRepository";
import { parseDate } from "../../../utils";

interface IDetails {
  repository: IRepository;
}

const Details = ({ repository }: IDetails): JSX.Element => {
  return (
    <>
      <h3>Repository Details</h3>

      <div className="mb-3 row">
        <label htmlFor="repositoryName" className="col-sm-2 col-form-label">
          <strong>Name</strong>
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="repositoryName"
            value={repository?.name}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="repositoryName" className="col-sm-2 col-form-label">
          <strong>Description</strong>
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="repositoryName"
            value={repository?.description}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="repositoryName" className="col-sm-2 col-form-label">
          <strong>Programming Language</strong>
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="repositoryName"
            value={repository?.language}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="repositoryName" className="col-sm-2 col-form-label">
          <strong>Default Branch</strong>
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="repositoryName"
            value={repository?.default_branch}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="repositoryName" className="col-sm-2 col-form-label">
          <strong>Stars</strong>
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="repositoryName"
            value={repository?.stargazers_count}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="repositoryName" className="col-sm-2 col-form-label">
          <strong>Watchers</strong>
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="repositoryName"
            value={repository?.watchers_count}
          />
        </div>
      </div>

      <div className="mb-3 row">
        <label htmlFor="repositoryName" className="col-sm-2 col-form-label">
          <strong>Last Updated</strong>
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id="repositoryName"
            value={parseDate(repository?.updated_at)}
          />
        </div>
      </div>
    </>
  );
}

export default Details;
