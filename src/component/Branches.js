import usericon from "../images/usericon.png";
import dashicon from "../images/dashicon.png";
import projecticon from "../images/projecticon.png";
import repositoryicon from "../images/repositoryicon.png";
import { DropdownButton, Dropdown } from "react-bootstrap";

const Dashboard = () => {
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

      <div className="dash2">
        <h4> Branches</h4>

        <div className="dropdown">
          <DropdownButton
            variant="outline-secondary"
            id="dropdown-basic-button"
            title="Active Branches"
          >
            <Dropdown.Item href="#/action-1">Footer</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Folder</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Features</Dropdown.Item>
          </DropdownButton>
        </div>

        <div className="dropdown1">
          <DropdownButton
            variant="outline-secondary"
            id="dropdown-basic-button"
            title="Main"
          >
            <Dropdown.Item href="#/action-1">Footer</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Folder</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Features</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
