import React from "react";
import FooterImage from "../../../../../../assets/user assets/footerImage.png";
export default function UserHomeFooterSectionImage() {
  return (
    <div class="col-lg-5 mx-lg-auto col-md-8 col-10">
      <h1 class="text-white" data-aos="fade-up" data-aos-delay="100">
        <div class="contact-image" data-aos="fade-up">
          <img src={FooterImage} class="img-fluid" alt="footerImage" />
        </div>
      </h1>
    </div>
  );
}
