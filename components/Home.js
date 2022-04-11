import React from "react";
import Header from "./Header";

function Home() {
  return (
    <div className="h-screen w-screen bg-home-mobile bg-no-repeat bg-cover text-[#fff] p-10 relative md:bg-home-tablet md:h-full md:flex md:flex-col md:items-center  md:relative lg:bg-home-desktop lg:h-screen">
      <Header />
      <div className="flex w-full flex-col items-center lg:flex-row lg:items-center lg:justify-evenly">
        <div className="text-center w-[327px] mt-[100px] space-y-[16px] md:w-[450px] md:h-[334px] lg:text-left">
          <div className="text-md leading-5 md:leading-6 tracking-widest md:text-[20px]">
            SO, YOU WANT TO TRAVEL TO
          </div>

          <div className="text-[80px] md:text-[150px]">SPACE</div>

          <div className="text-[15px] md:text-[16px]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </div>
        </div>

        <div className="h-[150px] w-[150px] md:h-[242px] md:w-[242px] md:text-[32px] md:mt-[156px] md:bg-red-400 bg-white rounded-full flex items-center justify-center text-gray-900 mt-[81px] mx-auto lg:mx-10 lg:bg-blue-400">
          Explore
        </div>
      </div>
    </div>
  );
}

export default Home;
