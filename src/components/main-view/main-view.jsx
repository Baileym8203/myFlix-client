import react from 'react';
// this will import react
import axios from 'axios';
//this will import axios into main-view.jsx!

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { MovieCard } from '../movie-card/movie-card';
// this will import movie card from movie-card.jsx!
import { MovieView } from '../movie-view/movie-view';
// this will import movie view from movie-view.jsx!
import {LoginView} from '../login-view/login-view';
// this will import login view from login-view.jsx!
import { RegistrationView } from '../registration-view/registration-view';
// this will import genre view from genre-view.jsx!
import { MenuBar } from '../navbar/navbar';
import { GenreView } from '../genre-view/genre-view';
import { DirectorView } from '../director-view/director-view';
import { ProfileView } from '../profile-view/profile-view'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

// both import react components from react bootstrap!
export class MainView extends react.Component {

constructor() {
super();

this.state = {
movies: [],
 selectedMovie: null,
 user: null
 };
}

componentDidMount(){
let accessToken = localStorage.getItem('token');
if(accessToken !== null) {
this.setState({
user: localStorage.getItem('user')
});
this.getMovies(accessToken)
 }
}

getMovies(token) {
axios.get('https://bestmoviecentral.herokuapp.com/movies', {
headers: {Authorization: `Bearer ${token}`}
})
.then(response => {
// assign the result to the state
this.setState({
movies: response.data
 });
})
.catch(function (error){
console.log(error);
 });
}

    onLoggedIn(authData) {
    console.log(authData);
    this.setState({
    user: authData.user.Username
    });
    
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  onLoggedOut() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  this.setState({
  user: null
   });
  }

    /* When a user successfully logs in, this function updates the 
    `user` property in state to that *particular user*/

    render() {
      
      const { movies, user } = this.state;
  

       
    
       /* If there is no user, the LoginView is rendered. If there is a user 
        logged in, the user details are *passed as a prop to the LoginView*/

        
        return (
       
          <Router>
         
          <MenuBar/>
          <Row className=" main-view justify-content-md-center">
          <Route exact path="/" render={() => {
          if (!user) return <Col>
          <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
          </Col>
          return movies.map(m => (
          <Col md={3} key={m._id}>
          <MovieCard movieData={m}  />
          </Col>
           ))
          }} />
          <Route path="/register" render={() => {
          if (user) return <Redirect to="/" /> 
          return <Col>
          <RegistrationView />
          </Col>
          }} />

          <Route path="/profile" render={() => {
           if (!user) return <Col>
           <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
           </Col>
           return <Col md={8}>
           <ProfileView/>
           </Col>
          }} />
    
          <Route path="/movies/:movieId" render={({ match, history }) => { 
          if (!user) return <Col>
          <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
          </Col>
          return <Col md={8}>
          <MovieView movie={movies.find(m => m._id === match.params.movieId)} 
          onBackClick={() => history.goBack()} />
          </Col>
          }} />

          <Route path="/directors/:name" render={({ match, history }) => {
           if (!user) return <Col>
          <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
          </Col>
          return <Col md={8}>
          <DirectorView directorName={match.params.name} onBackClick={() => history.goBack()} />
          </Col>
          }} />

          <Route path="/genres/:name" render={({ match, history }) => {
          if (!user) return <Col>
          <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
          </Col>
          return <Col md={8}>
          <GenreView genreName={match.params.name} onBackClick={() => history.goBack()}/>
          </Col>
          }} />
           </Row>
          </Router>
         
         )
        }
      }
                
               

