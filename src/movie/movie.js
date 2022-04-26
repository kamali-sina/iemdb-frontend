import React from "react";
import Navbar from "../components/Navbar";
import "../styles/movie.css";
import { useParams } from "react-router-dom";

import Comment from "./MovieComment";
import Actor from "./MovieActor";
import Information from "./MovieInformation";
import Wallpaper from "./MovieWallpaper";

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
          return <Comment key={object.id} comment={object} />;
        })}
      </div>
    );
  }
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
            return <Actor key={object.id} actor={object} />;
          })}
        </div>
      </div>
    );
  }
}

class MovieCapsule extends React.Component {
  render() {
    return (
      <div className="movie_page">
        <Wallpaper movie={this.props.movie} />
        <Information movie={this.props.movie} />
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
