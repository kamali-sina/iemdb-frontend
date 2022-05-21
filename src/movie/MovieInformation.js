import React from "react";
import { useNavigate } from "react-router-dom";
import Rating from "./Rating";

const AddToWatchlist = ({ movieId, notify }) => {
  const navigate = useNavigate();
  async function addToWatchlist(event) {
    const response = await fetch("http://127.0.0.1:8080/users/watchlist", {
      headers: new Headers({'Content-Type': 'application/json',
                      'Authorization': localStorage.getItem('token'),
                      'Accept': 'application/json'
                    }),
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
    <button
      className="add-to-watchlist-button rounded"
      onClick={addToWatchlist}
    >
      افزودن به لیست
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
      <Rating movie={movie} notify={notify} />
    </div>
  );
}

export default Information;
