import axios from "axios";
import React from "react";
import UserLoaderLayout from "../../../loading phase components/userSite loading phase/UserLoaderLayout";

function ListOfWork(){
  let userInfo = false

    if (localStorage.getItem("userInfo")) {
    userInfo = JSON.parse(localStorage.getItem("userInfo"));
    }

    const uid = userInfo.id
    // console.log("user id is: ")
    // console.log(uid)
      // const {state} = useLocation();
      // const { name, type } = state;
      // console.log(name)
      const [isLoading, setIsLoading] = React.useState(true)
      const[formData, setFormData] = React.useState(
        {
          workerType: "",
          location:"",
          address:"",
          phone:"",
        })
      const [inputList, setInputList] = React.useState([
          {workName: '', price: '' },
        ]);
      
      const [allWork, setAllWork] = React.useState([
        {workName: '', price: '' },
      ]);

  React.useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get(`http://localhost:8003/api/listofwork/${uid}`)
      .then((res) => {
        console.log(res);
        setAllWork(res.data);
        console.log("this is all work");
        console.log(allWork);
        setIsLoading(false);
      //   setTimeout(() => {
      //     setIsLoading(false);
      //   }, 1 * 60 * 1000);
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
      const { data } = axios.post(
        "http://localhost:8003/api/appointment-status",
        allData
      );
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

  if (isLoading) {
    return <UserLoaderLayout />;
  } else {
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
            placeholder="HWorker Type"
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
              <p>{work.status}</p>
              <p>
                {work.list.map((w) => (
                  <div>
                    <p>{w.workName}</p>
                    <p>{w.price}</p>
                  </div>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ListOfWork;
