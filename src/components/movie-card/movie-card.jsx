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
   <Col style={{ display: "flex", justifyContent: "center" }}>
     <Card
       fluid
       style={{ background: "none", border: "none", marginTop: "30px" }}
       className="movie-image"
     >
       <Link fluid to={`/movies/${movieData._id}`}>
         <Button fluid variant="link">
           <Card.Img
             fluid
             style={{ boxShadow: "black 0px 5px 12px 6px", borderRadius: "5%" }}
             variant="top"
             src={movieData.ImagePath}
             className="card-look"
           />
         </Button>
       </Link>
       <p className='text-center' style={{ color: "white" }}>{movieData.Title}</p>
     </Card>
   </Col>
 );
 };
}