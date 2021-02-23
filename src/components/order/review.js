import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";
import PageTitle from "../page-title";
import ReviewForm from "./review-form";

class Review extends Component {
  componentDidMount() {
    this.props.setHeaderLinks([]);
    this.props.setNavbarLinks([]);
  }
  onSubmit = fields => {
    console.log("Review Form fields: ", fields);
  };
  render() {
    let subtotal = 0;
    const subtotal = this.props.cartProducts.map(cartProduct => {
      subtotal += cartProduct.quantity * cartProduct.product.price;
    });
    return (
      <div className="review">
        <PageTitle className="review__page-title" title="Order Review" />
        <ReviewForm className="review__form" onSubmit={this.onSubmit} subtotal={subtotal} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { cartProducts } = state.user;
  return cartProducts;
}

Review = connect(mapStateToProps, actions)(Review);
export default Review;
