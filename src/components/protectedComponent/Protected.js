import { Navigate } from "react-router-dom";
const Protected = ({ isLoggedIn }) => {
    if (!isLoggedIn) {
        console.log("here before alert")
        alert("not Authorized, redirecting back to homepage")
        // window.location.href = '/'
        return <Navigate to="/" replace />;
    }
};
export default Protected;   