import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { FormInput } from "../form-fields";

class SignInForm extends Component {
  render() {
    {
      /* obj passed in from signin.js. i.e sign-in__form */
    }
    const { className } = this.props;
    return (
      <form className={`${className} sign-in-form`}>
        <Field
          className="sign-in-form__email"
          name="email"
          type="email"
          title="Email"
          placeholder="Tell me your email!"
          component={FormInput}
        />
        <Field
          className="sign-in-form__password"
          name="password"
          type="password"
          title="Password"
          placeholder="Password, please"
          component={FormInput}
        />
      </form>
    );
  }
}

SignInForm = reduxForm({
  form: "SignInForm",
})(SignInForm);
export default SignInForm;
