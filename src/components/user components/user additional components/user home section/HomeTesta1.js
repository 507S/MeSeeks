/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { NavLink } from "react-router-dom";
// import "../../../../styles/global/user global/aos.css";
// import "../../../../styles/global/user global/bootstrap.min.css";
// import "../../../../styles/global/user global/font-awesome.min.css";
// import "../../../../styles/global/user global/owl.carousel.min.css";
// import "../../../../styles/global/user global/owl.theme.default.min.css";
// import "../../../../styles/global/user global/welcome.css";
export default function HomeTesta() {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src="./images/logo.png" width="80px" height="80px" alt="" />
            MeSeeks
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="./index.html" className="nav-link smoothScroll">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="./service.html" className="nav-link smoothScroll">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link smoothScroll">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link smoothScroll">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link smoothScroll">
                  Help
                </a>
              </li>

              <li className="nav-item">
                <a href="contact.html" className="nav-link contact">
                  Login
                </a>
              </li>
              <li className="nav-item">
                <a href="contact.html" className="nav-link contact">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <!-- HERO --> */}
      <section className="hero hero-bg d-flex justify-content-center align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center">
              <div className="hero-text">
                <h1
                  className="text-white"
                  style={{ fontSize: "32px" }}
                  data-aos="fade-up"
                >
                  MeSeeks is a social service website. A place where you can
                  hire labors. Our priority is to serve you at best.
                </h1>

                <NavLink
                  href=""
                  className="custom-btn btn-bg btn mt-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Welcome To MeSeeks!
                </NavLink>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div
                className="hero-image"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <img
                  src="images/x3-modified.png"
                  className="img-fluid"
                  alt="working "
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- HERO -->

  <!--intro--> */}
      <h2 className="mb-5 text-center" data-aos="fade-up">
        <strong> Our Services</strong>
      </h2>
      <section
        className="hero d-flex justify-content-center align-items-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="container">
          <div className="row" style={{ marginTop: "42px" }}>
            <div className="col-lg-4">
              <img
                src="./images/hw-modified.png"
                width="60%"
                height="60%"
                alt=""
              />
              <h2 style={{ marginTop: "42px", textAlign: "justify" }}>
                Hire Workers
              </h2>
              <p>
                Consult with our psychiatrists.Tell us about your mental
                health.Tell us what you think about yourself.
              </p>
            </div>

            <div className="col-lg-4">
              <img
                src="./images/ur-modified.png"
                width="60%"
                height="60%"
                alt=""
              />
              <h2 style={{ marginTop: "42px", textAlign: "justify" }}>
                {" "}
                Rate Workers
              </h2>
              <p>
                Call our psychiatrists. Share your problem with us. We are here
                to help you.
              </p>
            </div>

            <div className="col-lg-4">
              <img
                src="./images/ure-modified.png"
                width="60%"
                height="60%"
                alt=""
              />
              <h2 style={{ marginTop: "42px", textAlign: "justify" }}>
                {" "}
                Review Service
              </h2>
              <p>
                Meet our psychiatrists through appointment, voice call. We are
                here for you. We think about you.
              </p>
            </div>
          </div>

          <div className="row" style={{ marginTop: "100px" }}>
            <div className="col-lg-4">
              <img
                src="./images/uc2-modified.png"
                width="60%"
                height="60%"
                alt=""
              />
              <h2 style={{ marginTop: "42px", textAlign: "justify" }}>
                {" "}
                Communication
              </h2>
              <p>
                Visit us. Join our community.See what people thinks, likes and
                shares everyday.
              </p>
            </div>

            <div className="col-lg-4">
              <img
                src="./images/ep3-modified.png"
                width="60%"
                height="60%"
                alt=""
              />
              <h2 style={{ marginTop: "42px", textAlign: "justify" }}>
                {" "}
                Elastic Provision
              </h2>
              <p>
                Share your thoughts by joining us.We appreciate your ideas and
                thoughts.
              </p>
            </div>

            <div className="col-lg-4">
              <img
                src="./images/hlp-modified.png"
                width="60%"
                height="60%"
                alt=""
              />
              <h2 style={{ marginTop: "42px", textAlign: "justify" }}>
                Help Line
              </h2>
              <p>
                Fix your appointment date with your psychiatrist.Tell us about
                your mental health.We are listening.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--intro--> */}

      {/* <!-- ABOUT --> */}
      {/* <section className="about section-padding pb-0" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto col-md-12 col-12">
              <div className="about-info"></div>

              <div
                className="about-image"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src="images/office.png"
                  className="img-fluid"
                  alt="office"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <!-- ABOUT -->

  <!-- services --> */}
      <section className="project section-padding" id="project">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-12">
              <h2 className="mb-5 text-center" data-aos="fade-up">
                <strong> Service Category</strong>
              </h2>

              <div className="owl-carousel owl-theme" id="project-slide">
                <div
                  className="item project-wrapper"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="../images/c1.jpg"
                    className="img-fluid"
                    alt="project image"
                    style={{ height: "500px" }}
                  />

                  <div className="project-info">
                    <small>
                      Average Rating : 3.5
                      <span
                        className="fa fa-star checked"
                        style={{ color: "orange" }}
                      ></span>
                    </small>

                    <h3>
                      <a href="./service.html">
                        <span>Car Maintenance</span>
                        <i className="fa fa-angle-right project-icon"></i>
                      </a>
                    </h3>
                  </div>
                </div>

                <div
                  className="item project-wrapper"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="../images/cw.jpg"
                    className="img-fluid"
                    alt="project image"
                    style={{ height: "500px" }}
                  />

                  <div className="project-info">
                    <small>
                      Average Rating : 3.5
                      <span
                        className="fa fa-star checked"
                        style={{ color: "orange" }}
                      ></span>
                    </small>

                    <h3>
                      <a href="./service.html">
                        <span>Construction Site Works</span>
                        <i className="fa fa-angle-right project-icon"></i>
                      </a>
                    </h3>
                  </div>
                </div>

                <div
                  className="item project-wrapper"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="../images/he.jpg"
                    className="img-fluid"
                    alt="project image"
                    style={{ height: "500px" }}
                  />

                  <div className="project-info">
                    <small>
                      Average Rating : 3.5
                      <span
                        className="fa fa-star checked"
                        style={{ color: "orange" }}
                      ></span>
                    </small>

                    <h3>
                      <a href="./service.html">
                        <span>Home appliances</span>
                        <i className="fa fa-angle-right project-icon"></i>
                      </a>
                    </h3>
                  </div>
                </div>

                <div
                  className="item project-wrapper"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="images/h3.jpg"
                    className="../images/img-fluid"
                    alt="project image"
                    style={{ height: "500px" }}
                  />

                  <div className="project-info">
                    <small>
                      Average Rating : 3.5
                      <span
                        className="fa fa-star checked"
                        style={{ color: "orange" }}
                      ></span>
                    </small>

                    <h3>
                      <a href="./service.html">
                        <span>Office appliances</span>
                        <i className="fa fa-angle-right project-icon"></i>
                      </a>
                    </h3>
                  </div>
                </div>
                <div
                  className="item project-wrapper"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img
                    src="../images/rs.webp"
                    className="img-fluid"
                    alt="project image"
                    style={{ height: "500px" }}
                  />

                  <div className="project-info">
                    <small>
                      Average Rating : 3.5
                      <span
                        className="fa fa-star checked"
                        style={{ color: "orange" }}
                      ></span>
                    </small>

                    <h3>
                      <a href="./service.html">
                        <span>Road Site Maintenance</span>
                        <i className="fa fa-angle-right project-icon"></i>
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- services -->

  <!-- TESTIMONIAL --> */}
      <section className="testimonial section-padding">
        <h2 className="mb-5 text-center" data-aos="fade-up">
          <strong> Our Goals</strong>
        </h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-12">
              <div className="contact-image" data-aos="fade-up">
                <img src="images/x4.jpg" className="img-fluid" alt="website" />
              </div>
            </div>

            <div className="col-lg-6 col-md-7 col-12">
              <h4 className="my-5 pt-3" data-aos="fade-up" data-aos-delay="100">
                We Care About You
              </h4>

              <div
                className="quote"
                data-aos="fade-up"
                data-aos-delay="200"
              ></div>

              <h5 className="mb-4" data-aos="fade-up" data-aos-delay="300">
                Your smile is our smile. Have faith on us. Smiling is
                universally considered to be a way we display joy. It can
                communicate our internal world to people on the outside, and it
                can be a welcoming sign to new people.
              </h5>
            </div>
            <hr style={{ color: "black" }} />

            {/* <!--2nd one--> */}

            <div className="col-lg-6 col-md-7 col-12">
              <h4 className="my-5 pt-3" data-aos="fade-up" data-aos-delay="100">
                Let Us Help You
              </h4>

              <div
                className="quote"
                data-aos="fade-up"
                data-aos-delay="200"
              ></div>

              <h5 className="mb-4" data-aos="fade-up" data-aos-delay="300">
                Communicate with us any time. We are here to serve you 24/7.If
                you’re reading this… Congratulations, you’re alive. If that’s
                not something to smile about, then I don’t know what is
              </h5>
            </div>
            <div className="col-lg-6 col-md-5 col-12">
              <div className="contact-image" data-aos="fade-up">
                <img src="images/l6.webp" className="img-fluid" alt="website" />
              </div>
            </div>
            <hr style={{ color: "black" }} />

            {/* <!--3rd one--> */}

            <div
              className="col-lg-6 col-md-5 col-12"
              style={{ marginTop: "20px" }}
            >
              <div className="contact-image" data-aos="fade-up">
                <img src="images/h3.jpg" className="img-fluid" alt="website" />
              </div>
            </div>

            <div className="col-lg-6 col-md-7 col-12">
              <h5 className="my-5 pt-3" data-aos="fade-up" data-aos-delay="100">
                We are with you.
              </h5>

              <div
                className="quote"
                data-aos="fade-up"
                data-aos-delay="200"
              ></div>

              <h3 className="mb-4" data-aos="fade-up" data-aos-delay="300">
                We believe in the quote; "Either you run the day or the day runs
                you".A gentle word, a kind look, a good-natured smile can work
                wonders and accomplish miracles.
              </h3>
            </div>
            <hr style={{ color: "black" }} />
          </div>
        </div>
      </section>

      {/* <!-- Facts Start --> */}
      <h2 className="mb-5 text-center" data-aos="fade-up">
        <strong> Our Achievements</strong>
      </h2>
      <div
        className="container-fluid my-5 py-5 text-center"
        data-aos="fade-up"
        data-aos-delay="200"
        style={{ backgroundColor: "#057a8d" }}
      >
        <div className="row pt-5">
          <div className="col-lg-3 col-sm-6 mb-5">
            <h5
              className="mb-4 d-inline-flex align-items-center justify-content-center border rounded-circle text-white"
              style={{ width: "50px", height: "50px" }}
            >
              <img src="../images/jobdone.png" />
            </h5>
            <h4 className="display-4 text-white mb-3" data-toggle="counter-up">
              250
            </h4>
            <h6 className="text-white m-0">Completed Services</h6>
          </div>
          <div className="col-lg-3 col-sm-6 mb-5">
            <h5
              className="mb-4 d-inline-flex align-items-center justify-content-center text-white"
              style={{ width: "50px", height: "50px" }}
            >
              <img src="../images/team.png" />
            </h5>
            <h4 className="display-4 text-white mb-3" data-toggle="counter-up">
              1500
            </h4>
            <h6 className="text-white m-0">Happy Client</h6>
          </div>
          <div className="col-lg-3 col-sm-6 mb-5">
            <h5
              className="mb-4 d-inline-flex align-items-center justify-content-center text-white"
              style={{ width: "50px", height: "50px" }}
            >
              <img src="../images/workers.png" />
            </h5>
            <h4 className="display-4 text-white mb-3" data-toggle="counter-up">
              10000
            </h4>
            <h6 className="text-white m-0">Total Workers</h6>
          </div>
          <div className="col-lg-3 col-sm-6 mb-5">
            <h5
              className="mb-4 d-inline-flex align-items-center justify-content-center text-white"
              style={{ width: "50px", height: "50px" }}
            >
              <img src="../images/totalservices.png" />
            </h5>
            <h4 className="display-4 text-white mb-3" data-toggle="counter-up">
              25
            </h4>
            <h6 className="text-white m-0">Total Services</h6>
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mx-lg-auto col-md-8 col-10">
              <h1
                className="text-white"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {/* <!-- We make creative <strong>brands</strong> only. --> */}
                <div className="contact-image" data-aos="fade-up">
                  <img
                    src="images/l5.png"
                    className="img-fluid"
                    alt="website"
                  />
                </div>
              </h1>
            </div>

            <div
              className="col-lg-3 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4 className="my-4">Contact Us</h4>

              <p className="mb-1">
                <i className="fa fa-phone mr-2 footer-icon"></i>
                +99 080 070 4224
              </p>

              <p>
                <NavLink to="#">
                  <i className="fa fa-envelope mr-2 footer-icon"></i>
                  meseeks@bd.com
                </NavLink>
              </p>
            </div>

            <div
              className="col-lg-3 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h4 className="my-4">Our Office</h4>

              <p className="mb-1">
                <i className="fa fa-home mr-2 footer-icon"></i>
                Av. Lúcio Costa - Barra da Tijuca, Rio de Janeiro - RJ, Brazil
              </p>
            </div>

            <div
              className="col-lg-4 mx-lg-auto text-center col-md-8 col-12"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p className="copyright-text">
                Copyright &copy; 2022 MeSeeks
                <br />
              </p>
            </div>

            <div
              className="col-lg-4 mx-lg-auto col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <ul className="footer-link">
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

            <div
              className="col-lg-3 mx-lg-auto col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <ul className="social-icon">
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
    </>
  );
}
