import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Figure, Button } from "react-bootstrap";
import axios from "axios";

function FavoriteMovies({ favoriteMoviesList }) {
  const removeFav = (id) => {
    let token = localStorage.getItem("token");
    let url = `https://bestmoviecentral.herokuapp.com/users/${localStorage.getItem(
      "user"
    )}/movies/${id}`;
    axios.delete(url, {
      headers: { Authorization: `bearer ${token}` },
    });
  };
  return (
    <>
      <Row>
        <Col xs={12}>
          <h4 className="text-center">Favorite Movies</h4>
        </Col>
      </Row>
      <Row>
        {favoriteMoviesList.map(({ ImagePath, Title, _id }) => {
          return (
            <Col xs={12} md={6} lg={3} key={_id}>
              <Figure className="text-center">
                <Link to={`/movies/${_id}`}>
                  <Figure.Image style={{width: "250px", height: "350px"}} src={ImagePath} alt={Title} />
                  <Figure.Caption>{Title}</Figure.Caption>
                </Link>
              </Figure>
              <Button variant="secondary" onClick={() => removeFav(_id)}>
                Remove
              </Button>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default FavoriteMovies;