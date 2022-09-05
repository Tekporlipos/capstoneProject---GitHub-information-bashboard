import usericon from "../images/usericon.png";
import dashicon from "../images/dashicon.png";
import projecticon from "../images/projecticon.png";
import repositoryicon from "../images/repositoryicon.png";
import { Button, Badge, ListGroup } from "react-bootstrap";

const Repositories = () => {
  return (
    <div className="dashcontainer">
      <div className="dash1">
        <img src={usericon} width={200} alt={usericon} />
        <p>Username</p>
        <button className="editprofile"> Profile</button>
        <h1>
          <img src={dashicon} alt={dashicon} width={40} />
          Dashboard
        </h1>
        <h1>
          <img src={projecticon} alt={projecticon} width={40} />
          Projects
        </h1>
        <h1>
          <img src={repositoryicon} alt={repositoryicon} width={40} />
          Repositories
        </h1>
        <button className="signout"> Sign out</button>
      </div>

      <div className="dash2">
        <h4>
          {" "}
          Repositories <span>93</span>
        </h4>
        <Button variant="outline-secondary" className="nextbtn">
          Next
        </Button>
        <Button variant="outline-secondary" className="prev">
          Prev
        </Button>
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
