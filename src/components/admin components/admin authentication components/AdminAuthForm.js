import React from "react";

export default function AdminAuthForm({ children, className, ...rest }) {
  return (
    <>
      <form className={className} {...rest}>
        {children}
      </form>
    </>
  );
}
