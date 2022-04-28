import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"; 

function MoviesGridItem({movie}) {
    return (
        <a href={"/movie/" + movie.id} className="home-link">
            <div className="movie-card">
                <img
                src={movie.image}
                className="movie-card-img"
                alt={movie.name}
                />
                <div className="text custome-title-white-movies-grid">
                    {movie.name} <br />
                    {movie.imdbRate}
                </div>
            </div>
        </a>
    );
}

function MoviesGrid({notify, items, setSortby, setItems}) {
    useEffect(() => {

    }, [items])

    function handleSort(event, sortby) {
        setSortby(sortby)
    }

    return (
        <div className="main-column-div">
            <div></div>

            <div className="centered-container">
                <div className="movies-container">
                {items.map(function(object, i){
                    return <MoviesGridItem key={object.id} movie={object} />; 
                })}

                </div>
            </div>

            <div className="sorting-culomn">
                <p className="sort-by-text">رتبه بندی بر اساس:</p>
                <div className="sort-by-div">
                    <button onClick={(event) => { handleSort(event, "sortByDate") }} >
                        <p className="sort-by-items">تاریخ</p>
                    </button>

                    <button onClick={(event) => { handleSort(event, "sortByImdb") }} >
                        <p className="sort-by-items">امتیاز IMDB</p>
                    </button>
                </div>
            </div>

        </div>
    );
}

export default MoviesGrid;