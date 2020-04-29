import React from 'react';
import { ProductServiceConsumer } from '../product-service-context';

const withProductService = () => (Wrapped) => {

  return (props) => {
    return (
      <ProductServiceConsumer>
        {
          (productService) => {
            console.log("In consumer");
            return (<Wrapped {...props} productService={productService} />);
          }
        }
      </ProductServiceConsumer>
    );
  }
};

export default withProductService;