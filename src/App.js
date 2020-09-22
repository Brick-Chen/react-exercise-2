import React, { Component } from 'react';
import './App.scss';
import ProductList from './ProductList';
import ShopHeader from './ShopHeader';

class App extends Component {
  state = { count: 1 };

  handleAddToCart = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <main className="app">
        <ShopHeader count={this.state.count} />
        <ProductList handle={this.handleAddToCart} />
      </main>
    );
  }
}

export default App;
