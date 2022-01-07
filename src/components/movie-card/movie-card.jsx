import react from 'react';

export class MovieCard extends react.Component {
render() {
 const { movieData, onMovieClick } = this.props;
 return <div className="movie-card" onClick={() => { onMovieClick(movieData); }}>
    {movieData.Title}</div>;
 }
}
