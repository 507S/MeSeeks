import React from "react";

export default function WorkerAuthForm({ children, className, ...rest }) {
  return (
    <>
      <form className={className} {...rest}>
        {children}
      </form>
    </>
  );
}
