import usericon from "../images/usericon.png";
import dashicon from "../images/dashicon.png";
import location from "../images/location.png";
import link from "../images/link.png";
import projecticon from "../images/projecticon.png";
import repositoryicon from "../images/repositoryicon.png";
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Dashboard1 = () => {
  return (
    <div className="dashcontainer">
      <div className="dash1">
        <img src={usericon} width={200} alt={usericon} />
        <p>Username</p>
        <Link to={"/profile"}>
          <button className="editprofile"> Profile</button>
        </Link>
        <h1>
          {" "}
          <img src={dashicon} alt={dashicon} width={40} />
          <Link to={"/dashboard"} className="li">
            Dashboard
          </Link>
        </h1>
        <h1>
          {" "}
          <img src={projecticon} alt={projecticon} width={40} /> Projects
        </h1>
        <h1>
          {" "}
          <img src={repositoryicon} alt={repositoryicon} width={40} />
          <Link to={"/repositories"} className="li">
            Repositories
          </Link>
        </h1>

        <Link to={"/"}>
          <button className="signout"> Sign out</button>
        </Link>
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

          {/* <Card style={{ width: "18rem" }}>
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
          </Card> */}

          <Button variant="outline-secondary" className="nextbtn1">
            Next
          </Button>
          <Link to={"/dashboard"}>
            <Button variant="outline-secondary" className="nextbtn2">
              Prev
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard1;
