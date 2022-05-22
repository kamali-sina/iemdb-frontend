import '../styles/watchlist.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"; 
import Navbar from '../components/Navbar'
import WatchlistCapsule from './WatchlistCapsule';
import MoviesCapsule from '../components/MoviesCapsule';

function Watchlist({notify}) {
    const [items, setItems] = useState([])
    const [dataIsLoaded, setDataIsLoaded] = useState(false)

    function doFetch() {
        fetch('http://127.0.0.1:8080/users/watchlist', {
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token'),
                    'Accept': 'application/json'
                }),
                method: "GET",
                mode: "cors",
            })
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
        console.log('yoyoyo: ' + localStorage.getItem('token'))
        fetch('http://127.0.0.1:8080/movies/recommendedMovies', {
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token'),
                    'Accept': 'application/json'
                }),
                method: "GET",
                mode: "cors",
            })
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
    console.log('token:' + localStorage.getItem('token'))

    const navigate = useNavigate();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(null)

    useEffect(() => {
        if (localStorage.getItem('token') !== 'null') {
            setIsUserLoggedIn(true)
        } else {
            notify("You must be logged in to view this page")
            navigate('/login')
        }
    }, [isUserLoggedIn])

    if (isUserLoggedIn === true) {
        return (
            <div className="container">
                <Navbar notify={notify} />
                <Watchlist notify={notify} />
                <div className="centered-container">
                    <RecommendedMovies />
                </div>
            </div>
        );
    }
}

export default WatchlistPage;