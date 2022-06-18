import React from "react";
import { useNavigate } from "react-router-dom";

const Vote = ({ comment, notify }) => {
  const navigate = useNavigate();
  async function voteComment(event) {
    const response = await fetch(
      "http://87.247.187.217:31921/comments/" + comment.id + "/vote",
      {
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token'),
          'Accept': 'application/json'
        }),
        method: "POST",
        mode: "cors",
        body: JSON.stringify({ vote: event.currentTarget.value }),
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
      <button className="thumbs-up" value="1" onClick={voteComment}>
        <div className="fa fa-thumbs-up"></div>
        <div className="movie_text">{comment.numberOfLikes}</div>
      </button>
      <button className="thumbs-down" value="-1" onClick={voteComment}>
        <div className="fa fa-thumbs-down"></div>
        <div className="movie_text">{comment.numberOfDislikes}</div>
      </button>
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
