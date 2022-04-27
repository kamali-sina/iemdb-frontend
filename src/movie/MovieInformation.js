import React from "react";
import { useNavigate } from "react-router-dom";

const AddToWatchlist = ({ movieId, notify }) => {
  const navigate = useNavigate();
  async function addToWatchlist(event) {
    const response = await fetch("http://127.0.0.1:8080/users/watchlist", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      mode: "cors",
      body: JSON.stringify({ movieId: movieId }),
    });
    const data = await response.json();
    console.log("A vote was cast: " + data.status + ": " + data.data);
    notify(data.data);
    if (data.status == 401) {
      navigate("/login");
    }
  }

  return (
    <button onClick={addToWatchlist}>
      <div className="add-to-watchlist-button rounded">افزودن به لیست</div>;
    </button>
  );
};

function Information({ movie, notify }) {
  return (
    <div class="information">
      <div class="poster">
        <img alt={movie.name} src={movie.image} />
        <AddToWatchlist movieId={movie.id} notify={notify} />
      </div>
      <div class="movie_info">
        <h1>{movie.name}</h1>
        <div class="information_text">
          <p>کارگردان: {movie.director}</p>
          <p>نویسنده: {movie.writersPretty}</p>
          <p>مدت زمان: {movie.duration} دقیقه</p>
          <br />
        </div>
        <p>تاریخ انتشار: {movie.releaseDate}</p>
        <hr />
        <div class="movie_summary">{movie.summary}</div>
      </div>
      <div class="rating">
        <div class="imdb_rating">{movie.imdbRate}</div>
        <div class="stars">
          <div class="star_checked">
            <i class="fa fa-star checked"></i>
          </div>
        </div>
        <div class="user_rating">
          <div class="user_score">{movie.averageRatingRate}</div>
          <div class="rating_info">
            <div class="user_rating_text">امتیاز کاربران</div>
            <div class="user_rating_count">({movie.ratingCount} رای)</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
