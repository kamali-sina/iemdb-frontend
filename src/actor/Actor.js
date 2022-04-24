import React from "react";
import Navbar from "../components/Navbar";
import "../styles/actor.css";
import MoviesCapsule from "../components/MoviesCapsule";
import { useParams } from "react-router-dom";

function CapsuleImage(props) {
  return (
    <div className="actor_profile_pic">
      <img
        src={props.actor.image}
        alt={props.actor.name}
        height="600"
        width="400"
      />
    </div>
  );
}

function ActorMovieCapsule(props) {
  return (
    <a
      className="recommended_movie rounded custome-text-white"
      href={"/movie/" + props.movie.id}
    >
      <img alt={props.movie.name} src={props.movie.image} />
      <div className="text">
        {props.movie.name} <br />
        {props.movie.imdbRate}
      </div>
    </a>
  );
}

function ActorInformationCapsule(props) {
  return (
    <div className="information">
      <h1 className="custome-text-white">مشخصات بازیگر</h1>
      <div className="information_text custome-text-white">
        <p>نام: {props.actor.name}</p>
        <p>تاریخ تولد: {props.actor.birthDate}</p>
        <p>ملیت: {props.actor.nationality}</p>
        <p>تعداد فیلم‌ها: {props.movies.length}</p>
      </div>
      <div className="actor_movies">
        <h2 className="custome-text-white">فیلم‌ها</h2>
        <div className="recommended_movies rounded">
          {props.movies.map(function (object, i) {
            return <ActorMovieCapsule key={object.id} movie={object} />;
          })}
        </div>
      </div>
      {/* TODO: USE this instead
      <MoviesCapsule movies={props.movies} title="فیلم ها" /> */}
    </div>
  );
}

class ActorInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], DataisLoaded: false };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8080/movies/actors/" + this.props.id)
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
      <div className="information">
        <ActorInformationCapsule
          actor={this.props.actor}
          movies={this.state.items}
        />
      </div>
    );
  }
}

class ActorCapsule extends React.Component {
  render() {
    return (
      <div className="actor_information">
        <CapsuleImage actor={this.props.actor} />
        <ActorInformation actor={this.props.actor} id={this.props.id} />
      </div>
    );
  }
}

class Actor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], DataisLoaded: false };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8080/actors/" + this.props.id)
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
        <ActorCapsule actor={this.state.items} id={this.props.id} />
      </div>
    );
  }
}

class ActorPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Actor id={this.props.id} />
      </div>
    );
  }
}

function ActorPageWrapper() {
  const { id } = useParams();
  return <ActorPage id={id} />;
}

export default ActorPageWrapper;
