import React from "react";

export default function UserHomeAchievementSectionCardContents({
  achievementCardTitle,
  achievementCardFetchedData,
  achievementCardImage,
  ...rest
}) {
  return (
    <div class="col-lg-3 col-sm-6 mb-5">
      <h5
        class="mb-4 d-inline-flex align-items-center justify-content-center border rounded-circle text-white"
        style={{ width: "50px", height: "50px" }}
      >
        {/* <img src="./images/jobdone.png" /> */}
      </h5>
      <h4 class="display-4 text-white mb-3" data-toggle="counter-up">
        {achievementCardFetchedData}
      </h4>
      <h6 class="text-white m-0">{achievementCardTitle}</h6>
    </div>
  );
}
