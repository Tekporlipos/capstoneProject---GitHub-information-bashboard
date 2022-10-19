import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Cookies from "universal-cookie";
import API from "../api/github";
import location from "../images/location.png";
import link from "../images/link.png";
const Orgcomponent = (props) => {
    const cookies = new Cookies();
    const token = cookies.get('token')
    const [org, setOrg] = useState({});
    useEffect(() => {
        API.getData(token,props.value).then((value) => {
            setOrg(value);
        })
    },[props]);



  function domain(path) {
      
    if (path) {
      const url = new URL(path.replace('www.', 'https://'));
      return url.host;
        }
       
    }

    return (<div>
            <Card style={{ width: "18rem" }}>
        <Card.Body>
                <Card.Title> {org.login} </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {org.description}
              </Card.Subtitle>
              <Card.Text>
                <img src={location} alt={'location'} width={15} />
                {org.location}
                <img className="linkicon" src={link} alt={'link'} width={15} />
                <a className="link"  target={'_blanck'} href={org.blog?org.blog:org.html_url}>
                  {domain(org.blog?org.blog:org.html_url)}
                </a>
              </Card.Text>
                <Card.Link href={"/repositories?org="+org.login} >{org.public_repos} repositories</Card.Link>
              <Card.Link href="#">{org.followers} followers</Card.Link>
            </Card.Body>
          </Card>
        </div>)
}

export default Orgcomponent;