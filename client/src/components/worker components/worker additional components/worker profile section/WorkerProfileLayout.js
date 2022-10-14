import React from "react";
import WorkerProfileActionButton from "./WorkerProfileActionButton";
import WorkerProfileFormSideImage from "./WorkerProfileFormSideImage";
import WorkerProfileHeaderImage from "./WorkerProfileHeaderImage";
import WorkerProfileHeadline from "./WorkerProfileHeadline";
import WorkerProfileSelectInput from "./WorkerProfileSelectInput";
import WorkerProfileTextAreaInput from "./WorkerProfileTextAreaInput";
import WorkerProfileTextInput from "./WorkerProfileTextInput";
export default function WorkerProfileLayout() {
  return (
    <>
      <WorkerProfileHeaderImage />
      <div className="container bootstrap snippet mt-lg-1 text-black-50">
        <div className="row mt-5">
          <WorkerProfileHeadline profileHeadlineText="Set up your Profile" />
          <div className="col-sm-2"></div>
        </div>

        <div className="row">
          <div className="col-sm-3">
            <WorkerProfileFormSideImage />
          </div>
          <div className="col-sm-9">
            <div className="" id="messages">
              {/* <h2></h2> */}

              <hr />

              <form class="row g-3 " action="post">
                <WorkerProfileTextInput
                  labelFor="username"
                  labelName="Username"
                  textInputType="text"
                  inputName="username"
                  value=""
                  // placeholder="Username"
                />
                <WorkerProfileTextInput
                  labelFor="email"
                  labelName="Email"
                  textInputType="email"
                  inputName="email"
                  value=""
                  // placeholder="Email"
                />
                <WorkerProfileTextInput
                  labelFor="phoneNumber"
                  labelName="Phone Number"
                  textInputType="text"
                  inputName="phoneNumber"
                  value=""
                  // placeholder="Phone Number"
                />
                <WorkerProfileTextInput
                  labelFor="workerType"
                  labelName="Worker Genre"
                  textInputType="text"
                  inputName="workerType"
                  value=""
                  // placeholder="Worker Type"
                />
                <WorkerProfileSelectInput
                  labelFor="phone"
                  labelName="Select Working Area"
                  selectNamesFetchedFromDatabase="Uttara"
                />
                <WorkerProfileSelectInput
                  labelFor="workingShift"
                  labelName="Select Working Shift"
                  selectNamesFetchedFromDatabase="Day"
                />
                <WorkerProfileTextAreaInput
                  labelFor="workingExperience"
                  labelName="Work Experiences"
                  textInputRow="3"
                  inputName="workingExperience"
                  value=""
                  // placeholder="Your working Experiences..."
                />
                <WorkerProfileTextAreaInput
                  labelFor="address"
                  labelName="Address"
                  textInputRow="3"
                  inputName="address"
                  value=""
                  // placeholder="Your Address..."
                />
                <WorkerProfileActionButton
                  buttonType="submit"
                  workerProfileActionButtonIcon="fa fa-wrench"
                  workerProfileActionButtonText="Save "
                />
              </form>
              <div className="mt-5"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
