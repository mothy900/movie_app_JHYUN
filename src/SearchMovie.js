import React from "react";
import PropTypes from "prop-types";
import SearchDirector from "./Director";
import SearchCompany from "./Company";

function SearchMovie({
  movieCd,
  movieNm,
  openDt,
  prdtYear,
  nationAlt,
  genreAlt,
  directors,
  companys,
}) {
  return (
    <div className="search__movie">
      <div className="search__movie__data">
        <div className="search__movie__factor search__movie__movieNm">
          <span>{movieNm}</span>
        </div>
        <div className="search__movie__factor search__movie__openDt">
          <span>{openDt}</span>
        </div>
        <div className="search__movie__factor search__movie__year">
          <span>{prdtYear}</span>
        </div>

        <div className="search__movie__factor search__movie__nation">
          <span>{nationAlt}</span>
        </div>
        <div className="search__movie__factor search__movie__genre">
          <span>{genreAlt}</span>
        </div>
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
  movieCd: PropTypes.string.isRequired,
  movieNm: PropTypes.string.isRequired,
  openDt: PropTypes.string.isRequired,
  prdtYear: PropTypes.string.isRequired,
  nationAlt: PropTypes.string.isRequired,
  genreAlt: PropTypes.string.isRequired,
  directors: PropTypes.array.isRequired,
  companys: PropTypes.array.isRequired,
};
export default SearchMovie;
