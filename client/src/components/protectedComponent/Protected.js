import { useNavigate } from "react-router-dom";
const Protected = ({ isLoggedIn, children }) => {
    const navigate = useNavigate();
    if (!isLoggedIn) {
        console.log("here before alert")
        alert("not Authorized, redirecting back to login page")
        return navigate('/users/login');
}
 return children;
};
export default Protected;