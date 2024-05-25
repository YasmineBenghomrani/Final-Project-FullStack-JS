import React from "react";
import brand1 from "../../assets/brand/br-1.png";
import brand2 from "../../assets/brand/br-2.png";
import brand3 from "../../assets/brand/br-3.png";
import brand4 from "../../assets/brand/br-4.png";
import brand5 from "../../assets/brand/br-5.png";

export default function Partners() {
  return (
    <div className="mb-16 hidden md:block">
      <div className="container px-3 py-3 rounded-md border border-gray-500 ">
        <div className="grid grid-cols-5 gap-3 place-items-center opacity-50  ">
          <img
            data-aos="fade-right"
            data-aos-duration="200"
            data-aos-once="true"
            src={brand1}
            alt="brand"
            className="w-[80px] bg-white py-2 px-2 rounded-md"
          />
          <img
            data-aos="fade-right"
            data-aos-duration="300"
            data-aos-once="true"
            src={brand2}
            alt="brand"
            className="w-[80px] bg-white py-2 px-2 rounded-md"
          />
          <img
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            src={brand3}
            alt="brand"
            className="w-[80px] bg-white py-4 px-2 rounded-md"
          />
          <img
            data-aos="fade-right"
            data-aos-duration="600"
            data-aos-once="true"
            src={brand4}
            alt="brand"
            className="w-[80px] bg-white py-4 px-2 rounded-md"
          />
          <img
            data-aos="fade-right"
            data-aos-duration="0"
            data-aos-once="true"
            src={brand5}
            alt="brand"
            className="w-[80px] bg-white py-2 px-2 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
