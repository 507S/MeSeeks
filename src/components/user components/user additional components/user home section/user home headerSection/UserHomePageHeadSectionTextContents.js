import React from "react";
import { NavLink } from "react-router-dom";

export default function UserHomePageHeadSectionTextContents({
  headSectionText,
  headSectionTitleLink,
  headSectionWelcomeText,
  ...rest
}) {
  return (
    <>
      <h1 class="text-white" style={{ fontSize: "32px" }} data-aos="fade-up">
        {headSectionText}
      </h1>

      <NavLink
        to={headSectionTitleLink}
        class="custom-btn btn-bg btn mt-3"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {headSectionWelcomeText}
      </NavLink>
    </>
  );
}
