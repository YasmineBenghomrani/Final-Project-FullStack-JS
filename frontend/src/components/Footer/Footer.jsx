import { Typography } from "@mui/material";
import React from "react";
import NearMeIcon from "@mui/icons-material/NearMe";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import googlePlay from "../../assets/icons/googlePlay.svg";
import appStore from "../../assets/icons/appStore.svg";

const FooterLinks = [
  {
    titre: "Home",
    link: "/",
  },
  {
    titre: "Men",
    link: "/Men",
  },
  {
    titre: "Woman",
    link: "/Woman",
  },
  {
    titre: "Kid",
    link: "/Kid",
  },
];

export default function Footer() {
  return (
    <div className="bg-[#391739]">
      <div className="container ">
        <div className=" grid md:grid-cols-3  pt-4   ">
          {/* Company details */}
          <div className="py-8 px-2 w-[260px] ">
            <a href="#heroSection">
              <Typography
                className="font-semibold text-2xl sm:text-3xl text-white"
                variant="h4"
                noWrap
                component="div"
              >
                Panelinha
              </Typography>
            </a>
            <p className="lg:pr-10 pt-3 text-[10px] w-[300px] text-[#ffffff] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </p>
            <div className="mt-4 grid md:grid-cols-2 gap-8 text-[#ffffff] ">
              <div className="flex items-center w-[128px] rounded-md bg-slate-300 ">
                <a
                  className="flex items-center justify-center p-[1px]"
                  href="http://"
                >
                  <img
                    src={googlePlay}
                    alt="brand"
                    className="w-[45px] py-2 px-2 "
                  />
                  <div>
                    <p className="text-[10px]">Get it on</p>
                    <p className="text-xs font-semibold">Google Play</p>
                  </div>
                </a>
              </div>
              <div className="flex items-center w-[128px] rounded-md bg-slate-300 ">
                <a
                  href="http://"
                  className="flex items-center justify-center p-[1px]"
                >
                  <img
                    src={appStore}
                    alt="brand"
                    className="w-[50px] py-2 px-2 "
                  />
                  <div>
                    <p className="text-[10px]">Download on</p>
                    <p className="text-xs font-semibold">App Store</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="b col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className=" py-8 px-6  ">
              <h1 className="text-sm text-white font-semibold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-500 text-sm hover:text-[#ffffff] duration-300"
                    >
                      {data.titre}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Second col Links */}
            <div className=" py-8 px-6 mx-6 w-[200px] ">
              <h1 className="text-sm text-white font-semibold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-500 text-sm hover:text-[#ffffff] duration-300"
                    >
                      {data.titre}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className=" py-8 px-6 mx-14 w-[200px] col-span-2  sm:col-auto  ">
              <h1 className="text-sm font-semibold text-white sm:text-left mb-3">
                Adress Links
              </h1>
              <div>
                <div className="flex items-center gap-3">
                  <NearMeIcon fontSize="small" sx={{ color: "white" }} />
                  <p className="text-gray-500 text-xs ">
                    70 Washington, NY 10012
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-6 ">
                  <PhoneAndroidIcon fontSize="small" sx={{ color: "white" }} />
                  <p className="text-gray-500 text-xs ">+1 1123 456 780</p>
                </div>
                <div className="flex items-center gap-3 mt-6 ">
                  <MailOutlineIcon fontSize="small" sx={{ color: "white" }} />
                  <p className="text-gray-500 text-xs ">uilib.help@gmail.com</p>
                </div>

                {/* social links */}
                <div className="flex gap-4 items-center mt-6">
                  <a href="/">
                    <div className="w-[30px] h-[30px] border-white hover:border-[#8f4a6d] rounded-full border flex justify-center items-center">
                      <InstagramIcon
                        fontSize="small"
                        className=" text-white hover:text-[#8f4a6d] duration-300"
                      />
                    </div>
                  </a>
                  <a href="/">
                    <div className="w-[30px] h-[30px] border-white hover:border-[#8f4a6d]  rounded-full border flex justify-center items-center">
                      <FacebookIcon
                        fontSize="small"
                        className=" text-white hover:text-[#8f4a6d] duration-300"
                      />
                    </div>
                  </a>
                  <a href="/">
                    <div className="w-[30px] h-[30px]  border-white hover:border-[#8f4a6d]  rounded-full border flex justify-center items-center">
                      <XIcon
                        fontSize="small"
                        className=" text-white hover:text-[#8f4a6d] duration-300"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
