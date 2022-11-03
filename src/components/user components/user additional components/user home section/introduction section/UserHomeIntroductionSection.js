import React from "react";
import HelpLineImage from "../../images/hlp-modified.png";
import HireWorkerImage from "../../images/hw-modified.png";
import FeedBackImage from "../../images/rating2.png";
import CommunicationWithWorkerImage from "../../images/uc2-modified.png";
import RateWorkerImage from "../../images/ur-modified.png";
import ReviewedWorkerImage from "../../images/ure-modified.png";
export default function UserHomeIntroductionSection({ introHeaderTitle }) {
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontWeight: "lighter",
          marginTop: "3%",
          color: "#f1c111",
        }}
      >
        {introHeaderTitle}
      </h1>
      <div class="row" style={{ marginTop: "42px" }}>
        <div class="col-lg-4">
          <img src={HireWorkerImage} width="60%" height="60%" alt="" />
          <h2 className="mt-5">Hire Workers</h2>
          <p>
            Consult with our psychiatrists.Tell us about your mental health.Tell
            us what you think about yourself.
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
            Meet our psychiatrists through appointment, voice call. We are here
            for you. We think about you.
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
            Fix your appointment date with your psychiatrist.Tell us about your
            mental health.We are listening.
          </p>
        </div>
      </div>
    </>
  );
}
