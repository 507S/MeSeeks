import React from "react";

export default function AdminDashboardDataTableColumnHeaderContent({
  tableColumnClassName,
  tableColumnHeaderText,
}) {
  return <th scope={tableColumnClassName}>{tableColumnHeaderText}</th>;
}
