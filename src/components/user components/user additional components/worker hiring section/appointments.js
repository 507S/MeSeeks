import axios from "axios"
import React from "react"
import { useNavigate } from 'react-router-dom'
import WorkListImage from "../../../../assets/user assets/list.png"
import UserLoaderLayout from "../../../loading phase components/userSite loading phase/UserLoaderLayout"
import UserNavList from "../user home section/user navList section/UserNavList"
import AppointmentListSubmissionImage from "./AppointmentListSubmissionImage"

function Appointment() {
    const navigate = useNavigate()
    let userInfo = false

    if (localStorage.getItem("userInfo")) {
        userInfo = JSON.parse(localStorage.getItem("userInfo"));
    }

    const [isLoading, setIsLoading] = React.useState(true)

    const uid = userInfo.id
    const [allWork, setAllWork] = React.useState([
        { workName: '', price: '' },
    ]);

    React.useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        axios
            .get(`http://localhost:8003/api/listofwork/${uid}`)
            .then((res) => {
                console.log(res.data);
                setAllWork(res.data);
                // console.log("this is all work")
                // console.log(allWork)
                // setIsLoading(false);
                setTimeout(() => {
                    setIsLoading(false);
                  },  1000);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const handleDelete = (id) => {
        // const {value} = e.target
        // e.preventDefault();
        console.log(id)
        try {
            axios.post(`http://localhost:8003/api/delete-work`, { id })
            window.location.reload()
        }
        catch (e) {
            alert(e)
        }
        // setWorkID(formRef.current.hiddenInput.value)
        // console.log(workID)
        // console.log("This is value:")
    }

    const submitHandler = ()=>{
        navigate("/users/submit-work")
    }

    if(isLoading){
        return(
            <UserLoaderLayout />
        )
      }

    else{
    return (
    //     <div>
    //         <button onClick={submitHandler}>Add a work</button>        
    //         <div className='item-container'>
    //         {allWork.map((work, i) => (
    //             <div className='card'>
    //                 <h1>{work.workerType}</h1>
    //                 <p>{work._id}</p>
    //                 <p>{work.address}</p>
    //                 <p>{work.phone}</p>
    //                 <p>{work.status}</p>
    //                 <p>
    //                     {work.list.map((w) => (
    //                         <div>
    //                             <p>{w.workName}</p>
    //                             <p>{w.price}</p>
    //                         </div>
    //                     ))}
    //                 </p>

    //                 <button onClick={() => handleDelete(work._id)}>Delete</button>
    //             </div>
    //         ))}
    //     </div>
    //  </div>

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
    <AppointmentListSubmissionImage />

    <div class="container marketing">
      <h3
        style={{
          textAlign: "center",
          fontWeight: "lighter",
          marginBottom: "10%",
          color: "#f1c111",
        }}
      >
       Work List
      </h3>
    </div>


    <div className="container mt-3 ">

    <div class="card">
    <div class="card-body">

      <img src={WorkListImage} alt="workListImage" style={{float:"left"}} />
    <button  class="btn btn-info "style={{marginBottom:"3%",float:"right"}}  onClick={submitHandler} > <i className="fa fa-wrench"></i>&nbsp; Add new work</button>

    <table class="table table-bordered" style={{textAlign:"justify"}}>
  <thead>
    <tr>
      <th scope="col">Work ID</th>
      <th scope="col">Worker Type</th>
      <th scope="col">Phone</th>
      <th scope="col">Address</th>
      <th scope="col">Status</th>
      <th scope="col">Work Name</th>
      <th scope="col">Work Price</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {allWork.map((work, i) => ( 
    <tr>
      <td>{work._id}</td>
      <td>{work.workerType}</td>
      <td>+88{work.phone}</td>
      <td>{work.address}</td>
      <td>{work.status}</td>
      {work.list.map((w) => (
      <><td>{w.workName}</td><td>{w.price}</td></>
      ))}
      <td><button  class="btn btn-danger"onClick={() => handleDelete(work._id)} > <i className="fa-solid fa-trash-can"></i>&nbsp;Delete</button></td>
    </tr>
     ))}
  
  </tbody>
</table>




    </div>
    </div>
    </div>

    {/* worker hiring form

*/}

    
    {/* <UserHomeSectionFooter /> */}
  </main>

    )
}}

export default Appointment