import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { FormInput, FormButton } from "../form-fields";
import QuickLinksDetails from "../quicklinks-details";

import history from "../../history";

class SignUpForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    const infos = [
      {
        _id: 0,
        title: "At least 6 characters",
      },
      {
        _id: 1,
        title: "At least one number ",
      },
      {
        _id: 2,
        title: "At least one symbol",
      },
    ];
    return (
      <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
        <Field
          className="sign-up-form__name"
          name="name"
          type="name"
          title="Name"
          placeholder="Name"
          component={FormInput}
        />
        <Field
          className="sign-up-form__email"
          name="email"
          type="email"
          title="Email"
          placeholder="Tell me your email!"
          component={FormInput}
        />
        <Field
          className="sign-up-form__password"
          name="password"
          type="password"
          title="Password"
          placeholder="Password"
          component={FormInput}
        />
        <Field
          className="sign-up-form__confirm"
          name="confirm"
          type="password"
          title="Confirm Password"
          placeholder="Confirm Password"
          component={FormInput}
        />

        {/* Buttons */}
        <div className="sign-up-form__line"></div>
        <Field
          className="sign-up-form__login"
          onClick={() => history.push("/account")}
          name="register"
          type="submit"
          title="Create an Account"
          component={FormButton}
        />
        <Field
          className="sign-up-form__back"
          onClick={() => history.push("/signin")}
          name="back"
          type="button"
          title="Back"
          short={true}
          component={FormButton}
        />
        <QuickLinksDetails
          className="sign-up-form__details"
          title="Password Requirements"
          infos={infos}
        />
      </form>
    );
  }
}

SignUpForm = reduxForm({
  form: "SignUpForm",
})(SignUpForm);
export default SignUpForm;
