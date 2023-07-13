import CommonCard from "@app/components/common-card";
import React from "react";

function Deal() {
  const similarSection = [1, 2, 3, 4];
  return (
    <div className="cartSimilar">
      <div className="container">
        <div className="recent-view-heading">
          <h2>Hot Deals</h2>
        </div>
        <div className="row">
          {similarSection.map((x, i) => {
            return (
              <div key={i} className="col-md-3">
                <CommonCard />  
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Deal;
