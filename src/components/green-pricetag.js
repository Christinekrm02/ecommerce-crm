import React, { Component } from "react";

class GreenPriceTag extends Component {
  render() {
    const { title, className } = this.props;
    return <div className={`${className} green-price-tag`}>${title}</div>;
  }
}

export default GreenPriceTag;
