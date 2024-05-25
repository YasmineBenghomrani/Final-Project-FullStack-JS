import React from "react";

export default function Test() {
  return (
    <div className="div-tabs">
      <div className="tabs">
        <input type="radio" name="tabs" id="addProduct" />
        <label className="tab" htmlFor="addProduct">
          add Product
        </label>
        <input type="radio" name="tabs" id="list" />
        <label className="tab" htmlFor="list">
          Product List
        </label>
        <span className="slider"></span>
      </div>
    </div>
  );
}
