import axios from "axios";
import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../../../../styles/global/worker global/WorkerProfileDynamicInputFieldStyle.css";
import SelectInput from "./SelectInput";
import UserHomeSectionFooter from "../user home section/user footerSection/UserHomeSectionFooter";
import UserNavList from "../user home section/user navList section/UserNavList";
import AppointmentListSubmissionImage from "./AppointmentListSubmissionImage";

function SubmitAppointment() {
    let name=""
    const { state } = useLocation();
    const navigate = useNavigate()
    // if (state) {
    //     let { name, type } = state;
    // }
    // else{
    //     name = ""
    // }
    // console.log(name)
    let userInfo = false

    if (localStorage.getItem("userInfo")) {
        userInfo = JSON.parse(localStorage.getItem("userInfo"));
    }

    const uid = userInfo.id
    const [formData, setFormData] = React.useState(
        {
            uid: uid,
            workerType: name,
            location: "",
            address: "",
            phone: "",
        })
    const [inputList, setInputList] = React.useState([
        { workName: '', price: '' },
    ]);

    const handleSubmit = (e) => {
        // e.preventDefault(); 
        let allData = { formData: formData, workList: inputList };
        try {
            const { data } = axios.post(`http://localhost:8003/api/appointment-status`, allData)
            console.log(data)
            console.log("inputList: ", inputList);
            console.log("FormData: ", formData)
            navigate("/users/appointment")
        }
        catch (e) {
            alert(e)
        }
    };
    function handleChangeInput(event, index) {
        const { name, value } = event.target
        console.log(name, value)
        const list = [...inputList]
        list[index][name] = value
        setInputList(list)
    }

    function handleEvent(event) {
        console.log("This is event", event.target)
        const { name, value, type, checked } = event.target;
        console.log(value)
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }

        })
    }

    const handleAddFields = () => {
        setInputList([...inputList, { workName: '', price: '' }])
    }

    const handleRemoveFields = id => {
        const values = [...inputList];
        values.splice(id, 1)
        setInputList(values);
    }
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
      {/* <UserCarouselSection /> */}

      <div className="div-2" style={{marginTop:"7%"}}>
      <AppointmentListSubmissionImage />
      </div>

      <div class="container marketing mt-3">
        <h1
          style={{
            textAlign: "center",
            fontWeight: "lighter",
            marginBottom: "10%",
            color: "#f1c111",
          }}
        >
          Work List
        </h1>
      </div>

<div className="container" style={{margin: "5%"}}>
        <div>
            {/* <h1>Work List</h1> */}
            {/* <div className="col-sm-9"> */}
            <form onSubmit={handleSubmit} >
                <div className="row g-3">
            <label for="username" className="form-label ">
        <h5>
          <i className="fa-solid fa-helmet-safety"></i>&nbsp;Worker Type
        </h5>
      </label>
                {/* <input
                    name="workerType"
                    label="workerType"
                    className="form-control"
                    type="text"
                    value={formData.workerType}
                    onChange={handleEvent}
                /> */}
                <SelectInput
                    name="workerType"
                    value={formData.workerType} 
                    onChange={handleEvent}
                  />
                </div>
                <br />

                <br />
                {inputList.map((x, i) => (
                    <div key={inputList.id} className="row g-3 mt-3">
                        
                            <div class="col">
                            <label for="username" className="form-label ">
        <h5>
          <i className="fa fa-wrench"></i>&nbsp;Work Name
        </h5>
      </label>
                        <input

                            name="workName"
                            className="form-control"
                            type="text"
                            label="Work Name"
                            placeholder="Work Name"
                            variant="filled"
                            value={inputList.workName}
                            onChange={e => handleChangeInput(e, i)}
                        />
                        </div>
                        <div class="col mt-3">
                        <label for="username" className="form-label ">
        <h5>
          <i className="fa-solid fa-hand-holding-dollar"></i>&nbsp;Price
        </h5>
      </label>
                            
                        <input
                            prefix={'$'}
                            placeholder={"$00.00"}
                            className="form-control"
                            name="price"
                            type="Number"
                            label="price"
                            variant="filled"
                            value={inputList.lastName}
                            onChange={e => handleChangeInput(e, i)}
                        />
                        </div>
                        {
                            inputList.length !== 1 &&
                            <button className="mt-3" style={{  color: "red",
                                border: "1px solid red"
                        
                            }}
                                onClick={() => handleRemoveFields(i)}> <span>
                                Remove&nbsp;
                                {/* <i className="fa fa-minus"></i> */}
                              </span> </button>}
                        {

                            inputList.length - 1 === i &&
                            <span>
                            <button  onClick={handleAddFields} 
                            
                            style={{  alignSelf: "flex-start",
                                display: "flex",
                                alignItems: "center",
                                marginTop: "0.5rem",
                                color: "rgb(0, 208, 255)",
                                border: "1px solid rgb(0, 208, 255)"}}
                            
                            >
                            Add New Work &nbsp;
                              <i className="fa fa-plus"></i>
                            </button>
                            </span>
                            }
                    </div>
                ))}
          
              <div class="row g-3 mt-3">
              <div class="col">
              <label for="username" className="form-label ">
        <h5>
          <i className="fa fa-phone"></i>&nbsp;Phone Number
        </h5>
      </label>
                <input
                    name="phone"
                    label="phone"
                    type="Number"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleEvent}
                />
             </div>
             
                <div class="col">
                <label for="username" className="form-label ">
        <h5>
          <i className="fa fa-map-marker"></i>&nbsp;Location
        </h5>
      </label>
                <input
                    name="location"
                    label="location"
                    type="text"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleEvent}
                />
                </div>
                </div>
                <label for="username" className="form-label mt-3 ">
        <h5>
          <i className="fa fa-home"></i>&nbsp;Address
        </h5>
      </label>
                <input
                    name="address"
                    label="address"
                    type="text"
                    tabIndex="10"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleEvent}
                    style={{height:"80px"}}
                />
                <br />
                {/* <div class="col" style={{textAlign:"center"}}> */}
                <div class="row g-3 mt-3">
              <div class="col">
                <button 
                    onClick={handleSubmit} class="btn btn-info w-100 ">
                         <i className="fa fa-wrench"></i>
                        &nbsp;Send</button>
                    {/* </div> */}
                    </div>
                    <div class="col">
                <NavLink to="/users/home">
                <button 
                   class="btn btn-dark w-100 ">
                         <i className="fa fa-times"></i>
                        &nbsp;Cancel</button>
                    {/* </div> */}
                    </NavLink>
                    </div>
                    </div>
            </form>
            </div>
            
        </div>
        {/* </div> */}
        {/* <div className="container-2" style={{margin:"5%"}}></div> */}
        <UserHomeSectionFooter />
        </main>
        
    )
}

export default SubmitAppointment