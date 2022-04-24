import React from "react";
import Navbar from "../components/Navbar";
import "../styles/movie.css";
import { useParams } from "react-router-dom";

function CommentCapsule(props) {
  return (
    <div className="comment">
      <div className="name">{props.comment.userEmail}</div>
      <hr />
      <div className="movie_text">{props.comment.text}</div>
      <div className="icons">
        <div className="thumbs-up">
          <a href={"/comments/" + props.comment.id + "/1"}>
            <i className="fa fa-thumbs-up"></i>
          </a>
          <div className="movie_text">{props.comment.numberOfLikes}</div>
        </div>
        <div className="thumbs-down">
          <a href={"/comments/" + props.comment.id + "/-1"}>
            <i className="fa fa-thumbs-down"></i>
          </a>
          <div className="movie_text">{props.comment.numberOfDislikes}</div>
        </div>
      </div>
    </div>
  );
}

class CommentsCapsule extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], DataisLoaded: false };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8080/movies/" + this.props.id + "/comments")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState((prevState) => ({
          items: data.data,
          DataisLoaded: true,
        }));
      });
  }

  render() {
    let comments = this.state.items;
    console.log({ status: this.state.DataisLoaded });
    console.log({ comments });
    console.log({ id: this.props.id });

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
        {comments.map(function (object, i) {
          return <CommentCapsule key={object.id} comment={object} />;
        })}
      </div>
    );
  }
}

function ActorCapsule(props) {
  return (
    <div class="actor_image">
      <a href={"/actor/" + props.actor.id}>
        <img alt={props.actor.name} src={props.actor.image} />
      </a>
      <div class="actor_name">
        {props.actor.name} <br />
        {props.actor.age}
      </div>
    </div>
  );
}

class ActorsCapsule extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], DataisLoaded: false };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8080/movies/" + this.props.id + "/actors")
      .then((resp) => resp.json())
      .then((data) => {
        this.setState((prevState) => ({
          items: data.data,
          DataisLoaded: true,
        }));
      });
  }

  render() {
    var actors = this.state.items;

    return (
      <div class="actors">
        <h2>بازیگران</h2>
        <div class="actors_info">
          {actors.map(function (object, i) {
            return <ActorCapsule key={object.id} actor={object} />;
          })}
        </div>
      </div>
    );
  }
}

function InformationCapsule(props) {
  return (
    <div class="information">
      <div class="poster">
        <img alt={props.movie.name} src={props.movie.image} />
      </div>
      <div class="movie_info">
        <h1>{props.movie.name}</h1>
        <div class="information_text">
          <p>کارگردان: {props.movie.director}</p>
          <p>نویسنده: {props.movie.writersPretty}</p>
          <p>مدت زمان: {props.movie.duration} دقیقه</p>
          <br />
        </div>
        <p>تاریخ انتشار: {props.movie.releaseDate}</p>
        <hr />
        <div class="movie_summary">{props.movie.summary}</div>
      </div>
      <div class="rating">
        <div class="imdb_rating">{props.movie.imdbRate}</div>
        <div class="stars">
          <div class="star_checked">
            <i class="fa fa-star checked"></i>
          </div>
        </div>
        <div class="user_rating">
          <div class="user_score">{props.movie.averageRatingRate}</div>
          <div class="rating_info">
            <div class="user_rating_text">امتیاز کاربران</div>
            <div class="user_rating_count">({props.movie.ratingCount} رای)</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WallpaperCapsule(props) {
  return (
    <div class="wallpaper">
      <img alt={props.movie.name} src={props.movie.coverImage} />
    </div>
  );
}

class MovieCapsule extends React.Component {
  render() {
    return (
      <div className="movie_page">
        <WallpaperCapsule movie={this.props.movie} />
        <InformationCapsule movie={this.props.movie} />
        <ActorsCapsule movie={this.props.movie} id={this.props.id} />
        <CommentsCapsule movie={this.props.movie} id={this.props.id} />
      </div>
    );
  }
}

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], DataisLoaded: false };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8080/movies/" + this.props.id)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState((prevState) => ({
          items: data.data,
          DataisLoaded: true,
        }));
      });
  }

  render() {
    return (
      <div>
        <MovieCapsule movie={this.state.items} id={this.props.id} />
      </div>
    );
  }
}

class MoviePage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Movie id={this.props.id} />
      </div>
    );
  }
}

function MoviePageWrapper() {
  const { id } = useParams();
  return <MoviePage id={id} />;
}

export default MoviePageWrapper;
