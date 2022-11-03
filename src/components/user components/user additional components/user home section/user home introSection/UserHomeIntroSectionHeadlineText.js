import React from "react";

export default function UserHomeIntroSectionHeadlineText({
  introSectionHeadlineText,
  ...rest
}) {
  return (
    <h2 class="mb-5 text-center" data-aos="fade-up">
      <strong>{introSectionHeadlineText}</strong>
    </h2>
  );
}
