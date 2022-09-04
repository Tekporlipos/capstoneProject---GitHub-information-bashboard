import usericon from '../images/usericon.png'
import dashicon from "../images/dashicon.png";
import projecticon from "../images/projecticon.png";
import repositoryicon from "../images/repositoryicon.png";
import { Card, } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <div className="dashcontainer">
      <div className="dash1">
        <img src={usericon} width={200} alt={usericon} />
        <p>Username</p>
        <button className="editprofile"> Profile</button>
        <h1>
          {" "}
          <img src={dashicon} alt={dashicon} width={40} />
          Dashboard
        </h1>
        <h1>
          {" "}
          <img src={projecticon} alt={projecticon} width={40} /> Projects
        </h1>
        <h1>
          {" "}
          <img src={repositoryicon} alt={repositoryicon} width={40} />
          Repositories
        </h1>
        <button className="signout"> Sign out</button>
      </div>

      <div className="dash2">
        <h4> Recent Organisations</h4>
        <div className="cardoga">
          <Card style={{ width: "18rem" }} >
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}


export default Dashboard

