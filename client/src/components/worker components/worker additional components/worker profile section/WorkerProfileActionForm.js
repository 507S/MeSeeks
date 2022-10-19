import React from "react";
export default function WorkerProfileActionForm({
  actionFormClassName,
  children,
  method,
  ...rest
}) {
  return (
    <form className={actionFormClassName} method={method}>
      {children}
    </form>
  );
}
