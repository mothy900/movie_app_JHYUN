import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ movieNm, rank, openDt, audiAcc, audiCnt }) {
  return (
    <div className="movie">
      <div className="movie__data">
        <div className="movie__eachInfo movie__rank">{rank}</div>
        <div className="movie__eachInfo movie__name">{movieNm}</div>
        <div className="movie__eachInfo movie__date">{openDt}</div>
        <div className="movie__eachInfo movie__rate">{audiCnt}</div>
        <div className="movie__eachInfo movie__cnt">{audiAcc}</div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Movie;
