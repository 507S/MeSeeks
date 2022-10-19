import { Navigate } from "react-router-dom";
const Protected = ({ isLoggedIn, children }) => {
 if (!isLoggedIn) {
    console.log("here before alert")
    alert("not Authorized, redirecting back to homepage")
    return <Navigate to="/login" replace />;
}
 return children;
};
export default Protected;