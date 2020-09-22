/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Product from './Product';
import Category from './Category';

const url = 'http://localhost:3000/products';

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        { name: '', price: '' },
        { name: '', price: '' },
        { name: '', price: '' },
        { name: '', price: '' },
        { name: '', price: '' },
        { name: '', price: '' },
      ],
    };
  }

  componentDidMount() {
    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return Promise.reject(response.statusText);
        }
      })
      .then((result) => {
        this.setState({
          products: result,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="phone-list">
        <Category category="iPhone" />
        <div className="iPhone">
          <Product
            name={this.state.products[0].name}
            price={this.state.products[0].price}
            handler={this.props.handle}
          />
          <Product
            name={this.state.products[1].name}
            price={this.state.products[1].price}
            handler={this.props.handle}
          />
          <Product
            name={this.state.products[2].name}
            price={this.state.products[2].price}
            handler={this.props.handle}
          />
        </div>
        <Category category="HUAWEI" />
        <Product
          name={this.state.products[3].name}
          price={this.state.products[3].price}
          handler={this.props.handle}
        />
        <Product
          name={this.state.products[4].name}
          price={this.state.products[4].price}
          handler={this.props.handle}
        />
        <Product
          name={this.state.products[5].name}
          price={this.state.products[5].price}
          handler={this.props.handle}
        />
      </div>
    );
  }
}

export default ProductList;
