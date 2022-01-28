import react, {useEffect, useState} from 'react';
import { Button, Form, Container, Row, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../profile-view/profile-view.scss'
import axios from 'axios';
import UserInfo from '../user-info/user-info';
import FavoriteMovies from '../favorite-movies/favorite-movies';
import UpdateUser from '../update-user/update-user';

export function ProfileView({movies, onUpdatedUserInfo}) {

const [user, setUser] = useState({

})

const favoriteMovieList = movies.filter((movies) => {

})

const getUser = () => {

}

const handleSubmit = (e) => {

}
const handleUpdate = (e) => {

};

useEffect(() => {

}, [])

return (
<Container>
<Row>
<Col xs={12} sm={4}>
    <Card>
    <Card.Body>
    <UserInfo name={user.Username} email={user.Email}/>
    </Card.Body>
    </Card>

</Col>

<Col xs={12} sm={8}>
<Card>
<Card.Body>
<FavoriteMovies favoriteMovieList = {favoriteMoviesList} />
</Card.Body>
</Card>

</Col>
</Row>


<UpdateUser handleSubmit={ handleSubmit} handleUpdate={handleUpdate} />

</Container>
 );
}
