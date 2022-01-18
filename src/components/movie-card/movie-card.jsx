import react from 'react';
import PropTypes from 'prop-types';

export class MovieCard extends react.Component {
render() {
 const { movieData, onMovieClick } = this.props;
 
 return <div className="movie-card" onClick={() => { onMovieClick(movieData); }}>
    {movieData.Title}</div>;
 };
}
// movie card proptypes must be in correct sequence order based on database information!
MovieCard.propTypes = {
movieData: PropTypes.shape({
 Title: PropTypes.string.isRequired,
 Description: PropTypes.string.isRequired,
 Genre: PropTypes.shape({
 Name: PropTypes.string.isRequired,
 Description: PropTypes.string.isRequired,
 Director: PropTypes.shape({
 Name: PropTypes.string.isRequired,
 Bio: PropTypes.string.isRequired,
 Birth: PropTypes.string.isRequired,
 Death: PropTypes.string.isRequired,
 ImagePath: PropTypes.string.isRequired
})
 })
}).isRequired,
onMovieClick: PropTypes.func.isRequired
};
