import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Logout(){
    localStorage.clear()
    window.location.href = '/platform-selection'
}

export default Logout;