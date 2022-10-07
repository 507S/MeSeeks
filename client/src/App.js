import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboardAddServiceCategoryPage from "./pages/admin pages/AdminDashboardAddServiceCategoryPage";
import AdminDashboardAddServicePage from "./pages/admin pages/AdminDashboardAddServicePage";
import AdminDashboardPage from "./pages/admin pages/AdminDashboardPage";
import AdminDashboardWorkerBanListPage from "./pages/admin pages/AdminDashboardWorkerBanListPage";
import UserHomePage from "./pages/user pages/UserHomePage";
import UserLoginPage from "./pages/user pages/UserLoginPage";
import UserPasswordResetPage from "./pages/user pages/UserPasswordResetPage";
import UserRegistrationPage from "./pages/user pages/UserRegistrationPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* //User Pages */}
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

          {/* //Admin Pages */}
          <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
          <Route
            path="/dashboard-worker-banlist"
            element={<AdminDashboardWorkerBanListPage />}
          />
          <Route
            path="/dashboard-add-service-category"
            element={<AdminDashboardAddServiceCategoryPage />}
          />
          <Route
            path="/dashboard-add-service"
            element={<AdminDashboardAddServicePage />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
