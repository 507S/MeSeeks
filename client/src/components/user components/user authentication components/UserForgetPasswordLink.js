import React from "react";

export default function UserForgetPasswordLink({
  redirectLink,
  className,
  linkText,
}) {
  return (
    <div className="text-center mb-2">
      <a href={redirectLink} className={className}>
        {linkText}
      </a>
    </div>
  );
}
