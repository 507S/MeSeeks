import React from "react";
import introImage3 from "../../images/5.jpg";
import IntroImageOne from "../../images/bg2.jpg";
import IntroImageTwo from "../../images/rs.jpg";
export default function UserCarouselSection() {
  return (
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
              <p>We will help people by providing our skillful workers</p>
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
  );
}
