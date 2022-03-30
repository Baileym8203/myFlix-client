import react from 'react';
import PropTypes from 'prop-types';
import { Card, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './movie-card.scss'

export class MovieCard extends react.Component {

    render() {
 const {movieData} = this.props;
 
 return (
<Col style={{display: "flex", justifyContent: "center"}}>
<Card style={{background: "none", border: "none"}} className='movie-image'>
<Link to={`/movies/${movieData._id}`}>
<Button variant="link">
<Card.Img style={{boxShadow: "black 0px 5px 12px 6px"}} variant="top" src={movieData.ImagePath} className="img-fluid card-look"/>
</Button>
</Link>
</Card>
</Col>
 )
 };
}