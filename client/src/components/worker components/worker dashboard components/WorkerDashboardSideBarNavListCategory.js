import React from "react";

export default function WorkerDashboardSideBarNavListCategory({
  sideBarNavListCategorySectionStartLineColor,
  sideBarNavListCategorySectionClassName,
  sideBarNavListCategoryText,
  sideBarNavListCategoryIconClassName,
  sideBarNavKListButtonTextInBetweenSpace,
  sideBarNavListCategorySectionEndLineColor,
}) {
  return (
    <>
      <hr style={{ color: "rgb(255, 255, 255)" }} />
      <h6
        className={sideBarNavListCategorySectionClassName}
        style={{ color: "white" }}
      >
        <span>
          {sideBarNavListCategoryText} {sideBarNavKListButtonTextInBetweenSpace}
          <i className={sideBarNavListCategoryIconClassName}></i>
        </span>
      </h6>

      <hr style={{ color: "rgb(255, 255, 255)" }} />
    </>
  );
}
