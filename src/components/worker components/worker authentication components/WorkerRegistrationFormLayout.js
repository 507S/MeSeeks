import React from "react";
import "../../../styles/global/worker global/WorkerLoginForm.css";
import WorkerAuthForm from "./WorkerAuthForm";
import WorkerAuthFormButton from "./WorkerAuthFormButton";
import WorkerAuthFormTextInputCredentials from "./WorkerAuthFormTextInputCredentials";
import WorkerAuthFormTitle from "./WorkerAuthFormTitle";
import WorkerLoginRegistrationRedirectLink from "./WorkerLoginRegistrationRedirectLink";
import WorkerRegistrationFormImage from "./WorkerRegistrationFormImage";
export default function WorkerLoginFormLayout() {
  return (
    <div className="Main-container">
      <div className="container-login">
        <div className="wrap-login">
          <WorkerRegistrationFormImage />
          <WorkerAuthForm className="login-form">
            <WorkerAuthFormTitle workerAuthFormTitleText="Registration" />
            <WorkerAuthFormTextInputCredentials
              inputType="text"
              inputName="username"
              placeholder="Username"
              inputFieldIconClassName="fa fa-user-circle"
            />
            <WorkerAuthFormTextInputCredentials
              inputType="email"
              inputName="email"
              placeholder="Email"
              inputFieldIconClassName="fa fa-envelope"
            />
            <WorkerAuthFormTextInputCredentials
              inputType="text"
              inputName="phoneNumber"
              placeholder="Phone Number"
              inputFieldIconClassName="fa fa-phone"
            />
            <WorkerAuthFormTextInputCredentials
              inputType="password"
              inputName="password"
              placeholder="Password"
              inputFieldIconClassName="fa fa-lock"
            />
            <WorkerAuthFormButton
              workerAuthFormButtonText="Registration"
              workerAuthFormButtonIconClassName="fa fa-unlock-alt"
              workerAuthFormButtonType="submit"
            />
            {/* <WorkerAuthFormForgetPasswordLink
              redirectLink="#"
              redirectLinkHeadline="Forgot "
              redirectLinkText="Password ?"
            /> */}
            <WorkerLoginRegistrationRedirectLink
              redirectLink="/workers/login"
              redirectLinkText="Already have an account ?"
              redirectLinkIconClassName="fa fa-key"
            />
          </WorkerAuthForm>
        </div>
      </div>
    </div>
  );
}
