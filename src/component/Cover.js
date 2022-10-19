import API from "../api/github";
import Cookies from 'universal-cookie';
import {useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Cover = () => {

  const  nav = useNavigate();
  const cookies = new Cookies();

  function login(token) {
    API.getInfo(token).then(value => {
      console.log(value);
      cookies.set('token',token);
      cookies.set('userName', value.login);
      cookies.set('name', value.name);
      nav('/dashboard',{replace:true});
    })
  }

  const code  = new URL(window.location.href).searchParams.get("code");

  if(code){
    API.auth(code).then((value) => {
      if(!value.error){
        login(value.access_token)
      }
    });
  }

  useEffect(() => {
    if (cookies.get("token") != null && cookies.get("token").length>10) {
       window.open('/dashboard',{replace:true});
     }
  }, []);

  return (
    <div className="container-cover">
      <div className="covertext">
        <h1 className="head">
          GITHUB <span>INFORMATION</span> <br /> DASHBOARD
        </h1>
        <p className="headp">Get Started.....</p>
        <button className={"loginbutton"}>
        <a  href="https://github.com/login/oauth/authorize?client_id=6ff44d9eaede1e4fe33d&scope=user%20repo_deployment&allow_signup=false&redirect_uri=http://localhost:3000/login">login</a>
        </button>
           </div>
    </div>
  );
}

export default Cover
