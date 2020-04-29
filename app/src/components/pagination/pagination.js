import React from 'react';

import { connect } from 'react-redux';

import './pagination.scss';

const Pagination = (props) => {
  console.log("Pagination");
  const { loading, pagination: { currPage, itemsPerPage }, totalItems} = props;

  if (loading) {
    return null;
  }

  const totalPages = Math.ceil(totalItems / itemsPerPage);
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

const mapStateToProps = ({loading, pagination, products}) => {
  return {
    loading,
    pagination,
    totalItems: products.length
  };
}

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)