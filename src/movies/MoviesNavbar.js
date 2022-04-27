import React from 'react';
import NavbarUserIcon from '../components/NavbarUserIcon';
import NavbarLogo from '../components/NavbarLogo';
// TODO: Fix this Component

function SearchBar() {
    return (
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
    );
}

function MoviesNavbar({notify}) {
    return (
        <header id="navbar">
            <nav class="navbar">
                <NavbarLogo />

                <SearchBar />

                <NavbarUserIcon notify={notify} />
            </nav>
        </header>
    );
}

export default MoviesNavbar;