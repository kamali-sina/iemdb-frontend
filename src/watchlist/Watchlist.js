import '../styles/watchlist.css';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import WatchlistCapsule from './WatchlistCapsule';
import MoviesCapsule from '../components/MoviesCapsule';

function Watchlist({notify}) {
    const [items, setItems] = useState([])
    const [dataIsLoaded, setDataIsLoaded] = useState(false)

    function doFetch() {
        fetch('http://127.0.0.1:8080/movies/')
            .then(resp => resp.json())
            .then(data => {
                setItems(data.data);
                setDataIsLoaded(true);
            });
    }

    useEffect(() => {
        doFetch()
    }, [items])

    return (
        <div className="centered-container">
            {items.map(function(object, i){
                return <WatchlistCapsule key={object.id} movie={object} notify={notify} />; 
            })}
        </div>
    );
}

function RecommendedMovies() {
    const [items, setItems] = useState([])
    const [dataIsLoaded, setDataIsLoaded] = useState(false)

    function doFetch() {
        fetch('http://127.0.0.1:8080/movies/')
            .then(resp => resp.json())
            .then(data => {
                setItems(data.data);
                setDataIsLoaded(true);
            });
    }

    useEffect(() => {
        doFetch()
    }, [items])

    return <MoviesCapsule movies={items} title="پیشنهاد ها" />;
}

function WatchlistPage({notify}) {
    return (
        <div className="container">
            <Navbar />
            <Watchlist notify={notify} />
            <div className="centered-container">
                <RecommendedMovies />
            </div>
        </div>
    );
}

export default WatchlistPage;