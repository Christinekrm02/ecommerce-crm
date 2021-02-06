import React, { Component } from "react";

class Account extends Component {
  renderContent() {
    return <hi>content</hi>;
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default Account;
