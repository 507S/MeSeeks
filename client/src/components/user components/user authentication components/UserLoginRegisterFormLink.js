import React from "react";

export default function UserLoginRegisterFormLink({
  linkQueryText,
  registrationLinkText,
  link,
}) {
  return (
    <div className="text-center mb-5" style={{ color: "#777" }}>
      {/* Don't have an account? */}
      {linkQueryText}
      <a className="register-link" href={link}>
        &nbsp;{registrationLinkText}
      </a>
    </div>
  );
}
