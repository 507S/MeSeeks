import React from "react";

export default function WorkerProfileHeadline({
  profileHeadlineText,
  ...rest
}) {
  return (
    <div className="col-sm-10">
      <h3 style={{ fontWeight: "lighter", color: " rgb(41, 38, 38)" }}>
        {profileHeadlineText}
      </h3>
    </div>
  );
}
