 import dashicon from "../images/dashicon.png";
 import projecticon from "../images/projecticon.png";
 import repositoryicon from "../images/repositoryicon.png";
 import { Link } from "react-router-dom";
 import {useState,useEffect} from 'react';
 import API from "../api/github";

 function Menu(){
 const [userName, setUserName] = useState("");
 const [avatar, setAvatar] = useState("");

    useEffect(() => {
      API.getInfo("eternitycodes").then((value) => {
        setUserName(value.login);
        setAvatar(value.avatar_url);
      });
    });

    return (
      <div className="dash1">
        <img src={avatar} width={190}  style={{borderRadius:'100%'}} alt={userName} />
        <p>{userName}</p>
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
    );
}

export default Menu;