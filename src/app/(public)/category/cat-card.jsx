import React from "react";
import CAT from "@app/assets/img/category/cat.png";
import Link from "next/link";

function CatCard() {
  const categorydata = [
    "Fresh Produce",
    "Dairy & Eggs",
    "Dairy & Eggs",
    "Snacks",
    "Meat & Seafood",
    "Beverages",
  ];
  const subCategory = [
    "Fresh Fruits",
    "Fresh Veggies",
    "Salad & Dips",
    "Organic",
    "Fresh Juice",
    "Bulk",
    "Exotic Fruits",
    "View All",
  ];

  return (
    <div className="container">
      <div className="cat-cards">
        <h2 className="pageHead">Categories</h2>
        <div className="row">
          {categorydata.map((x, i) => {
            return (
              <div key={i} className="col-md-4 mb-5">
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">
                      <div className="mainCard">
                        <img src={CAT.src} />
                        <div className="cardHead">
                          <h3>{x}</h3>
                        </div>
                      </div>
                    </div>
                    <div className="flip-card-back">
                      <div className="row">
                        {subCategory.map((d, index) => {
                          return (
                            <div key={index} className="col-md-6">
                              <div className="subCat">
                                <Link href="/category-list">
                                  <h5>{d}</h5>
                                </Link>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <div className="col-md-4">
            <div className="mainCard">
              <img src={CAT.src} />
              <div className="cardHead">
                <h3>Fresh Produce</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="mainCard">
              <img src={CAT.src} />
              <div className="cardHead">
                <h3>Fresh Produce</h3>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CatCard;
