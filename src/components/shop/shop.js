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
    //fetch shop products action creator
    //set navbar links
    //filter product with links
    //set header navbar links
  }

  render() {
    return <div className="shop">Shop</div>;
    //searchbar
    //product component
    //cart button
  }
}
function mapStateToProps(state) {
  return { state };
}

Shop = connect(mapStateToProps, actions)(Shop);
export default Shop;
