import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class SignInForm extends Component {
  render() {
    {
      /* obj passed in from signin.js. i.e sign-in__form */
    }
    const { className } = this.props;
    return <form className={`${className} sign-in-form`}>Sign in here</form>;
  }
}

SignInForm = reduxForm({
  form: "SignInForm",
})(SignInForm);
export default SignInForm;
