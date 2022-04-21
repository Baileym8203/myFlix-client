import react, { useEffect, useState } from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import "../profile-view/profile-view.scss";
import axios from "axios";
import UserInfo from "../user-info/user-info";
import FavoriteMovies from "../favorite-movies/favorite-movies";
import UpdateUser from "../update-user/update-user";

export function ProfileView({ onUpdatedUserInfo }) {
  const [user, setUser] = useState();
  const [favoriteMoviesList, setFavoriteMoviesList] = useState([]);

  const getUser = (user, token) => {
    axios
      .get("https://bestmoviecentral.herokuapp.com/users/" + user, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleUpdate = (newUserData) => {
    setUser(newUserData);
  };

  const getFavoriteMovies = (token) => {
    axios
      .get("https://bestmoviecentral.herokuapp.com/movies", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setFavoriteMoviesList(
          response.data.filter((movie) => {
            return user.FavoriteMovies.includes(movie._id);
          })
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    if (user) {
      let accessToken = localStorage.getItem("token");
      getFavoriteMovies(accessToken);
    }
  }, [user]);

  useEffect(() => {
    let accessToken = localStorage.getItem("token");
    let userName = localStorage.getItem("user");
    if (accessToken !== null && userName !== null) {
      getUser(userName, accessToken);
    }
  }, []);

  if (!user) return <p>Not user data</p>;

  return (
    <Container
      fluid
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "0px",
        marginTop: "25px",
      }}
    >
      <Row
        style={{
          width: "100%",
          padding: "0px",
          margin: "50px",
          backgroundColor: "white",
        }}
      >
        <Col xl={6} style={{ padding: "0px" }}>
          <Card>
            <Card.Body>
              <UserInfo name={user.Username} email={user.Email} />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <UpdateUser user={user} handleUpdate={handleUpdate} />
        </Col>
        <Col style={{ padding: "0px" }}>
          <Card>
            <Card.Body>
              <FavoriteMovies favoriteMoviesList={favoriteMoviesList} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

