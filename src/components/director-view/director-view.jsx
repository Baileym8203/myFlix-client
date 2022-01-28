import react from 'react';

import { Button, Card, Row, Col, Container} from 'react-bootstrap';
import propTypes from 'prop-types';
import axios from 'axios';

export class DirectorView extends react.Component {
constructor(props) {
super(props);
this.state = {
director: null
 };
}

componentDidMount() {
let accessToken = localStorage.getItem('token');
if(accessToken !== null) {
this.getDirector(accessToken)
 }
}

getDirector(token) {
axios.get('https://bestmoviecentral.herokuapp.com/director/'+this.props.directorName, {
headers: {Authorization: `bearer ${token}`}
})
.then(response => {
this.setState({
director: response.data
 });
})
.catch(function(error){
console.log(error);
 });
}

render() {
const {onBackClick} = this.props;
const {director} = this.state;

if(!director) return <p>Not director data</p>
return (
<Container>
<Row>
<Col key={director._id}>
<Card className='directors-view p-md-5 shadow-sm'>
<Row className='director-card'>
<Col xs={12} >
<Card.Title className='director-header' style={{style: 'center'}}>{director.Name}</Card.Title>
</Col>
<Card.Body className='card=body p-md-3' style={{alignItems: 'center'}}>
<Row className='director-Bio'>
<span className='value mb-3'>{director.Bio}</span>
</Row>
<Row className='director-birth'>
<span className='value mb-3'>{director.Birth}</span>
</Row>
<Row className='director-death'>
<span className='value mb-3'>{director.Death}</span>
</Row>
<Row>
<Button className='m-1 align-content-center' variant='secondary' onClick={() => {onBackClick(null);}}>Back</Button>
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

DirectorView.propTypes = {
 directorName: propTypes.string.isRequired
}