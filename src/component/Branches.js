// import usericon from "../images/usericon.png";
// import dashicon from "../images/dashicon.png";
import pull from "../images/pull.png";
import check from "../images/check.png";
// import projecticon from "../images/projecticon.png";
// import repositoryicon from "../images/repositoryicon.png";
import Contributions from "./Contributions";
import { DropdownButton, Dropdown, Card } from "react-bootstrap";
// import { Link } from 'react-router-dom';
import Menu from './Menu';
import { Chart } from 'react-apexcharts';
 
const Dashboard = () => {
  return (
    <div className="dashcontainer">
      <div className="dash1">
       <Menu />
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
            title="Collaborators"
          >
            <Dropdown.Item href="#/action-1">Footer</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
        </div>

        <Card style={{ width: "15rem" }} className="pull">
          <Card.Body>
            <Card.Title class="text-center">
              <img src={pull} alt={pull} width={25} />0
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted" class="text-center">
              Open pull request
            </Card.Subtitle>
          </Card.Body>
        </Card>

        <Card style={{ width: "15rem" }} className="pull1">
          <Card.Body>
            <Card.Title class="text-center">
              <img src={check} alt={check} width={25} />
              29
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted" class="text-center">
              Closed pull request
            </Card.Subtitle>
          </Card.Body>
        </Card>

        <div className="contributions">
          Comparison Chart
          <Contributions />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
