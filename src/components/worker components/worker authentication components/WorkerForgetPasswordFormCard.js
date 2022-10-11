import React from "react";

export default function WorkerForgetPasswordFormCard() {
  return (
    <>
      <div className="card-header ">Reset Password</div>
      <div className="card-body">
        <p className="card-title">
          Provide the reset password code that has been sent to your provided
          mobile number
        </p>
        <p className="card-text">
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa fa-code"></i>
            </span>
            <input
              type="text"
              className="form-control"
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
    </>
  );
}
