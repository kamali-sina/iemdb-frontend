import '../styles/movies.css';
import React, { useState, useEffect } from 'react';
import MoviesGrid from './MoviesGrid';
import MoviesNavbar from './MoviesNavbar';
import LoadingSpinner from '../components/LoadingSpinner.js'

function MoviesPage({notify}) {
    const [items, setItems] = useState([])
    const [sortby, setSortby] = useState("sortByImdb")
    const [searchValue, setSearchValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    return (
        <div className="page-container">
            <div className="centered-container">
                {isLoading ? <LoadingSpinner /> : <></>}
            </div>
            <MoviesNavbar notify={notify} setItems={setItems} sortby={sortby} searchValue={searchValue} setSearchValue={setSearchValue} setIsLoading={setIsLoading}/>
            
            <MoviesGrid notify={notify} setItems={setItems} setSortby={setSortby} items={items} searchValue={searchValue} />
        </div>
    );
}

export default MoviesPage;