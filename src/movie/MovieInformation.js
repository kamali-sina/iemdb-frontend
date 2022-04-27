function Information(props) {
  return (
    <div class="information">
      <div class="poster">
        <img alt={props.movie.name} src={props.movie.image} />
        <div className="add-to-watchlist-button rounded">افزودن به لیست</div>
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

export default Information;
