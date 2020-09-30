import React from "react";
import PropTypes from "prop-types";

function SearchCompany({ companyNm }) {
  return (
    <div>
      <div>
        <div className="search__movie__companyNm">{companyNm}</div>
      </div>
    </div>
  );
}

SearchCompany.propTypes = {
  id: PropTypes.string.isRequired,
};

export default SearchCompany;
