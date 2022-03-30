import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';

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
    const { movie, onBackClick} = this.props;
   if(!movie) return <p>Loading</p>
    return (
        <Col md={12} className="text-center" style={{display: "flex", justifyContent: "center", color: "white", paddingTop: "10%", paddingBottom: "0%", margin: "0%"}}>
      <div className=" img-fluid movie-view" >
        <div className="movie-poster">
          <img src={movie.ImagePath} className="img-fluid " />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>
        <Link to={`/genres/${movie.Genre.Name}`} className="button-one">
        <Button variant="dark">Genre</Button>
        </Link>
        <Link to={`/directors/${movie.Director.Name}`} className="button-two">
        <Button variant="dark">Director</Button>
        </Link>
        <Button variant="dark" onClick={() => { onBackClick(); }} className="button-three">Back</Button>
       
       </div>
       </Col>
    );
  }
}