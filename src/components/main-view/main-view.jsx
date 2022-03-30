import react from 'react';
// this will import react
import axios from 'axios';
//this will import axios into main-view.jsx!

import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { setMovies } from '../../actions/actions';

import MoviesList from '../movies-list/movies-list';
// not made yet!

// this will import movie card from movie-card.jsx!
import { MovieView } from '../movie-view/movie-view';
// this will import movie view from movie-view.jsx!
import LoginView from '../login-view/login-view';
// this will import login view from login-view.jsx!
import  RegistrationView  from '../registration-view/registration-view';
// this will import genre view from genre-view.jsx!
import { MenuBar } from '../navbar/navbar';
import { GenreView } from '../genre-view/genre-view';
import { DirectorView } from '../director-view/director-view';
import { ProfileView } from '../profile-view/profile-view'
import { Container, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
 
import './main-view.scss'

// both import react components from react bootstrap!
class MainView extends react.Component {

constructor() {
super();

this.state = {
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
this.props.setMovies(response.data);
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
      const { movies } = this.props;
      const { user } = this.state;
  

       
    
       /* If there is no user, the LoginView is rendered. If there is a user 
        logged in, the user details are *passed as a prop to the LoginView*/

        
        return (
          <Router>
            <MenuBar />
              <Row className="" style={{margin: "0px", padding: "0px"}}>
                <Route
                  exact
                  path="/"
                  render={() => {
                    if (!user)
                      return (
                          <LoginView
                            onLoggedIn={(user) => this.onLoggedIn(user)}
                          />
  
                      );
                    return (
                        <MoviesList movies={movies} />
                    );
                  }}
                />

                <Route
                  path="/register"
                  render={() => {
                    if (user) return <Redirect to="/" />;
                    return (
                        <RegistrationView />
                    );
                  }}
                />

                <Route
                  path="/profile"
                  render={() => {
                    if (!user)
                      return (
                          <LoginView
                            onLoggedIn={(user) => this.onLoggedIn(user)}
                          />
                      );
                    return (
                        <Col xl={12}>
                        <ProfileView />
                  </Col>
                    );
                  }}
                />

                <Route
                  path="/movies/:movieId"
                  render={({ match, history }) => {
                    if (!user)
                      return (
                       
                          <LoginView
                            onLoggedIn={(user) => this.onLoggedIn(user)}
                          />
                      
                      );
                    return (
                        <MovieView
                          movie={movies.find(
                            (m) => m._id === match.params.movieId
                          )}
                          onBackClick={() => history.goBack()}
                        />
                    );
                  }}
                />

                <Route
                  path="/directors/:name"
                  render={({ match, history }) => {
                    if (!user)
                      return (
                        
                          <LoginView
                            onLoggedIn={(user) => this.onLoggedIn(user)}
                          />
                          
                       
                      );
                    return (
                      
                        <DirectorView
                          directorName={match.params.name}
                          onBackClick={() => history.goBack()}
                        />
             
                    );
                  }}
                />

                <Route
                  path="/genres/:name"
                  render={({ match, history }) => {
                    if (!user)
                      return (
                    
                          <LoginView
                            onLoggedIn={(user) => this.onLoggedIn(user)}
                          />
                          
                     
                      );
                    return (
              
                        <GenreView
                          genreName={match.params.name}
                          onBackClick={() => history.goBack()}
                        />
                
                    );
                  }}
                />
              </Row>
          </Router>
        );
        }
      }

      let mapStateToProps = state => {
       return {movies: state.movies }
      }

      export default connect(mapStateToProps, { setMovies } )(MainView);
                
               

