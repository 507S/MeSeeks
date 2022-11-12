import React from "react";

export default function UserHomeGoalSectionEvenCards({
  goalSectionTitle,
  goalSectionText,
  goalSectionImage,
  ...rest
}) {
  return (
    <>
      <div class="col-lg-6 col-md-7 col-12">
        <h4 class="my-5 pt-3" data-aos="fade-up" data-aos-delay="100">
          {goalSectionTitle}
        </h4>

        <div class="quote" data-aos="fade-up" data-aos-delay="200"></div>

        <h5 class="mb-4" data-aos="fade-up" data-aos-delay="300">
          {goalSectionText}
        </h5>
      </div>
      <div class="col-lg-6 col-md-5 col-12">
        <div class="contact-image" data-aos="fade-up">
          {/* <img src="images/l6.webp" class="img-fluid" alt="website" /> */}
        </div>
      </div>
      <hr style={{ color: "black" }} />
    </>
  );
}
