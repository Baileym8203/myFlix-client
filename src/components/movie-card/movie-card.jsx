import react from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export class MovieCard extends react.Component {
render() {
 const {movieData} = this.props;
 
 return (

<Card>
<Link to={`/movies/${movieData._id}`}>
<Button variant="link">
<Card.Img variant="top" src={movieData.ImagePath}/>
</Button>
</Link>
</Card>
 )
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
};

/*
<Card.Body>
<Card.Title>{movieData.Title}</Card.Title>
<Card.Text>{movieData.Description}</Card.Text>
<Link to={`/movies/${movieData._id}`}>
<Button variant="link">Open</Button>
</Link>
</Card.Body>
*/

// testing cards with only image links to info