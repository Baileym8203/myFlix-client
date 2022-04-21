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
 <Col xs={12} style={{paddingTop: "100px"}}>
          <h4 className="text-center">Favorite Movies</h4>
        </Col>
        {favoriteMoviesList.map(({ ImagePath, Title, _id }) => {
          return (
            <Row>
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
                key={_id}
              >
                <Figure className="text-center">
                  <Link to={`/movies/${_id}`}>
                    <Figure.Image
                      style={{ width: "250px", height: "350px" }}
                      src={ImagePath}
                      alt={Title}
                    />
                  </Link>
                  <Figure.Caption>{Title}</Figure.Caption>
                </Figure>
              </Col>
              <Col md={12} style={{display: "flex", justifyContent: "center", paddingBottom: "100px" }}>
                <Button
                  style={{ marginTop: "20px"}}
                  variant="dark"
                  onClick={() => removeFav(_id)}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          );
        })}
    </>
  );
}

export default FavoriteMovies;