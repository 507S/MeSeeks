import React from "react";
import { NavLink } from "react-router-dom";

export default function UserHomeFooterContactSection({
  contactHeadline,
  websiteRedirectLink,
  contactNumber,

  ...rest
}) {
  return (
    <div
      class="col-lg-3 col-md-6 col-12"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <h4 class="my-4">{contactHeadline}</h4>

      <p class="mb-1">
        <i class="fa fa-phone mr-2 footer-icon"></i>
        {contactNumber}
      </p>

      <p>
        <NavLink href="#">
          <i class="fa fa-envelope mr-2 footer-icon"></i>
          {websiteRedirectLink}
        </NavLink>
      </p>
    </div>
  );
}
