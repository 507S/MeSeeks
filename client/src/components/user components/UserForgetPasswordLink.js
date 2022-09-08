import React from "react";

export default function UserForgetPasswordLink({ className, linkText }) {
  return (
    <div className="text-center mb-2">
      <a href="reset.html" className="forget-link">
        {linkText}
      </a>
    </div>
  );
}
