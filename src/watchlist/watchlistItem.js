// function GradesSection(props) {
//     if (!props.isLoggedin)
//         return (<h1>grades section</h1>);

//     var coursesInTerms = Object.values(props.gradedCources).reduce(function(r, o){
//         var k = o.term;   // unique `loc` key
//         if (r[k] || (r[k]=[])) r[k].push({term:k, code: o.code, course: o.course, grade: o.grade});
//         return r;
//     }, {});

//     return (
//         <div className="col-lg-8 ">
//             <section className="workbook_section">
//                 {Object.values(coursesInTerms).map(termCourses => (
//                     <TermGradesTable courses={termCourses}/>
//                 ))}
//             </section>
//         </div>
//     );
// }

import '../styles/watchlist.css';
import React from 'react';
import Navbar from '../components/Navbar'

class Capsule extends React.Component {
    render() {
        return (
            <div class="capsule">
            <div>
                <img
                        class="img-rounded"
                        src={this.props.movie.image}
                        alt={this.props.movie.name}
                />
            </div>
            <div class="movie-name-div">
                <p class="persian-text custome-title-white movie-name-text bold-text">
                    {this.props.movie.name}
                </p>
            </div>

            <div class="ratings">
                <div class="id-value-div">
                    <p
                            class="persian-text custome-text-white bold-text space-property"
                    >
                        نمره IMDB:
                    </p>
                    <p class="persian-text custome-text-white">{this.props.movie.imdbRate}</p>
                </div>

                <div class="id-value-div">
                    <p
                            class="persian-text custome-text-white bold-text space-property"
                    >
                        نمره کاربران:
                    </p>
                    <p class="persian-text custome-text-white">{this.props.movie.averageRatingRate | "N/A"}</p>
                </div>
            </div>
            <div class="movie-info">
                {/* TODO: FIX THIS */}
                <div class="trash-icon">
                    <a class="home-link" href="">
                        <i class="fa fa-trash custome-trash-icon"></i>
                    </a>
                </div>
                <div class="id-value-div">
                    <p
                            class="persian-text custome-text-white bold-text space-property"
                    >
                        کارگردان:
                    </p>
                    <p class="persian-text custome-text-white">{this.props.movie.director}</p>
                </div>
                <div class="id-value-div">
                    <p
                            class="persian-text custome-text-white bold-text space-property"
                    >
                        ژانر:
                    </p>
                    <p class="persian-text custome-text-white">{this.props.movie.genresPretty}</p>
                </div>
                <div class="id-value-div">
                    <p
                            class="persian-text custome-text-white bold-text space-property space-property"
                    >
                        تاریخ انتشار:
                    </p>
                    <p class="persian-text custome-text-white">{this.props.movie.releaseDate}</p>
                </div>
                <div class="id-value-div">
                    <p
                            class="persian-text custome-text-white bold-text space-property"
                    >
                        مدت زمان:
                    </p>
                    <p class="persian-text custome-text-white">{this.props.movie.duration}</p>
                    <p class="persian-text custome-text-white">دقیقه</p>
                </div>
            </div>
        </div>
        );
    }
}

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
        var rows = [];
        movies.forEach(movie => {
            rows.push(<Capsule movie={movie} />);
        });
    
        return (
            <div class="centered-container">
                {rows}
            </div>
        );
    }
}

class WatchlistPage extends React.Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <Watchlist />
            </div>
        );
    }
}

export default WatchlistPage;