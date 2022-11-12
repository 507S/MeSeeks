import React from "react";
export default function AdminDashboardActionForm({
  actionFormClassName,
  children,
  method,
  onSubmit,
  enctype,
  ...rest
}) {
  return (
    <form className={actionFormClassName} method={method} onSubmit={onSubmit} enctype={enctype}>
      {children}
    </form>
  );
}