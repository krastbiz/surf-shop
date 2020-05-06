import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import { withProductService } from '../components/hoc';
import { fetchProducts, itemAddedToCart } from '../actions';
import compose from '../utils';
import LoadingSpinner from '../components/loading-spinner';

import ProductList from '../components/product-list';
import Pagination from '../components/pagination';

class ProductListContainer extends Component {

  componentDidMount() {

    this.props.fetchProducts();
  }

  render() {

    const { productList, productList: { error }, itemAddedToCart } = this.props;

    if (productList.loading) {
      return (
        <LoadingSpinner />
      );
    }

    // TODO Create Error Indicator
    if (error) {
      return (
        <p>Error!</p>
      );
    }

    return (
      <Fragment>
        <ProductList products={productList.products} onAddToCart={itemAddedToCart}/>
        <Pagination pageInfo={productList.pagination}/>
      </Fragment>

    );
  }
};

const mapStateToProps = ({productList}) => {
  return {
    productList
  }
};

const mapDispatchToProps = (dispatch, { productService }) => {
  return {
    fetchProducts: fetchProducts(productService, dispatch),
    itemAddedToCart: (id) => dispatch(itemAddedToCart(id))
  }
};

export default compose(
  withProductService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ProductListContainer);