function ActorMovie(props) {
  return (
    <a className="actor_movie rounded" href={"/movie/" + props.movie.id}>
      <img alt={props.movie.name} src={props.movie.image} />
      <div className="overlay">
        <div className="actor-movie-text">
          {props.movie.name} <br />
          {props.movie.imdbRate}
        </div>
      </div>
    </a>
  );
}

export default ActorMovie;
