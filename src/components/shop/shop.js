import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";

class Shop extends Component {
  componentDidMount() {
    const headerLinks = [
      {
        _id: 0,
        title: "Login",
        path: "/signup",
      },
    ];
    this.props.setHeaderLinks(headerLinks);
    this.props.fetchShopCategories();

    //filter product with links
    this.props.fetchShopProducts();

    //set header navbar links
  }

  shouldComponentUpdate(nextProps) {
    if (this.props != nextProps) {
      this.props.setNavbarLinks(
        nextProps.categories,
        _id => this.props.filterProductsByCategoryId
      );
    }
    return true;
  }
  render() {
    return <div className="shop">Shop</div>;
    //searchbar
    //product component
    //cart button
  }
}
function mapStateToProps(state) {
  const { categories } = state.shop;
  return { categories };
}

Shop = connect(mapStateToProps, actions)(Shop);
export default Shop;
