import React from "react";
import { NavLink } from "react-router-dom";
import "../../../../styles/global/user global/aos.css";
import "../../../../styles/global/user global/font-awesome.min.css";
import "../../../../styles/global/user global/UserHomePageDesign.css";
import introImage3 from "../images/5.jpg";
import IntroImageOne from "../images/bg2.jpg";
import ElectricianImage from "../images/electrician.webp";

// import PlumberImage from "../images/";

import CarpenterImage from "../images/carpenter.webp";

import GlassCleanerImage from "../images/glasscleaner.jpg";

// import GlazierImage from "../images/glazier4.jpg";

// import FlooringInstallerImage from "../images/flooringinstaller4.jpg";

import FooterImage from "../images/l5.png";
import ServiceSelectButtonImage from "../images/plus.png";
import IntroImageTwo from "../images/rs.jpg";
import UserHomePageLogo from "../images/userHomeNavLogo.png";

export default function UserServicePageLayout() {
  return (
    <main>
      <header
        class="p-3  text-white fixed-top  "
        style={{ background: "#057a8d" }}
      >
        <div class="container mt-3">
          <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <NavLink
              to="/users/homepage"
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
      </div>

      {/* user service section */}

      <div style={{ textAlign: "center", marginTop: "3%" }}>
        <button
          class="custom-service-btn btn-bg btn mt-3"
          // style={{
          //   padding: "7px 10px",
          //   borderRadius: "10px",
          //   height: "50px",
          //   textAlign: "center",
          // }}
        >
          Home and Office Appliances
        </button>
      </div>

      <section class="hero d-flex justify-content-center align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-4">
              <div
                class="card mt-5"
                style={{ boxShadow: "0 24px 8px 0 rgba(0, 0, 0, 0.2)" }}
              >
                <img
                  src={ElectricianImage}
                  class="card-img-top"
                  style={{ height: "400px" }}
                  width="30%"
                  height="30%"
                  alt="ElectricianImage"
                />
                <div class="card-body">
                  <h5 class="card-title  text-center">Electrician</h5>
                  <p class="card-text  text-center">
                    Average Rating : 3.45
                    <span
                      class="fa fa-star checked"
                      style={{ color: "orange" }}
                    ></span>
                  </p>
                  <p class="card-text  text-center text-muted">
                    Rate : ৳ 22.33
                  </p>
                </div>
                <div class="card-footer">
                  <h3 class="text-muted"></h3>
                  <button
                    type="submit"
                    class="btn btn-info"
                    style={{ width: "100%", fontSize: "20px" }}
                  >
                    <img
                      src={ServiceSelectButtonImage}
                      alt="ServiceSelectButtonImage"
                      width="30px"
                    />
                    &nbsp;Select
                  </button>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div
                class="card mt-5"
                style={{ boxShadow: "0 24px 8px 0 rgba(0, 0, 0, 0.2)" }}
              >
                <img
                  src={CarpenterImage}
                  class="card-img-top"
                  style={{ height: "400px" }}
                  width="30%"
                  height="30%"
                  alt="CarpenterImage"
                />
                <div class="card-body">
                  <h5 class="card-title  text-center">Carpenter</h5>
                  <p class="card-text  text-center">
                    Average Rating : 3.45
                    <span
                      class="fa fa-star checked"
                      style={{ color: "orange" }}
                    ></span>
                  </p>
                  <p class="card-text  text-center text-muted">
                    Rate : ৳ 22.33
                  </p>
                </div>
                <div class="card-footer">
                  <h3 class="text-muted"></h3>
                  <button
                    type="submit"
                    class="btn btn-info"
                    style={{ width: "100%", fontSize: "20px" }}
                  >
                    <img
                      src={ServiceSelectButtonImage}
                      alt="ServiceSelectButtonImage"
                      width="30px"
                    />
                    &nbsp;Select
                  </button>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div
                class="card mt-5"
                style={{ boxShadow: "0 24px 8px 0 rgba(0, 0, 0, 0.2)" }}
              >
                <img
                  src={GlassCleanerImage}
                  class="card-img-top"
                  style={{ height: "400px" }}
                  width="30%"
                  height="30%"
                  alt="GlassCleanerImage"
                />
                <div class="card-body">
                  <h5 class="card-title  text-center">Electrician</h5>
                  <p class="card-text  text-center">
                    Average Rating : 3.45
                    <span
                      class="fa fa-star checked"
                      style={{ color: "orange" }}
                    ></span>
                  </p>
                  <p class="card-text  text-center text-muted">
                    Rate : ৳ 22.33
                  </p>
                </div>
                <div class="card-footer">
                  <h3 class="text-muted"></h3>
                  <button
                    type="submit"
                    class="btn btn-info"
                    style={{ width: "100%", fontSize: "20px" }}
                  >
                    <img
                      src={ServiceSelectButtonImage}
                      alt="ServiceSelectButtonImage"
                      width="30px"
                    />
                    &nbsp;Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ textAlign: "center", marginTop: "3%" }}>
        <button
          class="custom-service-btn btn-bg btn mt-3"
          // style={{
          //   padding: "7px 10px",
          //   borderRadius: "10px",
          //   height: "50px",
          //   textAlign: "center",
          // }}
        >
          Construction Site Works
        </button>
      </div>

      <section class="hero d-flex justify-content-center align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-4">
              <div
                class="card mt-5"
                style={{ boxShadow: "0 24px 8px 0 rgba(0, 0, 0, 0.2)" }}
              >
                <img
                  src={ElectricianImage}
                  class="card-img-top"
                  style={{ height: "400px" }}
                  width="30%"
                  height="30%"
                  alt="ElectricianImage"
                />
                <div class="card-body">
                  <h5 class="card-title  text-center">Electrician</h5>
                  <p class="card-text  text-center">
                    Average Rating : 3.45
                    <span
                      class="fa fa-star checked"
                      style={{ color: "orange" }}
                    ></span>
                  </p>
                  <p class="card-text  text-center text-muted">
                    Rate : ৳ 22.33
                  </p>
                </div>
                <div class="card-footer">
                  <h3 class="text-muted"></h3>
                  <button
                    type="submit"
                    class="btn btn-info"
                    style={{ width: "100%", fontSize: "20px" }}
                  >
                    <img
                      src={ServiceSelectButtonImage}
                      alt="ServiceSelectButtonImage"
                      width="30px"
                    />
                    &nbsp;Select
                  </button>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div
                class="card mt-5"
                style={{ boxShadow: "0 24px 8px 0 rgba(0, 0, 0, 0.2)" }}
              >
                <img
                  src={CarpenterImage}
                  class="card-img-top"
                  style={{ height: "400px" }}
                  width="30%"
                  height="30%"
                  alt="CarpenterImage"
                />
                <div class="card-body">
                  <h5 class="card-title  text-center">Carpenter</h5>
                  <p class="card-text  text-center">
                    Average Rating : 3.45
                    <span
                      class="fa fa-star checked"
                      style={{ color: "orange" }}
                    ></span>
                  </p>
                  <p class="card-text  text-center text-muted">
                    Rate : ৳ 22.33
                  </p>
                </div>
                <div class="card-footer">
                  <h3 class="text-muted"></h3>
                  <button
                    type="submit"
                    class="btn btn-info"
                    style={{ width: "100%", fontSize: "20px" }}
                  >
                    <img
                      src={ServiceSelectButtonImage}
                      alt="ServiceSelectButtonImage"
                      width="30px"
                    />
                    &nbsp;Select
                  </button>
                </div>
              </div>
            </div>

            <div class="col-4">
              <div
                class="card mt-5"
                style={{ boxShadow: "0 24px 8px 0 rgba(0, 0, 0, 0.2)" }}
              >
                <img
                  src={GlassCleanerImage}
                  class="card-img-top"
                  style={{ height: "400px" }}
                  width="30%"
                  height="30%"
                  alt="GlassCleanerImage"
                />
                <div class="card-body">
                  <h5 class="card-title  text-center">Electrician</h5>
                  <p class="card-text  text-center">
                    Average Rating : 3.45
                    <span
                      class="fa fa-star checked"
                      style={{ color: "orange" }}
                    ></span>
                  </p>
                  <p class="card-text  text-center text-muted">
                    Rate : ৳ 22.33
                  </p>
                </div>
                <div class="card-footer">
                  <h3 class="text-muted"></h3>
                  <button
                    type="submit"
                    class="btn btn-info"
                    style={{ width: "100%", fontSize: "20px" }}
                  >
                    <img
                      src={ServiceSelectButtonImage}
                      alt="ServiceSelectButtonImage"
                      width="30px"
                    />
                    &nbsp;Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer
        class="site-footer "
        // style={{ backgroundColor: "black", color: "white" }}
        style={{ fontSize: "16px", color: "white", marginTop: "3%" }}
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
