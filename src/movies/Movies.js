import '../styles/movies.css';
import React from 'react';
import MoviesGrid from './MoviesGrid';
import MoviesNavbar from './MoviesNavbar';

class MoviesPage extends React.Component {
    render() {
        return (
            <div className="page-container">
                {/* TODO: Movies Navbar goes here */}
                <MoviesNavbar />
                
                <div className="main-column-div">
                    <div></div>

                    <MoviesGrid />


                    {/* TODO: fix me please */}
                    <div className="sorting-culomn">
                        <p className="sort-by-text">رتبه بندی بر اساس:</p>
                        <div className="sort-by-div">
                            <a href="" className="home-link">
                                <p className="sort-by-items">تاریخ</p>
                            </a>

                            <a href="" className="home-link">
                                <p className="sort-by-items">امتیاز Imdb</p>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default MoviesPage;