import { Navigate, useNavigate } from "react-router-dom";
const Protected = ({ isLoggedIn }) => {
    const navigate = useNavigate();
    if (!isLoggedIn) {
        console.log("here before alert")
        alert("not Authorized, redirecting back to homepage")
        return <Navigate to="/users/homepage" replace />;
}
};
export default Protected;