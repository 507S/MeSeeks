import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboardCustomerListLayout from "./components/admin components/admin dashboard additional components/admin dashboard customer section/AdminDashboardCustomerListLayout";
import AdminDashboardActiveServiceCategoryPage from "./pages/admin pages/AdminDashboardActiveServiceCategoryPage";
import AdminDashboardActiveServiceRegionsPage from "./pages/admin pages/AdminDashboardActiveServiceRegionsPage";
import AdminDashboardActiveServicesPage from "./pages/admin pages/AdminDashboardActiveServicesPage";
import AdminDashboardAddServiceCategoryPage from "./pages/admin pages/AdminDashboardAddServiceCategoryPage";
import AdminDashboardAddServicePage from "./pages/admin pages/AdminDashboardAddServicePage";
import AdminDashboardPage from "./pages/admin pages/AdminDashboardPage";
import AdminDashboardWorkerBanListPage from "./pages/admin pages/AdminDashboardWorkerBanListPage";
import UserHomePage from "./pages/user pages/UserHomePage";
import UserLoginPage from "./pages/user pages/UserLoginPage";
import UserPasswordResetPage from "./pages/user pages/UserPasswordResetPage";
import UserRegistrationPage from "./pages/user pages/UserRegistrationPage";
import WorkerForgetPasswordPage from "./pages/worker pages/WorkerForgetPasswordPage";
import WorkerLoginPage from "./pages/worker pages/WorkerLoginPage";
import WorkerPasswordResetPage from "./pages/worker pages/WorkerPasswordResetPage";
import WorkerRegistrationPage from "./pages/worker pages/WorkerRegistrationPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* //User Pages */}
          <Route path="/" element={<UserHomePage />} />
          <Route path="/users/login" element={<UserLoginPage />} />
          <Route
            path="/users/registration"
            element={<UserRegistrationPage />}
          />
          <Route
            path="/users/reset-password"
            element={<UserPasswordResetPage />}
          />

          {/* //Worker Pages */}
          <Route path="/workers/login" element={<WorkerLoginPage />} />
          <Route
            path="/workers/registration"
            element={<WorkerRegistrationPage />}
          />
          <Route
            path="/workers/forget-password"
            element={<WorkerForgetPasswordPage />}
          />
          <Route
            path="/workers/reset-password"
            element={<WorkerPasswordResetPage />}
          />
          {/* //Worker Pages end */}

          {/* //Admin Pages */}
          <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
          <Route
            path="/admin-dashboard/active-service-category"
            element={<AdminDashboardActiveServiceCategoryPage />}
          />
          <Route
            path="/admin-dashboard/active-services"
            element={<AdminDashboardActiveServicesPage />}
          />
          <Route
            path="/admin-dashboard/active-service-regions"
            element={<AdminDashboardActiveServiceRegionsPage />}
          />
          <Route
            path="/admin-dashboard/customer-list"
            element={<AdminDashboardCustomerListLayout />}
          />
          <Route
            path="/admin-dashboard/worker-banlist"
            element={<AdminDashboardWorkerBanListPage />}
          />
          <Route
            path="/admin-dashboard/add-service-category"
            element={<AdminDashboardAddServiceCategoryPage />}
          />
          <Route
            path="/admin-dashboard/add-service"
            element={<AdminDashboardAddServicePage />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
