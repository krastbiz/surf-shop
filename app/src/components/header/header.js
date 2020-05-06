import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// STATIC
import './header.scss';
import iconFacebook from '../../images/icons/icon-facebook.png';
import iconInstagram from '../../images/icons/icon-instagram.png';
import iconTwitter from '../../images/icons/icon-twitter.png';
import iconYoutube from '../../images/icons/icon-youtube.png';
import iconPinterest from '../../images/icons/icon-pinterest.png';

// COMPONENTS
import Cart from '../cart-nav';

class Header extends Component {

  render() {
    return (
      <header class="header">

        <div class="container">
          <nav class="header-nav">

            <Cart />

            <div class="header-nav__list">

              <a href="#" class="header-nav__link">
                <img src={iconFacebook} alt="Facebook icon" />
              </a>

              <a href="#" class="header-nav__link">
                <img src={iconTwitter} alt="Twitter icon" />
              </a>

              <a href="#" class="header-nav__link">
                <img src={iconYoutube} alt="Youtube icon" />
              </a>

              <a href="#" class="header-nav__link">
                <img src={iconPinterest} alt="Pinterest icon" />
              </a>

              <a href="#" class="header-nav__link">
                <img src={iconInstagram} alt="Instagram icon" />
              </a>

            </div>
          </nav>

          <div class="header-text">
            <h1 class="header-title">
              Welcome to Surfhouse
            </h1>
            <h2 class="header-subtitle">
              The only online store you will ever need for
              all your windsurfing and kitesurfing and SUP needs
            </h2>
          </div>
        </div>
      
      </header>
    );
  }
}


export default Header;