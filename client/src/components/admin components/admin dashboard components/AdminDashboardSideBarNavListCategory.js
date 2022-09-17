import React from "react";

export default function AdminDashboardSideBarNavListCategory({
  sideBarNavListCategorySectionStartLineColor,
  sideBarNavListCategorySectionClassName,
  sideBarNavListCategoryTextColor,
  sideBarNavListCategoryText,
  sideBarNavListCategoryIconClassName,
  sideBarNavKListButtonTextInBetweenSpace,
  sideBarNavListCategorySectionEndLineColor,
}) {
  return (
    <>
      <hr style={{ color: { sideBarNavListCategorySectionStartLineColor } }} />
      <h6
        className={sideBarNavListCategorySectionClassName}
        style={{ color: { sideBarNavListCategoryTextColor } }}
      >
        <span>
          {sideBarNavListCategoryText} {sideBarNavKListButtonTextInBetweenSpace}
          <i className={sideBarNavListCategoryIconClassName}></i>
        </span>
      </h6>

      <hr style={{ color: { sideBarNavListCategorySectionEndLineColor } }} />
    </>
  );
}
