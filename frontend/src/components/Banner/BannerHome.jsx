import React from "react";
import heroSection from "../../assets/images/heroSection.jpg";

export default function BannerHome() {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="800"
      data-aos-once="tue"
      data-aos-delay="200"
      className="relative h-[300px] w-full  my-12  shadow-lg overflow-hidden"
    >
      <div className="relative gap-6 items-center text-white rounded-3xl ">
        <img
          src={heroSection}
          className=" w-full object-cover bg-center h-screen bg-contain"
          alt=""
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 text-white flex flex-col justify-center gap-4 lg:w-2/5 sm:pl-3 sm:pt-0 sm:h-3/4 text-center sm:text-left  top-1/4 transform -translate-y-1/2 ml-12 m">
          <h1
            data-aos="zoom-out"
            className="uppercase text-2xl lg:text-4xl font-bold "
          >
            Lorem ipsum dolor sit amet.
          </h1>
          <p data-aos="zoom-out" className="text-sm  text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa,
            necessitatibus? Molestiae reprehenderit totam ratione blanditiis
            beatae eos exercitationem.
          </p>
          <div>
            <button
              data-aos="fade-up"
              data-aos-offset="0"
              className="rounded-md bg-gradient-to-r to-[#ff69b4ba] from-[#320432] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Show Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
