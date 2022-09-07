import usericon from "../images/usericon.png";
import dashicon from "../images/dashicon.png";
import projecticon from "../images/projecticon.png";
import repositoryicon from "../images/repositoryicon.png";
import { Button, Badge, ListGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Repositories = () => {
  return (
    <div className="dashcontainer">
      <div className="dash1">
        <img src={usericon} width={200} alt={usericon} />
        <p>Username</p>
        <button className="editprofile"> Profile</button>
        <h1>
          <img src={dashicon} alt={dashicon} width={40} />
          <Link to={"/dashboard"} className="li">
            Dashboard
          </Link>
        </h1>
        <h1>
          <img src={projecticon} alt={projecticon} width={40} />
          Projects
        </h1>
        <h1>
          <img src={repositoryicon} alt={repositoryicon} width={40} />
          <Link to={"/repositories"} className='li'>Repositories</Link>
        </h1>
        <Link to={"/"}>
          <button className="signout"> Sign out</button>
        </Link>
      </div>

      <div className="dash2">
        <h4>
          {" "}
          Repositories <span>85</span>
        </h4>
        <Button variant="outline-secondary" className="nextbtn">
          Next
        </Button>
        <Link to={"/repositories"}>
          <Button variant="outline-secondary" className="prev">
            Prev
          </Button>
        </Link>
        <Badge className="public" pill bg="info">
          Public
        </Badge>{" "}
        <div className="repolist">
          <ListGroup as="ol" numbered>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Card-reader</div>
                Updated 1 week ago
              </div>
              <Badge bg="secondary" pill>
                9 commits
              </Badge>
            </ListGroup.Item>

            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Piano tile</div>
                Updated 2 weeks ago
              </div>
              <Badge bg="secondary" pill>
                18 commits
              </Badge>
            </ListGroup.Item>

            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Animal-fun-facts</div>
                Updated 3 weeks ago
              </div>
              <Badge bg="secondary" pill>
                36 commits
              </Badge>
            </ListGroup.Item>

            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">React-practice</div>
                Updated 1 months ago
              </div>
              <Badge bg="secondary" pill>
                19 commits
              </Badge>
            </ListGroup.Item>

            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Jamming</div>
                Updated 2 monthss ago
              </div>
              <Badge bg="secondary" pill>
                25 commits
              </Badge>
            </ListGroup.Item>

            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Fried-rice</div>
                Updated 3 months ago
              </div>
              <Badge bg="secondary" pill>
                79 commits
              </Badge>
            </ListGroup.Item>

            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">CopyCat</div>
                Updated 6 monthss ago
              </div>
              <Badge bg="secondary" pill>
                40 commits
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Player</div>
                Updated 1 year ago
              </div>
              <Badge bg="secondary" pill>
                15 commits
              </Badge>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default Repositories;
