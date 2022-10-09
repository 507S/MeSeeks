import React from "react";
import { NavLink } from "react-router-dom";

export default function UserHomeServiceSectionCardContents({
  serviceCardTitle,
  serviceCardAverageRatingContent,
  serviceCardAverageRatingContentIconClassName,
  serviceCardImage,
  servicePageRedirectLink,
  ...rest
}) {
  return (
    <div class="item project-wrapper" data-aos="fade-up" data-aos-delay="100">
      {/* <img
        src=""
        class="img-fluid"
        alt="serviceCardImage"
        style={{ height: "500px" }}
      /> */}

      <div class="project-info">
        <small>
          {serviceCardAverageRatingContent}
          <span
            class={serviceCardAverageRatingContentIconClassName}
            style={{ color: "orange" }}
          ></span>
        </small>

        <h3>
          <NavLink to={servicePageRedirectLink}>
            <span>{serviceCardTitle}</span>
            <i class="fa fa-angle-right project-icon"></i>
          </NavLink>
        </h3>
      </div>
    </div>
  );
}
