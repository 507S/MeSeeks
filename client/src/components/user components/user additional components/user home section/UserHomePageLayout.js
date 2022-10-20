import React from "react";
import { NavLink } from "react-router-dom";
import "../../../../styles/global/user global/aos.css";
import "../../../../styles/global/user global/font-awesome.min.css";
import "../../../../styles/global/user global/UserHomePageDesign.css";
import introImage3 from "../images/5.jpg";
import IntroImageOne from "../images/bg2.jpg";
import GoalThreeImage from "../images/h3.jpg";
import HelpLineImage from "../images/hlp-modified.png";
import HireWorkerImage from "../images/hw-modified.png";
import AchievementImageOne from "../images/jobdone.png";
import FooterImage from "../images/l5.png";
import GoalTwoImage from "../images/l6.webp";
import GoalSectionHeaderImage from "../images/office.png";
import FeedBackImage from "../images/rating2.png";
import IntroImageTwo from "../images/rs.jpg";
import AchievementImageTwo from "../images/team.png";
import AchievementImageFour from "../images/totalservices.png";
import CommunicationWithWorkerImage from "../images/uc2-modified.png";
import RateWorkerImage from "../images/ur-modified.png";
import ReviewedWorkerImage from "../images/ure-modified.png";
import UserHomePageLogo from "../images/userHomeNavLogo.png";
import AchievementImageThree from "../images/workers.png";
import GoalOneImage from "../images/x4.jpg";

export default function UserHomePageLayout() {
  return (
    <main>
      <header
        class="p-3  text-white fixed-top  "
        style={{ background: "#057a8d" }}
      >
        <div class="container mt-3">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <NavLink
              to="/users/home"
              class="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none "
            >
              <img
                src={UserHomePageLogo}
                alt="UserHomePageLogo"
                width="75px"
                height="75px"
              />
            </NavLink>
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <NavLink to="/users/home" class="nav-link px-3 link-secondary">
                  <h3
                    style={{
                      fontWeight: "lighter",
                      color: "white",
                      fontSize: "40px",
                    }}
                  >
                    MeSeeks
                  </h3>
                </NavLink>
              </li>
            </ul>
            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 mt-3">
              <p style={{ fontWeight: "lighter", fontSize: "40px" }}>
                <NavLink to="/users/home" style={{ color: "white" }}>
                  Home
                </NavLink>
                &nbsp; &nbsp;
                <NavLink to="/users/services" style={{ color: "white" }}>
                  Services
                </NavLink>
                &nbsp; &nbsp;
                <NavLink to="" style={{ color: "white" }}>
                  About
                </NavLink>
                &nbsp; &nbsp;
                <NavLink
                  className="btn btn-dark"
                  to="/users/login"
                  style={{ backgroundColor: "" }}
                >
                  Log in
                </NavLink>
                &nbsp; &nbsp;
                <NavLink
                  className="btn btn-dark"
                  to="/users/registration"
                  style={{ backgroundColor: "" }}
                >
                  Register
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </header>
      <hr />
      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active mb-3">
            <img
              src={IntroImageOne}
              class="d-block w-100  mt-3"
              width="100%"
              height="100%"
              alt="introImageOne"
            />
            <div class="container">
              <div class="carousel-caption text-start text-dark">
                <h1>Welcome to our Platform</h1>
                <p>Thanks for visiting our site let us help you</p>
                <p>
                  <button class="btn btn-lg btn-dark" disabled>
                    Welcome
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item ">
            <img
              src={IntroImageTwo}
              class="d-block w-100"
              width="100%"
              height="100%"
              alt="introImageTwo"
            />
            <div class="container">
              <div class="carousel-caption text-dark">
                <h1>We are listening</h1>
                <p class=" text-white">Share with us what you think</p>
                <p>
                  <button class="btn btn-lg btn-dark" disabled>
                    Join us
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={introImage3}
              class="d-block w-100 bg-dark"
              width="100%"
              height="100%"
              alt="introImageThree"
            />
            <div class="container ">
              <div class="carousel-caption text-end text-dark">
                <h1>Let us be friend</h1>
                <p>We will help people who have no one to talk to</p>
                <p>
                  <button class="btn btn-lg btn-dark" disabled>
                    Thankyou
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="container marketing">
        <h1
          style={{
            textAlign: "center",
            fontWeight: "lighter",
            marginBottom: "10%",
            color: "#f1c111",
          }}
        >
          Our Services
        </h1>
        <div class="row" style={{ marginTop: "42px" }}>
          <div class="col-lg-4">
            <img src={HireWorkerImage} width="60%" height="60%" alt="" />
            <h2 className="mt-5">Hire Workers</h2>
            <p>
              Consult with our psychiatrists.Tell us about your mental
              health.Tell us what you think about yourself.
            </p>
          </div>

          <div class="col-lg-4">
            <img src={RateWorkerImage} width="60%" height="60%" alt="" />
            <h2 className="mt-5">Rate Workers</h2>
            <p>
              Call our psychiatrists. Share your problem with us. We are here to
              help you.
            </p>
          </div>
          <div class="col-lg-4">
            <img
              src={CommunicationWithWorkerImage}
              width="60%"
              height="60%"
              alt=""
            />
            <h2 className="mt-5">Communication</h2>
            <p>
              Meet our psychiatrists through appointment, voice call. We are
              here for you. We think about you.
            </p>
          </div>
        </div>

        <div class="row" style={{ marginTop: "42px" }}>
          <div class="col-lg-4">
            <img src={HelpLineImage} width="60%" height="60%" alt="" />
            <h2 className="mt-5">HelpLine</h2>
            <p>
              Visit us. Join our community.See what people thinks, likes and
              shares everyday.
            </p>
          </div>
          <div class="col-lg-4">
            <img src={ReviewedWorkerImage} width="60%" height="60%" alt="" />
            <h2 className="mt-5">Review Worker</h2>
            <p>
              Share your thoughts by joining us.We appreciate your ideas and
              thoughts.
            </p>
          </div>

          <div class="col-lg-4">
            <img src={FeedBackImage} width="60%" height="60%" alt="" />
            <h2 className="mt-5">Feedback</h2>
            <p>
              Fix your appointment date with your psychiatrist.Tell us about
              your mental health.We are listening.
            </p>
          </div>
        </div>
        <section class="about section-padding pb-0" id="about">
          <div class="container">
            <div class="row">
              <div class="col-lg-7 mx-auto col-md-12 col-12">
                <div class="about-info"></div>

                <div
                  class="about-image"
                  // data-aos="fade-up"
                  // data-aos-delay="100"
                >
                  <img
                    src={GoalSectionHeaderImage}
                    class="img-fluid"
                    alt="office"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr class="featurette-divider " />
        <h1
          style={{
            textAlign: "center",
            fontWeight: "lighter",
            marginTop: "3%",
            color: "#f1c111",
          }}
        >
          Our Goals
        </h1>
        <div class="row featurette" style={{ marginTop: "43px" }}>
          <div class="col-md-7">
            <h2 class="featurette-heading">
              We Care about you <span class="text-muted"></span>
            </h2>
            <p class="lead" style={{ marginTop: "30px", textAlign: "justify" }}>
              Your smile is our smile. Have faith on us.Smiling is universally
              considered to be a way we display joy. It can communicate our
              internal world to people on the outside, and it can be a welcoming
              sign to new people.
            </p>
          </div>
          <div class="col-md-5">
            <img src={GoalOneImage} width="100%" height="100%" alt="" />
          </div>
        </div>
        <hr class="featurette-divider" />
        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">
              Let us help you<span class="text-muted"></span>
            </h2>
            <p class="lead" style={{ marginTop: "30px", textAlign: "justify" }}>
              Communicate with us any time. We are here to serve you 24/7.If
              you’re reading this… Congratulations, you’re alive. If that’s not
              something to smile about, then I don’t know what is
            </p>
          </div>
          <div class="col-md-5 order-md-1">
            <img src={GoalTwoImage} width="100%" height="100%" alt="" />
          </div>
        </div>
        <hr class="featurette-divider" />
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">
              We are with you<span class="text-muted"></span>
            </h2>
            <p class="lead" style={{ marginTop: "30px", textAlign: "justify" }}>
              We believe in the quote; "Either you run the day or the day runs
              you".A gentle word, a kind look, a good-natured smile can work
              wonders and accomplish miracles.
            </p>
          </div>
          <div class="col-md-5">
            <img src={GoalThreeImage} width="100%" height="100%" alt="" />
          </div>
        </div>
        <hr class="featurette-divider" />
      </div>

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

      <footer
        class="site-footer "
        // style={{ backgroundColor: "black", color: "white" }}
        style={{ fontSize: "16px", color: "white" }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-5 mx-lg-auto col-md-8 col-10">
              <h1 class="text-white">
                <div class="contact-image">
                  <img src={FooterImage} class="img-fluid" alt="footerImage" />
                </div>
              </h1>
            </div>

            <div class="col-lg-3 col-md-6 col-12">
              <h4 class="my-4">Contact Us</h4>

              <p class="mb-1">
                <i class="fa fa-phone mr-2 footer-icon"></i>
                &nbsp;+8801306989578
              </p>

              <p>
                <NavLink to="#">
                  <i class="fa fa-envelope"></i>
                  &nbsp; meseeks@bd.com
                </NavLink>
              </p>
            </div>

            <div class="col-lg-3 col-md-6 col-12">
              <h4 class="my-4">Our Office</h4>

              <p class="mb-1">
                <i class="fa fa-home mr-2 footer-icon"></i>
                &nbsp;Sector #10, Road #11, Uttara, Dhaka, Bangladesh
              </p>
            </div>

            <div class="col-lg-4 mx-lg-auto text-center col-md-8 col-12">
              <p class="copyright-text">
                Copyright &copy; 2022 MeSeeks
                <br />
              </p>
            </div>

            <div class="col-lg-4 mx-lg-auto col-md-6 col-12">
              <ul class="footer-link">
                <li>
                  <NavLink href="#">Our Founders</NavLink>
                </li>
                <li>
                  <NavLink href="#"> Policy</NavLink>
                </li>
                <li>
                  <NavLink href="#">FAQ</NavLink>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 mx-lg-auto col-md-6 col-12">
              <ul class="social-icon">
                <li>
                  <NavLink href="#" className="fa fa-instagram"></NavLink>
                </li>
                <li>
                  <NavLink href="#" className="fa fa-twitter"></NavLink>
                </li>
                <li>
                  <NavLink href="#" className="fa fa-linkedin"></NavLink>
                </li>
                <li>
                  <NavLink href="#" className="fa fa-facebook"></NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
