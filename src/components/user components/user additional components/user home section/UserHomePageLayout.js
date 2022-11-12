import React from "react";
import "../../../../styles/global/user global/aos.css";
import "../../../../styles/global/user global/font-awesome.min.css";
import "../../../../styles/global/user global/UserHomePageDesign.css";

import AchievementImageOne from "../images/jobdone.png";

import AchievementImageTwo from "../images/team.png";
import AchievementImageFour from "../images/totalservices.png";

import AchievementImageThree from "../images/workers.png";
import UserCarouselSection from "./carousel section/UserCarouselSection";
import UserHomeGoalSection from "./goal section/UserHomeGoalSection";
import UserHomeIntroductionSection from "./introduction section/UserHomeIntroductionSection";
import UserHomeSectionFooter from "./user footerSection/UserHomeSectionFooter";
import UserHomeIntroSectionImage from "./user homeIntro image/UserHomeIntroSectionImage";
import UserNavList from "./user navList section/UserNavList";

export default function UserHomePageLayout() {
  return (
    <main>
      <header
        class="p-3  text-white fixed-top  "
        style={{ background: "#057a8d" }}
      >
        <div class="container mt-3">
          <UserNavList />
        </div>
      </header>
      <hr />

      <UserCarouselSection />

      <div class="container marketing">
        <UserHomeIntroductionSection introHeaderTitle="Our Services" />
        <section class="about section-padding pb-0" id="about">
          <div class="container">
            <div class="row">
              <UserHomeIntroSectionImage />
            </div>
          </div>
        </section>

        <hr class="featurette-divider " />

        <UserHomeGoalSection goalSectionHeaderTitle="Our Goals" />
      </div>

      {/* database fetch data goes here */}
      <h1
        style={{
          textAlign: "center",
          fontWeight: "lighter",
          marginBottom: "10%",
          color: "#f1c111",
        }}
      >
        Our Achievements
      </h1>
      <div
        class="container-fluid my-5 py-5 text-center"
        // data-aos="fade-up"
        // data-aos-delay="200"
        style={{ backgroundColor: "#057a8d" }}
      >
        <div class="row pt-5">
          <div class="col-lg-3 col-sm-6 mb-5">
            <h5
              class="mb-4 d-inline-flex align-items-center justify-content-center border rounded-circle text-white"
              style={{ width: "50px", height: "50px" }}
            >
              <img src={AchievementImageOne} alt="AchievementImageOne" />
            </h5>
            <h4 class="display-4 text-white mb-3" data-toggle="counter-up">
              250
            </h4>
            <h6 class="text-white m-0">Completed Services</h6>
          </div>
          <div class="col-lg-3 col-sm-6 mb-5">
            <h5
              class="mb-4 d-inline-flex align-items-center justify-content-center text-white"
              style={{ width: "50px", height: "50px" }}
            >
              <img src={AchievementImageTwo} alt="AchievementImageTwo" />
            </h5>
            <h4 class="display-4 text-white mb-3" data-toggle="counter-up">
              1500
            </h4>
            <h6 class="text-white m-0">Happy Client</h6>
          </div>
          <div class="col-lg-3 col-sm-6 mb-5">
            <h5
              class="mb-4 d-inline-flex align-items-center justify-content-center text-white"
              style={{ width: "50px", height: "50px" }}
            >
              <img src={AchievementImageThree} alt="AchievementImageThree" />
            </h5>
            <h4 class="display-4 text-white mb-3" data-toggle="counter-up">
              10000
            </h4>
            <h6 class="text-white m-0">Total Workers</h6>
          </div>
          <div class="col-lg-3 col-sm-6 mb-5">
            <h5
              class="mb-4 d-inline-flex align-items-center justify-content-center text-white"
              style={{ width: "50px", height: "50px" }}
            >
              <img src={AchievementImageFour} alt="AchievementImageFour" />
            </h5>
            <h4 class="display-4 text-white mb-3" data-toggle="counter-up">
              25
            </h4>
            <h6 class="text-white m-0">Total Services</h6>
          </div>
        </div>
      </div>

      <UserHomeSectionFooter />
    </main>
  );
}
