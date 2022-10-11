import React from "react";
// import "../../../../styles/global/user global/aos.css";
// import "../../../../styles/global/user global/bootstrap.min.css";
// import "../../../../styles/global/user global/font-awesome.min.css";
// import "../../../../styles/global/user global/owl.carousel.min.css";
// import "../../../../styles/global/user global/owl.theme.default.min.css";
// import "../../../../styles/global/user global/welcome.css";
import UserNavLinkLists from "../../user navBar components/UserNavLinkLists";
import UserHomeGoalSectionEvenCards from "./user goalSection contents/UserHomeGoalSectionEvenCards";
import UserHomeGoalSectionHeadline from "./user goalSection contents/UserHomeGoalSectionHeadline";
import UserHomeGoalSectionOddCards from "./user goalSection contents/UserHomeGoalSectionOddCards";
import UserHomeAboutSectionImage from "./user home aboutSection/UserHomeAboutSectionImage";
import UserHomeAchievementSectionCardContents from "./user home achievementSection/UserHomeAchievementSectionCardContents";
import UserHomeAchievementSectionHeadline from "./user home achievementSection/UserHomeAchievementSectionHeadline";
import UserHomeFooterCards from "./user home footerSection/UserHomeFooterCards";
import UserHomePageHeadSectionImage from "./user home headerSection/UserHomePageHeadSectionImage";
import UserHomePageHeadSectionTextContents from "./user home headerSection/UserHomePageHeadSectionTextContents";
import UserHomeIntroSectionCardContents from "./user home introSection/user home introSection cards/UserHomeIntroSectionCardContents";
import UserHomeIntroSectionHeadlineText from "./user home introSection/UserHomeIntroSectionHeadlineText";
import UserHomeServiceSectionCardContents from "./user home serviceSection cards/service sectionCard contents/UserHomeServiceSectionCardContents";
import UserHomeServiceSectionHeadline from "./user home serviceSection cards/UserHomeServiceSectionHeadline";
export default function UserHomePageLayout() {
  return (
    <>
      <UserNavLinkLists userNavCompanyTitle="MeSeeks" />
      <section class="hero hero-bg d-flex justify-content-center align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center">
              <div class="hero-text">
                <UserHomePageHeadSectionTextContents
                  headSectionText="MeSeeks is a social service website. A place where you can hire
                labors. Our priority is to serve you at best."
                  headSectionTitleLink="#"
                  headSectionWelcomeText="Welcome To MeSeeks!"
                />
              </div>
            </div>

            <div class="col-lg-6 col-12">
              <div class="hero-image" data-aos="fade-up" data-aos-delay="300">
                <UserHomePageHeadSectionImage />
              </div>
            </div>
          </div>
        </div>
      </section>

      <UserHomeIntroSectionHeadlineText introSectionHeadlineText="Our Services" />
      <section
        class="hero d-flex justify-content-center align-items-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div class="container">
          <div class="row" style={{ marginTop: "42px" }}>
            <UserHomeIntroSectionCardContents
              cardTitle="Hire Workers"
              cardText="Consult with our psychiatrists.Tell us about your mental
              health.Tell us what you think about yourself."
            />
            <UserHomeIntroSectionCardContents
              cardTitle="Rate Workers"
              cardText="Call our psychiatrists. Share your problem with us. We are here to
              help you."
            />
            <UserHomeIntroSectionCardContents
              cardTitle=" Review Service"
              cardText="Meet our psychiatrists through appointment, voice call. We are
              here for you. We think about you."
            />
          </div>
          <div class="row" style={{ marginTop: "100px" }}>
            <UserHomeIntroSectionCardContents
              cardTitle="Communication<"
              cardText="Visit us. Join our community.See what people thinks, likes and
              shares everyday."
            />
            <UserHomeIntroSectionCardContents
              cardTitle="Elastic Provision"
              cardText="Share your thoughts by joining us.We appreciate your ideas and
              thoughts."
            />
            <UserHomeIntroSectionCardContents
              cardTitle="Help Line"
              cardText="Fix your appointment date with your psychiatrist.Tell us about
              your mental health.We are listening."
            />
          </div>
        </div>
      </section>

      <section class="about section-padding pb-0" id="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 mx-auto col-md-12 col-12">
              <div class="about-info"></div>

              <div class="about-image" data-aos="fade-up" data-aos-delay="100">
                <UserHomeAboutSectionImage />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="project section-padding" id="project">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 col-12">
              <UserHomeServiceSectionHeadline serviceSectionHeadlineText="Service Category" />

              <div class="owl-carousel owl-theme" id="project-slide">
                <UserHomeServiceSectionCardContents
                  serviceCardTitle="Home appliances"
                  serviceCardAverageRatingContent="Average Rating : 3.5"
                  serviceCardAverageRatingContentIconClassName="fa fa-star checked"
                  serviceCardImage=""
                  servicePageRedirectLink=""
                />
                <UserHomeServiceSectionCardContents
                  serviceCardTitle="Construction Site Works"
                  serviceCardAverageRatingContent="Average Rating : 3.5"
                  serviceCardAverageRatingContentIconClassName="fa fa-star checked"
                  serviceCardImage=""
                  servicePageRedirectLink=""
                />
                <UserHomeServiceSectionCardContents
                  serviceCardTitle="Office appliances"
                  serviceCardAverageRatingContent="Average Rating : 3.5"
                  serviceCardAverageRatingContentIconClassName="fa fa-star checked"
                  serviceCardImage=""
                  servicePageRedirectLink=""
                />
                <UserHomeServiceSectionCardContents
                  serviceCardTitle="Car Maintenance"
                  serviceCardAverageRatingContent="Average Rating : 3.5"
                  serviceCardAverageRatingContentIconClassName="fa fa-star checked"
                  serviceCardImage=""
                  servicePageRedirectLink=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="testimonial section-padding">
        <UserHomeGoalSectionHeadline goalSectionHeadlineText="Our Goals" />
        <div class="container">
          <div class="row">
            <UserHomeGoalSectionOddCards
              goalSectionTitle=" We Care About You"
              goalSectionText="Your smile is our smile. Have faith on us. Smiling is universally
              considered to be a way we display joy. It can communicate our
              internal world to people on the outside, and it can be a welcoming
              sign to new people."
            />
            <UserHomeGoalSectionEvenCards
              goalSectionTitle="Let Us Help You"
              goalSectionText="Communicate with us any time. We are here to serve you 24/7.If
              you’re reading this… Congratulations, you’re alive. If that’s not
              something to smile about, then I don’t know what is"
            />
            <UserHomeGoalSectionOddCards
              goalSectionTitle="  We are with you."
              goalSectionText=" We believe in the quote; 'Either you run the day or the day runs
              you'.A gentle word, a kind look, a good-natured smile can work
              wonders and accomplish miracles."
            />
          </div>
        </div>
      </section>

      <UserHomeAchievementSectionHeadline achievementSectionHeadlineText="Our Achievements" />
      <div
        class="container-fluid my-5 py-5 text-center"
        data-aos="fade-up"
        data-aos-delay="200"
        style={{ backgroundColor: "#057a8d" }}
      >
        <div class="row pt-5">
          <UserHomeAchievementSectionCardContents
            achievementCardTitle="Completed Services"
            achievementCardFetchedData="250"
            achievementCardImage=""
          />
          <UserHomeAchievementSectionCardContents
            achievementCardTitle="Happy Client"
            achievementCardFetchedData="1500"
            achievementCardImage=""
          />
          <UserHomeAchievementSectionCardContents
            achievementCardTitle="Total Workers"
            achievementCardFetchedData="10000"
            achievementCardImage=""
          />
          <UserHomeAchievementSectionCardContents
            achievementCardTitle="Total Services"
            achievementCardFetchedData="25"
            achievementCardImage=""
          />
        </div>
      </div>

      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <UserHomeFooterCards />
          </div>
        </div>
      </footer>
    </>
  );
}
