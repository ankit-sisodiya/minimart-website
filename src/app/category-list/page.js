import React from "react";
import SideFilter from "./sideFilter";
import CardList from "./card-list";

function page() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <SideFilter />
        </div>
        <div className="col-md-9">
          <CardList />
        </div>
      </div>
    </div>
  );
}
export default page;
