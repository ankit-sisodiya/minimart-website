import React, { useState } from "react";
import { BsPencilFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

function Address() {
  const Address = [1, 2, 3];

  const [selected, setSelected] = useState();

  return (
    <div className="addressCard">
      <div className="addressDetail">
        <div className="addressTop">
          <h4>Delivery Address</h4>
          <div className="placeBtn">
            <button className="btn btn-group add">Add</button>
          </div>
        </div>
        <div className="addressSection">
          {Address.map((x, i) => {
            return (
              <div key={i} className="row">
                <div className="col-md-10">
                  <div
                    className="AddDetail"
                    onClick={() => {
                      setSelected(i);
                    }}
                    style={{ border: selected == i ? "1px solid red" : "none" }}
                  >
                    <div className="topD">
                      <h5>Dovi Johnes</h5>
                      <div className="placeBtn">
                        <button className="btn btn-group home">Home</button>
                      </div>
                    </div>
                    <p>
                      678M+R26 - The Boulevard, Emirates Tower Sheikh Zayed Road
                    </p>
                    <p>Dubai - United Arab Emirates</p>
                    <p>Phone No. +971 58 9397436 </p>
                  </div>
                </div>
                <div className="col-md-2 align-center text-center">
                  <div className="addressBtn">
                    <button className="btn btn-group editAddBtn">
                      <BsPencilFill />
                    </button>
                    <button className="btn btn-group editAddBtn mt-4">
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Address;
