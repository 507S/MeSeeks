import React from "react";
import "../../styles/global/user global/UserLoginForm.css";
import UserAuthenticationLinks from "./UserAuthenticationLinks";
import UserForgetPasswordLink from "./UserForgetPasswordLink";
import UserLoginButton from "./UserLoginButton";
import UserLoginCheckbox from "./UserLoginCheckbox";
import UserLoginCheckBoxLabel from "./UserLoginCheckBoxLabel";
import UserLoginForm from "./UserLoginForm";
import UserLoginHeaderImage from "./UserLoginHeaderImage";
import UserLoginHeadline from "./UserLoginHeadline";
import UserLoginSideImage from "./UserLoginSideImage";
import UserLoginTextInput from "./UserLoginTextInput";
import UserRegistrationLink from "./UserRegistrationLink";

export default function UserLoginLayout() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-7 col-md-8 d-none d-md-block">
          <UserLoginSideImage />
        </div>
        <div className="col-lg-5 col-md-4 infinity-form-container">
          <div className="col-lg-9 col-md-12 col-sm-8 col-xs-12 infinity-form">
            <UserLoginHeaderImage />
            <UserLoginHeadline headline="Login " />
            <UserLoginForm className="px-3" method="POST">
              {/* <!-- Input Box --> */}
              <UserLoginTextInput
                className="fa fa-envelope"
                type="email"
                name="email"
                placeholder="Email Address"
                tabIndex="10"
              />
              <UserLoginTextInput
                className="fa fa-lock"
                type="password"
                name="password"
                placeholder="Password"
                tabIndex="10"
              />

              {/* <!--Remember Checkbox --> */}
              <div class="row mb-3">
                <div class="col-auto d-flex align-items-center">
                  <div class="custom-control custom-checkbox">
                    <UserLoginCheckbox
                      type="checkbox"
                      className="custom-control-input"
                      id="cb1"
                    />
                    <UserLoginCheckBoxLabel
                      className="custom-control-label"
                      labelText="Remember me"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- Login Button --> */}
              <UserLoginButton type="submit" buttonText="submit" />
              {/* <!-- Forget Password --> */}
              <UserForgetPasswordLink
                className="forget-link"
                linkText="Forgot password?"
              />
              {/* Other Credentials */}
              <div className="text-center mb-2">
                <div className="text-center mb-3" style={{ color: "#777" }}>
                  or login with
                </div>
                {/* #Other Authentication links */}
                {/* <!-- Facebook Button --> */}
                <UserAuthenticationLinks
                  className="btn btn-social btn-facebook"
                  authenticationLinkText="Facebook"
                />
                {/* <!-- Google Button --> */}
                <UserAuthenticationLinks
                  className="btn btn-social btn-google"
                  authenticationLinkText="Google"
                />
                {/* <!-- Twitter Button --> */}
                <UserAuthenticationLinks
                  className="btn btn-social btn-twitter"
                  authenticationLinkText="Twitter"
                />
              </div>
              {/* #Registration link */}
              <UserRegistrationLink registrationLinkText="Register here" />
            </UserLoginForm>
          </div>
          {/* <!-- FORM END --> */}
        </div>
        {/* <!-- FORM CONTAINER END --> */}
      </div>
    </div>
  );
}
