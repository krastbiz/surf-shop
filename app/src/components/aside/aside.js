import React, { Component } from 'react';

import './aside.scss';
import { connect } from 'react-redux';

import { menuToggled } from '../../actions';

class Aside extends Component {

  render() {

    const { onMenuToggled, menu } = this.props;
    return (
      <div class={`aside ${menu.active ? "aside_active" : ""}`}>

        <div class={`aside-toggle ${menu.active ? "aside-toggle_active" : ""}`} onClick={() => onMenuToggled()}>
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

const mapStateToProps = ({ menu }) => {
  return {
    menu
  }
}

const mapDispatchToProps = {
  onMenuToggled: menuToggled
};


export default connect(mapStateToProps, mapDispatchToProps)(Aside);