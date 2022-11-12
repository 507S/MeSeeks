import React from "react";
import { useState, useEffect } from "react";
export default function SelectAreaInput({
  name,
  labelName,
  onChange,
  ...rest
}) {
  const [getServicedata, setServicedata] = useState([])
  useEffect(() => {
    fetch("http://localhost:8003/api/services/getservice").then(res => {
      return res.json();
    }).then(jsonResponse => setServicedata(jsonResponse));
  }, []);
  return (
    <div class="form-group mt-3">
      <label for="exampleFormControlSelect1">{labelName}</label>
      <select
        class="form-control mt-2"
        name={name}
        onChange={onChange}
        id="exampleFormControlSelect1"
      >
        {
          getServicedata.map((element, id) => {
            return (
              <>
                <option value={element.name} >{element.name}</option>
              </>
            )
          }
          )
        }
      </select>
    </div>
  );
}