import React from "react";

export default function UserPasswordResetInstructionHeadline({
  className,

  passwordResetInstructionText,
  ...rest
}) {
  return (
    <p className={className} {...rest}>
      {passwordResetInstructionText}
    </p>
  );
}
