
import location1 from "../images/location.png";
import link from "../images/link.png";
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import { useEffect, useState } from 'react';
import Cookies from "universal-cookie";
import API from "../api/github";

const Dashboard = () => {

  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const [repos, setRepos] = useState("");

  const cookies = new Cookies();
  useEffect(() => {
    const token = cookies.get("token");
    API.getInfo(token).then((value) => {
      // setName(value.name);
      // setUserName(value.login);
      setRepos(value.public_repos);
      setWebsite(value.blog);
      setLocation(value.location);
      // setTwitter(value.twitter_username);
      // setBio(value.bio);
      // setCompany(value.company);
      // setAvatar(value.avatar_url);
      // setFollowers(value.followers);
      // setFollowing(value.following);
    });
  });
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
                <img src={location1} alt={location} width={15} />
                {location}
                <img className="linkicon" src={link} alt={link} width={15} />
                <a className="link" href="website">
                  {website}
                </a>
              </Card.Text>
              <Card.Link>
                <Link to={"/repositories"}>{repos} repositories</Link>
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
                <img src={location1} alt={location} width={15} />
                {location}
                <img className="linkicon" src={link} alt={link} width={15} />
                <a className="link" href="website">
                  {website}
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
                <img src={location1} alt={location} width={15} />
                {location}
                <img className="linkicon" src={link} alt={link} width={15} />
                <a className="link" href="website">
                  {website}
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
                <img src={location1} alt={location} width={15} />
                {location}
                <img className="linkicon" src={link} alt={link} width={15} />
                <a className="link" href="website">
                  {website}
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
                <img src={location1} alt={location} width={15} />
                {location}
                <img className="linkicon" src={link} alt={link} width={15} />
                <a className="link" href="website">
                  {website}
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
                <img src={location1} alt={location} width={15} />
                {location}
                <img className="linkicon" src={link} alt={link} width={15} />
                <a className="link" href="website">
                  {website}
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
                <img src={location1} alt={location} width={15} />
                {location}
                <img className="linkicon" src={link} alt={link} width={15} />
                <a className="link" href="website">
                  {website}
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
                <img src={location1} alt={location} width={15} />
                {location}
                <img className="linkicon" src={link} alt={link} width={15} />
                <a className="link" href="website">
                  {website}
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
                <img src={location1} alt={location} width={15} />
                {location}
                <img className="linkicon" src={link} alt={link} width={15} />
                <a className="link" href="website">
                  {website}
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

