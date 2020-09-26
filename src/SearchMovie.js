import React from "react";
import PropTypes from "prop-types";

function SearchMovie({
  movieNm,
  openDt,
  prdtYear,
  prdtStatNm,
  nationAlt,
  genreAlt,
  directors,
  companys,
}) {
  return (
    <div className="search__movie">
      <div className="search__movie__data">
        <div className="search__movie__movieNm">{movieNm}</div>
        <div className="search__movie__openDt">{openDt}</div>
        <div className="search__movie__year">{prdtYear}</div>
        <div className="search__movie__statNm">{prdtStatNm}</div>
        <div className="search__movie__nation">{nationAlt}</div>
        <div className="search__movie__genre">{genreAlt}</div>
        <div className="search__movie__directors">{directors}</div>
        <div className="search__movie__company">{companys}</div>
      </div>
    </div>
  );
}

SearchMovie.propTypes = {
  id: PropTypes.string.isRequired,
};
export default SearchMovie;
