import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import UserHomePage from "./pages/user pages/UserHomePage";
import UserLoginPage from "./pages/user pages/UserLoginPage";
import UserPasswordResetPage from "./pages/user pages/UserPasswordResetPage";
import UserRegistrationPage from "./pages/user pages/UserRegistrationPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/Tasks" element={<UserTasks />} /> */}
          <Route path="/" element={<UserHomePage />} />
          <Route path="/users-login" element={<UserLoginPage />} />
          <Route
            path="/users-registration"
            element={<UserRegistrationPage />}
          />
          <Route
            path="/users-reset-password"
            element={<UserPasswordResetPage />}
          />
          {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
        </Routes>
      </Router>
      {/* <UserLoginPage /> */}
      {/* <UserRegistra                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    tionPage /> */}
    </>
  );
}

export default App;
