/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class ShopHeader extends Component {
  render() {
    return (
      <div className="shop-header">
        Store
        <p className="cart-num">{this.props.count}</p>
      </div>
    );
  }
}

export default ShopHeader;
