import React from "react";
import UserPostResetPasswordRedirectLink from "./UserPostResetPasswordRedirectLink";

export default function UserResetPasswordConfirmationCredentials({
  resetPasswordConfirmationHeadline,
  resetPasswordInstructionText,
  ...rest
}) {
  return (
    <>
      <div className="mb-4">
        <h4 className="mb-3">{resetPasswordConfirmationHeadline}</h4>
        <h6 {...rest}>{resetPasswordInstructionText}</h6>
      </div>
      {/* redirect button */}
      <UserPostResetPasswordRedirectLink />
    </>
  );
}
