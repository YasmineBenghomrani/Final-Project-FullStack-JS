import React from "react";
import Button from "../Shared/Button";
import { Rating } from "@mui/material";
import image2 from "../../assets/images/image2.png";
import image4 from "../../assets/images/image4.png";
import imageH1 from "../../assets/images/imageH1.png";
import imageH6 from "../../assets/images/imageH6.png";

export default function OurProducts() {
  return (
    <div className="mt-8 flex flex-col gap-8 pb-16">
      <div>
        <div className="w-full flex justify-center items-center gap-8">
          <div className=" w-[350px] h-[2px] bg-[#320432] rounded"></div>
          <h1 className="text-2xl sm:text-2xl lg:text-2xl font-bold ">
            Another Products
          </h1>
          <div className="w-[350px] h-[2px] bg-[#320432] rounded"></div>
        </div>
      </div>
      <div className=" container grid grid-cols-4 gap-3">
        <div
          data-aos="fade-up"
          data-aos-duration="200"
          data-aos-once="true"
          className=" container py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70  text-white rounded-3xl relative h-[280px] flex items-end"
        >
          <img
            src={imageH1}
            alt=""
            className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] object-cover  "
          />
          <div>
            <div className="flex flex-col gap-3 mb--8 absolute top-2/3  left-1/2 transform  -translate-x-1/2 -translate-y-1/2 ">
              <p className="mb-[2px] text-white">Verdusa Women's Long Sleeve</p>
              <div className="flex items-center gap-[28px]">
                <div className="text-white  font-semibold">2500DA</div>
                <Rating
                  precision={0.5}
                  className="productdisplay-rating"
                  name="read-only"
                  value={4.5}
                  readOnly
                  size="small"
                />
              </div>

              <Button
                border="border border-white p"
                text="See More"
                bgColor={"bg-white"}
                textColor={"text-black/80"}
              />
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="300"
          data-aos-once="true"
          className=" container py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70  text-white rounded-3xl relative h-[280px] flex items-end"
        >
          <img
            src={image4}
            alt=""
            className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] object-cover  "
          />
          <div>
            <div className="flex flex-col gap-3 mb--8 absolute top-2/3  left-1/2 transform  -translate-x-1/2 -translate-y-1/2 ">
              <p className="mb-[2px] text-white">Verdusa Women's Long Sleeve</p>
              <div className="flex items-center gap-[28px]">
                <div className="text-white  font-semibold">2500DA</div>
                <Rating
                  precision={0.5}
                  className="productdisplay-rating"
                  name="read-only"
                  value={4.5}
                  readOnly
                  size="small"
                />
              </div>

              <Button
                border="border border-white p"
                text="See More"
                bgColor={"bg-white"}
                textColor={"text-black/80"}
              />
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="400"
          data-aos-once="true"
          className=" container py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70  text-white rounded-3xl relative h-[280px] flex items-end"
        >
          <img
            src={imageH6}
            alt=""
            className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] object-cover  "
          />
          <div>
            <div className="flex flex-col gap-3 mb--8 absolute top-2/3  left-1/2 transform  -translate-x-1/2 -translate-y-1/2 ">
              <p className="mb-[2px] text-white">Verdusa Women's Long Sleeve</p>
              <div className="flex items-center gap-[28px]">
                <div className="text-white  font-semibold">2500DA</div>
                <Rating
                  precision={0.5}
                  className="productdisplay-rating"
                  name="read-only"
                  value={4.5}
                  readOnly
                  size="small"
                />
              </div>

              <Button
                border="border border-white p"
                text="See More"
                bgColor={"bg-white"}
                textColor={"text-black/80"}
              />
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-once="true"
          className=" container py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70  text-white rounded-3xl relative h-[280px] flex items-end"
        >
          <img
            src={image2}
            alt=""
            className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] object-cover  "
          />
          <div>
            <div className="flex flex-col gap-3 mb--8 absolute top-2/3  left-1/2 transform  -translate-x-1/2 -translate-y-1/2 ">
              <p className="mb-[2px] text-white">Verdusa Women's Long Sleeve</p>
              <div className="flex items-center gap-[28px]">
                <div className="text-white  font-semibold">2500DA</div>
                <Rating
                  precision={0.5}
                  className="productdisplay-rating"
                  name="read-only"
                  value={4.5}
                  readOnly
                  size="small"
                />
              </div>

              <Button
                border="border border-white p"
                text="See More"
                bgColor={"bg-white"}
                textColor={"text-black/80"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
