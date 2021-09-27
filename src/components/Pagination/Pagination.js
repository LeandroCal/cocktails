import React from "react";

import "./Pagination.scss";

function Pagination({ page, setPage, setCocktails }) {
  const onChangePage = (value) => {
    setCocktails([]);
    setPage(value);
  };

  return (
    <div className="pagination">
      <div
        className={`pagination-page ${page === 1 ? "selected" : ""}`}
        onClick={() => onChangePage(1)}
      >
        1
      </div>
      <div
        className={`pagination-page ${page === 2 ? "selected" : ""}`}
        onClick={() => onChangePage(2)}
      >
        2
      </div>
      <div
        className={`pagination-page ${page === 3 ? "selected" : ""}`}
        onClick={() => onChangePage(3)}
      >
        3
      </div>
    </div>
  );
}

export default Pagination;
