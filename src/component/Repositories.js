import usericon from "../images/usericon.png";
import dashicon from "../images/dashicon.png";
import projecticon from "../images/projecticon.png";
import repositoryicon from "../images/repositoryicon.png";
import { Button, Badge, ListGroup } from "react-bootstrap";
import { Link } from 'react-router-dom'

const Repositories = () => {
  return (
    <div className="dashcontainer">
      <div className="dash1">
        <img src={usericon} width={200} alt={usericon} />
        <p>Username</p>
        <Link to={"/profile"}>
          <button className="editprofile"> Profile</button>
        </Link>
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
          <Link to={"/repositories"} className="li">
            Repositories
          </Link>
        </h1>
        <Link to={"/"}>
          <button className="signout"> Sign out</button>
        </Link>
      </div>

      <div className="dash2">
        <h4>
          {" "}
          Repositories <span>93</span>
        </h4>
        <Link to={"/repositories1"}>
          <Button variant="outline-secondary" className="nextbtn">
            Next
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
                <div className="fw-bold">
                  <Link to={"/branches"} className="lin">
                    React-exchange
                  </Link>
                </div>
                Updated 2 hours ago
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
                <div className="fw-bold">PhotoSnap</div>
                Updated 3 hours ago
              </div>
              <Badge bg="secondary" pill>
                49 commits
              </Badge>
            </ListGroup.Item>

            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">
                  <Link to={"/branches"} className="lin">
                    BetaTestaPro
                  </Link>
                </div>
                Updated 5 hours ago
              </div>
              <Badge bg="secondary" pill>
                22 commits
              </Badge>
            </ListGroup.Item>

            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Plate</div>
                Updated 2 hours ago
              </div>
              <Badge bg="secondary" pill>
                12 commits
              </Badge>
            </ListGroup.Item>

            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">React-exchange</div>
                Updated 2 hours ago
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
                <div className="fw-bold">React-exchange</div>
                Updated 2 hours ago
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
                <div className="fw-bold">CopyCat</div>
                Updated 2 days ago
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
                <div className="fw-bold">Video-player</div>
                Updated 3 days ago
              </div>
              <Badge bg="secondary" pill>
                45 commits
              </Badge>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default Repositories;
