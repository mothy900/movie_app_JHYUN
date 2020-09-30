import React from "react";
import PropTypes from "prop-types";
import SearchDirector from "./Director";
import SearchCompany from "./Company";

function SearchMovie({
  movieCd,
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
        {directors.map((director) => (
          <SearchDirector
            key={movieCd}
            id={movieCd}
            peopleNm={director.peopleNm}
          />
        ))}
        {companys.map((company) => (
          <SearchCompany
            key={movieCd}
            id={movieCd}
            companyNm={company.companyNm}
          />
        ))}
      </div>
    </div>
  );
}

SearchMovie.propTypes = {
  id: PropTypes.string.isRequired,
};
export default SearchMovie;
