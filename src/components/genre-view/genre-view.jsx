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
  <Container fluid style={{ margin: "100px" }}>
    <Col style={{ display: "flex", justifyContent: "center" }} key={genre._id}>
      <Card className="p-md-5">
        <Card.Title
          style={{ fontWeight: 700, fontSize: "40px" }}
          className="genre-header"
        >
          {genre.Name}
        </Card.Title>
        <Card.Body className="card-body">
          <span style={{fontSize: "25px"}} className="value mb-3">{genre.Description}</span>

          <Button
            className="ml-4"
            variant="dark"
            onClick={() => {
              onBackClick(null);
            }}
          >
            Back
          </Button>
        </Card.Body>
      </Card>
    </Col>
  </Container>
);
 }

}

GenreView.propTypes = {
 genreName: propTypes.string.isRequired
}