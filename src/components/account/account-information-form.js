import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { FormInput, FormButton, LongGrayButton } from "../form-fields";

import history from "../../history";

class AccountInformationForm extends Component {
  constructor() {
    super();
    this.state = {
      showPasswords: false,
    };
  }
  render() {
    {
      /* obj passed in from signin.js. i.e sign-in__form */
    }
    const { className, handleSubmit } = this.props;

    return (
      <form
        onSubmit={handleSubmit}
        className={`${className} account-information-form`}>
        <Field
          className="account-information-form__name"
          name="name"
          type="name"
          title="Name"
          placeholder="Name"
          component={FormInput}
        />
        <Field
          className="account-information-form___email"
          name="email"
          type="email"
          title="Email"
          placeholder="Tell me your email!"
          component={FormInput}
        />
        <Field
          className="account-information-form__street-address"
          name="address"
          type="address"
          title="Street Address"
          placeholder="Street Address"
          component={FormInput}
        />
        <Field
          className="account-information-form__city"
          name="city"
          type="city"
          title="City"
          placeholder="City"
          component={FormInput}
        />
        <Field
          className="account-information-form__state"
          name="state"
          type="state"
          title="State"
          placeholder="State"
          component={FormInput}
        />
        <Field
          className="account-information-form__zipcode"
          name="zipcode"
          type="zipcode"
          title="Zipcode"
          placeholder="Zip"
          component={FormInput}
        />
        {/* shows current pwrd/ change pwrd fields */}
        {this.state.showPasswords ? (
          [
            <Field
              key={0}
              className="account-information-form__current-password"
              name="current"
              type="password"
              title="Current Password"
              placeholder="Current Password"
              component={FormInput}
            />,
            <Field
              key={1}
              className="account-information-form__new-password"
              name="new"
              type="password"
              title="New Password"
              placeholder="New Password"
              component={FormInput}
            />,
            <Field
              key={2}
              className="account-information-form__confirm-password"
              name="confirm"
              type="password"
              title="Confirm Password"
              placeholder="Confirm Password"
              component={FormInput}
            />,
          ]
        ) : (
          <Field
            className="account-information-form__change-password"
            onClick={() => this.setState({ showPasswords: true })}
            name="change-password"
            type="button"
            title="Change Password"
            labelTitle="Password"
            component={LongGrayButton}
          />
        )}
      </form>
    );
  }
}

AccountInformationForm = reduxForm({
  form: "AccountInformationForm",
})(AccountInformationForm);
export default AccountInformationForm;
