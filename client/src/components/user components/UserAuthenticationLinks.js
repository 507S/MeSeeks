import React from "react";

export default function UserAuthenticationLinks({
  className,
  authenticationLinkText,
}) {
  return (
    <>
      <a href="#" className={className}>
        {authenticationLinkText}
      </a>
    </>
  );
}
