import React from "react";
export default function AdminDashboardActionForm({
  actionFormClassName,
  children,
  method,
  onSubmit,
  ...rest
}) {
  return (
    <form className={actionFormClassName} method={method} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
