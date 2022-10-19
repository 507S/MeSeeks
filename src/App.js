import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboardCustomerListLayout from "./components/admin components/admin dashboard additional components/admin dashboard customer section/AdminDashboardCustomerListLayout";
import AdminDashboardAddServiceCategoryLayout from "./components/admin components/admin dashboard additional components/service adding section/AdminDashboardAddServiceCategoryLayout";
import AdminDashboardActiveServiceCategoryPage from "./pages/admin pages/AdminDashboardActiveServiceCategoryPage";
import AdminDashboardActiveServiceRegionsPage from "./pages/admin pages/AdminDashboardActiveServiceRegionsPage";
import AdminDashboardActiveServicesPage from "./pages/admin pages/AdminDashboardActiveServicesPage";
import AdminDashboardAddRegionPage from "./pages/admin pages/AdminDashboardAddRegionPage";
import AdminDashboardAddServicePage from "./pages/admin pages/AdminDashboardAddServicePage";
import AdminDashboardPage from "./pages/admin pages/AdminDashboardPage";
import AdminDashboardRemoveServicePage from "./pages/admin pages/AdminDashboardRemoveServicePage";

import AdminDashboardProfilePage from "./pages/admin pages/AdminDashboardProfilePage";


import AdminDashboardRemoveServiceCategoryPage from "./pages/admin pages/AdminDashboardRemoveServiceCategoryPage";
import AdminDashboardWorkerBanListPage from "./pages/admin pages/AdminDashboardWorkerBanListPage";
import AdminLoginPage from "./pages/admin pages/AdminLoginPage";
import AdminRegistrationPage from "./pages/admin pages/AdminRegistrationPage";
import TestaPageLayout from "./pages/user pages/TestaPage";
import UserForgotPasswordPage from "./pages/user pages/UserForgotPasswordPage";
import UserHomePage from "./pages/user pages/UserHomePage";
import UserLoginPage from "./pages/user pages/UserLoginPage";
import UserPasswordResetPage from "./pages/user pages/UserPasswordResetPage";
import UserRegistrationPage from "./pages/user pages/UserRegistrationPage";
import UserServicePage from "./pages/user pages/UserServicePage";
import WorkerDashboardAdminMessageListPage from "./pages/worker pages/WorkerDashboardAdminMessageListPage";
import WorkerDashboardAppealMessagePage from "./pages/worker pages/WorkerDashboardAppealMessagePage";
import WorkerDashboardComplainMessagePage from "./pages/worker pages/WorkerDashboardComplainMessagePage";
import WorkerDashboardComposeMessagePage from "./pages/worker pages/WorkerDashboardComposeMessagePage";
import WorkerDashboardCustomerMessageListPage from "./pages/worker pages/WorkerDashboardCustomerMessageListPage";
import WorkerDashboardFeedbackList from "./pages/worker pages/WorkerDashboardFeedbackList";
import WorkerDashboardGracePointListPage from "./pages/worker pages/WorkerDashboardGracePointListPage";
import WorkerDashboardOnGoingWorkListLayoutPage from "./pages/worker pages/WorkerDashboardOnGoingWorkListLayoutPage";
import WorkerDashboardPage from "./pages/worker pages/WorkerDashboardPage";
import WorkerDashboardProfilePage from "./pages/worker pages/WorkerDashboardProfilePage";
import WorkerDashboardRatingListPage from "./pages/worker pages/WorkerDashboardRatingListPage";
import WorkerDashboardReserveWorkListPage from "./pages/worker pages/WorkerDashboardReserveWorkListPage";
import WorkerDashboardRevenueListPage from "./pages/worker pages/WorkerDashboardRevenueListPage";
import WorkerDashboardWarningMessageListPage from "./pages/worker pages/WorkerDashboardWarningMessageListPage";
import WorkerDashboardWorkHistoryListPage from "./pages/worker pages/WorkerDashboardWorkHistoryListPage";
import WorkerDashboardWorkNotificationListPage from "./pages/worker pages/WorkerDashboardWorkNotificationListPage";
import WorkerForgetPasswordPage from "./pages/worker pages/WorkerForgetPasswordPage";
import WorkerLoginPage from "./pages/worker pages/WorkerLoginPage";
import WorkerPasswordResetPage from "./pages/worker pages/WorkerPasswordResetPage";
import WorkerProfilePage from "./pages/worker pages/WorkerProfilePage";
import WorkerRegistrationPage from "./pages/worker pages/WorkerRegistrationPage";
import {useEffect, useRef} from 'react'
import Protected from "./components/protectedComponent/Protected";
function App() {
  let varToken = false
  const isLoggedIn = useRef(false);
  if(localStorage.getItem("userInfo")){
    varToken = JSON.parse(localStorage.getItem("userInfo"))
  }
  const token = varToken.token
  console.log(token)
  if(token)
  {
    isLoggedIn.current = true;
  }
  useEffect(() => {
    console.log(`Your login status is:${isLoggedIn.current}`);
  }, []);
  return (
    <>
      <Router>
        <Routes>
          {/* //User Pages */}
          <Route path="/" element={<TestaPageLayout />} />
          <Route path="/users/homepage" element={<UserHomePage />} />
          <Route path="/users/login" element={<UserLoginPage />} />
          <Route
            path="/users/registration"
            element={<UserRegistrationPage />}
          />
          <Route
            path="/users/forgot-password"
            element={<UserForgotPasswordPage />}
          />
          <Route
            path="/users/reset-password"
            element={<UserPasswordResetPage />}
          />
          <Route path="/users/home" element={<UserHomePage />} />
          <Route path="/users/services" element={<UserServicePage />} />

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
          <Route
            path="/workers/profile-setup"
            element={<WorkerProfilePage />}
          />
          <Route path="/worker-dashboard" element={<WorkerDashboardPage />} />
          <Route
            path="/worker-dashboard/worker-profile"
            element={<WorkerDashboardProfilePage />}
          />
          <Route
            path="/worker-dashboard/rating-list"
            element={<WorkerDashboardRatingListPage />}
          />
          <Route
            path="/worker-dashboard/work-history"
            element={<WorkerDashboardWorkHistoryListPage />}
          />
          <Route
            path="/worker-dashboard/grace-point"
            element={<WorkerDashboardGracePointListPage />}
          />
          <Route
            path="/worker-dashboard/revenue-list"
            element={<WorkerDashboardRevenueListPage />}
          />
          <Route
            path="/worker-dashboard/customer-feedback"
            element={<WorkerDashboardFeedbackList />}
          />
          <Route
            path="/worker-dashboard/work-notification"
            element={<WorkerDashboardWorkNotificationListPage />}
          />
          <Route
            path="/worker-dashboard/ongoing-work"
            element={<WorkerDashboardOnGoingWorkListLayoutPage />}
          />
          <Route
            path="/worker-dashboard/reserve-work"
            element={<WorkerDashboardReserveWorkListPage />}
          />
          <Route
            path="/worker-dashboard/admin-message"
            element={<WorkerDashboardAdminMessageListPage />}
          />
          <Route
            path="/worker-dashboard/customer-message"
            element={<WorkerDashboardCustomerMessageListPage />}
          />
          <Route
            path="/worker-dashboard/warning-message"
            element={<WorkerDashboardWarningMessageListPage />}
          />
          <Route
            path="/worker-dashboard/compose-message"
            element={<WorkerDashboardComposeMessagePage />}
          />
          <Route
            path="/worker-dashboard/complain-message"
            element={<WorkerDashboardComplainMessagePage />}
          />
          <Route
            path="/worker-dashboard/appeal-message"
            element={<WorkerDashboardAppealMessagePage />}
          />
          {/* //Worker Pages end */}
          {/* //Admin Pages */}
          <Route path="/admins/login" element={<AdminLoginPage />} />
          <Route
            path="/admins/registration"
            element={<AdminRegistrationPage />}
          />
          <Route
            path="/admin-dashboard/profile"
            element={<AdminDashboardProfilePage />}
          />
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
            element={<AdminDashboardAddServiceCategoryLayout />}
          />
          <Route
            path="/admin-dashboard/add-service"
            element={
                <Protected isLoggedIn={isLoggedIn.current}>
                      <AdminDashboardAddServicePage />
                </Protected>
            }
          />
          <Route

            path="/admin-dashboard/add-region"
            element={<AdminDashboardAddRegionPage />}

           

          />
           <Route
            path="/admin-dashboard/remove-service-category"
            element={<AdminDashboardRemoveServiceCategoryPage />}
          />
              <Route

        path="/admin-dashboard/remove-service"
        element={<AdminDashboardRemoveServicePage />}



/>

        </Routes>
      </Router>
    </>
  );
}

export default App;
