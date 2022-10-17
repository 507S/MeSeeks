import React from "react";

export default function WorkerDashboardDataTableLayout({
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
