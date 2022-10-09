import React from "react";

export default function UserHomeServiceSectionHeadline({
  serviceSectionHeadlineText,
  ...rest
}) {
  return (
    <h2 class="mb-5 text-center" data-aos="fade-up">
      <strong>{serviceSectionHeadlineText}</strong>
    </h2>
  );
}
