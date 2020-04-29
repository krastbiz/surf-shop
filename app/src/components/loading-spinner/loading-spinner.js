import React from 'react';

import './loading-spinner.scss';

const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-center">
      <div class="loadingio-spinner-pulse">
        <div class="spinner-inner">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      </div>
  );
}

export default LoadingSpinner;