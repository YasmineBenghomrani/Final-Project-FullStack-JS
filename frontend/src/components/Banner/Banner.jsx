import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Banner({ data }) {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-[300px] flex justify-center items-center py-12">
      <div className="container">
        <div className="bg-gradient-to-r  from-indigo-600 from-30% to-sky-500  grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl">
          {/* First col */}
          <div className="p-6 sm:p-8">
            <p data-aos="slide-right" className="text-sm">
              {data.subtitle1}
            </p>
            <h1
              data-aos="zoom-out"
              className="uppercase text-4xl lg:text-6xl font-bold"
            >
              {data.title}
            </h1>
            <p data-aos="fade-up" className="text-sm">
              {data.subtitle2}
            </p>
          </div>
          {/* second col */}
          <div data-aos="zoom-in" className=" flex items-center">
            <img
              src={data.image}
              alt=""
              className="scale-125 h-[280px] w-[200px] md:w-[300] mx-auto  drop-shadow-2xl object-cover"
            />
          </div>
          {/* third col */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p data-aos="zoom-out" className="font-bold text-sm">
              {data.title2}
            </p>
            <p data-aos="fade-up" className="text-3xl sm:text-5xl font-bold">
              {data.title3}
            </p>
            <p data-aos="fade-up" className="text-sm tracking-wide leading-5">
              {data.title4}
            </p>
            <div data-aos="fade-up" data-aos-offset="0">
              <button className="bg-white text-sky-500 py-2 px-4 rounded-full">
                Show Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
