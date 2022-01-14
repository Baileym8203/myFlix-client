import react from 'react';
// this will import react
import axios from 'axios';
//this will import axios into main-view.jsx!
import { MovieCard } from '../movie-card/movie-card';
// this will import movie card from movie-card.jsx!
import { MovieView } from '../movie-view/movie-view';
// this will import movie view from movie-view.jsx!
import {LoginView} from '../login-view/login-view';
// this will import login view from login-view.jsx!

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
axios.get('https://bestmoviecentral.herokuapp.com/movies')
.then(response => {
this.setState({
 movies: response.data
 });
})
.catch(error => {
 console.log(error);
 });
}

setSelectedMovie(newSelectedMovie)  {
    this.setState({
     selectedMovie: newSelectedMovie
     });
    }

    onLoggedIn(user) {
    this.setState({
     user
    });
    }

    /* When a user successfully logs in, this function updates the 
    `user` property in state to that *particular user*/

    render() {
        const { movies, selectedMovie, user } = this.state;
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log(username, password);
          /* Send a request to the server for authentication */
        /* then call props.onLoggedIn(username) */
           props.onLoggedIn(username);
        };

        if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
    
       /* If there is no user, the LoginView is rendered. If there is a user 
        logged in, the user details are *passed as a prop to the LoginView*/

        if (movies.length === 0) return <div className="main-view" />;
      
        return (
          <div className="main-view">
            {selectedMovie
              ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
              : movies.map(movie => (
                <MovieCard key={movie._id} movieData={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
              ))
            }
          </div>
        );
      }
    }

