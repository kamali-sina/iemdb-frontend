import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../styles/movie.css";

import Comment from "./MovieComment";
import Actor from "./MovieActor";
import Information from "./MovieInformation";
import Wallpaper from "./MovieWallpaper";
import { useParams } from "react-router-dom";

function CommentsCapsule({ id, notify }) {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  function doFetch() {
    fetch("http://127.0.0.1:8080/movies/" + id + "/comments")
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
    <div className="comments">
      <h2>دیدگاه‌ها</h2>
      <form className="comment">
        <div className="name">دیدگاه خود را اضافه کنید:</div>
        <hr />
        <textarea className="textarea"></textarea>
        <a className="button" href="">
          ثبت
        </a>
      </form>
      {items.map(function (object, i) {
        return <Comment key={object.id} comment={object} notify={notify} />;
      })}
    </div>
  );
}

function ActorsCapsule({ id, notify }) {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  function doFetch() {
    fetch("http://127.0.0.1:8080/movies/" + id + "/actors")
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
      <Information movie={movie} />
      <ActorsCapsule id={id} movie={movie} />
      <CommentsCapsule id={id} movie={movie} notify={notify} />
    </div>
  );
}

function Movie({ id, notify }) {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  function doFetch() {
    fetch("http://127.0.0.1:8080/movies/" + id)
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

  return (
    <div>
      <Navbar />
      <Movie id={id} notify={notify} />
    </div>
  );
}

export default MoviePage;
