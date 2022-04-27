import React from 'react';
// TODO: Fix this Component
function MoviesNavbar() {
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

                <form class="search-bar">
                    <div class="dropdown">
                        <button type="submit" class="dropbtn">
                            جستجو بر اساس
                            <i class="fa fa-sort-desc custome-drop-icon"></i>
                        </button>

                        <div class="dropdown-content">
                            <a href="">نام</a>
                            <a href="">ژانر</a>
                            <a href="">تاریخ تولید</a>
                        </div>
                    </div>
                    <input
                    type="text"
                    class="search-text-input custome-search-input"
                    />
                </form>

                <div class="dropdown-user">
                    <div class="dropbtn-user">
                        <i class="fa fa-user custome-user-icon"></i>
                    </div>

                    <div class="dropdown-content-user">
                        <a href="/login">ثبت نام</a>
                        <a href="">ورود</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default MoviesNavbar;