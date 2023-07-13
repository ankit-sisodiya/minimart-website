import CommonCard from "@app/components/common-card";
// import SliderDouble from "@app/components/slideDouble";
import React from "react";

function Wishlist() {
  const wishlist = [1, 2, 3, 4, 5, 6];

  return (
    <div className="wishlist">
      <div className="container">
        <div className="MainHead">
          <h2>My Wishlist (6 Items)</h2>
        </div>
        <div className="row">
          {wishlist.map((x, i) => {
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

export default Wishlist;
