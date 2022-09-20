import location from "../images/location.png";
import link from "../images/link.png";
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { useEffect, useState } from "react";
import API from "../api/github";
import Cookies from "universal-cookie";
import Orgcomponent from "./Orgcomponent";


let check = true;
const Dashboard1 = () => {
  const [organizations, setorganizations] = useState([]);
  const [page, setPage] = useState(1);

  const cookies = new Cookies();
  const token = cookies.get("token");
  const userName = cookies.get("userName");

  useEffect(() => {
    API.getOrg(token, userName, page).then((value) => {
      if (value.length > 0) {
        setorganizations(value);
        check = true;
      }
    });
    
  },[page]);


  function increase() {
    if (check) {
      setPage(page + 1);
    }
    check = false;
  }

  function decrease() {
    if (check && page > 1) {
      setPage(page - 1);
    }
    check = false;
  }


  return (
    <div className="dashcontainer">
      <div className="dash1">
       <Menu />
      </div>

      <div className="dash2">
        <h4> Organisations</h4>
        <div className="cardoga">
          
          {organizations.map(value => {
            return (
          //     <Card style={{ width: "18rem" }}>
          //   <Card.Body>
          //       <Card.Title>{ value.login}</Card.Title>
          //     <Card.Subtitle className="mb-2 text-muted">
          //       Target's Official GitHub Organisation
          //     </Card.Subtitle>
          //     <Card.Text>
          //       <img src={location} alt={location} width={15} />
          //       Newston
          //       <img className="linkicon" src={link} alt={link} width={15} />
          //       <a className="link" href="#">
          //         www.target.com
          //       </a>
          //     </Card.Text>
          //     <Card.Link href="#">29 repositories</Card.Link>
          //     <Card.Link href="#">12 members</Card.Link>
          //   </Card.Body>
          // </Card>
              <Orgcomponent value={ value.url} />
          );
          }) }

          

          <Button onClick={increase} variant="outline-secondary" className="nextbtn1">
            Next
          </Button>
         <Button onClick={decrease} variant="outline-secondary" className="nextbtn2">
              Prev
            </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard1;
