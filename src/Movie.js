import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ movieNm, rank, openDt, audiAcc, audiCnt }) {
  return (
    <div className="movie">
      <div className="movie__data">
        <h3>Ranking : {rank}</h3>
        <h3>Movie Name : {movieNm}</h3>
        <h3>Open Date : {openDt}</h3>
        <h3>Reservation Rate : {audiCnt}</h3>
        <h3>누적 관객 수 : {audiAcc}</h3>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Movie;
