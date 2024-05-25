import React from "react";
import Delivery from "../../assets/icons/Delivery.svg";
import Quality from "../../assets/icons/Quality.svg";
import Services from "../../assets/icons/Services.svg";
import Review from "../../assets/icons/Review.svg";

const adventSection = () => {
  return (
    <section class=" flex justify-center gap-12 mx-28 py-4 my-4 ">
      <div class="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
        <div
          data-aos="fade-up"
          data-aos-duration="200"
          data-aos-once="true"
          class="w-[230px] flex flex-col items-center text-center gap-2 border-none shadow-lg rounded-lg px-3 py-12"
        >
          <div class="h-[60px] w-[60px] rounded-full border border-[#444343]  bg-transparent flex items-center justify-center">
            <img className="h-[30px] w-[30px]" src={Delivery} alt="" />
          </div>
          <h4 className=" font-semibold text-lg">Free delivery</h4>
          <p className="text-xs text-center text-[#7a7979]  w-[190px] ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-once="true"
          class="w-[230px] flex flex-col items-center text-center gap-2 border-none shadow-lg rounded-lg px-3 py-12 "
        >
          <div class="h-[60px] w-[60px] rounded-full border border-[#444343]  bg-transparent flex items-center justify-center">
            <img className="h-[30px] w-[30px]" src={Quality} alt="" />
          </div>
          <h4 className="text-base font-semibold">Free delivery</h4>
          <p className="text-xs text-center text-[#7a7979] w-[190px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="400"
          data-aos-once="true"
          class="w-[230px] flex flex-col items-center text-center gap-2 border-none shadow-lg rounded-lg px-3 py-12 "
        >
          <div class="h-[60px] w-[60px] rounded-full border border-[#444343]  bg-transparent flex items-center justify-center">
            <img className="h-[30px] w-[30px]" src={Services} alt="" />
          </div>
          <h4 className="text-base font-semibold">Free delivery</h4>
          <p className="text-xs text-center text-[#7a7979]  w-[190px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
          class="w-[230px] flex flex-col items-center text-center gap-2 border-none shadow-lg rounded-lg px-3 py-12"
        >
          <div class="h-[60px] w-[60px] rounded-full border border-[#444343]  bg-transparent flex items-center justify-center">
            <img className="h-[30px] w-[30px]" src={Review} alt="" />
          </div>
          <h4 className="text-base font-semibold">Free delivery</h4>
          <p className="text-xs text-center text-[#7a7979]  w-[190px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default adventSection;
