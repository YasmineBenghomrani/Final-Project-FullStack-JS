import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import AdventSection from "../components/Advents/adventSection";
import HeroWoman from "../components/HeroSection/HeroWoman";
import CardProduit from "../components/CardProduct/CardProduct";
import Banner from "../components/Banner/Banner";
import imageBannerW from "../assets/Banners/imageBannerW.png";

const BannerData2 = {
  subtitle1: "Explore our range",
  title: "Most Popular",
  subtitle2: "of the season",
  image: imageBannerW,
  title2: "Outfit For Every Adventure",
  title3: "winter selection",
  title4:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, omnis.",
};

export default function Woman() {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/product")
      .then((res) => {
        // setProduct(res.data.oneproduct);
        setAllProducts(res.data.product);
      })
      .catch(() => {})
      .finally(() => {});
  }, []);
  console.log(allProducts);
  return (
    <section className="mt-28">
      <HeroWoman />
      <AdventSection />
      <div className="pt-12 flex flex-col my-4">
        <div>
          <div className="w-full flex justify-center items-center gap-8">
            <div className=" w-[350px] h-[2px] bg-[#320432] rounded"></div>
            <h2 className="text-2xl sm:text-2xl lg:text-2xl font-bold ">
              Our Products
            </h2>
            <div className="w-[350px] h-[2px] bg-[#320432] rounded"></div>
          </div>
        </div>
        <div className="partie-produit-home">
          <CardProduit
            products={allProducts.filter(
              (product) => product.category === "woman"
            )}
            bgColor={"bg-gradient-to-r to-[#ff69b4ba] from-[#320432]"}
          />
        </div>
      </div>
      <Banner data={BannerData2} />
    </section>
  );
}
