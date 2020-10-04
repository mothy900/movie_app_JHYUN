import React from "react";
import PropTypes from "prop-types";

function SearchDirector({ peopleNm }) {
  return (
    <div>
      <div>
        <div className="search__movie__factor search__movie__peopleNm">
          <span>{peopleNm}</span>
        </div>
      </div>
    </div>
  );
}

SearchDirector.propTypes = {
  id: PropTypes.string.isRequired,
  peopleNm: PropTypes.string.isRequired,
};

export default SearchDirector;
