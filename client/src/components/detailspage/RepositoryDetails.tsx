import { useNavigate } from "react-router-dom";
import { useRepository } from "../../context/RepositoryContext";
import Details from "./components/Details";
import Owner from "./components/Owner";

const RepositoryDetails = (): JSX.Element => {
  const { repository }: any = useRepository();

  const navigation = useNavigate();

  return (
    <div className="row">
      <div className="col-6">
        <Details repository={repository} />

        <button className="btn btn-primary" onClick={() => navigation("/")}>
          Go Back
        </button>
      </div>
      <div className="col-6">
        <Owner repository={repository} />
      </div>
    </div>
  );
};

export default RepositoryDetails;
