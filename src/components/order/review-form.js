import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import history from "../../history";
import { FormButton } from "../form-fields";

import ReviewProducts from "./review-products";

class ReviewForm extends Component {
  render() {
    const { className, handleSubmit, subtotal } = this.props;
    let tax = 0.16;

    return (
      <form onSubmit={handleSubmit} className={`${className} review-form`}>
        <div className="review-form__legend">
          <div className="review-form__legend__title">Name</div>
          <div className="review-form__legend__quantity">Amount</div>
          <div className="review-form__legend__price">Price</div>
        </div>
        <ReviewProducts className="review-form__products" />
        {/* Buttons */}
        <div className="review-form__line"></div>
        <Field
          className="review-form__proceed"
          onClick={() => history.push("/information/shipping")}
          name="proceed"
          type="submit"
          title="Proceed to Checkout"
          component={FormButton}
        />
        <Field
          className="review-form__back"
          onClick={() => history.push("/shop")}
          name="back"
          type="button"
          title="Back"
          short={true}
          component={FormButton}
        />
        <div className="review-form__details review-details">
          <div className="review-details__subtotal review-detail">
            <div className="review-detail__title">Subtotal</div>
            <div className="review-detail__price">${subtotal}</div>
          </div>
          <div className="review-details__subtotal review-detail">
            <div className="review-detail__title">Tax</div>
            <div className="review-detail__price">{tax}</div>
          </div>
          <div className="review-details__subtotal review-detail">
            <div className="review-detail__title">Shipping</div>
            <div className="review-detail__price">$8.00</div>
          </div>
          <div className="review-details__total review-detail review-detail-green">
            <div className="review-detail__title review-detail-green__title">Shipping</div>
            <div className="review-detail__price review-detail-green__title">${subtotal + tax}</div>
          </div>

        </div>
      </form>
    );
  }
}

ReviewForm = reduxForm({
  form: "ReviewForm",
})(ReviewForm);
export default ReviewForm;
