import React from "react";
import Slider from "react-slick";
import imageH1 from "../../assets/images/imageH1.png";
import imageH2 from "../../assets/images/imageH2.png";
import imageH3 from "../../assets/images/imageH3.png";
import imageH4 from "../../assets/images/imageH4.png";
import imageH5 from "../../assets/images/imageH5.png";
import imageH6 from "../../assets/images/imageH6.png";
import Button from "../Shared/Button.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const heroData = [
  {
    id: 1,
    img: imageH1,
    subtitle: "Beats Solo",
    title: "Men's clothes",
    title2: "New collection",
  },
  {
    id: 2,
    img: imageH2,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Virtual",
  },
  {
    id: 3,
    img: imageH3,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "New collection",
  },
  {
    id: 4,
    img: imageH4,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Virtual",
  },
  {
    id: 5,
    img: imageH5,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "New collection",
  },
  {
    id: 6,
    img: imageH6,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Virtual",
  },
];

export default function HeroMen() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    pauveOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="container mx-auto mb-12">
      <div
        className="overflow-hidden rounded-3xl min-h-[500px] 
      sm:min-h-[600px] hero-bg-color flex justify-center items-center "
      >
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {heroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-2xl sm:text-6xl lg:text-2xl font-bold  "
                    >
                      {data.subtitle}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      className="text-5xl sm:text-6xl lg:text-7xl  "
                    >
                      {data.title}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="500"
                      data-aos-once="true"
                      data-aos-delay="800"
                      className="text-5xl uppercase text-white sm:text-[80px] md:text-[100px] xl:text-[150px] font-bold"
                    >
                      {data.title2}
                    </h1>
                    <div
                      data-aos="flip-up"
                      data-aos-duration="500"
                      data-aos-once="true"
                    >
                      <Button
                        text="Show Now"
                        bgColor="bg-white"
                        textColor="text-indigo-700"
                      />
                    </div>
                  </div>
                  <div className="-1 sm:order-2">
                    <div
                      data-aos="zoom-in"
                      data-aos-once="true"
                      className="relative z-10"
                    >
                      <img
                        src={data.img}
                        alt=""
                        className="w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,0.4)] relative Z-40 "
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
