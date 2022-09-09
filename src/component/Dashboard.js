// import usericon from '../images/usericon.png'
// import dashicon from "../images/dashicon.png";
import location from "../images/location.png";
import link from "../images/link.png";
// import projecticon from "../images/projecticon.png";
// import repositoryicon from "../images/repositoryicon.png";
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const Dashboard = () => {
  return (
    <div className="dashcontainer">
      <div className="dash1">
        <Menu />
      </div>

      <div className="dash2">
        <h4> Organisations</h4>
        <div className="cardoga">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Target</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Target's Official GitHub Organisation
              </Card.Subtitle>
              <Card.Text>
                <img src={location} alt={location} width={15} />
                Newston
                <img className="linkicon" src={link} alt={link} width={15} />
                <a className="link" href="#">
                  www.target.com
                </a>
              </Card.Text>
              <Card.Link>
                <Link to={"/repositories"}>93 repositories</Link>
              </Card.Link>
              <Card.Link href="#">12 members</Card.Link>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Target</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Target's Official GitHub Organisation
              </Card.Subtitle>
              <Card.Text>
                <img src={location} alt={location} width={15} />
                Newston
                <img className="linkicon" src={link} alt={link} width={15} />
                <a className="link" href="#">
                  www.target.com
                </a>
              </Card.Text>
              <Card.Link href="#">29 repositories</Card.Link>
              <Card.Link href="#">12 members</Card.Link>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Target</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Target's Official GitHub Organisation
              </Card.Subtitle>
              <Card.Text>
                <img src={location} alt={location} width={15} />
                Newston
                <img className="linkicon" src={link} alt={link} width={15} />
                <a className="link" href="#">
                  www.target.com
                </a>
              </Card.Text>
              <Card.Link href="#">29 repositories</Card.Link>
              <Card.Link href="#">12 members</Card.Link>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Target</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Target's Official GitHub Organisation
              </Card.Subtitle>
              <Card.Text>
                <img src={location} alt={location} width={15} />
                Newston
                <img className="linkicon" src={link} alt={link} width={15} />
                <a className="link" href="#">
                  www.target.com
                </a>
              </Card.Text>
              <Card.Link href="#">29 repositories</Card.Link>
              <Card.Link href="#">12 members</Card.Link>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Target</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Target's Official GitHub Organisation
              </Card.Subtitle>
              <Card.Text>
                <img src={location} alt={location} width={15} />
                Newston
                <img className="linkicon" src={link} alt={link} width={15} />
                <a className="link" href="#">
                  www.target.com
                </a>
              </Card.Text>
              <Card.Link href="#">29 repositories</Card.Link>
              <Card.Link href="#">12 members</Card.Link>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Target</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Target's Official GitHub Organisation
              </Card.Subtitle>
              <Card.Text>
                <img src={location} alt={location} width={15} />
                Newston
                <img className="linkicon" src={link} alt={link} width={15} />
                <a className="link" href="#">
                  www.target.com
                </a>
              </Card.Text>
              <Card.Link href="#">29 repositories</Card.Link>
              <Card.Link href="#">12 members</Card.Link>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Target</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Target's Official GitHub Organisation
              </Card.Subtitle>
              <Card.Text>
                <img src={location} alt={location} width={15} />
                Newston
                <img className="linkicon" src={link} alt={link} width={15} />
                <a className="link" href="#">
                  www.target.com
                </a>
              </Card.Text>
              <Card.Link href="#">29 repositories</Card.Link>
              <Card.Link href="#">12 members</Card.Link>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Target</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Target's Official GitHub Organisation
              </Card.Subtitle>
              <Card.Text>
                <img src={location} alt={location} width={15} />
                Newston
                <img className="linkicon" src={link} alt={link} width={15} />
                <a className="link" href="#">
                  www.target.com
                </a>
              </Card.Text>
              <Card.Link href="#">29 repositories</Card.Link>
              <Card.Link href="#">12 members</Card.Link>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Target</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Target's Official GitHub Organisation
              </Card.Subtitle>
              <Card.Text>
                <img src={location} alt={location} width={15} />
                Newston
                <img className="linkicon" src={link} alt={link} width={15} />
                <a className="link" href="#">
                  www.target.com
                </a>
              </Card.Text>
              <Card.Link href="#">29 repositories</Card.Link>
              <Card.Link href="#">12 members</Card.Link>
            </Card.Body>
          </Card>

          <Link to={"/dashboard1"}>
            <Button variant="outline-secondary" className="nextbtn1">
              Next
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}


export default Dashboard

