import React from "react";

export default function UserHomeAchievementSectionHeadline({
  achievementSectionHeadlineText,
  ...rest
}) {
  return (
    <h2 class="mb-5 text-center" data-aos="fade-up">
      <strong>{achievementSectionHeadlineText}</strong>
    </h2>
  );
}
