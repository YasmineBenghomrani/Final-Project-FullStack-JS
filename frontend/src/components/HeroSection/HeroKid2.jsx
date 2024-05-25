import React from "react";
import Button from "../Shared/Button";
import imageK2 from "../../assets/Kids/imageK2.png";
import imageK4 from "../../assets/Kids/imageK4.png";
import imageK7 from "../../assets/Kids/imageK7.png";

const HeroKid2 = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* frist col */}
          <div className="col-span-2 py-10 pl-5 bg-gradient-to-r from-orange-600 to-yellow-500  text-white rounded-3xl relative h-[280px] flex items-end">
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
                  bgColor={"transparent"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={imageK2}
              alt=""
              className="w-[170px] absolute bottom-0 top-0 right-6 "
            />
          </div>

          {/* second col */}
          <div className="py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70   text-white rounded-3xl relative h-[280px] flex items-end">
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
                  bgColor={"bg-white"}
                  textColor={"text-black/80"}
                />
              </div>
            </div>
            <img
              src={imageK4}
              alt=""
              className="w-[150px] absolute bottom-0 left-20"
            />
          </div>
          {/* third col */}
          <div className=" py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70  text-white rounded-3xl relative h-[280px] flex items-end">
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
                  bgColor={"bg-white"}
                  textColor={"text-black/80"}
                />
              </div>
            </div>
            <img
              src={imageK7}
              alt=""
              className="w-[160px] absolute bottom-0 left-20 lg:top-3  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroKid2;
