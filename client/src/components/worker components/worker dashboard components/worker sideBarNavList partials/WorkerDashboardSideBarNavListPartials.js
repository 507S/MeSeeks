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
        sideBarNavListRedirectLink="/worker-dashboard"
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
        sideBarNavListRedirectLink="/worker-dashboard/active-service-category"
        sideBarNavListIconClassName="fa fa-database"
        sideBarNavListText="Service Categories"
        ariaCurrent="page"
      />
      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListTextColor="white"
        sideBarNavListRedirectLink="/admin-dashboard/active-services"
        sideBarNavListIconClassName="bx bxs-megaphone"
        sideBarNavListText="Current Services"
        ariaCurrent="page"
      />
      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListTextColor="white"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-time"
        sideBarNavListText="Ongoing Works"
        ariaCurrent="page"
      />
      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListTextColor="white"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-bar-chart-alt-2"
        sideBarNavListText="Revenues"
        ariaCurrent="page"
      />
      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="/admin-dashboard/active-service-regions"
        sideBarNavListIconClassName="bx bxs-map-pin"
        sideBarNavListText="Regions"
        ariaCurrent="page"
      />
      {/* //second category */}
      <WorkerDashboardSideBarNavListCategory
        sideBarNavListCategorySectionStartLineColor="black"
        sideBarNavListCategorySectionClassName="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-7 mb-1"
        sideBarNavListCategoryText="Work Information"
        sideBarNavListCategoryIconClassName="bx bxs-right-arrow"
        sideBarNavKListButtonTextInBetweenSpace=" &nbsp;"
        sideBarNavListCategoryIcon="bx bxs-right-arrow"
        sideBarNavListCategorySectionEndLineColor="rgb(255, 255, 255)"
      />

      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="/admin-dashboard/customer-list"
        sideBarNavListIconClassName="bx bxs-user-circle"
        sideBarNavListText="Customer List"
        ariaCurrent="page"
      />
      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bx-note"
        sideBarNavListText="Complaint List"
        ariaCurrent="page"
      />
      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-star"
        sideBarNavListText="Ratings"
        ariaCurrent="page"
      />
      <WorkerDashboardSideBarNavList
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
      />

      {/* //third category */}
      <WorkerDashboardSideBarNavListCategory
        sideBarNavListCategorySectionStartLineColor="black"
        sideBarNavListCategorySectionClassName="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-7 mb-1"
        sideBarNavListCategoryText="Worker Information"
        sideBarNavListCategoryIconClassName="bx bxs-right-arrow"
        sideBarNavKListButtonTextInBetweenSpace=" &nbsp;"
        sideBarNavListCategoryIcon="bx bxs-right-arrow"
        sideBarNavListCategorySectionEndLineColor="rgb(255, 255, 255)"
      />

      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-user-voice"
        sideBarNavListText="Worker List"
        ariaCurrent="page"
      />
      <WorkerDashboardSideBarNavList
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
      />

      {/* //forth category */}
      <WorkerDashboardSideBarNavListCategory
        sideBarNavListCategorySectionStartLineColor="black"
        sideBarNavListCategorySectionClassName="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-7 mb-1"
        sideBarNavListCategoryText="Worker Information"
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
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-message-alt-edit"
        sideBarNavListText="Compose message"
        ariaCurrent="page"
      />
      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="/admin-dashboard/add-service-category"
        sideBarNavListIconClassName="bx bx-folder-plus"
        sideBarNavListText="Service Category"
        ariaCurrent="page"
      />
      <WorkerDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="/admin-dashboard/add-service"
        sideBarNavListIconClassName="bx bx-briefcase"
        sideBarNavListText="Add Service"
        ariaCurrent="page"
      />
      <WorkerDashboardSideBarNavList
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
      />
    </>
  );
}
