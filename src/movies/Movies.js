import '../styles/movies.css';
import React, { useState, useEffect } from 'react';
import MoviesGrid from './MoviesGrid';
import MoviesNavbar from './MoviesNavbar';

function MoviesPage({notify, movies}) {
    const [items, setItems] = useState([])
    const [sortby, setSortby] = useState("date")
    const [searchValue, setSearchValue] = useState('')

    return (
        <div className="page-container">
            <MoviesNavbar notify={notify} setItems={setItems} sortby={sortby} searchValue={searchValue} setSearchValue={setSearchValue} />
            
            <MoviesGrid notify={notify} setItems={setItems} setSortby={setSortby} items={items} searchValue={searchValue} />
        </div>
    );
}

export default MoviesPage;