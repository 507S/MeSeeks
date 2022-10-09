import React from "react";
import "../../../styles/global/user global/UserLoginForm.css";
import UserAuthForm from "./UserAuthForm";
import UserAuthFormButton from "./UserAuthFormButton";
import UserAuthFormHeaderImage from "./UserAuthFormHeaderImage";
import UserAuthFormHeadline from "./UserAuthFormHeadline";
import UserAuthFormTextInputCredentials from "./UserAuthFormTextInputCredentials";

import UserResetPasswordFormSideImage from ".//UserResetPasswordFormSideImage";
import UserPasswordResetInstructionHeadline from "./UserPasswordResetInstructionHeadline";
//hello
export default function UserPasswordResetFormLayout() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 col-md-8 d-none d-md-block">
            <UserResetPasswordFormSideImage />
          </div>
          <div className="col-lg-5 col-md-4 infinity-form-container">
            <div className="col-lg-9 col-md-12 col-sm-8 col-xs-12 infinity-form">
              <UserAuthFormHeaderImage />
              <UserAuthFormHeadline headline="Reset Your password " />
              <UserPasswordResetInstructionHeadline
                className="mb-3"
                passwordResetInstructionText="Please enter your new password and youse it for further login sessions
              link."
                style={{ color: "#777" }}
              />
              <UserAuthForm className="px-3" method="POST">
                {/* <!-- Input Box --> */}
                <UserAuthFormTextInputCredentials
                  className="fa fa-key"
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  tabIndex="10"
                />
                <UserAuthFormTextInputCredentials
                  className="fa fa-repeat"
                  type="password"
                  name="newPassword"
                  placeholder="Repeat new Password"
                  tabIndex="10"
                />

                {/* <!--Remember Checkbox --> */}

                {/* <!-- Login Button --> */}
                <UserAuthFormButton
                  type="submit"
                  buttonText="Change Password"
                  onClick
                />

                {/* Other Credentials */}

                {/* #Registration link */}
              </UserAuthForm>
            </div>
            {/* <!-- FORM END --> */}
            {/* <!-- PASSWORD CONFIRMATION --> */}
            {/* <div className="reset-confirmation d-none px-3">
              <UserPasswordResetInstructionHeadline
                resetPasswordConfirmationHeadline="Link was sent"
                resetPasswordInstructionText="Please, check your inbox for a password reset link."
                style={{ color: "#777" }}
              />
            </div> */}
          </div>
          {/* <!-- FORM CONTAINER END --> */}
        </div>
      </div>
      {/* <ScriptTag
        isHydrating={true}
        type="text/javascript"
        src="../../../external js files/user dom/user auth dom/UserPostPasswordResetInterface.js"
      /> */}
      {/* const Demo = props =&gt; (
      <ScriptTag
        type="text/javascript"
        src="../../../external js files/user dom/user auth dom/UserPostPasswordResetInterface.js"
      />
      ) */}
      {/* <ScriptTag
        isHydrating={true}
        type="text/javascript"
        src="../../../external js files/user dom/user auth dom/UserPostPasswordResetInterface.js"
      /> */}
      {/* <ScriptTag
        type="text/javascript"
        src="../../../external js files/user dom/user auth dom/UserPostPasswordResetInterface.js"
      /> */}
    </>
  );
}
