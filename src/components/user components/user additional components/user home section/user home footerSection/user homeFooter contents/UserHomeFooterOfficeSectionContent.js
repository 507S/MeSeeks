import React from "react";

export default function UserHomeFooterOfficeSectionContent({
  officeHeadline,
  officeAddress,
  ...rest
}) {
  return (
    <div
      class="col-lg-3 col-md-6 col-12"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <h4 class="my-4">{officeHeadline}</h4>

      <p class="mb-1">
        <i class="fa fa-home mr-2 footer-icon"></i>
        {officeAddress}
      </p>
    </div>
  );
}
