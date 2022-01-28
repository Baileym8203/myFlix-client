import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
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
      
      <div className="movie-view">
        <div className="movie-poster">
          <img src={movie.ImagePath} />
        </div>
        <div className="movie-title">
          <span className="label">Title: </span>
          <span className="value">{movie.Title}</span>
        </div>
        <div className="movie-description">
          <span className="label">Description: </span>
          <span className="value">{movie.Description}</span>
        </div>
        <Link to={`/genres/${movie.Genre.Name}`}>
        <Button variant="link">Genre</Button>
        </Link>
        <Link to={`/directors/${movie.Director.Name}`}>
        <Button variant="link">Director</Button>
        </Link>
        <button onClick={() => { onBackClick(); }}>Back</button>
       </div>
    );
  }
}