import axios from "axios"
import React from "react"
import { useNavigate } from 'react-router-dom'
import workList from "../../../../assets/user assets/list.png"
import workType from "../../../../assets/user assets/wrench.png"

import UserLoaderLayout from "../../../loading phase components/userSite loading phase/UserLoaderLayout"
import UserHomeSectionFooter from "../user home section/user footerSection/UserHomeSectionFooter"
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
    <button  class="btn btn-info"  style={{margin:"1%"}}  onClick={submitHandler} > <i className="fa fa-wrench"></i>&nbsp; Add new work</button>
    
    {allWork.map((work, i) => ( 
    <div class="card mt-3 ">
    <div class="card-header" >
    <b style={{color:"green"}} >Work ID : {work._id} </b> <img src={workList} style={{float:"right"}} alt="" />
    </div>
    <div class="card-body">
    <h5 class="card-title"><img src={workType} width="35px" height="35px" alt="" /> Worker Type : {work.workerType} </h5>
    <p class="card-text mt-3" style={{fontSize:"18px"}}>
    <i className="fa fa-phone"></i>&nbsp;Phone Number : +88{work.phone}<br />
    <i className="fa fa-home"></i>&nbsp;Address : {work.address}<br/>
    <i className="fa fa-shopping-bag"></i>&nbsp;Work Status : {work.status}<br />
    <hr/>
        {work.list.map((w) => (
        <>
        <i class="fa-solid fa-helmet-safety"></i>&nbsp;Work Name : {w.workName}<br/>
        <i className="fa fa-dollar"></i>&nbsp;Work Price : {w.price}<br/>
        </>
        ))}
    </p>
    <button  class="btn btn-danger" style={{float:"right"}} onClick={() => handleDelete(work._id)} > <i className="fa-solid fa-trash-can"></i>&nbsp;Delete</button>
    </div>
    </div>
      ))}

    </div>

    {/* worker hiring form

*/}

    
    <UserHomeSectionFooter />
  </main>

    )
}}

export default Appointment