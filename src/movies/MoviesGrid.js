import React from 'react';

class MoviesGridItem extends React.Component {
    render() {
        return (
            <a href={"/movie/" + this.props.movie.id} className="home-link">
                <div className="movie-card">
                    <img
                    src={this.props.movie.image}
                    className="movie-card-img"
                    alt={this.props.movie.name}
                    />
                    <div className="text custome-title-white">
                        {this.props.movie.name} <br />
                        {this.props.movie.imdbRate}
                    </div>
                </div>
            </a>
        );
    }
}

class MoviesGrid extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {items: [], DataisLoaded: false};
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8080/movies/')
            .then(resp => resp.json())
            .then(data => {
                this.setState(prevState => ({items: data.data, DataisLoaded: true}));
            });
    }

    render() {
        var movies = this.state.items;
    
        return (
            <div className="centered-container">
                <div className="movies-container">

                {movies.map(function(object, i){
                    return <MoviesGridItem key={object.id} movie={object} />; 
                })}

                </div>
            </div>
        );
    }
}

export default MoviesGrid;