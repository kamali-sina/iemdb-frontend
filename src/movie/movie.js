import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/movie.css";

import Actor from "./MovieActor";
import Information from "./MovieInformation";
import Wallpaper from "./MovieWallpaper";
import { useParams } from "react-router-dom";
import CommentsCapsule from "./MovieCommentCapsule";
import { useNavigate } from "react-router-dom"; 
import userEvent from "@testing-library/user-event";

function ActorsCapsule({ id, notify }) {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  function doFetch() {
    fetch("http://127.0.0.1:8080/movies/" + id + "/actors", {
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'),
            'Accept': 'application/json'
        }),
      })
      .then((resp) => resp.json())
      .then((data) => {
        setItems(data.data);
        setDataIsLoaded(true);
      });
  }

  useEffect(() => {
    doFetch();
  }, [items]);

  return (
    <div class="actors">
      <h2>بازیگران</h2>
      <div class="actors_info">
        {items.map(function (object, i) {
          return <Actor key={object.id} actor={object} notify={notify} />;
        })}
      </div>
    </div>
  );
}

function MovieCapsule({ id, movie, notify }) {
  return (
    <div className="movie_page">
      <Wallpaper movie={movie} />
      <Information movie={movie} notify={notify} />
      <ActorsCapsule id={id} movie={movie} />
      <CommentsCapsule id={id} movie={movie} notify={notify} />
    </div>
  );
}

function Movie({ id, notify }) {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  function doFetch() {
    fetch("http://127.0.0.1:8080/movies/" + id, {
      headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token'),
          'Accept': 'application/json'
      }),
      })
      .then((resp) => resp.json())
      .then((data) => {
        setItems(data.data);
        setDataIsLoaded(true);
      });
  }

  useEffect(() => {
    doFetch();
  }, [items]);

  return (
    <div>
      <MovieCapsule id={id} movie={items} notify={notify} />
    </div>
  );
}

function MoviePage({ notify }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(null)

  useEffect(() => {
    if (localStorage.getItem('token') !== 'null') {
      setIsUserLoggedIn(true)
    } else {
      notify("You must be logged in to view this page")
      navigate('/login')
    }
  }, [isUserLoggedIn])
  
  if (isUserLoggedIn === true) {
    return (
      <div>
        <Navbar notify={notify} />
        <Movie id={id} notify={notify} />
      </div>
    );
  }
}

export default MoviePage;
