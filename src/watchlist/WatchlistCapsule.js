import React from 'react';

function CapsuleImage(props) {
    return (
        <div>
            <img
                className="img-rounded"
                src={props.movie.image}
                alt={props.movie.name}
            />
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
    return (
        <div className="movie-info">
            {/* TODO: FIX THIS */}
            <div className="trash-icon">
                <a className="home-link" href="">
                    <i className="fa fa-trash custome-trash-icon"></i>
                </a>
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


class WatchlistCapsule extends React.Component {
    render() {
        return (
            <div className="capsule">
                <CapsuleImage movie={this.props.movie} />
                <CapsuleMovieName movie={this.props.movie} />
                <CapsuleMovieRatings movie={this.props.movie} />
                <CapsuleMovieInfo movie={this.props.movie} />
            </div>
        );
    }
}

export default WatchlistCapsule;