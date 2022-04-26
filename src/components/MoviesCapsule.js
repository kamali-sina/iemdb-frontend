import React, {useState, useEffect}  from "react";
import '../styles/moviesCapsule.css'

function SingleMovieCapsule({movie}) { 
    return (
      <a className="movies-capsule-movie rounded custome-text-white" href="">
        <img alt={movie.name} src={movie.image} />
        <div className="text">
          {movie.name} <br />
          {movie.imdbRate}
        </div>
      </a>
    );
}

function MoviesCapsule({title, movies}) {
    return (
        <div>
            <h2 className="custome-text-white">{title}</h2>
            <div className="movies-capsule rounded">
            {movies.map(function (object, i) {
                return <SingleMovieCapsule key={object.id} movie={object} />;
            })}
            </div>
        </div>
    );
}

export default MoviesCapsule;