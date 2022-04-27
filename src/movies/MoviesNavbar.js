import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"; 
import NavbarUserIcon from '../components/NavbarUserIcon';
import NavbarLogo from '../components/NavbarLogo';


function SearchBar({notify, setItems, sortby, searchValue, setSearchValue}) {
    const navigate = useNavigate();

    function handleSearchValueChange (event) {    
        setSearchValue(event.target.value);
    }


    async function handleSearch(event, filter) {
        event.preventDefault();
        query = 'searchValue=' + searchValue + "&filter=" + filter + '&sortby=' + sortby
        const response = await fetch('http://127.0.0.1:8080/movies/search?' + query , { 
            headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
            method: 'GET', 
            mode: 'cors'
        });
        const data = await response.json();
        console.log('A name was submitted: ' + data.status + ': ' + data.data);
        if (data.status == 200) {
            setItems(data.data)
        } else {
            notify("An unexpected error happened: " + data.data)
        }
    }

    return (
        <form class="search-bar">
            <div class="dropdown">
                <button type="submit" class="dropbtn">
                    جستجو بر اساس
                    <i class="fa fa-sort-desc custome-drop-icon"></i>
                </button>

                <div class="dropdown-content">
                    <button onClick={(event) => { handleSearch(event, "name") }} >
                        <p className="sort-by-items">نام</p>
                    </button>

                    <button onClick={(event) => { handleSearch(event, "genre") }} >
                        <p className="sort-by-items">ژانر</p>
                    </button>
                    
                    <button onClick={(event) => { handleSearch(event, "releaseDate") }} >
                        <p className="sort-by-items">تاریخ تولید</p>
                    </button>
                </div>
            </div>
            <input
                type="text"
                class="search-text-input custome-search-input"
                value={searchValue} onChange={handleSearchValueChange}
            />
        </form>
    );
}

function MoviesNavbar({notify, sortby}) {
    return (
        <header id="navbar">
            <nav class="navbar">
                <NavbarLogo />

                <SearchBar sortby={sortby} />

                <NavbarUserIcon notify={notify} />
            </nav>
        </header>
    );
}

export default MoviesNavbar;