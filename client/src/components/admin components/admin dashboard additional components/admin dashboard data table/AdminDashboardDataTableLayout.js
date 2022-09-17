import React from "react";

export default function AdminDashboardDataTableLayout({
  className,
  children,
  ...rest
}) {
  return (
    <>
      <table className={className} {...rest}>
        {children}
      </table>
    </>
  );
}
