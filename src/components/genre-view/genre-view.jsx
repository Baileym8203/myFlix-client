import react from 'react';

import {Button, Card, Row, Col, Container} from 'react-bootstrap';
import propTypes from 'prop-types';
import axios from 'axios';


export class GenreView extends react.Component {
 constructor(props) {
  super(props);
  this.state = {
  genre: null
  };
 }

componentDidMount() {
let accessToken = localStorage.getItem('token');
if(accessToken !== null) {
this.getGenre(accessToken)
 }
}

getGenre(token) {
axios.get('https://bestmoviecentral.herokuapp.com/genre/'+this.props.genreName, {
headers: {Authorization: `Bearer ${token}`}
})
.then(response => {
this.setState({
 genre: response.data
 });
})
.catch(function (error){
 console.log(error);
 });
}

render() {
const {onBackClick} = this.props;
const {genre} = this.state;

if(!genre) return <p>Not genre data</p>
return (
<Container>
<Row>
<Col key={genre._id}>
<Card className="genres-view p-md-5 shadow-sm">
<Row className="genre-card">
<Card.Title className="genre-header">{genre.Name}</Card.Title>
<Card.Body className="card-body p-md-3" style={{alignItems: 'center'}}>
<Row className="genre-description">
<span className="value mb-3">{genre.Description}</span>
</Row>
<Row>
<Button className="m-1 align-content-center" variant="secondary"
onClick={() => {onBackClick(null);}}>Back</Button>
                   </Row>
             </Card.Body>
            </Row>
         </Card>
       </Col>
     </Row>
   </Container>
  );
 }

}

GenreView.propTypes = {
 genreName: propTypes.string.isRequired
}