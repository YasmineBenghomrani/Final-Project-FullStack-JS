import React from "react";
import { Rating } from "@mui/material";
import Slider from "react-slick";
import Popup from "../PopUp/PopUp";

const reviewData = [
  {
    id: 1,
    img: "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710374400&semt=ais",
    subtitle: "Tousseq Ijaz",
    title: "15/03/2024",
    Comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique laborum eos dignissimos non delectus culpa velit iure quod, cum tenetur.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    rating: (
      <Rating
        precision={0.5}
        className="rating"
        name="read-only"
        value={4.5}
        readOnly
        size="small"
      />
    ),
  },
  {
    id: 1,
    img: "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710374400&semt=ais",
    subtitle: "Tousseq Ijaz",
    title: "15/03/2024",
    Comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique laborum eos dignissimos non delectus culpa velit iure quod, cum tenetur.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    rating: (
      <Rating
        precision={0.5}
        className="rating"
        name="read-only"
        value={4.5}
        readOnly
        size="small"
      />
    ),
  },
  {
    id: 1,
    img: "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710374400&semt=ais",
    subtitle: "Tousseq Ijaz",
    title: "15/03/2024",
    Comment:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique laborum eos dignissimos non delectus culpa velit iure quod, cum tenetur.Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    rating: (
      <Rating
        precision={0.5}
        className="rating"
        name="read-only"
        value={4.5}
        readOnly
        size="small"
      />
    ),
  },
];

export default function Reviews() {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    pauveOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="flex flex-col justify-center items-center m-[100] ">
      <div className="container ">
        <div className="w-full flex justify-between  items-center ">
          <div className="flex items-center gap-7">
            <h1 className="text-2xl sm:text-2xl lg:text-2xl font-bold ">
              Reviews
            </h1>
            <div className="">
              <Popup />
            </div>
          </div>
          <div className="w-[350px] h-[2px] bg-[#320432] rounded"></div>
        </div>
      </div>
      <div className="container mx-auto">
        <Slider {...settings}>
          {reviewData.map((data) => (
            <div key={data.id}>
              <div>
                <div className=" w-[450px] p-[20px] m-[15px] bg-[#ffffff] shadow-md ">
                  <div className="flex items-center justify-between mb-[20px]">
                    <div className="flex items-center">
                      <div className="w-[50px] h-[50px] rounded-full overflow-hidden mr-[10px]">
                        <img
                          className="h-full w-full object-cover object-center hover:scale-[1.1]"
                          src={data.img}
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col">
                        <strong className="text-[#3d3d3d] text-base tracking-wider">
                          {data.subtitle}
                        </strong>
                        <span className="text-[#979797] text-sm tracking-wider">
                          {data.title}
                        </span>
                      </div>
                    </div>

                    <div>{data.rating}</div>
                  </div>
                  <div>
                    <p className="text-[0.9rem] text-[#4b4b4b]">
                      {data.Comment}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
