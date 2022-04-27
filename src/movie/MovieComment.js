function Comment(props) {
  return (
    <div className="comment">
      <div className="name">{props.comment.nickname}</div>
      <hr />
      <div className="movie_text">{props.comment.text}</div>
      <div className="icons">
        <div className="thumbs-up">
          <a href={"/comments/" + props.comment.id + "/1"}>
            <i className="fa fa-thumbs-up"></i>
          </a>
          <div className="movie_text">{props.comment.numberOfLikes}</div>
        </div>
        <div className="thumbs-down">
          <a href={"/comments/" + props.comment.id + "/-1"}>
            <i className="fa fa-thumbs-down"></i>
          </a>
          <div className="movie_text">{props.comment.numberOfDislikes}</div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
