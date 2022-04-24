import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Link, BrowserRouter, Routes } from "react-router-dom";
import "./index.css";
import WatchlistPage from "./watchlist/Watchlist";
import LoginPage from "./users/Login";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ActorPage from "./actor/Actor";
import MoviesPage from "./movies/Movies";
import SignupPage from "./users/SignupPage";
import MoviePageWrapper from "./movie/movie";

const root = ReactDOM.createRoot(document.getElementById("root"));
const routs = (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/actor/:id" element={<ActorPage />} />
      <Route exact path="/movie/:id" element={<MoviePageWrapper />} />
      <Route exact path="/watchlist" element={<WatchlistPage />} />
      <Route exact path="/login" element={<LoginPage />} />
      <Route exact path="/movies" element={<MoviesPage />} />
      <Route exact path="/signup" element={<SignupPage />} />
      {/* <Route path="*" element={<NotFound/>}/> */}
    </Routes>
  </BrowserRouter>
);
root.render(routs);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
