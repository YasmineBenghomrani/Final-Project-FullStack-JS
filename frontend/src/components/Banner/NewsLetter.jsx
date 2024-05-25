import React from "react";

export default function NewsLetter() {
  return (
    <div className="relative container h-[200px] w-full  my-12  shadow-lg overflow-hidden rounded-md bg-gray-200">
      <div className="flex items-center justify-center m-10">
        <div
          data-aos="fade"
          className="container rounded-md
          bg-gradient-to-r  from-[#320432] from-30% to-slate-500
          bg-slate-500 flex justify-center gap-12 items-center text-white "
        >
          <div className="p-6 sm:p-8">
            <p data-aos="slide-right" className="text-sm">
              Subscribe to our.
            </p>
            <h1
              data-aos="zoom-out"
              className="uppercase text-2xl lg:text-4xl font-bold "
            >
              Newsletter
            </h1>
          </div>
          {/* Col action */}
          {/* <div className="relative flex justify-center items-center gap-2 ">
            <input
              className="bg-[#eee]  border-none block py-4 px-[110px] text-sm rounded-lg w-full outline-none placeholder:italic  placeholder:text-slate-400"
              type="email"
              placeholder="Enter your Email..."
            />
            <div>
              <input
                className="bg-[#4a084a]  text-[#fff] text-xs py-4 px-6 rounded-lg font-medium cursor-pointer absolute inset-y-2 right-4 rounded-r-md"
                type="submit"
                value="Subscribe"
              />
            </div>
          </div> */}

          <form>
            <div data-aos="zoom-in" class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
              <input
                type="email"
                id="email"
                class="bg-[#eee] border-none block px-[160px] rounded-lg w-full p-4 ps-10 text-sm outline-none placeholder:italic  placeholder:text-slate-400 "
                placeholder="Enter your Email..."
                required
              />
              <button
                type="submit"
                class=" absolute end-2 bottom-2 bg-[#4a084a]  text-[#fff]   hover:bg-[#5e245e]  focus:outline-none font-medium rounded-md text-sm px-4 py-2 "
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
