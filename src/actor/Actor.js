import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/actor.css";
import ActorImage from "./ActorImage";
import ActorInformation from "./ActorInformation";

function ActorInformationClass({ id, actor, notify }) {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  function doFetch() {
    fetch("http://127.0.0.1:8080/movies/actors/" + id)
      .then((resp) => resp.json())
      .then((data) => {
        setItems(data.data);
        setDataIsLoaded(true);
      });
  }

  useEffect(() => {
    doFetch();
  }, [items]);

  return <ActorInformation actor={actor} movies={items} />;
}

function ActorCapsule({ id, actor, notify }) {
  return (
    <div className="actor_page-actor_information">
      <ActorImage actor={actor} notify={notify} />
      <ActorInformationClass id={id} actor={actor} notify={notify} />
    </div>
  );
}

function Actor({ id, notify }) {
  const [items, setItems] = useState([]);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);

  function doFetch() {
    fetch("http://127.0.0.1:8080/actors/" + id)
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
      <ActorCapsule id={id} actor={items} notify={notify} />
    </div>
  );
}

function ActorPage({ notify }) {
  const { id } = useParams();
  return (
    <div>
      <Navbar notify={notify} />
      <Actor id={id} notify={notify} />
    </div>
  );
}

export default ActorPage;
