import React from "react";

export default function WorkerForgetPasswordFormCard() {
  return (
    <div class="card text-center">
      <div class="card-header ">Reset Password</div>
      <div class="card-body">
        <p class="card-title">
          Provide the reset password code that has been sent to your provided
          mobile number
        </p>
        <p class="card-text">
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              <i class="fa fa-code"></i>
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Reset Password code"
              name="resetPasswordCode"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </p>

        <button class="login-form-btn" type="submit">
          Verify&nbsp;&nbsp; <i class="fa fa-send-o"></i>
        </button>
      </div>
    </div>
  );
}
