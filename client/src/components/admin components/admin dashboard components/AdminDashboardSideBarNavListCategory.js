import React from "react";

export default function AdminDashboardSideBarNavListCategory({
  sideBarNavListCategorySectionStartLineColor,
  sideBarNavListCategorySectionClassName,
  sideBarNavListCategoryTextColor,
  sideBarNavListCategoryText,
  sideBarNavListCategoryIconClassName,
  sideBarNavKListButtonTextInBetweenSpace,
  ...rest
}) {
  return (
    <>
      <hr style={{ color: { sideBarNavListCategorySectionStartLineColor } }} />
      <h6
        className={sideBarNavListCategorySectionClassName}
        style={{ color: { sideBarNavListCategoryTextColor } }}
      >
        <span>
          Active reports {sideBarNavKListButtonTextInBetweenSpace}
          <i className={sideBarNavListCategoryIconClassName}></i>
        </span>
      </h6>

      <hr style={{ color: { ...rest } }} />
    </>
  );
}
