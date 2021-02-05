import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { FormInput, FormButton } from "../form-fields";
import QuickLinksDetails from "../quicklinks-details";

class SignInForm extends Component {
  render() {
    {
      /* obj passed in from signin.js. i.e sign-in__form */
    }
    const { className, handleSubmit } = this.props;
    const links = [
      {
        _id: 0,
        title: "Not registered yet? Create an account",
        onClick: () => console.log("click here"),
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
          placeholder="Password"
          component={FormInput}
        />
        <div className="sign-in-form__line"></div>
        <Field
          className="sign-in-form__login"
          onClick={() => console.log("submit button pressed")}
          name="login"
          type="submit"
          title="Login"
          placeholder="login,"
          component={FormButton}
        />
        <QuickLinksDetails
          className="sign-in-form__details"
          title="QuickLinks"
          links={links}
        />
      </form>
    );
  }
}

SignInForm = reduxForm({
  form: "SignInForm",
})(SignInForm);
export default SignInForm;
