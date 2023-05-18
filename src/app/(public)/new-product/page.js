import React from "react";
import New from "./new";
import NewproductBanner from "./newProduct-banner";
import DealBanner from "../hot-deal/deal-banner";
import Sliders from "@app/home/slider";

function page() {
  return (
    <div className="mt-4">
      <NewproductBanner />
      <New />
      <div className="container"><Sliders/></div>

    </div>
  );
}

export default page;
