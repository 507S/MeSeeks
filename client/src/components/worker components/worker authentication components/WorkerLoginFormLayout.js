import React from "react";
import "../../../styles/global/worker global/WorkerLoginForm.css";
import WorkerAuthForm from "./WorkerAuthForm";
import WorkerAuthFormButton from "./WorkerAuthFormButton";
import WorkerAuthFormForgetPasswordLink from "./WorkerAuthFormForgetPasswordLink";
import WorkerAuthFormTextInputCredentials from "./WorkerAuthFormTextInputCredentials";
import WorkerAuthFormTitle from "./WorkerAuthFormTitle";
import WorkerLoginFormImage from "./WorkerLoginFormImage";
import WorkerLoginRegistrationRedirectLink from "./WorkerLoginRegistrationRedirectLink";
export default function WorkerLoginFormLayout() {
  return (
    <div className="Main-container">
      <div className="container-login">
        <div className="wrap-login">
          <WorkerLoginFormImage />
          <WorkerAuthForm className="login-form">
            <WorkerAuthFormTitle workerAuthFormTitleText="Login" />
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
              workerAuthFormButtonText="Login"
              workerAuthFormButtonIconClassName="fa fa-key"
              workerAuthFormButtonType="submit"
            />
            <WorkerAuthFormForgetPasswordLink
              redirectLink="/workers/forget-password"
              redirectLinkHeadline="Forgot "
              redirectLinkText="Password ?"
            />
            <WorkerLoginRegistrationRedirectLink
              redirectLink="/workers/registration"
              redirectLinkText="Create Your Account"
              redirectLinkIconClassName="fa fa-unlock"
            />
          </WorkerAuthForm>
        </div>
      </div>
    </div>
  );
}
