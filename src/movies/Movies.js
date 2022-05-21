import '../styles/movies.css';
import React, { useState, useEffect } from 'react';
import MoviesGrid from './MoviesGrid';
import MoviesNavbar from './MoviesNavbar';
import LoadingSpinner from '../components/LoadingSpinner.js'
import { useNavigate } from "react-router-dom"; 

function MoviesPage({notify}) {
    const [items, setItems] = useState([])
    const [sortby, setSortby] = useState("imdbRate")
    const [searchValue, setSearchValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(null)
    console.log(localStorage.getItem('token'))

    useEffect(() => {
        if (localStorage.getItem('token') !== 'null') {
            setIsUserLoggedIn(true)
        } else {
            notify("You must be logged in to view this page")
            navigate('/login')
        }
    }, [isUserLoggedIn])

    if (isUserLoggedIn === true) {
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
}

export default MoviesPage;