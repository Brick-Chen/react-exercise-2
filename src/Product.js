/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import product_image_placeholder from './assets/product_image_placeholder.png';

class Product extends Component {
  render() {
    return (
      <div className="product">
        <p className="product-name">{this.props.name}</p>
        <img
          className="image-size"
          src={product_image_placeholder}
          alt=""
        ></img>
        <div className="product-footer">
          <p className="product-price">{this.props.price}</p>
          <button className="add-cart" onClick={this.props.handler}>
            add to cart
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
