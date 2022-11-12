import axios from "axios";
import React from "react";
import { useLocation } from "react-router-dom";

function ListOfWork() {
  const { state } = useLocation();
  const { name, type } = state;
  // console.log(name)
  const [formData, setFormData] = React.useState({
    workerType: name,
    location: "",
    address: "",
    phone: "",
  });
  const [inputList, setInputList] = React.useState([
    { workName: "", price: "" },
  ]);

  const [allWork, setAllWork] = React.useState([{ workName: "", price: "" }]);

  React.useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("/api/listofwork")
      .then((res) => {
        console.log(res);
        setAllWork(res.data);
        console.log("this is all work");
        console.log(allWork);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    console.log("here before prevent default");
    e.preventDefault();
    fetchProducts();
    let allData = { formData: formData, workList: inputList };
    try {
      const { data } = axios.post("/api/appointment-status", allData);
      console.log(data);
      console.log("inputList: ", inputList);
      console.log("FormData: ", formData);
    } catch (e) {
      alert(e);
    }
  };

  function handleChangeInput(event, index) {
    const { name, value } = event.target;
    console.log(name, value);
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  }

  function handleEvent(event) {
    const { name, value, type, checked } = event.target;
    console.log(value);
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  const handleAddFields = () => {
    setInputList([...inputList, { workName: "", price: "" }]);
  };

  const handleRemoveFields = (id) => {
    const values = [...inputList];
    values.splice(id, 1);
    setInputList(values);
  };
  return (
    <div>
      <h1>Work List</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="workerType"
          label="workerType"
          type="text"
          value={formData.workerType}
          onChange={handleEvent}
        />
        <br />

        <br />
        {inputList.map((x, i) => (
          <div key={inputList.id}>
            <input
              name="workName"
              type="text"
              label="Work Name"
              placeholder="Work Name"
              variant="filled"
              value={inputList.workName}
              onChange={(e) => handleChangeInput(e, i)}
            />
            <input
              prefix={"$"}
              placeholder={"$00.00"}
              name="price"
              type="Number"
              label="price"
              variant="filled"
              value={inputList.lastName}
              onChange={(e) => handleChangeInput(e, i)}
            />
            {inputList.length !== 1 && (
              <button onClick={() => handleRemoveFields(i)}>
                {" "}
                Remove Item{" "}
              </button>
            )}
            {inputList.length - 1 === i && (
              <button onClick={handleAddFields}>Add element</button>
            )}
          </div>
        ))}
        <br />
        <input
          name="location"
          label="location"
          type="text"
          placeholder="Location"
          value={formData.location}
          onChange={handleEvent}
        />
        <br />
        <input
          name="address"
          label="address"
          type="text"
          placeholder="Address"
          value={formData.address}
          onChange={handleEvent}
        />
        <br />
        <input
          name="phone"
          label="phone"
          type="Number"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleEvent}
        />
        <br />
        <button onClick={handleSubmit}>Send</button>
      </form>
      <div className="item-container">
        {allWork.map((work, i) => (
          <div className="card">
            <h1>{work.workerType}</h1>
            <p>{work.address}</p>
            <p>{work.phone}</p>
            <p>{JSON.stringify(work.list)}</p>
            {/* <p>{work.list[0].workName}</p> */}
            {/* <p>{work.list[0]}</p> */}
            {/* <p>
                {work.list.map((w) => (
                  <div>
                  <p>{w.workName}</p>
                  </div>
              ))}
              </p> */}

            {/* {
                 work.list.forEach(element => {
                  console.log("this is elem" + JSON.stringify(element))
                  
                 })
                
               
              } */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfWork;
