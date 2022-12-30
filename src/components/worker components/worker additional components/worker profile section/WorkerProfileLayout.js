import React, { useState } from "react";
import "../../../../styles/global/user global/aos.css";
import "../../../../styles/global/worker global/WorkerProfileDynamicInputFieldStyle.css";
import WorkerProfileActionButton from "./WorkerProfileActionButton";
import WorkerProfileFormSideImage from "./WorkerProfileFormSideImage";
import WorkerProfileHeaderImage from "./WorkerProfileHeaderImage";
import WorkerProfileHeadline from "./WorkerProfileHeadline";
import WorkerProfileImageChooseInput from "./WorkerProfileImageChooseInput";
import WorkerProfileSelectInput from "./WorkerProfileSelectInput";
import WorkerProfileTextAreaInput from "./WorkerProfileTextAreaInput";
import WorkerProfileTextInput from "./WorkerProfileTextInput";
import WorkerProfileWorkExperienceDurationInput from "./WorkerProfileWorkExperienceDurationInput";
import { useNavigate } from "react-router-dom";
export default function WorkerProfileLayout() {
  const [workExperienceList, setWorkExperienceList] = useState([
    { experienceList: "" },
  ]);

  const navigate = useNavigate()

  const handleNavigate = () =>{
      navigate('/workers/a-r')
  }

  const handleExperienceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...workExperienceList];
    list[index][name] = value;
    setWorkExperienceList(list);
  };

  const handleExperienceRemove = (index) => {
    const list = [...workExperienceList];
    list.splice(index, 1);
    setWorkExperienceList(list);
  };

  const handleExperienceAdd = () => {
    setWorkExperienceList([...workExperienceList, { experienceList: "" }]);
  };

  return (
    <>
      <WorkerProfileHeaderImage />
      <div className="container bootstrap snippet mt-lg-1 text-black-50">
        <div className="row mt-5">
          <WorkerProfileHeadline profileHeadlineText="Set up your Profile" />

          <button onClick={handleNavigate}>Remind me Later</button>

          <div className="col-sm-2"></div>
        </div>

        <div className="row">
          <div className="col-sm-3 ">
            <WorkerProfileFormSideImage />
          </div>
          <div className="col-sm-9">
            <div className="" id="messages">
              {/* <h2></h2> */}

              <hr />

              <form class="row g-3 " action="post">
                <WorkerProfileTextInput
                  labelFor="username"
                  labelIconClassName="fa fa-user"
                  labelName="Username"
                  textInputType="text"
                  inputName="username"
                  value=""
                  // placeholder="Username..."
                />
                <WorkerProfileTextInput
                  labelFor="email"
                  labelIconClassName="fa fa-envelope"
                  labelName="Email"
                  textInputType="email"
                  inputName="email"
                  value=""
                  // placeholder="Email..."
                />
                <WorkerProfileTextInput
                  labelFor="phoneNumber"
                  labelIconClassName="fa fa-phone"
                  labelName="Phone Number"
                  textInputType="text"
                  inputName="phoneNumber"
                  value=""
                  // placeholder="Phone Number..."
                />
                <WorkerProfileTextInput
                  labelFor="workerType"
                  labelIconClassName="fa fa-wrench"
                  labelName="Worker Genre"
                  textInputType="text"
                  inputName="workerType"
                  value=""
                  // placeholder="Worker Type..."
                />
                <WorkerProfileSelectInput
                  labelFor="areaSelection"
                  labelIconClassName="bx bxs-map"
                  labelName="Select Working Area"
                  selectNamesFetchedFromDatabase="Uttara"
                />
                <WorkerProfileSelectInput
                  labelFor="workingShift"
                  labelIconClassName="fa fa-clock-o"
                  labelName="Select Working Shift"
                  selectNamesFetchedFromDatabase="Day"
                />
                <WorkerProfileImageChooseInput
                  imageInputFieldClassName="col-12 mt-4"
                  labelFor="formFile"
                  labelIconClassName="fa fa-picture-o"
                  labelName="Upload your profile picture"
                  inputType="file"
                  inputName="profileImage"
                />

                <h5 className="mt-7">
                  <i className="fa fa-briefcase"></i>&nbsp;Your Work Experience
                </h5>
                {workExperienceList.map((singleService, index) => (
                  <div key={index} className="services">
                    <div className="first-division">
                      <label>Company name : </label>
                      <input
                        name="experienceList"
                        type="text"
                        id="service"
                        value={singleService.experienceList}
                        onChange={(e) => handleExperienceChange(e, index)}
                        required
                      />
                      {/* <label>Duration : </label> */}
                      <div className="row mt-3">
                        <WorkerProfileWorkExperienceDurationInput
                          labelName="Check In"
                          inputName="startDate"
                          inputType="date"
                          // value="startDate"
                          minDateInCalender="2001-01-01"
                          maxDateInCalender="2050-01-01"
                        />
                        <WorkerProfileWorkExperienceDurationInput
                          labelName="Check Out"
                          inputName="endDate"
                          // value="endDate"
                          inputType="date"
                          minDateInCalender="2001-01-01"
                          maxDateInCalender="2050-01-01"
                        />
                      </div>

                      {workExperienceList.length - 1 === index &&
                        workExperienceList.length < 5 && (
                          <button
                            type="button"
                            onClick={handleExperienceAdd}
                            className="add-btn"
                          >
                            {/* <span>Add New Experience</span> */}
                            <span>
                              Add New Experience &nbsp;
                              <i className="fa fa-plus"></i>
                            </span>
                          </button>
                        )}
                    </div>
                    <div className="second-division">
                      {workExperienceList.length !== 1 && (
                        <button
                          type="button"
                          onClick={() => handleExperienceRemove(index)}
                          className="remove-btn"
                        >
                          {/* <span>Remove</span> */}
                          <span>
                            Remove&nbsp;
                            {/* <i className="fa fa-minus"></i> */}
                          </span>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
                <WorkerProfileTextAreaInput
                  labelFor="address"
                  labelIconClassName="fa fa-home"
                  labelName="Address"
                  textInputRow="3"
                  inputName="address"
                  value=""
                  placeholder="Your Address..."
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
