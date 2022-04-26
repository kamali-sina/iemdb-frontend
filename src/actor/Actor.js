import React from "react";
import Navbar from "../components/Navbar";
import "../styles/actor.css";
import MoviesCapsule from "../components/MoviesCapsule";
import { useParams } from "react-router-dom";
import ActorImage from "./ActorImage";
import ActorInformation from "./ActorInformation";

class ActorInformationClass extends React.Component {
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
      <ActorInformation actor={this.props.actor} movies={this.state.items} />
    );
  }
}

class ActorCapsule extends React.Component {
  render() {
    return (
      <div className="actor_page-actor_information">
        <ActorImage actor={this.props.actor} />
        <ActorInformationClass actor={this.props.actor} id={this.props.id} />
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
