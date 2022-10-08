import React from "react";
import "../../../styles/global/worker global/WorkerLoginForm.css";
import WorkerAuthForm from "./WorkerAuthForm";
import WorkerAuthFormButton from "./WorkerAuthFormButton";
import WorkerForgetPasswordFormImage from "./WorkerForgetPasswordFormImage";
import WorkerForgetPasswordResetCodeTextInput from "./WorkerForgetPasswordResetCodeTextInput";
export default function WorkerForgetPasswordFormLayout() {
  return (
    <div className="Main-container">
      <div className="container-login">
        <div className="wrap-login">
          <WorkerForgetPasswordFormImage />
          <WorkerAuthForm className="login-form">
            <div class="card text-center">
              <div class="card-header ">Reset Password</div>
              <div class="card-body">
                <p class="card-title">
                  Provide the reset password code that has been sent to your
                  provided mobile number
                </p>
                <p class="card-text">
                  <WorkerForgetPasswordResetCodeTextInput
                    inputFieldIcon="fa fa-code"
                    inputFieldType="text"
                    placeholder="Reset Password code"
                    inputName="resetPasswordCode"
                  />
                </p>
                <WorkerAuthFormButton
                  workerAuthFormButtonType="submit"
                  workerAuthFormButtonText="Verify"
                  workerAuthFormButtonIconClassName="fa fa-send-o"
                />
                <WorkerAuthFormButton
                  workerAuthFormButtonType="submit"
                  workerAuthFormButtonText="Resend"
                  workerAuthFormButtonIconClassName="fa fa-repeat"
                />
              </div>
            </div>
          </WorkerAuthForm>
        </div>
      </div>
    </div>
  );
}
