import GitHubLogin from "react-github-login";
import API from "../api/github";
import Cookies from 'universal-cookie';
import {useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Cover = () => {

  const  nav = useNavigate();
  const cookies = new Cookies();
  function login(token) {
    API.getInfo(token).then(value => {
      cookies.set('token',token);
      cookies.set('userName', value.login);
      cookies.set('name', value.name);
      nav('/dashboard',{replace:true});
    })
  }

  useEffect(() => {
    if (cookies.get("token") !== null && cookies.get("token").length>4) {
       window.open('/dashboard',{replace:true});
     }
  }, []);

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
          scope={'user repo_deployment'}
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
