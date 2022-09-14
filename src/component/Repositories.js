
import { Button, Badge, ListGroup } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import API from "../api/github";

const Repositories = () => {

  // const [repos, setRepos] = useState("");
  const [repositories, setRepositories] = useState([]);

  const cookies = new Cookies();
  const token = cookies.get("token");
  const userName = cookies.get("userName");
  useEffect(() => {
    API.getRep(token,userName).then((value) => {
      setRepositories(value);
    });
  });

  return (
    <div className="dashcontainer">
      <div className="dash1">
        <Menu />
      </div>

      <div className="dash2">
        <h4>
          {" "}
          Repositories <span>{repositories.length}</span>
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
            {repositories.map((value) => {
              return (
                <ListGroup.Item
                  key={value.id}
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">
                      <Link to={"/branches"} className="lin">
                        {value.name}
                      </Link>
                    </div>
                    Updated {value.updated_at} hours ago
                  </div>
                  <Badge bg="secondary" pill>
                    19 commits
                  </Badge>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default Repositories;
