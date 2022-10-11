import React from "react";
import "../../../styles/global/user global/UserLoginForm.css";
import UserAuthenticationLinks from "./UserAuthenticationLinks";
import UserAuthForm from "./UserAuthForm";
import UserAuthFormButton from "./UserAuthFormButton";
import UserAuthFormHeaderImage from "./UserAuthFormHeaderImage";
import UserAuthFormHeadline from "./UserAuthFormHeadline";
import UserAuthFormTextInputCredentials from "./UserAuthFormTextInputCredentials";

import UserLoginRegisterFormLink from "./UserLoginRegisterFormLink";

import UserRegistrationSideImage from "./UserRegistrationFormSideImage";
//hello
export default function UserRegistrationFormLayout() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-7 col-md-8 d-none d-md-block">
          <UserRegistrationSideImage />
        </div>
        <div className="col-lg-5 col-md-4 infinity-form-container">
          <div className="col-lg-9 col-md-12 col-sm-8 col-xs-12 infinity-form">
            <UserAuthFormHeaderImage />
            <UserAuthFormHeadline headline="Create an account " />
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
                className="fa fa-phone "
                type="email"
                name="email"
                placeholder="Mobile Number"
                tabIndex="10"
                style={{ fontSize: "20px" }}
              />
              <UserAuthFormTextInputCredentials
                className="fa fa-lock"
                type="password"
                name="password"
                placeholder="Password"
                tabIndex="10"
              />

              {/* <!--Remember Checkbox --> */}

              {/* <!-- Login Button --> */}
              <UserAuthFormButton type="submit" buttonText="Register" />

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
                linkQueryText="Already have an account?"
                registrationLinkText="Login here"
                redirectLink="/users/login"
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
