import React, { Component } from 'react';

import './aside.scss';

class Aside extends Component {


  onToggleClick() {
    
    console.log("On toggle click");
    console.log(this.props);
  }

  render() {

    return (
      <div class="aside">

        <div class="aside-toggle" onClick={this.onToggleClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="menu products-menu">
          <div class="menu__title">
            Menu
          </div>
          <ul class="menu__list">

            <li class="menu__item">
              <a href="#" class="menu__link">About</a>
            </li>
            <li class="menu__item">
              <a href="#" class="menu__link">Surf</a>
            </li>
            <li class="menu__item">
              <a href="#" class="menu__link">Surf Apparel</a>
            </li>
            <li class="menu__item">
              <a href="#" class="menu__link">Accessories</a>
            </li>
            <li class="menu__item">
              <a href="#" class="menu__link">Sale</a>
            </li>
            <li class="menu__item">
              <a href="#" class="menu__link">Brands</a>
            </li>

          </ul>
        </div>

        <div class="menu menu-categories">
          <div class="menu__title">
            Category options
          </div>
          <ul class="menu__list">

            <li class="menu__item">
              <a href="#" class="menu__link">Men</a>
            </li>
            <li class="menu__item">
              <a href="#" class="menu__link">Women</a>
            </li>
            <li class="menu__item">
              <a href="#" class="menu__link">Kids</a>
            </li>

          </ul>
        </div>

      </div>

    );
  }
}

export default Aside;