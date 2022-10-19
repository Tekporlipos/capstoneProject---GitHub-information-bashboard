 import dashicon from "../images/dashicon.png";
//  import projecticon from "../images/projecticon.png";
 import repositoryicon from "../images/repositoryicon.png";
 import { Link } from "react-router-dom";
 import {useState,useEffect} from 'react';
 import API from "../api/github";
 import Cookies from "universal-cookie";

 function Menu(){
 const [userName, setUserName] = useState("");
 const [avatar, setAvatar] = useState("");
const cookies = new Cookies();
 const token = cookies.get("token");
    useEffect(() => {
      API.getInfo(token).then((value) => {
        setUserName(value.name);
        setAvatar(value.avatar_url);
      });
    });

   
   useEffect(() => {
    if (token == null || (token && token.length < 4)) {
       window.open('/',{replace:true});
     }
  }, []);
   
   function logout() {
     cookies.set('token',null);
      cookies.set('userName', null);
      cookies.set('name', null);
      window.location.replace('/',{replace:true});
   }
   
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
        {/* <h1>
          {" "}
          <img src={projecticon} alt={projecticon} width={40} /> Projects
        </h1> */}
        <h1>
          {" "}
          <img src={repositoryicon} alt={repositoryicon} width={40} />
          <a href={"/repositories"} className="li">
            Repositories
          </a>
        </h1>
        <div onClick={logout}>
          <button className="signout"> Sign out</button>
        </div>
      </div>
    );
}

export default Menu;