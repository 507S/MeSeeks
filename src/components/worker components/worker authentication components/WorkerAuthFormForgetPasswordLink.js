import React from "react";
import { NavLink } from "react-router-dom";
export default function WorkerAuthFormForgetPasswordLink({
  redirectLink,
  redirectLinkHeadline,
  redirectLinkText,
  ...rest
}) {
  return (
    <div className="text-center p-t-1">
      <span className="txt1">{redirectLinkHeadline}</span>
      <NavLink to={redirectLink} className="txt2">
        {redirectLinkText}
      </NavLink>
    </div>
  );
}
