import { Link } from 'react-router-dom'

const Cover = () => {
  return (
    <div>
      <div className="covertext">
        <h1 className="head">
          GITHUB <span>INFORMATION</span> <br /> DASHBOARD
        </h1>
        <p className="headp">Get Started.....</p>
        <Link to={"/dashboard"}>
          <button className="loginbutton"> Login Here</button>
        </Link>
      </div>
    </div>
  );
}

export default Cover
