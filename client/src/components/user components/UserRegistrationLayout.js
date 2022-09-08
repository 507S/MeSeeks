import React from "react";
import "../../styles/global/user global/UserLoginForm.css";
import UserAuthenticationLinks from "./UserAuthenticationLinks";
import UserLoginButton from "./UserLoginButton";
import UserLoginForm from "./UserLoginForm";
import UserLoginHeaderImage from "./UserLoginHeaderImage";
import UserLoginHeadline from "./UserLoginHeadline";
import UserLoginTextInput from "./UserLoginTextInput";
import UserRegistrationLink from "./UserRegistrationLink";
import UserRegistrationSideImage from "./UserRegistrationSideImage";
//hello
export default function UserRegistrationLayout() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-7 col-md-8 d-none d-md-block">
          <UserRegistrationSideImage />
        </div>
        <div className="col-lg-5 col-md-4 infinity-form-container">
          <div className="col-lg-9 col-md-12 col-sm-8 col-xs-12 infinity-form">
            <UserLoginHeaderImage />
            <UserLoginHeadline headline="Create an account " />
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
                className="fa fa-phone "
                type="email"
                name="email"
                placeholder="Mobile Number"
                tabIndex="10"
                style={{ fontSize: "20px" }}
              />
              <UserLoginTextInput
                className="fa fa-lock"
                type="password"
                name="password"
                placeholder="Password"
                tabIndex="10"
              />

              {/* <!--Remember Checkbox --> */}

              {/* <!-- Login Button --> */}
              <UserLoginButton type="submit" buttonText="Register" />

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
              <UserRegistrationLink
                linkQueryText="Already have an account?"
                registrationLinkText="Login here"
                link="login.html"
              />
            </UserLoginForm>
          </div>
          {/* <!-- FORM END --> */}
        </div>
        {/* <!-- FORM CONTAINER END --> */}
      </div>
    </div>
  );
}
