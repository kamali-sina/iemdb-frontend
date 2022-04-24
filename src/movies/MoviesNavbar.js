import React from 'react';
// TODO: Fix this Component
class MoviesNavbar extends React.Component {
    render() {
        return (
            <header id="navbar">
                <nav class="navbar">
                    <a href="" class="home-link">
                        <div class="logo-image">
                            <img
                                src={process.env.PUBLIC_URL + '/logo.png'}
                                class="img-responsive img-rounded"
                                alt="logo"
                            />
                        </div>
                    </a>

                    <form action="http://127.0.0.1:8080/movies/search" method="get" class="search-bar">
                        <div class="dropdown">
                            <button type="button" class="dropbtn">
                                جستجو بر اساس
                                <i class="fa fa-sort-desc custome-drop-icon"></i>
                            </button>

                            <div class="dropdown-content">
                                <button type="submit" class="dropbtn" name="filter" value="name">
                                    نام
                                </button>
                                <br></br>
                                <button type="submit" class="dropbtn" name="filter" value="genre">
                                    ژانر
                                </button>
                                <br></br>
                                <button type="submit" class="dropbtn" name="filter" value="releaseYear">
                                    تاریخ تولید
                                </button>
                            </div>
                        </div>
                        <input type="text" class="search-text-input custome-search-input" name="searchValue"/>
                    </form>

                    <div class="dropdown-user">
                        <div class="dropbtn-user">
                            <i class="fa fa-user custome-user-icon"></i>
                        </div>

                        <div class="dropdown-content-user">
                            <a href="/login">ثبت نام</a>
                            <a href="/signup">ورود</a>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default MoviesNavbar;