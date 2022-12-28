import axios from "axios"
import React from "react"
import { useNavigate } from 'react-router-dom'

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
                setIsLoading(false)
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
            axios.post(`/api/delete-work`, { id })
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
          <div>Loading...</div>
        )
      }

    else{
    return (
        <div>
            <button onClick={submitHandler}>Add a work</button>        
            <div className='item-container'>
            {allWork.map((work, i) => (
                <div className='card'>
                    <h1>{work.workerType}</h1>
                    <p>{work._id}</p>
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

                    <button onClick={() => handleDelete(work._id)}>Delete</button>
                </div>
            ))}
        </div>
     </div>

    )
}}

export default Appointment