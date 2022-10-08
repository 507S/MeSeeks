import React from "react";
import AdminDashboardSideBarNavList from "../AdminDashboardSideBarNavList";
import AdminDashboardSideBarNavListCategory from "../AdminDashboardSideBarNavListCategory";

export default function AdminDashboardSideBarNavListPartials() {
  return (
    <>
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="/admin-dashboard"
        sideBarNavListIconClassName="bx bxs-dashboard"
        sideBarNavListText="Dashboard"
        ariaCurrent="page"
      />

      <AdminDashboardSideBarNavListCategory
        sideBarNavListCategorySectionStartLineColor="rgb(255, 255, 255)"
        sideBarNavListCategorySectionClassName="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-7 mb-1"
        sideBarNavListCategoryText="Active reports"
        sideBarNavListCategoryIconClassName="bx bxs-right-arrow"
        sideBarNavKListButtonTextInBetweenSpace=" &nbsp;"
        sideBarNavListCategoryIcon="bx bxs-right-arrow"
        sideBarNavListCategorySectionEndLineColor="rgb(255, 255, 255)"
      />

      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListTextColor="white"
        sideBarNavListRedirectLink="/admin-dashboard/active-service-category"
        sideBarNavListIconClassName="fa fa-database"
        sideBarNavListText="Service Categories"
        ariaCurrent="page"
      />
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListTextColor="white"
        sideBarNavListRedirectLink="/admin-dashboard/active-services"
        sideBarNavListIconClassName="bx bxs-megaphone"
        sideBarNavListText="Current Services"
        ariaCurrent="page"
      />
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListTextColor="white"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-time"
        sideBarNavListText="Ongoing Works"
        ariaCurrent="page"
      />
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListTextColor="white"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-bar-chart-alt-2"
        sideBarNavListText="Revenues"
        ariaCurrent="page"
      />
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="/admin-dashboard/active-service-regions"
        sideBarNavListIconClassName="bx bxs-map-pin"
        sideBarNavListText="Regions"
        ariaCurrent="page"
      />
      {/* //second category */}
      <AdminDashboardSideBarNavListCategory
        sideBarNavListCategorySectionStartLineColor="rgb(255, 255, 255)"
        sideBarNavListCategorySectionClassName="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-7 mb-1"
        sideBarNavListCategoryText="Customer Information"
        sideBarNavListCategoryIconClassName="bx bxs-right-arrow"
        sideBarNavKListButtonTextInBetweenSpace=" &nbsp;"
        sideBarNavListCategoryIcon="bx bxs-right-arrow"
        sideBarNavListCategorySectionEndLineColor="rgb(255, 255, 255)"
      />

      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-user-circle"
        sideBarNavListText="Customer List"
        ariaCurrent="page"
      />
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bx-note"
        sideBarNavListText="Complaint List"
        ariaCurrent="page"
      />
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-star"
        sideBarNavListText="Ratings"
        ariaCurrent="page"
      />
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-like"
        sideBarNavListText="Reviews"
        ariaCurrent="page"
      />
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-message-detail"
        sideBarNavListText="Messages"
        ariaCurrent="page"
      />

      {/* //third category */}
      <AdminDashboardSideBarNavListCategory
        sideBarNavListCategorySectionStartLineColor="rgb(255, 255, 255)"
        sideBarNavListCategorySectionClassName="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-7 mb-1"
        sideBarNavListCategoryText="Worker Information"
        sideBarNavListCategoryIconClassName="bx bxs-right-arrow"
        sideBarNavKListButtonTextInBetweenSpace=" &nbsp;"
        sideBarNavListCategoryIcon="bx bxs-right-arrow"
        sideBarNavListCategorySectionEndLineColor="rgb(255, 255, 255)"
      />

      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-user-voice"
        sideBarNavListText="Worker List"
        ariaCurrent="page"
      />
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="/admin-dashboard/worker-banlist"
        sideBarNavListIconClassName="bx bxs-user-x"
        sideBarNavListText="Ban List"
        ariaCurrent="page"
      />
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bx-edit-alt"
        sideBarNavListText="Appeal Messages"
        ariaCurrent="page"
      />

      {/* //forth category */}
      <AdminDashboardSideBarNavListCategory
        sideBarNavListCategorySectionClassName="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-7 mb-1"
        sideBarNavListCategoryText="AAdditional Tasks"
        sideBarNavListCategoryIconClassName="bx bxs-right-arrow"
        sideBarNavKListButtonTextInBetweenSpace=" &nbsp;"
        sideBarNavListCategoryIcon="bx bxs-right-arrow"
      />
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-message-alt-edit"
        sideBarNavListText="Compose message"
        ariaCurrent="page"
      />
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="/admin-dashboard/add-service-category"
        sideBarNavListIconClassName="bx bx-folder-plus"
        sideBarNavListText="Service Category"
        ariaCurrent="page"
      />
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="/admin-dashboard/add-service"
        sideBarNavListIconClassName="bx bx-briefcase"
        sideBarNavListText="Add Service"
        ariaCurrent="page"
      />
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-folder-minus"
        sideBarNavListText="Remove Service"
        ariaCurrent="page"
      />
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bx-user-plus"
        sideBarNavListText="Add Worker"
        ariaCurrent="page"
      />
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-user-minus"
        sideBarNavListText="Ban Worker"
        ariaCurrent="page"
      />
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-user-check"
        sideBarNavListText="Remove Ban"
        ariaCurrent="page"
      />
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-location-plus"
        sideBarNavListText="Add Region"
        ariaCurrent="page"
      />
      <AdminDashboardSideBarNavList
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
