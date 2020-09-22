/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class Category extends Component {
  render() {
    const typeName = this.props;
    return <div className="category">{typeName.category}</div>;
  }
}

export default Category;
