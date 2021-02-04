import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { FormInput, FormButton } from "../form-fields";

class SignInForm extends Component {
  render() {
    {
      /* obj passed in from signin.js. i.e sign-in__form */
    }
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
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
          placeholder="Password,"
          component={FormInput}
        />
        <Field
          className="sign-in-form__login"
          onClick={() => console.log("submit button pressed")}
          name="login"
          type="submit"
          title="Login"
          placeholder="login,"
          component={FormButton}
        />
      </form>
    );
  }
}

SignInForm = reduxForm({
  form: "SignInForm",
})(SignInForm);
export default SignInForm;
