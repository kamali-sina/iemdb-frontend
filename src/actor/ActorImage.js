function ActorImage(props) {
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

export default ActorImage;
