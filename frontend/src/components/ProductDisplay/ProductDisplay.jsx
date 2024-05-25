import { Rating } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrum from "../BreadCrums/BreadCrum";
import AOS from "aos";
import "aos/dist/aos.css";

export const ProductDisplay = () => {
  const { id } = useParams();
  const [produit, setProduit] = useState();

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
      .get("http://localhost:8000/product/" + id)
      .then((res) => {
        console.log(res.data);
        setProduit(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }, []);
  if (!produit) return <div>loading...</div>;
  return (
    <>
      <BreadCrum />
      <div className="py-8">
        <div className="container">
          <div className="flex gap-3">
            <div className="flex gap-4 ">
              <div className="flex flex-col gap-5">
                <img
                  data-aos="fade-right"
                  data-aos-duration="200"
                  data-aos-once="true"
                  className="w-[130px] h-[110px] rounded-md shadow-black hover:scale-[0.9] "
                  src={produit.picture}
                  alt=""
                />
                <img
                  data-aos="fade-right"
                  data-aos-duration="300"
                  data-aos-once="true"
                  className="w-[130px] h-[110px] rounded-md shadow-black hover:scale-[0.9] "
                  src={produit.picture}
                  alt=""
                />
                <img
                  data-aos="fade-right"
                  data-aos-duration="400"
                  data-aos-once="true"
                  className="w-[130px] h-[110px] rounded-md shadow-black hover:scale-[0.9] "
                  src={produit.picture}
                  alt=""
                />
                <img
                  data-aos="fade-right"
                  data-aos-duration="600"
                  data-aos-once="true"
                  className="w-[130px] h-[110px] rounded-md shadow-black hover:scale-[0.9] "
                  src={produit.picture}
                  alt=""
                />
              </div>
              <div className="hover:scale-[0.9] hover:backdrop-blur-sm bg-white/30">
                <img
                  data-aos="fade-right"
                  data-aos-duration="0"
                  data-aos-once="true"
                  className="w-[500px] h-[500px] rounded-xl shadow-black  "
                  src={produit.picture}
                  alt=""
                />
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="0"
              data-aos-once="true"
              className="mr-[15px] ml-[15px] flex flex-col gap-1 "
            >
              <h1 className="text-[#1b1a1a] text-4xl font-semibold">
                {produit.title}
              </h1>
              <h2 className="text-[#d7d7d7] text-xl font-medium my-[14px]">
                name of user
              </h2>
              <div className="flex items-center justify-between w-[360px] ">
                <div className="text-[#ff4141] text-xl font-semibold">
                  {produit.price}
                </div>
                <div className="flex items-center gap-[6px]">
                  <Rating
                    precision={0.5}
                    className="productdisplay-rating"
                    name="read-only"
                    value={produit.rating}
                    readOnly
                    size="small"
                  />
                  <p>(12)</p>
                </div>
              </div>
              <div className="text-[#8d8d8d] text-xs w-[360px] mt-[16px] my-[14px]">
                <p>{produit.description}</p>
              </div>
              <div className="text-sm font-medium text-[#656565]">
                <h3>Available Sizes</h3>
                <div className="flex my-[12px] mx-0 gap-7">
                  <div className="py-[10px] px-[18px] bg-[#fbfbfb] border border-solid border-gray-300 rounded-md">
                    S
                  </div>
                  <div className="py-[10px] px-[18px] bg-[#fbfbfb] border border-solid border-gray-300 rounded-md">
                    M
                  </div>
                  <div className="py-[10px] px-[18px] bg-[#fbfbfb] border border-solid border-gray-300 rounded-md">
                    L
                  </div>
                  <div className="py-[10px] px-[18px] bg-[#fbfbfb] border border-solid border-gray-300 rounded-md">
                    XL
                  </div>
                  <div className="py-[10px] px-[18px] bg-[#fbfbfb] border border-solid border-gray-300 rounded-md">
                    XXL
                  </div>
                </div>
              </div>
              <div className="text-sm text-[#656565] font-medium">
                <h3>Available Sizes</h3>
                <div className="flex my-[12px] mx-0 gap-7">
                  <div>
                    <img
                      className="w-[40px] h-[40px] rounded-full"
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAI4AtwMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAABAAIH/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAGQEBAQEBAQEAAAAAAAAAAAAAAQIAAwYF/8QAFhEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwDmqwp8t7zEigrEsKY4kUFYETjHGU1ixmxlNYMZsCKYYysaDDGU0iMZDQKcAaTDEU0FyBFYFSJYSFYCiysCOLGOBHFgbAjiwtgDSYYziwphjIaGFNgDQZNjKKKcJRDpIiiFyAnCFSBFMrEjiwHAjixmwI4sZsAaxEYzgaGMLAGgU2MhoMixlFFOEowOkiKIXIkZDgVIMOFBWJFYysCaxYzYymsGM2AY0GGM4GxhTYyMaDJsZDVgKLGUUU4YVCHSRGRRoLkSwkLkBRCpASmOBHFgOBFM2MpoEYyGkU2MCxsMixgVqgosZRqKcJgjUC4YRGoFyIoh0kBKCpEigrASmOMpoM2ANApxkNBk2BmtAosZorQqkWMpJkYY0IYy4YVCl0kRUIXIiiFyJFBWJFMcAaDNgDQKbGQ0CixmhqgosZoNBRWalUXMxqAwLhIagdIYQYl0hIhgXCkQuRJFjgBTNjKNFKKAaCisitClFZrNaFLnWailOaMEMC40YCl0hMBgdI0QQuFJBcKSZSBDCgEFFFFNFKKBSKXOsikUudCSKH//2Q=="
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="w-[40px] h-[40px] rounded-full"
                      src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALMA8AMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAQIHA//EABwQAQEBAQACAwAAAAAAAAAAAAABEUEhMTKBof/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AOOJoNOgqHRDpSoCKIBRAC1FSgUgCCKigAAAIAgCpgoaoAT0JBRYIfX6I9tRDWG2qiaugAgAAJTgAcRUoFABAFQAAAoAGiIqFUBUAFRQABtUIw0oU4BUBBRBQBAFQAQAABA0RRUAAAQAAAUAAEFBqgMtLSJ4AWpoUFQAEVAUQEBAFQAANUANEAAANUAEAE1QVARqkBloVAFAAQAAQFQSgoAAgGgCoAAAAECAqKggAoAAoKjQAgFAEFQAABCgAAgAoAUFQgAAABgACoAAIpQUlBGtUBAAAqLUAOAAioAaCoAAixAFAAAAAAAVAACoqdBoBFFRRdAAEAAAKICIAKAAAAAEAAAAAAVA6ICpnkUFBUUAFKigGooCABUFERAFAAACAUgAAAAAAKhPQQBBcTAbARQAAAUAARUABBKAAAAAAACAAoAqKioAAACA0uhiKAAAgKICgAgioAAAAAAAAICKABFAAAAABRufFAZjQoKiICKAEQnuk6BSHIgItFgKiACCUBVKCgAgJABSAotRAgdavoFSP//Z"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="w-[40px] h-[40px] rounded-full"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAA1BMVEUiQnwHT7/EAAAASElEQVR4nO3BMQEAAADCoPVPbQhfoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeA8XKAAFZcBBuAAAAAElFTkSuQmCC"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="my-[10px] mx-0 flex gap-3 items-center">
                <span className="text-sm text-[#656565] font-medium">
                  Category :
                </span>
                <p className="py-[8px] px-[12px] bg-[#fbfbfb] border border-solid border-gray-300 rounded-lg text-[#8d8d8d]">
                  {produit.category}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
