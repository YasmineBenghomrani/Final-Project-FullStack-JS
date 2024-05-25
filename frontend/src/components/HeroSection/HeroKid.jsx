import React from "react";
import Button from "../Shared/Button";
import imageK1 from "../../assets/Kids/imageK1.png";
import imageK3 from "../../assets/Kids/imageK3.png";
import imageK6 from "../../assets/Kids/imageK6.png";

const HeroKid = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {/* frist col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70  text-white rounded-3xl relative h-[280px] flex items-end hover:scale-[1.1] ">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">With</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  Earphone
                </p>
                <Button
                  border="border border-white p"
                  text="Browse"
                  bgColor={"transparent"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={imageK1}
              alt=""
              className="w-[150px] absolute bottom-0 left-20"
            />
          </div>
          {/* second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70  text-white rounded-3xl relative h-[280px] flex items-end hover:scale-[1.1]">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]"> with</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  divers category
                </p>
                <Button
                  border="border border-white p"
                  text="Browse"
                  bgColor={"transparent"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={imageK3}
              alt=""
              className="w-[160px] absolute bottom-0 left-20 lg:top-3"
            />
          </div>
          {/* third col */}

          <div className="col-span-2 py-10 pl-5 bg-gradient-to-r from-orange-600 to-yellow-500 text-white rounded-3xl relative h-[280px] flex items-end hover:scale-[1.1]">
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-400">Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]"> Sunny</p>
                <p className="text-4xl xl:text-5xl font-bold opacity-40 mb-2">
                  new arrivals
                </p>
                <Button
                  border="border border-white p"
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-[#3949AB]"}
                />
              </div>
            </div>
            <img
              src={imageK6}
              alt=""
              className="w-[170px] absolute bottom-0 right-6 lg:top-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroKid;
