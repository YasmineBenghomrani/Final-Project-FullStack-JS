import React from "react";
import HeroSection from "../components/HeroSection/heroSection";
import HorizontalSwiper from "../components/CardProduct/horizontalSwiper";
import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import ProductSection from "../components/shopSection/ProductSection";
import Partners from "../components/Partners/Partners";
import BannerHome from "../components/Banner/BannerHome";
import NewsLetter from "../components/Banner/NewsLetter";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    axios
      .get()
      .then((res) => {})
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <HeroSection />
      <Partners />

      <div className=" flex flex-col ">
        <div>
          <div className="w-full flex justify-center items-center gap-8">
            <div className=" w-[350px] h-[2px] bg-[#320432] rounded"></div>
            <h2 className="text-2xl sm:text-2xl lg:text-2xl font-bold ">
              Most Popular Products
            </h2>
            <div className="w-[350px] h-[2px] bg-[#320432] rounded"></div>
          </div>
        </div>
        <div>{loading ? <CircularProgress /> : <HorizontalSwiper />}</div>
        <BannerHome />
      </div>

      <ProductSection />
      <NewsLetter />
    </section>
  );
}
