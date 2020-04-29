import React, { Component } from 'react';

import './footer.scss';

class Footer extends Component {

  render() {
    
    return (
      <footer class="footer">

        <div class="container d-flex justify-end footer-container">
          <div class="footer-item">
            <div class="footer-item__title">
              About Us
            </div>
            <div class="footer-item__subtitle">
              Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit. Aenean commodo ligula
              eget dolor. Aenean massa. Cum sociis
              natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Donec
              quam felis, ultricies nec, pellentesque eu,
              pretium quis, sem. 
            </div>

            <div class="footer-item__contact">
              <div class="footer-item__contact-label">Phone:</div>
              <div class="footer-item__contact-value">1-999-342-9876</div>
            </div>
            <div class="footer-item__contact">
              <div class="footer-item__contact-label">Email:</div>
              <div class="footer-item__contact-value"><a href="mailto:info@surfhouse.com">info@surfhouse.com</a></div>
            </div>
          </div>
        </div>

      </footer>
    );
  }
}

export default Footer;