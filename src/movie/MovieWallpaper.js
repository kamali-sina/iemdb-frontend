function Wallpaper(props) {
  return (
    <div class="wallpaper">
      <img alt={props.movie.name} src={props.movie.coverImage} />
    </div>
  );
}

export default Wallpaper;
