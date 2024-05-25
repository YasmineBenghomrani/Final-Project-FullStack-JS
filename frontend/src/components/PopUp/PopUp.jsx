import React, { useState } from "react";
import Close from "../../assets/icons/Close.svg";
import { Rating } from "@mui/material";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [value, setValue] = React.useState(2);
  const [inputValue, setinputValue] = useState("");

  return (
    <div className="flex justify-center items-center ">
      <button
        onClick={() => setShowPopup(true)}
        className="py-[8px] px-[8px] rounded-md bg-gradient-to-r to-[#ff69b4ba] from-[#320432] text-white text-sm hover:scale-[1.1]"
      >
        Add Review
      </button>

      {showPopup && (
        <div className="fixed z-5 inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between gap-6">
              <h2 className="text-2xl mb-4 font-semibold w-80">
                Write a Review for this product
              </h2>
              <button
                className="mt-4font-bold py-2 px-4 rounded"
                onClick={() => setShowPopup(false)}
              >
                <img src={Close.svg} alt="" srcset="" />
              </button>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                  <label className="text-[#4b566b] text-base">
                    Your Review
                  </label>
                  <input
                    placeholder="Write your review here..."
                    value={inputValue}
                    onChange={(event) => {
                      setinputValue(event.target.value);
                    }}
                    className=" border py-[8px] px-[8px] pb-[45px]  border-[#b9bcc3] "
                    type="text"
                  />
                </div>
                <div className="flex items-center justify-between  gap-4">
                  <label className="text-[#4b566b] text-base">
                    Your Rating
                  </label>
                  <Rating
                    precision={0.5}
                    size="small"
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </div>
              </div>
            </div>

            <button className="mt-4 bg-[#320432] hover:bg-[#491a49] text-white font-bold py-2 px-4 rounded">
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
