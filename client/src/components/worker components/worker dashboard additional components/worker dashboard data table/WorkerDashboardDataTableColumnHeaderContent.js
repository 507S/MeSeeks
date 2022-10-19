import React from "react";

export default function WorkerDashboardDataTableColumnHeaderContent({
  tableColumnClassName,
  tableColumnHeaderText,
}) {
  return <th scope={tableColumnClassName}>{tableColumnHeaderText}</th>;
}
