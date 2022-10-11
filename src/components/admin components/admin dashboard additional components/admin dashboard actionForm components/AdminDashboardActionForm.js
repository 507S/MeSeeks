import React from "react";
export default function AdminDashboardActionForm({
  actionFormClassName,
  children,
  ...rest
}) {
  return (
    <form className={actionFormClassName} {...rest}>
      {children}
    </form>
  );
}
