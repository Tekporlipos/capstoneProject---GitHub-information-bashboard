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
  const name = cookies.get("name");
  const [branch, setBranch] = useState([]);
  const [open, setOpen] = useState(0);
  const [close, setClose] = useState(0);
  const [contribute, setContribute] = useState([]);
  const [highContr, sethighContr] = useState({});
  const [myContr, setmyContr] = useState({});
  const { rep } = useParams('rep');
  const org = new URL(window.location.href).searchParams.get('org');

  useEffect(() => {
    API.getBranch(token, org?org ==='undefined'?userName:org:userName, rep).then((value) => {
      setBranch(value);
    });
    API.getContr(token, org?org ==='undefined'?userName:org:userName, rep).then((value) => {
      setContribute(value);



  
      value.sort((a, b) => {
        return b.contributions - a.contributions;
      });

      sethighContr({ name: value[0].login, cont: value[0].contributions });
      const mycont = value.find(value => value.login === userName);
      setmyContr({ name:mycont.login, cont: mycont.contributions });
    });

    API.getPull(token, org?org ==='undefined'?userName:org:userName, 'open').then(value => {
      if (value.length) {
        setOpen(value.length);
      }
      
    });

    API.getPull(token, org?org ==='undefined'?userName:org:userName, 'closed').then(value => {
      if (value.length) {
         setClose(value.length);
      }
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
            style={{heigth:'100px'}}
            variant="outline-secondary"
            id="dropdown-basic-button"
            title="Collaborators"
          >
            <div className="h-50">
               {contribute && contribute.length>0?contribute.map((value) => <Dropdown.Item href="#/action-1">{ value.login}</Dropdown.Item>):null}
           </div>
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
          {highContr.name?<Contributions me={myContr.cont?myContr.cont:0} userName={name}  highName={highContr}/>:null}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
