import React from "react";
import { NavLink } from "react-router-dom";

export default function WorkerLoginRegistrationRedirectLink({
  redirectLink,
  redirectLinkText,
  redirectLinkIconClassName,
  ...rest
}) {
  return (
    <div className="text-center p-t-2">
      <NavLink to={redirectLink} className="txt2">
        {redirectLinkText}&nbsp;&nbsp;
        <i className={redirectLinkIconClassName} aria-hidden="true"></i>
      </NavLink>
    </div>
  );
}
