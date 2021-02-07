import React, { Component } from "react";
import PageTitle from "../page-title";
import PurchaseDetail from "./purchase-detail";
import Purchases from "./purchases";

class PurchaseHistory extends Component {
  render() {
    return (
      <div className="purchase-history">
        <PageTitle
          className="purchase-history__page-title"
          title="Purchase History"
        />
        <div className="purchase-history__content">
          <Purchases className="purchase-history__purchases" />
          <PurchaseDetail className="purchase-history__detail " />
        </div>
        <div className="purchase_history__bottom-border"></div>
      </div>
    );
  }
}

export default PurchaseHistory;
