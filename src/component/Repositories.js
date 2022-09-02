import usericon from "../images/usericon.png";
import dashicon from "../images/dashicon.png";
import projecticon from "../images/projecticon.png";
import repositoryicon from "../images/repositoryicon.png";

const Repositories = () => {
  return (
    <div className="dashcontainer">
      <div className="dash1">
        <img src={usericon} width={200} alt={usericon} />
        <p>Username</p>
        <button className="editprofile"> Profile</button>
        <h1>
          {" "}
          <img src={dashicon} alt={dashicon} width={40} />
          Dashboard
        </h1>
        <h1>
          {" "}
          <img src={projecticon} alt={projecticon} width={40} /> Projects
        </h1>
        <h1>
          {" "}
          <img src={repositoryicon} alt={repositoryicon} width={40} />
          Repositories
        </h1>
        <button className="signout"> Sign out</button>
      </div>

      <div classNamAe="dash2">
        <h4> Recent Organisations</h4>
      </div>
    </div>
  );
};

export default Repositories;
