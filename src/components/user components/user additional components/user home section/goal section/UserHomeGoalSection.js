import React from "react";
import GoalThreeImage from "../../images/h3.jpg";
import GoalTwoImage from "../../images/l6.webp";
import GoalOneImage from "../../images/x4.jpg";
export default function UserHomeGoalSection({ goalSectionHeaderTitle }) {
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
        {goalSectionHeaderTitle}
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
    </>
  );
}
