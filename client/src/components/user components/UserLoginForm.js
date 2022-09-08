import React from "react";

export default function UserLoginForm({ children, className, ...rest }) {
  return (
    <>
      <form className={className} {...rest}>
        {children}
      </form>
    </>
  );
}
