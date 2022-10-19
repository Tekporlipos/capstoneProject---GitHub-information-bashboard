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
import { useEffect, useState } from "react";
import API from "../api/github";
 import Cookies from "universal-cookie";
import { useParams, useSearchParams } from "react-router-dom";
const Dashboard = () => {
const cookies = new Cookies();
  const token = cookies.get("token");
  const userName = cookies.get("userName");
  const [branch, setBranch] = useState([]);
  const [open, setOpen] = useState(0);
  const [close, setClose] = useState(0);
  const [contribute, setContribute] = useState([]);
  const { rep } = useParams('rep');
  const org = new URL(window.location.href).searchParams.get('org');

  useEffect(() => {
    API.getBranch(token, org?org:userName, rep).then((value) => {
      setBranch(value);
    });
    API.getContr(token, org?org:userName, rep).then((value) => {
      setContribute(value);
    });

    API.getPull(token, org?org:userName, rep, 'open').then(value => {
      setOpen(value.length);
    });

    API.getPull(token, org?org:userName, rep, 'closed').then(value => {
      setClose(value.length);
    });
  },[]);


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
          
            {branch && branch.length>0 ? branch.map((value)=><Dropdown.Item href="#/action-3">{value.name}</Dropdown.Item>):null}
          </DropdownButton>
        </div>

        <div className="dropdown1">
          <DropdownButton
            variant="outline-secondary"
            id="dropdown-basic-button"
            title="Collaborators"
          >
            {contribute && contribute.length>0?contribute.map((value) => <Dropdown.Item href="#/action-1">{ value.login}</Dropdown.Item>):null}
          </DropdownButton>
        </div>

        <Card style={{ width: "15rem" }} className="pull">
          <Card.Body>
            <Card.Title class="text-center">
              <img src={pull} alt={pull} width={25} />{open}
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
              {close}
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
