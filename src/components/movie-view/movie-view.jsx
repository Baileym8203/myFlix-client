import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './movie-view.scss'

export class MovieView extends React.Component {


  /*keypressCallback(event) {
    console.log(event.key);
    }
  
    componentDidMount() {
    document.addEventListener('keypress', event => {
      console.log(event.key);
    });
  }

  componentWillUnmount() {
  document.removeEventListener('keypress', this.keypressCallback);
  }*/ // look at later!!
  // this isn't important to the project!


  render() {
    
     const addFav = (_id) => {
       let token = localStorage.getItem("token");
       let url = `https://bestmoviecentral.herokuapp.com/users/${localStorage.Item(
         "user"
       )}/movies/${_id}`;
       axios.post(url, {
         headers: { Authorization: `bearer ${token}` },
       });
     };
    
    const { movie, onBackClick, director} = this.props;
   
    if(!movie) return <p>Loading</p>
    return (
      <Container
        className="text-center"
        style={{
          justifyContent: "center",
          marginTop: "200px",
          background: "white",
          borderRadius: "2%",
        }}
      >
        <Row>
          <Col md={12} style={{ marginTop: "50px" }}>
            <span
              style={{ fontSize: "40px", fontWeight: 700 }}
              className="label"
            >
              Title -{" "}
            </span>
            <span style={{ fontSize: "40px" }} className="value">
              {movie.Title}
            </span>
          </Col>
        </Row>
        <Row>
          <Col md={12} style={{ marginBottom: "50px" }}>
            <span
              style={{ fontSize: "25px", fontWeight: 700 }}
              className="label"
            >
              Description -{" "}
            </span>
            <span style={{ fontSize: "25px" }} className="value">
              {movie.Description}
            </span>
          </Col>
        </Row>
        <Row>
          <Col md={12} style={{ marginBottom: "50px" }}>
            <Link to={`/genres/${movie.Genre.Name}`} className="button-one">
              <Button className="mr-2" variant="dark">
                Genre
              </Button>
            </Link>
            <Link
              to={`/directors/${movie.Director.Name}`}
              className="button-two"
            >
              <Button className="mr-2" variant="dark">
                Director
              </Button>
            </Link>
            <Button
              variant="dark"
              onClick={() => {
                onBackClick();
              }}
              className=" mr-2 button-three"
            >
              Back
            </Button>
            <Button
              
              variant="dark"
              onClick={() => {
                addFav();
              }}
            >
              Add to Favorite
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}