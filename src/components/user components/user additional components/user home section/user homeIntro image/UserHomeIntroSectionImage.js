import React from "react";
import GoalSectionHeaderImage from "../../images/office.png";
export default function UserHomeIntroSectionImage() {
  return (
    <div class="col-lg-7 mx-auto col-md-12 col-12">
      <div class="about-info"></div>

      <div
        class="about-image"
        // data-aos="fade-up"
        // data-aos-delay="100"
      >
        <img src={GoalSectionHeaderImage} class="img-fluid" alt="office" />
      </div>
    </div>
  );
}
