import React from "react";

import AdminDashboardSideBarNavList from "../AdminDashboardSideBarNavList";
import AdminDashboardSideBarNavListCategory from "../AdminDashboardSideBarNavListCategory";

export default function AdminDashboardSideBarNavListPartials() {
  return (
    <>
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
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
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-dashboard"
        sideBarNavListText="Current Services"
        ariaCurrent="page"
      />
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListTextColor="white"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-dashboard"
        sideBarNavListText="Ongoing Works"
        ariaCurrent="page"
      />
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListTextColor="white"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-dashboard"
        sideBarNavListText="Revenues"
        ariaCurrent="page"
      />
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-dashboard"
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
        sideBarNavListIconClassName="bx bxs-dashboard"
        sideBarNavListText="Ratings"
        ariaCurrent="page"
      />
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-dashboard"
        sideBarNavListText="Reviews"
        ariaCurrent="page"
      />
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-dashboard"
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
        sideBarNavListIconClassName="bx bxs-dashboard"
        sideBarNavListText="Workers"
        ariaCurrent="page"
      />
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-dashboard"
        sideBarNavListText="Banned List"
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
        sideBarNavListIconClassName="bx bxs-dashboard"
        sideBarNavListText="Compose message"
        ariaCurrent="page"
      />
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bx-briefcase"
        sideBarNavListText="Add Service"
        ariaCurrent="page"
      />
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-dashboard"
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
        sideBarNavListIconClassName="bx bxs-dashboard"
        sideBarNavListText="Ban Worker"
        ariaCurrent="page"
      />
      <AdminDashboardSideBarNavList
        sideBarNavListClassName="nav-item"
        sideBarNavLinkClassName="nav-link active"
        sideBarNavListRedirectLink="#"
        sideBarNavListIconClassName="bx bxs-dashboard"
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
        sideBarNavListIconClassName="bx bxs-dashboard"
        sideBarNavListText="Remove Region"
        ariaCurrent="page"
      />
    </>
  );
}
