import usericon from "../images/usericon.png";
import dashicon from "../images/dashicon.png";
import user from "../images/user.png";
import icons8 from "../images/icons8.png";
import link from "../images/link.png";
import twitter from "../images/twitter.png";
import location from "../images/location.png";
import projecticon from "../images/projecticon.png";
import repositoryicon from "../images/repositoryicon.png";
// import Contributions from "./Contributions";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Profile = () => {
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
        <h4> Overview</h4>
        <div className="profilepic">
          <img src={user} alt={user} width={400} />
        </div>
        <div className="profilecon">
          <p className="fullname">Nicholas Ocran</p>
          <p className="username">nicocran1911</p>
          <Button variant="outline-secondary" className="nextbtn22">
            Follow
          </Button>
          <p className="tex">Hardwork and diligency. I love watching videos, reading and playing musical instrument </p>
          <p className="tex3">
            <img src={icons8} alt={icons8} width={20} />
            Amalitech.
          </p>
          <p className="tex1">
            <img src={link} alt={link} width={15} />
            www.nicholasocran.com
          </p>
          <p className="tex2">
            <img src={location} alt={location} width={20} />
            Takoradi
          </p>
          <p className="tex2">
            <img src={twitter} alt={twitter} width={20} />
            Twitter
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
