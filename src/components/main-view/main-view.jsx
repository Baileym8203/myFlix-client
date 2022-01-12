import react from 'react';
// this will import react
import axios from 'axios';
//this will import axios into main-view.jsx!
import { MovieCard } from '../movie-card/movie-card';
// this will import movie card from movie-card.jsx!
import { MovieView } from '../movie-view/movie-view';
// this will import movie view from movie-view.jsx!

export class MainView extends react.Component {

constructor() {
super();

this.state = {
movies: [],
 selectedMovie: null
 }
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

    render() {
        const { movies, selectedMovie } = this.state;
      
        if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
      
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

