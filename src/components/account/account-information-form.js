import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { FormInput, FormButton } from "../form-fields";

import history from "../../history";

class AccountInformationForm extends Component {
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
          placeholder="Password"
          component={FormInput}
        />
        <div className="sign-in-form__line"></div>
        <Field
          className="sign-in-form__login"
          onClick={() => history.push("/account")}
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

AccountInformationForm = reduxForm({
  form: "AccountInformationForm",
})(AccountInformationForm);
export default AccountInformationForm;
