import React, { Component } from "react";
import CartProduct from "./shop-cart-product";
import CartButton from "./cart-button"

import { connect } from "react-redux";
import * as actions from "../../actions";


function CartContent({ className, products }) {
  let count = products.length;
  let productsJsx = products.map(product => (
    <CartProduct {...product} key={product} />
  ));
  return (
    <div className={`${className} cart-content`}>
      <div className="cart-content__title">Cart ({count})</div>
      <div className="cart-content__products">{productsJsx}</div>
      <CartFooter className="cart-content__footer" products={products} />
    </div>
  );
}

function CartFooter({ className, products }) {
  const price = 8.0;
  return (
    <div className={`${className} cart-footer`}>
      <a className="cart-footer__checkout"> Checkout </a>
      <div className="cart-footer__sbutotal"> Subtotal </div>
      <div className="cart-footer__price"> ${price}</div>
    </div>
  );
}
class ShopCart extends Component {
  componentDidMount() {
    this.props.fetchCartProducts();
  }

  handleAddToCart = () => {
    if (
      document.getElementById("shop-cart").classList.contains("cart-hidden")
    ) {
      document.getElementById("shop-cart").classList.remove("cart-hidden");
    } else {
      document.getElementById("shop-cart").classList.add("cart-hidden");
    }
  };
  render() {
    const { className } = this.props;
    return (
      <div id="shop-cart" className={`${className} shop-cart cart-hidden`}>
        <CartButton
          className="shop-cart__toggle"
          icon="fas fa-times"
          onClick={this.handleAddToCart}
        />
        <CartContent
          className="shop-cart__content"
          products={this.props.cartProducts}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { cartProducts } = state.user;
  return {
    cartProducts,
  };
}

ShopCart = connect(mapStateToProps, actions)(ShopCart);
export default ShopCart;
