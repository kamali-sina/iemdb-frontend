function Actor(props) {
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

export default Actor;
