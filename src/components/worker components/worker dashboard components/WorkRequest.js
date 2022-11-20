import axios from "axios"
import React from "react"
import { useState, useEffect } from 'react'
function WorkerRequest() {

    const [isLoading, setIsLoading] = useState(true)
    const [allWork, setAllWork] =  useState([
        {workName: '', price: '' },
      ]);
    
    const fetchProducts = () => {
        axios
          .get('http://localhost:8003/api/work-request')
          .then((res) => {
            console.log(res.data);
            setAllWork(res.data); 
            console.log("this is all work")
            console.log(allWork)
            setIsLoading(false)
          })
          .catch((err) => {
            console.log(err);
          });
      };

    useEffect(() => {
        fetchProducts();
    }, [])

    if (isLoading) {
        return (
            <div>isLoading</div>
        )
    }
    else {
        return (
            <div>
                {
                    allWork.map((work, i) => {
                        <div className='card'>
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
                    })}
            </div>
        )
    }
}

export default WorkerRequest