
import icons8 from "../images/icons8.png";
import link from "../images/link.png";
import twitter1 from "../images/twitter.png";
import location1 from "../images/location.png";
import followers1 from "../images/followers.png";
import following1 from "../images/following.png";
// import projecticon from "../images/projecticon.png";
// import repositoryicon from "../images/repositoryicon.png";
// import Contributions from "./Contributions";
import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import API from '../api/github'
import Menu from "./Menu";
import Cookies from "universal-cookie";
import Contribution from './contribution';
import { Link } from 'react-router-dom';

const Profile = () => {

  const [name,setName] = useState('');
  const [userName, setUserName] = useState("");
  const [repos,setRepos] = useState('');
  const [website,setWebsite] = useState('');
  const [location,setLocation] = useState('');
  const [twitter,setTwitter] = useState('');
  const [bio,setBio] = useState('');
  const [company,setCompany] = useState('');
  const [avatar,setAvatar] = useState('');
  const [followers, setFollowers] = useState("");
  const [following, setFollowing] = useState("");
const cookies = new Cookies();
  useEffect(()=>{
    const token = cookies.get('token');
      API.getInfo(token).then((value) => {
      setName(value.name);
      setUserName(value.login);
      setRepos(value.public_repos);
      setWebsite(value.blog);
      setLocation(value.location);
      setTwitter(value.twitter_username);
      setBio(value.bio);
      setCompany(value.company);
      setAvatar(value.avatar_url);
      setFollowers(value.followers);
      setFollowing(value.following);
    });
  },[]);

  return (
    <div className="dashcontainer">
      <div className="dash1">
        <Menu />
      </div>

      <div className="dash2">
        <h4> Overview</h4>
        <div className="profilepic">
          <img src={avatar} alt={name} width={400} />
        </div>
        <div className="profilecon">
          <p className="fullname">{name}</p>
          <p className="username">{userName}</p>
          <Link to="/repositories">
            <Button variant="outline-secondary" className="nextbtn22">
              Repos {repos}
            </Button>
          </Link>
          <p className="tex">{bio}</p>
          <p className="tex3">
            <img src={icons8} alt={icons8} width={20} />
            {company}.
          </p>
          <p className="tex1">
            <img src={link} alt={link} width={15} />
            {website}
          </p>
          <p className="tex2">
            <img src={location1} alt={"location"} width={20} />
            {location}
          </p>
          <p className="tex2">
            <img src={twitter1} alt={"twitter"} width={20} />
            {twitter}
          </p>
          <p className="tex2">
            <img src={followers1} alt={"fllowers"} width={20} />
            followers {followers}
          </p>
          <p className="tex2">
            <img src={following1} alt={"twitter"} width={20} />
            following {following}
          </p>
        </div>

        <div className="contribution">
          Contributions
          <Contribution />
        </div>
      </div>
    </div>
  );
};

export default Profile;
