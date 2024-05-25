import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const CardProduct = ({ textColor, bgColor, products, handler = () => {} }) => {
  if (!Array.isArray(products) || products.length === 0) {
    return <div>No products available</div>;
  }
  console.log(products);

  return (
    //   {`${bgColor} ${textColor} ${border} cursor-pointer
    // hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}
    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-28">
      {products.map((product) => (
        <div
          data-aos="fade-up"
          key={product.id}
          className={`${bgColor} ${textColor} flex justify-center items-center w-[450px] h-[295px] pt-[20px] pr-[5px] pb-[60px] pl-[20px]  rounded-3xl hover:scale-[1.1]`}
        >
          <img
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="tue"
            className="w-[20vw] max-w-[280px] h-[220px] object-cover mt-[30px] mr-[30px] ml-[-70px] border-none rounded-3xl"
            src={product.picture}
            alt={product.name}
          />
          <div className="h-[200px] mt-[20px] mr-[12px]">
            <h2 className="text-xl font-medium mb-[2px] mr-[30px] text-[#f5f5f5]">
              {product.title}
            </h2>
            <h3 className="text-xs font-normal m-0 opacity-75 text-[#ffffff]">
              name of user
            </h3>
            <p className="text-[10px] font-normal mt-[12px] w-[250px] opacity-50 text-[#ffffff] line-clamp-3">
              {product.description}
            </p>
            <Rating
              precision={0.5}
              className="rating"
              name="read-only"
              value={product.rate}
              readOnly
              size="small"
            />
            <div className="flex justify-around items-center mt-[12px] text-white cursor-pointer">
              <h4>{product.price}DA</h4>
              <Link to={"/Product/" + product._id}>
                <input
                  className="place-items-center border border-white py-2 px-7 rounded-full text-sm hover:border-none hover:bg-white hover:text-MyPurple"
                  type="button"
                  value="See More"
                />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProduct;
