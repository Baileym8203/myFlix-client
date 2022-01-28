import react, {useEffect, useState} from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap'
import '../profile-view/profile-view.scss'
import axios from 'axios';
import UserInfo from '../user-info/user-info';
import FavoriteMovies from '../favorite-movies/favorite-movies';
import UpdateUser from '../update-user/update-user';

export function ProfileView({onUpdatedUserInfo}) {

const [user, setUser] = useState();



const getUser = (user, token) => {
axios.get("https://bestmoviecentral.herokuapp.com/users/" + user, {
 headers: {Authorization: `bearer ${token}`},
})
.then((response) => {
setUser(response.data)
})
.catch(function (error) {
console.log(error)
 });
};

const handleUpdate = (newUserData) => {
setUser(newUserData)
};

useEffect(() => {
 let accessToken = localStorage.getItem('token');
 let userName = localStorage.getItem('user');
 if (accessToken !== null && userName !== null) {
 getUser(userName, accessToken);
 }
}, [])

if (!user) return <p>Not user data</p>;

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
<FavoriteMovies favoriteMoviesList = {favoriteMoviesList}/>
</Card.Body>
</Card>

</Col>
</Row>


<UpdateUser user={user}  handleUpdate={handleUpdate} />

</Container>
 );
}
