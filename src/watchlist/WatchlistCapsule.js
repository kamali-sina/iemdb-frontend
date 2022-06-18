import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function CapsuleImage(props) {
    return (
        <div>
            <a href={"/movie/" + props.movie.id}>
                <img
                    className="img-rounded"
                    src={props.movie.image}
                    alt={props.movie.name}
                />
            </a>
        </div>
    );
}

function CapsuleMovieName(props) {
    return (
        <div className="movie-name-div">
            <p className="persian-text custome-title-white movie-name-text bold-text">
                {props.movie.name}
            </p>
        </div>
    );
}

function CapsuleMovieRatings(props) {
    return (
        <div className="ratings">
            <div className="id-value-div">
                <p className="persian-text custome-text-white bold-text space-property">
                    نمره IMDB:
                </p>
                <p className="persian-text custome-text-white">{props.movie.imdbRate}</p>
            </div>

            <div className="id-value-div">
                <p className="persian-text custome-text-white bold-text space-property">
                    نمره کاربران:
                </p>
                <p className="persian-text custome-text-white">{props.movie.averageRatingRate | "N/A"}</p>
            </div>
        </div>
    );
}

function CapsuleMovieInfo(props) {
    const navigate = useNavigate();

    async function handleSubmit(event, movieId) {
        event.preventDefault();
        const response = await fetch('http://87.247.187.217:31921/users/watchlist', {
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token'),
                'Accept': 'application/json'
            }),
            method: 'DELETE',
            mode: 'cors',
            body: JSON.stringify({ "movieId": movieId })
        })
        const data = await response.json();
        console.log(JSON.stringify({ "movieId": movieId }))
        if (data.status == 200) {
            props.notify("Movie Removed Successfully!")
            navigate("/watchlist");
        } else {
            props.notify("Something went wrong... please try again!")
            navigate("/watchlist");
        }
    }

    return (
        <div className="movie-info">
            <div className="trash-icon">
                <button onClick={(event) => { handleSubmit(event, props.movie.id) }}>
                    <i className="fa fa-trash custome-trash-icon"></i>
                </button>
            </div>
            <div className="id-value-div">
                <p className="persian-text custome-text-white bold-text space-property">
                    کارگردان:
                </p>
                <p className="persian-text custome-text-white">{props.movie.director}</p>
            </div>
            <div className="id-value-div">
                <p className="persian-text custome-text-white bold-text space-property">
                    ژانر:
                </p>
                <p className="persian-text custome-text-white">{props.movie.genresPretty}</p>
            </div>
            <div className="id-value-div">
                <p className="persian-text custome-text-white bold-text space-property space-property">
                    تاریخ انتشار:
                </p>
                <p className="persian-text custome-text-white">{props.movie.releaseDate}</p>
            </div>
            <div className="id-value-div">
                <p className="persian-text custome-text-white bold-text space-property">
                    مدت زمان:
                </p>
                <p className="persian-text custome-text-white">{props.movie.duration}</p>
                <p className="persian-text custome-text-white">دقیقه</p>
            </div>
        </div>
    );
}


function WatchlistCapsule({ movie, notify }) {
    return (
        <div className="capsule">
            <CapsuleImage movie={movie} />
            <CapsuleMovieName movie={movie} />
            <CapsuleMovieRatings movie={movie} />
            <CapsuleMovieInfo movie={movie} notify={notify} />
        </div>
    );
}

export default WatchlistCapsule;