import GitHubLogin from "react-github-login";
import API from "../api/github";
import Cookies from 'universal-cookie';
import {useNavigate } from "react-router-dom";
const Cover = () => {

  const  nav = useNavigate();
  const cookies = new Cookies();
  function login(token) {
    cookies.set('token',token);
    nav('/dashboard',{replace:true});
  }

  return (
    <div>
      <div className="covertext">
        <h1 className="head">
          GITHUB <span>INFORMATION</span> <br /> DASHBOARD
        </h1>
        <p className="headp">Get Started.....</p>
        <GitHubLogin
          className={"loginbutton"}
          buttonText={"Login"}
          clientId={"6ff44d9eaede1e4fe33d"}
          scope={'user'}
          redirectUri={"http://localhost:3000/dashboard"}
          onSuccess={(response) => {
            API.auth(response.code).then(value=>{
              login(value.access_token);
            });
            }
            }
          onFailure={(response) => console.log(response)}
        />
      </div>
    </div>
  );
}

export default Cover
