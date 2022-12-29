import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'

function AcceptOrRejectWork() {
    const navigate = useNavigate()
    let userInfo = false

    if (localStorage.getItem("userInfo")) {
        userInfo = JSON.parse(localStorage.getItem("userInfo"));
    }

    const category = userInfo.category
    const uid = userInfo.id

    const [isLoading, setIsLoading] = React.useState(true)
    const [allWork, setAllWork] = React.useState([
        { workName: '', price: '' },
    ]);
    const [allPendingWork, setAllPendingWork] = React.useState([
        { workName: '', price: '' },
    ]);

    const [allCompletedWork, setAllCompletedWork] = React.useState([
        { workName: '', price: '' },
    ]);

    const fetchPendingWork = () => {

    }
    React.useEffect(() => {
        fetchProducts();
        fetchPendingWork();
    }, []);

    const fetchProducts = () => {
        axios
            .get(`http://localhost:8003/api/workers/a-r/${category}`)
            .then((res) => {
                console.log(res.data);
                setAllWork(res.data);
                console.log("this is all work")
                console.log(allWork)
                axios
                    .get(`http://localhost:8003/api/workers/pending/${uid}`)
                    .then((res) => {
                        console.log(res.data);
                        setAllPendingWork(res.data);
                        console.log("this is all pending work")
                        console.log(allPendingWork)
                        axios
                            .get(`http://localhost:8003/api/workers/completed/${uid}`)
                            .then((res) => {
                                console.log("********here***********")
                                console.log(res.data);
                                setAllCompletedWork(res.data);
                                console.log("this is all completed work")
                                console.log(allCompletedWork)
                                setIsLoading(false)
                            })
                            .catch((err) => {
                                console.log(err)
                            })
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });

    };

    const AcceptWork = (id) => {
        console.log("work id:", id)
        console.log("worker id: ", uid)
        try {
            axios.post(`http://localhost:8003/api/workers/accept-work`, { id, uid })
            window.location.reload()
        }
        catch (e) {
            alert(e)
        }
    }

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }

    else {
        return (
            <div>
                <h1>
                    Work Requests
                </h1>
                <br />
                <div>
                    <h1>Incoming Work</h1>
                    {/* <p>{category}</p> */}
                    <p>Plumber</p>
                    <p>{uid}</p>
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
                                <button onClick={() => AcceptWork(work._id)}>Accept</button>
                            </div>
                        ))}
                    </div>
                    <div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h1>
                            Pending Work
                        </h1>
                        <div className='item-container'>
                            {allPendingWork.map((work, i) => (
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
                                </div>
                            ))}
                        </div>
                    </div>
                    <br />
                    <br />
                    <div>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h1>
                            Completed Work
                        </h1>
                        <div className='item-container'>
                            {allCompletedWork.map((work, i) => (
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
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // else{
    //     return(
    //         <h1>
    //             You are all caught up, no work to show
    //         </h1>
    //     )
    // }
}

export default AcceptOrRejectWork;