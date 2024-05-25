import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import CardProductHome from "./CardProductHome";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HorizontalSwiper() {
  const [products, setProducts] = useState([]);

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
      .get("http://localhost:8000/product")
      .then((response) => {
        if (Array.isArray(response.data.product)) {
          const productsWithFourStarsOrMore = response.data.product.filter(
            (product) => product.rate >= 4
          );
          setProducts(productsWithFourStarsOrMore);
        } else {
          console.error(
            "Format de données non pris en charge :",
            response.data.product
          );
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des produits :", error);
      });
  }, []);

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      loop={true}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="mySwiperHorizantale"
    >
      {products.map((product) => (
        <SwiperSlide key={product._id} className="swiper-media">
          {/* Correction de la classe CSS */}
          {/* Passez le produit à CardProductHome */}
          <CardProductHome product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
