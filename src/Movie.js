import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ movieNm, rank, openDt, audiAcc, audiCnt }) {
  return (
    <div className="movie">
      <div className="movie__data">
        <div>Rnaking</div>
        <div>Movie Title</div>
        <div></div>
        <div></div>
        <div></div>
        <div className="movie__eachInfo movie__rank">
          <h3>Ranking : {rank}</h3>
        </div>
        <div className="movie__eachInfo movie__name">
          <h3>{movieNm}</h3>
        </div>
        <div className="movie__eachInfo movie__date">
          <h3>개봉 날짜 : {openDt}</h3>
        </div>
        <div className="movie__eachInfo movie__rate">
          <h3>예매율 : {audiCnt}</h3>
        </div>
        <div className="movie__eachInfo movie__cnt">
          <h3>누적 관객 수 : {audiAcc}</h3>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Movie;
