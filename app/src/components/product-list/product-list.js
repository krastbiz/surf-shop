import React, { Component } from 'react';
import ProductItem from '../product-item';
import { connect } from 'react-redux';
import { withProductService } from '../hoc';
import { productsLoaded } from '../../actions';
import compose from '../../utils';
import LoadingSpinner from '../loading-spinner';

import './product-list.scss';

class ProductList extends Component {

  componentDidMount() {
    const { productService, productsLoaded } = this.props;

    productService.getProducts()
    .then((data) => productsLoaded(data));
  }

  render() {

    const { products, loading } = this.props;

    if (loading) {
      return (
        <LoadingSpinner />
      );
    }


    return (
      <div className="products-list">

        {
          products.map((p) => {
            return <ProductItem key={p.id} product={p}/>;
          })
        }

      </div>
    );
  }
};

const mapStateToProps = ({products, loading}) => {
  return {
    products,
    loading
  }
};

const mapDispatchToProps = {
  productsLoaded
}

export default compose(
  withProductService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ProductList);
