import React from "react";
import "../../../styles/global/admin global/AdminLoginStyle.css";
import AdminAuthForm from "./AdminAuthForm";
import AdminAuthFormButton from "./AdminAuthFormButton";
import AdminAuthFormHeaderImage from "./AdminAuthFormHeaderImage";
import AdminAuthFormHeaderText from "./AdminAuthFormHeaderText";
import AdminAuthFormTextInput from "./AdminAuthFormTextInput";
import AdminAuthFormTitle from "./AdminAuthFormTitle";
import AdminLoginRegisterRedirectLink from "./AdminLoginRegisterRedirectLink";
import AdminRegistrationFormSideImage from "./AdminRegistrationFormSideImage";
export default function AdminLoginFormLayout() {
  return (
    <main>
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-4 login-section-wrapper">
            <div class="brand-wrapper">
              <AdminAuthFormHeaderImage />
              <AdminAuthFormHeaderText adminAuthFormHeaderText="Welcome to MeSeeks!" />
            </div>
            <div class="login-wrapper my-auto">
              <AdminAuthFormTitle authFormTitleText="Register" />
              <AdminAuthForm>
                <AdminAuthFormTextInput
                  labelName="Username"
                  inputType="text"
                  inputName="username"
                  placeholder="Enter Username"
                />
                <AdminAuthFormTextInput
                  labelName="Email"
                  inputType="text"
                  inputName="email"
                  placeholder="Enter Email"
                />
                {/* <AdminAuthFormTextInput
                  labelName="Private Code"
                  inputType="text"
                  inputName="privateKey"
                  placeholder="Enter Private Code"
                /> */}
                <AdminAuthFormButton
                  adminAuthButtonType="submit"
                  adminAuthButtonText="Register"
                  adminAuthButtonIconClassName="fa fa-lock"
                />
              </AdminAuthForm>
              {/* <AdminPrivateCodeFormLink
                adminPrivateCodeFormLink="#"
                adminPrivateCodeFormLinkText="Forgot Private Code ?"
              /> */}
              <AdminLoginRegisterRedirectLink
                adminLoginRegisterRedirectLinkHeadline="   Already have an account ?"
                adminLoginRegisterRedirectLink="/admins/login"
                adminLoginRegisterRedirectLinkText="Login here"
              />
            </div>
          </div>
          <AdminRegistrationFormSideImage />
        </div>
      </div>
    </main>
  );
}
