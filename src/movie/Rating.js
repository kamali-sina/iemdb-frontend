import React from "react";
import { useNavigate } from "react-router-dom";

const Rate = ({ movie, notify }) => {
  const navigate = useNavigate();
  async function rateMovie(event) {
    const response = await fetch(
      "http://87.247.187.217:31921/movies/" + movie.id + "/rate",
      {
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token'),
          'Accept': 'application/json'
        }),
        method: "POST",
        mode: "cors",
        body: JSON.stringify({ rate: event.currentTarget.value }),
      }
    );
    const data = await response.json();
    console.log("Movie was rated: " + data.status + ": " + data.data);
    notify(data.data);
    if (data.status == 401) {
      navigate("/login");
    }
  }

  return (
    <div class="rating">
      <input
        type="radio"
        name="rating"
        value="10"
        id="10"
        onClick={rateMovie}
      />
      <label for="10">☆</label>
      <input type="radio" name="rating" value="9" id="9" onClick={rateMovie} />
      <label for="9">☆</label>
      <input type="radio" name="rating" value="8" id="8" onClick={rateMovie} />
      <label for="8">☆</label>
      <input type="radio" name="rating" value="7" id="7" onClick={rateMovie} />
      <label for="7">☆</label>
      <input type="radio" name="rating" value="6" id="6" onClick={rateMovie} />
      <label for="6">☆</label>
      <input type="radio" name="rating" value="5" id="5" onClick={rateMovie} />
      <label for="5">☆</label>
      <input type="radio" name="rating" value="4" id="4" onClick={rateMovie} />
      <label for="4">☆</label>
      <input type="radio" name="rating" value="3" id="3" onClick={rateMovie} />
      <label for="3">☆</label>
      <input type="radio" name="rating" value="2" id="2" onClick={rateMovie} />
      <label for="2">☆</label>
      <input type="radio" name="rating" value="1" id="1" onClick={rateMovie} />
      <label for="1">☆</label>
    </div>
  );
};

function Rating({ movie, notify }) {
  return (
    <div class="rating-section">
      <div class="imdb_rating">{movie.imdbRate}</div>
      <div class="stars">
        <div class="star_checked">
          <i class="fa fa-star checked"></i>
        </div>
        <Rate movie={movie} notify={notify} />
      </div>
      <div class="user_rating">
        <div class="user_score">{movie.averageRatingRate}</div>
        <div class="rating_info">
          <div class="user_rating_text">امتیاز کاربران</div>
          <div class="user_rating_count">({movie.ratingCount} رای)</div>
        </div>
      </div>
    </div>
  );
}

export default Rating;
