import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";
import ShopProduct from "./shop-product";
import ShopSearchBar from "./shop-searchbar";

class Shop extends Component {
  componentDidMount() {
    const headerLinks = [
      {
        _id: 0,
        title: "Login",
        path: "/signin",
      },
    ];
    this.props.setHeaderLinks(headerLinks);
    this.props.fetchShopCategories();

    //filter product with links
    this.props.fetchShopProducts();
  }

  shouldComponentUpdate(nextProps) {
    if (this.props != nextProps) {
      this.props.setNavbarLinks(nextProps.categories, _id =>
        this.props.filterProductByCategoryId(_id)
      );
    }
    return true;
  }

  onSubmit = fields => {
    console.log("onSubmit", fields);
    this.props.filterProductsWithQuery(fields);
  };
  render() {
    //searchbar
    //product component
    return (
      <div className="shop">
        <ShopSearchBar onSubmit={this.onSubmit} className="shop__search-bar" />
        <div className="shop__products">
          {this.props.filteredProducts.map(product => {
            return <ShopProduct {...product} key={product._id} />;
          })}
        </div>
      </div>
    );
    //cart button
  }
}
function mapStateToProps(state) {
  const { categories, filteredProducts } = state.shop;
  return { categories, filteredProducts };
}

Shop = connect(mapStateToProps, actions)(Shop);
export default Shop;
