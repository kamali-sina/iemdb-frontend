import ActorMovie from "./ActorMovie";

function ActorInformation(props) {
  return (
    <div className="actor_page-information">
      <h1 className="custome-text-white">مشخصات بازیگر</h1>
      <div className="information_text custome-text-white">
        <p>نام: {props.actor.name}</p>
        <p>تاریخ تولد: {props.actor.birthDate}</p>
        <p>ملیت: {props.actor.nationality}</p>
        <p>تعداد فیلم‌ها: {props.movies.length}</p>
      </div>
      <div className="actor_movies_container rounded">
        <h2 className="custome-text-white">فیلم‌ها</h2>
        <div className="actor_movies rounded">
          {props.movies.map(function (object, i) {
            return <ActorMovie key={object.id} movie={object} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ActorInformation;
