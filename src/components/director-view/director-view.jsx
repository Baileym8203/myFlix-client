import react from "react";

import { Button, Card, Row, Col, Container } from "react-bootstrap";
import propTypes from "prop-types";
import axios from "axios";

export class DirectorView extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      director: null,
    };
  }

  componentDidMount() {
    let accessToken = localStorage.getItem("token");
    if (accessToken !== null) {
      this.getDirector(accessToken);
    }
  }

  getDirector(token) {
    axios
      .get(
        "https://bestmoviecentral.herokuapp.com/director/" +
          this.props.directorName,
        {
          headers: { Authorization: `bearer ${token}` },
        }
      )
      .then((response) => {
        this.setState({
          director: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    const { onBackClick } = this.props;
    const { director } = this.state;

    if (!director) return <p>Not director data</p>;
    return (
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <Col key={director._id}>
          <Card className="directors-view p-md-5 shadow-sm">
            <Card.Title
              className="director-header"
              style={{ fontWeight: 700, fontSize: "40px" }}
            >
              {director.Name}
            </Card.Title>
            <Card.Body className="card=body p-md-3">
              <span style={{ fontSize: "25px" }} className="value mb-3">
                {director.Bio}
              </span>
              <br></br>
              <span style={{ fontSize: "25px" }} className="value mb-3">
                {director.Birth}
              </span>
              -
              <span style={{ fontSize: "25px" }} className="value mb-3">
                {director.Death}
              </span>
              <br></br>
              <Button
                className="m-1 align-content-center"
                style={{ marginTop: "50px" }}
                variant="dark"
                onClick={() => {
                  onBackClick(null);
                }}
              >
                Back
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    );
  }
}

DirectorView.propTypes = {
  directorName: propTypes.string.isRequired,
};
