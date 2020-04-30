import React from 'react';

import './pagination.scss';

const Pagination = (props) => {

  const { pageInfo: { currPage, itemsPerPage, totalItems } } = props;

  // Calculate total pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Create required pages
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {

    let extraCls = currPage === i ? " pagination-page__item_active" : "";

    pages.push(<div key={i} className={"pagination-page__item" + extraCls}>{i}</div>);
  }

  return (
    <div className="pagination">
      <div className="pagination-inner">
        <div className="pagination-label">Page:</div>
        <div className="pagination-controls">

          {currPage !== 1 ? (<div className="pagination-arrow pagination-arrow__left"></div>) : null}

          <div className="pagination-page__list">
            { pages.map((p) => p) }
          </div>

          {currPage !== totalPages ? (<div className="pagination-arrow pagination-arrow__right"></div>) : null}
        </div>
      </div>
    </div>
  );
};

export default Pagination;