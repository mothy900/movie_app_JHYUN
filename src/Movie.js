import React from "react";
//import PropTypes from "prop-types";

function Movie({ movieNm, rank, openDt }) {
  return (
    <div className="movie">
      <div className="movie__data">
        <h5>ranking : {rank}</h5>
        <h3>movie name : {movieNm}</h3>
        <h3>open Data : {openDt}</h3>
      </div>
    </div>
  );
}

export default Movie;
