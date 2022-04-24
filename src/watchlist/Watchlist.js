import '../styles/watchlist.css';
import React from 'react';
import Navbar from '../components/Navbar'
import WatchlistCapsule from './WatchlistCapsule';
import MoviesCapsule from '../components/MoviesCapsule';

class Watchlist extends React.Component {
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
                {movies.map(function(object, i){
                    return <WatchlistCapsule key={object.id} movie={object} />; 
                })}
            </div>
        );
    }
}

class RecommendedMovies extends React.Component {
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
    
        return <MoviesCapsule movies={movies} title="پیشنهاد ها" />;
    }
}

class WatchlistPage extends React.Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <Watchlist />
                <div className="centered-container">
                    <RecommendedMovies />
                </div>
            </div>
        );
    }
}

export default WatchlistPage;