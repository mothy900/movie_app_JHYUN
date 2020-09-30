import React from "react";
import PropTypes from "prop-types";

function SearchDirector({ peopleNm }) {
  return (
    <div>
      <div>
        <div className="search__movie__peopleNm">{peopleNm}</div>
      </div>
    </div>
  );
}

SearchDirector.propTypes = {
  id: PropTypes.string.isRequired,
};

export default SearchDirector;
