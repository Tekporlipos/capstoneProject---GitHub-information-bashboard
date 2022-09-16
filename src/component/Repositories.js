
import { Button, Badge, ListGroup } from "react-bootstrap";
import { Link, useSearchParams } from 'react-router-dom';
import Menu from './Menu';
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import API from "../api/github";
import Rep from "./Rep";
let check = true;
const Repositories = () => {

  // const [repos, setRepos] = useState("");
  const [repositories, setRepositories] = useState([]);
  const [page, setPage] = useState(1);
  const [path, setPath] = useState('');

  const cookies = new Cookies();
  const token = cookies.get("token");
  const userName = cookies.get("userName");
  const search = new URL(window.location.href);

  useEffect(() => {
    setPath(search.search.split('=')[1]);
    if (path) {
       API.getRep(token, search.search.split('=')[1], page).then((value) => {
      if (value.length > 0) {
        setRepositories(value);
        check = true;
      }
    });
    } else {
      API.getRep(token, userName, page).then((value) => {
      if (value.length > 0) {
        setRepositories(value);
        check = true;
      }
    });
    }
    
    
  },[path,page]);

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



  function timeSince(DateString) {

    const date = Date.now() - (Date.now() - (new Date(DateString)))
  
    var seconds = Math.abs(Math.floor((new Date() - date) / 1000));
    
    var interval = seconds / 31536000;
    
    if (interval > 1) {
      return Math.floor(interval) + " year(s) ago";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " month(s) ago";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " day(s) ago";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hour(s) ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minute(s) ago";
    }
    return Math.floor(seconds) + " second(s) ago";

    }

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
         <Button onClick={increase} variant="outline-secondary" className="nextbtn">
          Next
        </Button>
       
          <Button onClick={decrease}  variant="outline-secondary" className="prev">
            Prev
        </Button>
        
        <Badge className="public" pill bg="info">
          Public
        </Badge>{" "}
        <div className="repolist">
          <ListGroup as="ol" numbered>
            {repositories.map((value) => <Rep path={path} key={value.id} name={userName} token={token} value={value} timeSince={timeSince} />)}
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default Repositories;
