import React from "react";
import { useNavigate } from "react-router-dom";

const Vote = ({ comment, notify }) => {
  const navigate = useNavigate();
  async function voteComment(event) {
    const response = await fetch(
      "http://127.0.0.1:8080/comments/" + comment.id + "/vote",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        method: "POST",
        mode: "cors",
        body: JSON.stringify({ vote: event.target.value }),
      }
    );
    const data = await response.json();
    console.log("A vote was cast: " + data.status + ": " + data.data);
    notify(data.data);
    if (data.status == 401) {
      navigate("/login");
    }
  }

  return (
    <div className="icons">
      <div className="thumbs-up">
        <button className="fa fa-thumbs-up" value="1" onClick={voteComment}>
          <div className="movie_text">{comment.numberOfLikes}</div>
        </button>
      </div>
      <div className="thumbs-down">
        <div className="thumbs-down">
          <button
            className="fa fa-thumbs-down"
            value="-1"
            onClick={voteComment}
          >
            <div className="movie_text">{comment.numberOfDislikes}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

function Comment({ key, comment, notify }) {
  return (
    <div className="comment">
      <div className="name">{comment.nickname}</div>
      <hr />
      <div className="movie_text">{comment.text}</div>
      <div className="icons">
        <Vote comment={comment} notify={notify} />
      </div>
    </div>
  );
}

export default Comment;
