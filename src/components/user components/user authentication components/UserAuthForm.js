import React from "react";

export default function UserAuthForm({ children, className, ...rest }) {
  return (
    <>
      <form className={className} {...rest}>
        {children}
      </form>
    </>
  );
}
