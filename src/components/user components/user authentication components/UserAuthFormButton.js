import React from "react";

export default function UserAuthFormButton({ type, buttonText }) {
  return (
    <div className="mb-3">
      <button
        type={type}
        className="btn btn-block"
        style={{ textAlign: "centre", width: "100%" }}
      >
        {buttonText}
      </button>
    </div>
  );
}
