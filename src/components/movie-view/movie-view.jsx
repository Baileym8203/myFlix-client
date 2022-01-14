import React from 'react';

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
    const { movie, onBackClick } = this.props;
  
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
        <div className ="movie-genre-name">
        <span className="label">Name: </span>
        <span className="value">{movie.Genre.Name}</span>
        </div>
        <div className="movie-genre-description">
        <span className="label">Description: </span>
        <span className="value">{movie.Genre.Description}</span>
        </div>
        <div className="movie-director-name">
        <span className="label">Name: </span>
        <span className="value">{movie.Director.Name}</span>
        </div>
        <div className="movie-director-bio">
        <span className="label">Bio: </span>
        <span className="value">{movie.Director.Bio}</span>
        </div>
        <div className="movie-director-birth">
        <span className="label">Birth: </span>
        <span className="value">{movie.Director.Birth}</span>
        </div>
        <div className="movie-director-death">
        <span className="label">Death: </span>
        <span className="value">{movie.Director.Death}</span>
        </div>
        <button onClick={() => { onBackClick(null); }}>Back</button>
       </div>
    );
  }
}