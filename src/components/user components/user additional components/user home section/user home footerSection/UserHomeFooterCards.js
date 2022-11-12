import React from "react";
import UserHomeSocialMediaLinkContent from "./user homeFooter contents//user home socialMediaLinks/UserHomeSocialMediaLinkContent";
import UserHomeFooterSectionNavLinkContents from "./user homeFooter contents/user homeFooter navLinks/UserHomeFooterSectionNavLinkContents";
import UserHomeFooterContactSection from "./user homeFooter contents/UserHomeFooterContactSection";
import UserHomeFooterCopyRightSection from "./user homeFooter contents/UserHomeFooterCopyRightSection";
import UserHomeFooterOfficeSectionContent from "./user homeFooter contents/UserHomeFooterOfficeSectionContent";
import UserHomeFooterSectionImage from "./user homeFooter contents/UserHomeFooterSectionImage";
export default function UserHomeFooterCards() {
  return (
    <>
      <UserHomeFooterSectionImage />
      <UserHomeFooterContactSection
        contactHeadline="Contact Us"
        websiteRedirectLink="meseeks@bd.com"
        contactNumber=" +99 080 070 4224"
      />
      <UserHomeFooterOfficeSectionContent
        officeAddress="Av. Lúcio Costa - Barra da Tijuca, Rio de Janeiro - RJ, Brazil"
        officeHeadline="Our Office"
      />
      <UserHomeFooterCopyRightSection />
      <div
        class="col-lg-4 mx-lg-auto col-md-6 col-12"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <ul class="footer-link">
          <UserHomeFooterSectionNavLinkContents
            footerNavLinkText="Our Founders"
            footerNavLink="#"
          />
          <UserHomeFooterSectionNavLinkContents
            footerNavLinkText="Policy"
            footerNavLink="#"
          />
          <UserHomeFooterSectionNavLinkContents
            footerNavLinkText="FAQ"
            footerNavLink="#"
          />
        </ul>
      </div>

      <div
        class="col-lg-3 mx-lg-auto col-md-6 col-12"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <ul class="social-icon">
          <UserHomeSocialMediaLinkContent
            socialMediaRedirectLink=""
            socialMediaIconClassName="fa fa-instagram"
          />
          <UserHomeSocialMediaLinkContent
            socialMediaRedirectLink=""
            socialMediaIconClassName="fa fa-twitter"
          />
          <UserHomeSocialMediaLinkContent
            socialMediaRedirectLink=""
            socialMediaIconClassName="fa fa-linkedin"
          />
          <UserHomeSocialMediaLinkContent
            socialMediaRedirectLink=""
            socialMediaIconClassName="fa fa-facebook"
          />
        </ul>
      </div>
    </>
  );
}
