import React from "react";
import '../styles/moviesCapsule.css'

function SingleMovieCapsule(props) {
    return (
      <a className="movies-capsule-movie rounded custome-text-white" href="">
        <img alt={props.movie.name} src={props.movie.image} />
        <div className="text">
          {props.movie.name} <br />
          {props.movie.imdbRate}
        </div>
      </a>
    );
}

function MoviesCapsule(props) {
    return (
        <div>
            <h2 className="custome-text-white">{props.title}</h2>
            <div className="movies-capsule rounded">
            {props.movies.map(function (object, i) {
                return <SingleMovieCapsule key={object.id} movie={object} />;
            })}
            </div>
        </div>
    );
}

export default MoviesCapsule;