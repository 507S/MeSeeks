import React from "react";

export default function UserHomeGoalSectionHeadline({
  goalSectionHeadlineText,
  ...rest
}) {
  return (
    <h2 class="mb-5 text-center" data-aos="fade-up">
      <strong>{goalSectionHeadlineText}</strong>
    </h2>
  );
}
