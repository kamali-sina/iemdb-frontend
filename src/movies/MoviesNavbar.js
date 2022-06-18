import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavbarUserIcon from "../components/NavbarUserIcon";
import NavbarLogo from "../components/NavbarLogo";


function SearchBar({ notify, setItems, sortby, searchValue, setSearchValue, setIsLoading }) {
  const navigate = useNavigate();

  function handleSearchValueChange(event) {
    setSearchValue(event.target.value);
  }

  async function handleSearch(event, filter) {
    event.preventDefault();
    const query = 'searchValue=' + searchValue + "&filter=" + filter + '&sortedBy=' + sortby
    console.log("search query: " + query)
    setIsLoading(true);
    console.log("token is: " + localStorage.getItem('token'))
    const response = await fetch('http://87.247.187.217:31921/movies/search?' + query, {
      headers: new Headers(
        {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token'),
          'Accept': 'application/json'
        }),
      method: 'GET',
      mode: 'cors'
    });
    const data = await response.json();
    setIsLoading(false);
    if (data.status == 200) {
      setItems(data.data)
    } else {
      notify("An unexpected error happened: " + data.data)
    }
  }

  async function handleSearch2(filter) {
    const query = 'searchValue=' + searchValue + "&filter=" + filter + '&sortedBy=' + sortby
    console.log("search query: " + query)
    setIsLoading(true);
    console.log("token is: " + localStorage.getItem('token'))
    const response = await fetch('http://87.247.187.217:31921/movies/search?' + query, {
      headers: new Headers(
        {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token'),
          'Accept': 'application/json'
        }),
      method: 'GET',
      mode: 'cors'
    });
    const data = await response.json();
    setIsLoading(false);
    if (data.status == 200) {
      setItems(data.data)
    } else {
      notify("An unexpected error happened: " + data.data)
    }
  }

  useEffect(() => {
    handleSearch2("name")
  }, [sortby])

  return (
    <form
      onSubmit={() => {
        return handleSearch2("name");
      }}
      className="search-bar"
    >
      <div className="dropdown">
        <button className="dropbtn">
          جستجو بر اساس
          <i className="fa fa-sort-desc custome-drop-icon"></i>
        </button>

        <div className="dropdown-content">
          <button
            className="navbar-button"
            onClick={(event) => {
              handleSearch(event, "name");
            }}
          >
            <p className="sort-by-items">نام</p>
          </button>

          <button
            className="navbar-button"
            onClick={(event) => {
              handleSearch(event, "genre");
            }}
          >
            <p className="sort-by-items">ژانر</p>
          </button>

          <button
            className="navbar-button"
            onClick={(event) => {
              handleSearch(event, "releaseDate");
            }}
          >
            <p className="sort-by-items">تاریخ تولید</p>
          </button>
        </div>
      </div>
      <input
        type="text"
        className="search-text-input custome-search-input"
        value={searchValue}
        onChange={handleSearchValueChange}
      />
    </form>
  );
}

function MoviesNavbar({ notify, setItems, sortby, searchValue, setSearchValue, setIsLoading }) {
  return (
    <header id="navbar">
      <nav className="navbar">
        <NavbarLogo />

        <SearchBar notify={notify} setItems={setItems} sortby={sortby} searchValue={searchValue} setSearchValue={setSearchValue} setIsLoading={setIsLoading} />

        <NavbarUserIcon notify={notify} />
      </nav>
    </header>
  );
}

export default MoviesNavbar;
