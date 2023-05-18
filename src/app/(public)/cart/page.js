import React from "react";
import Mycart from "./my-cart";
import Banner from "./banner";
import SimilarCard from "./similar-card";

function page() {
  return (
    <div>
      <div className="pageHead">
        <h3>My Cart</h3>  
      </div>
      <Mycart />
      <Banner/>
      <SimilarCard/>
    </div>
  );
}

export default page;
