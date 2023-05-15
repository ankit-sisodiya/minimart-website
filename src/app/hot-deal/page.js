import React from "react";
import Deal from "./deal";
import CatBanner from "../category/cat-banner";
import Sliders from "@app/home/slider";
import DealBanner from "./deal-banner";

function page() {
  return (
    <div className="container mt-4">
      <CatBanner />
      <Deal />
      <Sliders/>
      <DealBanner/>
    </div>
  );
}

export default page;
