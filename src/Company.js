import React from "react";
import PropTypes from "prop-types";

function SearchCompany({ companyNm }) {
  return (
    <div>
      <div>
        <div className="search__movie__factor search__movie__companyNm">
          <span>{companyNm}</span>
        </div>
      </div>
    </div>
  );
}

SearchCompany.propTypes = {
  id: PropTypes.string.isRequired,
  companyNm: PropTypes.string.isRequired,
};

export default SearchCompany;
