import react from 'react';
import Col from 'react-bootstrap/Col'
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';
import { MovieCard } from '../movie-card/movie-card';

import './movies-list.scss'

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    return { visibilityFilter };
    };
    
function MoviesList(props) {
const { movies, visibilityFilter } = props;
let filteredMovies = movies;


if (visibilityFilter !== '') {
filteredMovies = movies.filter(m => m.Title.toLowerCase().includes(visibilityFilter.toLowerCase()));
}


if (!movies) return <div className="main-view"/>;

return (
  <>
    <Col
      xl={12}
      style={{
        marginBottom: "0.9em",
        paddingBottom: "1.0em",
        backgroundColor: "rgba(255, 255, 255, 0.973)",
        display: "flex",
      }}
    >
      <h1
        style={{
          marginTop: "-5px",
          color: "red",
          fontWeight: 700,
          textShadow: "black 3px 2.5px 3.5px",
          fontSize: "40px",
        }}
      >
        BestMovies
      </h1>
      <VisibilityFilterInput visibilityFilter={visibilityFilter} />
    </Col>

    {filteredMovies.map((m) => (
      <Col key={m._id} className="movie-card-view">
        <MovieCard movieData={m} />
      </Col>
    ))}
  </>
);
}

export default connect(mapStateToProps)(MoviesList);