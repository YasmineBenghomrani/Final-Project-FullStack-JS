import React from "react";
import { ProductDisplay } from "../components/ProductDisplay/ProductDisplay";
import Reviews from "../components/Reviews/Reviews";
import OurProducts from "../components/ProductDisplay/OurProducts";

export default function ProductPage() {
  return (
    <div>
      <ProductDisplay />
      <Reviews />
      <OurProducts />
    </div>
  );
}
