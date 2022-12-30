import React from "react";
import "../../../styles/global/admin global/AdminLoginStyle.css";
import AdminAuthForm from "./AdminAuthForm";
import AdminAuthFormButton from "./AdminAuthFormButton";
import AdminAuthFormHeaderImage from "./AdminAuthFormHeaderImage";
import AdminAuthFormHeaderText from "./AdminAuthFormHeaderText";
import AdminAuthFormTextInput from "./AdminAuthFormTextInput";
import AdminAuthFormTitle from "./AdminAuthFormTitle";
import AdminLoginFormSideImage from "./AdminLoginFormSideImage";
import AdminLoginRegisterRedirectLink from "./AdminLoginRegisterRedirectLink";
import AdminPrivateCodeFormLink from "./AdminPrivateCodeFormLink";
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
              <AdminAuthFormTitle authFormTitleText="Log in" />
              <AdminAuthForm>
                <AdminAuthFormTextInput
                  labelName="Username"
                  inputType="text"
                  inputName="username"
                  placeholder="Enter Username"
                />
                <AdminAuthFormTextInput
                  labelName="Private Code"
                  inputType="text"
                  inputName="privateKey"
                  placeholder="Enter Private Code"
                />
                <AdminAuthFormButton
                  adminAuthButtonType="submit"
                  adminAuthButtonText="Login"
                  adminAuthButtonIconClassName="fa fa-key"
                />
              </AdminAuthForm>
              <AdminPrivateCodeFormLink
                adminPrivateCodeFormLink="#"
                adminPrivateCodeFormLinkText="Forgot Private Code ?"
              />
              {/* <AdminLoginRegisterRedirectLink
                adminLoginRegisterRedirectLinkHeadline="  Don't have an account ?"
                adminLoginRegisterRedirectLink="/admins/registration"
                adminLoginRegisterRedirectLinkText="Register here"
              /> */}
            </div>
          </div>
          <AdminLoginFormSideImage />
        </div>
      </div>
    </main>
  );
}
