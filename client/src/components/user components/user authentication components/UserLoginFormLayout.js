import React from "react";
import "../../../styles/global/user global/UserLoginForm.css";
import UserAuthenticationLinks from "./UserAuthenticationLinks";
import UserAuthForm from "./UserAuthForm";
import UserAuthFormButton from "./UserAuthFormButton";
import UserAuthFormHeaderImage from "./UserAuthFormHeaderImage";
import UserLoginHeadline from "./UserAuthFormHeadline";
import UserAuthFormTextInputCredentials from "./UserAuthFormTextInputCredentials";
import UserForgetPasswordLink from "./UserForgetPasswordLink";
import UserLoginCheckbox from "./UserLoginCheckbox";
import UserLoginCheckBoxLabel from "./UserLoginCheckBoxLabel";
import UserLoginSideImage from "./UserLoginFormSideImage";
import UserLoginRegisterFormLink from "./UserLoginRegisterFormLink";

export default function UserLoginFormLayout() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-7 col-md-8 d-none d-md-block">
          <UserLoginSideImage />
        </div>
        <div className="col-lg-5 col-md-4 infinity-form-container">
          <div className="col-lg-9 col-md-12 col-sm-8 col-xs-12 infinity-form">
            <UserAuthFormHeaderImage />
            <UserLoginHeadline headline="Login " />
            <UserAuthForm className="px-3" method="POST">
              {/* <!-- Input Box --> */}
              <UserAuthFormTextInputCredentials
                className="fa fa-envelope"
                type="email"
                name="email"
                placeholder="Email Address"
                tabIndex="10"
              />
              <UserAuthFormTextInputCredentials
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
              <UserAuthFormButton type="submit" buttonText="submit" />
              {/* <!-- Forget Password --> */}
              <UserForgetPasswordLink
                redirectLink="/users-reset-password"
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
                  redirectLink="facebook"
                  className="btn btn-social btn-facebook"
                  authenticationLinkText="Facebook"
                />
                {/* <!-- Google Button --> */}
                <UserAuthenticationLinks
                  redirectLink="google"
                  className="btn btn-social btn-google"
                  authenticationLinkText="Google"
                />
                {/* <!-- Twitter Button --> */}
                <UserAuthenticationLinks
                  redirectLink="twitter"
                  className="btn btn-social btn-twitter"
                  authenticationLinkText="Twitter"
                />
              </div>
              {/* #Registration link */}
              <UserLoginRegisterFormLink
                linkQueryText="Don't have an account?"
                registrationLinkText="Register here"
                redirectLink="/users-registration"
              />
            </UserAuthForm>
          </div>
          {/* <!-- FORM END --> */}
        </div>
        {/* <!-- FORM CONTAINER END --> */}
      </div>
    </div>
  );
}
