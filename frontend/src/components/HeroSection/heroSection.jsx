import React from "react";
import heroSection from "../../assets/images/heroSection.jpg";

export default function HeroSection() {
  return (
    <section
      data-aos="fade"
      data-aos-duration="800"
      data-aos-once="tue"
      data-aos-delay="200"
      id="heroSection"
      class=" relative h-[34vw] mt-24 mx-24 mb-16 rounded-3xl shadow-lg overflow-hidden "
    >
      <div className=" relative ">
        <img
          src={heroSection}
          className=" w-full object-cover bg-center h-screen bg-contain"
          alt=""
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 text-white flex flex-col justify-center gap-4 lg:w-2/5 sm:pl-3 sm:pt-0 sm:h-3/4 text-center sm:text-left ml-8">
          <h1
            data-aos="zoom-out-right"
            data-aos-duration="800"
            data-aos-once="tue"
            class="text-4xl sm:text-3xl lg:text-4xl font-bold text-white"
          >
            Lorem ipsum dolor sit amet
          </h1>
          <p
            data-aos="zoom-out-right"
            data-aos-duration="800"
            data-aos-once="tue"
            data-aos-delay="300"
            class=" text-sm  font-light text-gray-300 "
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eius
            omnis corporis consequatur. Vero assumenda porro omnis cum, hic
            modi.
          </p>
          <div
            class=" flex justify-start gap-x-6 sm:pr-3 sm:pt-0 text-center sm:text-center mt-3  "
            data-aos="zoom-out-right"
            data-aos-duration="800"
            data-aos-once="tue"
            data-aos-delay="400"
          >
            <a
              href="#"
              class="rounded-md bg-gradient-to-r to-[#ff69b4ba] from-[#320432] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a
              href="#"
              class="text-sm font-semibold leading-6 text-white border rounded-md border-white px-2 py-2"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* <div class="overlay">
        <div className=" text-white flex flex-col justify-center gap-4 lg:w-2/5 sm:pl-3 sm:pt-0 sm:h-3/4 text-center sm:text-left ">
          <div class="hidden sm:mb-8 sm:flex ">
            <div
              class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-300 ring-1 ring-white/10 hover:ring-gray-900/20
            "
            >
              Announcing our next round of funding.
              <a href="#" class="font-semibold text-[#852a85]">
                <span aria-hidden="true"></span>Read more
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <h1 class="text-4xl sm:text-3xl lg:text-4xl font-bold text-white">
            Lorem ipsum dolor sit amet
          </h1>
          <p class=" text-sm  font-light text-gray-300 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eius
            omnis corporis consequatur. Vero assumenda porro omnis cum, hic
            modi.
          </p>
          <div class=" flex items-center gap-x-6 sm:pl-3 sm:pt-0 text-center  sm:text-center">
            <a
              href="#"
              class="rounded-md bg-gradient-to-r to-[#ff69b4ba] from-[#320432] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a href="#" class="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div> */}
    </section>
  );
}
