import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { FormInput, FormButton } from "../form-fields";
import QuickLinksDetails from "../quicklinks-details";

import history from "../../history";

class SignUpForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    const links = [
      {
        _id: 0,
        title: "Not registered yet? Create an account",
        onClick: () => history.push("/signup"),
      },
      {
        _id: 1,
        title: "Forgot account email?",
        onClick: () => console.log("forgot user info"),
      },
      {
        _id: 2,
        title: "Forgot password?",
        onClick: () => console.log("forgot password"),
      },
    ];
    return (
      <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
        <Field
          className="sign-up-form__name"
          name="name"
          type="Name"
          title="name"
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
          className="sign-up-form__confirm-password"
          name="confirm"
          type="password"
          title="Confirm Password"
          placeholder="Confirm Password"
          component={FormInput}
        />

        <div className="sign-up-form__line"></div>
        <Field
          className="sign-up-form__login"
          onClick={() => console.log("submit button pressed")}
          name="login"
          type="submit"
          title="Login"
          // placeholder="login,"
          component={FormButton}
        />
        <Field
          className="sign-up-form__back"
          onClick={() => console.log("go back")}
          name="back"
          type="button"
          title="Back"
          short={true}
          component={FormButton}
        />
        <QuickLinksDetails
          className="sign-up-form__details"
          title="QuickLinks"
          links={links}
        />
      </form>
    );
  }
}

SignUpForm = reduxForm({
  form: "SignUpForm",
})(SignUpForm);
export default SignUpForm;
