import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserRegistrationPage from "./pages/user pages/UserRegistrationPage";

import UserHomePage from "./pages/user pages/UserHomePage";
import UserLoginPage from "./pages/user pages/UserLoginPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/Tasks" element={<UserTasks />} /> */}
          <Route path="/" element={<UserHomePage />} />
          <Route path="/Login" element={<UserLoginPage />} />
          <Route path="/Registration" element={<UserRegistrationPage />} />
          {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
        </Routes>
      </Router>
      {/* <UserLoginPage /> */}
      {/* <UserRegistrationPage /> */}
    </>
  );
}

export default App;
