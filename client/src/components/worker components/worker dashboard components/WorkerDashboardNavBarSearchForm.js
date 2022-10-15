import React from "react";

export default function WorkerDashboardNavBarSearchForm({ children, ...rest }) {
  return (
    <>
      <form className="form-inline my-2 my-lg-0 w-100" {...rest}>
        {children}
      </form>
    </>
  );
}
