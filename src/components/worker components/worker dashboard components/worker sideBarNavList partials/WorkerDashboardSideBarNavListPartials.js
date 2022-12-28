import React from "react";
import WorkerDashboardSideBarNavList from "../WorkerDashboardSideBarNavList";
import WorkerDashboardSideBarNavListCategory from "../WorkerDashboardSideBarNavListCategory";

export default function WorkerDashboardSideBarNavListPartials() {
  return (
    <>
      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="/worker-dashboard"
        sideBarNavListIconClassName="bx bxs-dashboard"
        sideBarNavListText="Dashboard"
        ariaCurrent="page"
      />
      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="/worker-dashboard/worker-profile"
        sideBarNavListIconClassName="bx bxs-user"
        sideBarNavListText="Profile"
        ariaCurrent="page"
      />

      <WorkerDashboardSideBarNavListCategory
        sideBarNavListCategorySectionStartLineColor="black"
        sideBarNavListCategorySectionClassName="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-7 mb-1"
        sideBarNavListCategoryText="Active reports"
        sideBarNavListCategoryIconClassName="bx bxs-right-arrow"
        sideBarNavKListButtonTextInBetweenSpace=" &nbsp;"
        sideBarNavListCategoryIcon="bx bxs-right-arrow"
        sideBarNavListCategorySectionEndLineColor="rgb(255, 255, 255)"
      />

      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListTextColor="white"
        sideBarNavListRedirectLink="/worker-dashboard/work-history"
        sideBarNavListIconClassName="fa fa-history"
        sideBarNavListText=" Work History"
        ariaCurrent="page"
      />
      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListTextColor="white"
        sideBarNavListRedirectLink="/worker-dashboard/rating-list"
        sideBarNavListIconClassName="fa fa-star"
        sideBarNavListText="Rating List"
        ariaCurrent="page"
      />
      {/* <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListTextColor="white"
        sideBarNavListRedirectLink="/worker-dashboard/grace-point"
        sideBarNavListIconClassName="fa fa-hand-o-right"
        sideBarNavListText="Grace Points"
        ariaCurrent="page"
      /> */}
      {/* <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListTextColor="white"
        sideBarNavListRedirectLink="/worker-dashboard/revenue-list"
        sideBarNavListIconClassName="bx bx-money"
        sideBarNavListText="Revenues"
        ariaCurrent="page"
      /> */}
      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListTextColor="white"
        sideBarNavListRedirectLink="/worker-dashboard/customer-feedback"
        sideBarNavListIconClassName="fa fa-comments-o
        "
        sideBarNavListText="Feedbacks"
        ariaCurrent="page"
      />
      {/* <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="/admin-dashboard/active-service-regions"
        sideBarNavListIconClassName="bx bxs-map-pin"
        sideBarNavListText="Regions"
        ariaCurrent="page"
      /> */}
      {/* //second category */}
      <WorkerDashboardSideBarNavListCategory
        sideBarNavListCategorySectionStartLineColor="black"
        sideBarNavListCategorySectionClassName="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-7 mb-1"
        sideBarNavListCategoryText="Work Reports"
        sideBarNavListCategoryIconClassName="bx bxs-right-arrow"
        sideBarNavKListButtonTextInBetweenSpace=" &nbsp;"
        sideBarNavListCategoryIcon="bx bxs-right-arrow"
        sideBarNavListCategorySectionEndLineColor="rgb(255, 255, 255)"
      />

      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="/worker-dashboard/work-notification"
        sideBarNavListIconClassName="fa fa-bell"
        sideBarNavListText="Work Notification"
        ariaCurrent="page"
      />

      {/* <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="/worker-dashboard/ongoing-work"
        sideBarNavListIconClassName="fa fa-wrench"
        sideBarNavListText="Ongoing work"
        ariaCurrent="page"
      />
      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="/worker-dashboard/reserve-work"
        sideBarNavListIconClassName="fa fa-hourglass"
        sideBarNavListText="Reserve Work"
        ariaCurrent="page"
      /> */}
      {/* <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-like"
        sideBarNavListText="Reviews"
        ariaCurrent="page"
      />
      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-message-detail"
        sideBarNavListText="Messages"
        ariaCurrent="page"
      /> */}

      {/* //third category */}
      <WorkerDashboardSideBarNavListCategory
        sideBarNavListCategorySectionStartLineColor="black"
        sideBarNavListCategorySectionClassName="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-7 mb-1"
        sideBarNavListCategoryText="Message Notifications"
        sideBarNavListCategoryIconClassName="bx bxs-right-arrow"
        sideBarNavKListButtonTextInBetweenSpace=" &nbsp;"
        sideBarNavListCategoryIcon="bx bxs-right-arrow"
        sideBarNavListCategorySectionEndLineColor="rgb(255, 255, 255)"
      />
{/* 
      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="/worker-dashboard/customer-message"
        sideBarNavListIconClassName="bx bxs-user-voice"
        sideBarNavListText="Customer Message"
        ariaCurrent="page"
      /> */}
      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="/worker-dashboard/admin-message"
        sideBarNavListIconClassName="fa fa-bullhorn"
        sideBarNavListText="Admin Message"
        ariaCurrent="page"
      />
      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="/worker-dashboard/warning-message"
        sideBarNavListIconClassName="fa fa-exclamation-triangle"
        sideBarNavListText="Warning Message"
        ariaCurrent="page"
      />
      {/* <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="/admin-dashboard/worker-banlist"
        sideBarNavListIconClassName="bx bxs-user-x"
        sideBarNavListText="Ban List"
        ariaCurrent="page"
      />
      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bx-edit-alt"
        sideBarNavListText="Appeal Messages"
        ariaCurrent="page"
      /> */}

      {/* //forth category */}
      <WorkerDashboardSideBarNavListCategory
        sideBarNavListCategorySectionStartLineColor="black"
        sideBarNavListCategorySectionClassName="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-7 mb-1"
        sideBarNavListCategoryText="Worker Activity"
        sideBarNavListCategoryIconClassName="bx bxs-right-arrow"
        sideBarNavKListButtonTextInBetweenSpace=" &nbsp;"
        sideBarNavListCategoryIcon="bx bxs-right-arrow"
        sideBarNavListCategorySectionEndLineColor="rgb(255, 255, 255)"
      />
      {/* <WorkerDashboardSideBarNavList
        sideBarNavListCategorySectionClassName="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-7 mb-1"
        sideBarNavListCategoryText="AAdditional Tasks"
        sideBarNavListCategoryIconClassName="bx bxs-right-arrow"
        sideBarNavKListButtonTextInBetweenSpace=" &nbsp;"
        sideBarNavListCategoryIcon="bx bxs-right-arrow"
      /> */}
      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="/worker-dashboard/compose-message"
        // sideBarNavListIconClassName="bx bxs-message-alt-edit"
        sideBarNavListIconClassName="fa fa-paper-plane"
        sideBarNavListText="Compose message"
        ariaCurrent="page"
      />
      {/* <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="/worker-dashboard/complain-message"
        sideBarNavListIconClassName="fa fa-paper-plane"
        sideBarNavListText="Complain Message"
        ariaCurrent="page"
      /> */}
      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="/worker-dashboard/appeal-message"
        sideBarNavListIconClassName="fa fa-hand-paper-o	
        "
        sideBarNavListText="Appeal Message"
        ariaCurrent="page"
      />

      {/* <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-folder-minus"
        sideBarNavListText="Remove Service"
        ariaCurrent="page"
      />
      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bx-user-plus"
        sideBarNavListText="Add Worker"
        ariaCurrent="page"
      />
      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-user-minus"
        sideBarNavListText="Ban Worker"
        ariaCurrent="page"
      />
      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-user-check"
        sideBarNavListText="Remove Ban"
        ariaCurrent="page"
      />
      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-location-plus"
        sideBarNavListText="Add Region"
        ariaCurrent="page"
      />
      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-no-entry"
        sideBarNavListText="Remove Region"
        ariaCurrent="page"
      /> */}
    </>
  );
}
