import React from "react";
import "../../../styles/global/worker global/WorkerLoginForm.css";
import WorkerAuthForm from "./WorkerAuthForm";
import WorkerAuthFormButton from "./WorkerAuthFormButton";
import WorkerForgetPasswordResetCodeTextInput from "./WorkerForgetPasswordResetCodeTextInput";
import WorkerResetPasswordFormImage from "./WorkerResetPasswordFormImage";
export default function WorkerResetPasswordFormLayout() {
  return (
    <div className="Main-container">
      <div className="container-login">
        <div className="wrap-login">
          <WorkerResetPasswordFormImage />
          <WorkerAuthForm className="login-form">
            <div className="card text-center">
              <div className="card-header ">Change Password</div>
              <div className="card-body">
                <p className="card-title">Provide your new password</p>
                <p className="card-text">
                  <WorkerForgetPasswordResetCodeTextInput
                    inputFieldIcon="fa fa-eye-slash"
                    inputFieldType="password"
                    placeholder="New Password"
                    inputName="resetPassword"
                  />
                </p>
                <WorkerAuthFormButton
                  workerAuthFormButtonType="submit"
                  workerAuthFormButtonText="Change Password"
                  workerAuthFormButtonIconClassName="fa fa-check-circle-o"
                />
              </div>
            </div>
          </WorkerAuthForm>
        </div>
      </div>
    </div>
  );
}
