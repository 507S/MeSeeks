import React from "react";
import cardCustomerIcon from "../../../../assets/worker assets/images/salary.png";
export default function WorkerDashboardCardContent({
  cardContentText,
  // cardIcon,

  cardContentDatabaseFetchedData,
}) {
  // import img from {cardCustomerIcon}
  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {cardContentText}
            <img
              src={cardCustomerIcon}
              height="50px"
              width="50px"
              style={{ float: "right" }}
              className="card-img-left"
              alt="adminDashboardCardImage"
            />
          </h5>
          <p className="card-text"></p>
          <p className="card-text"></p>
          <p className="card-text" style={{ fontSize: "30px" }}>
            &nbsp;{cardContentDatabaseFetchedData}
          </p>
        </div>
      </div>
    </div>
  );
}
