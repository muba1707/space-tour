import Header from "./Header";

export default function Planet() {
  return (
    <div className="bg-planet-mobile overflow-x-hidden bg-bottom h-screen overflow-scroll bg-no-repeat bg-cover p-6 text-white md:bg-planet-tablet lg:bg-planet-desktop">
      <Header />
      <div className="flex flex-col items-center">
        <div className="mt-6 w-full text-center md:mt-10 md:text-left lg:mt-[76px] lg:ml-[167px]">
          <span className="font-bold text-gray-500">01</span>
          <span className="ml-4 text-white tracking-[3px] leading-5 uppercase">
            pick your destination
          </span>
        </div>
        <div className="lg:flex lg:mt-[97px] lg:w-full lg:justify-evenly">
          <div className="h-[170px] md:h-[300px] mt-8 flex justify-center">
            <img
              src="/assets/destination/image-moon.png"
              alt=""
              className="h-full"
            />
          </div>
          <div>
            <div className="mt-10 flex justify-center lg:justify-start">
              <ul className="text-white/80 flex space-x-5 uppercase">
                <li className="cursor-pointer leading-5 tracking-widest">
                  Moon
                </li>
                <li className="cursor-pointer leading-5 tracking-widest">
                  Mars
                </li>
                <li className="cursor-pointer leading-5 tracking-widest">
                  Europa
                </li>
                <li className="cursor-pointer leading-5 tracking-widest">
                  Titan
                </li>
              </ul>
            </div>
            <div className="text-white text-center mt-5 text-6xl lg:text-left">
              MOON
            </div>
            <div className="flex justify-center">
              <div className="w-[327px]  text-center mt-2 text-[15px] md:w-[573px] lg:text-left">
                See our planet as you’ve never seen it before. A perfect
                relaxing trip away to help regain perspective and come back
                refreshed. While you’re there, take in some history by visiting
                the Luna 2 and Apollo 11 landing sites.
              </div>
            </div>
            <div className="h-0.5 bg-white/30 max-w-full mt-7"></div>
            <div className="flex flex-col w-[573px] md:flex-row justify-around lg:justify-start">
              <div className="mt-8 text-center lg:text-left">
                <h3 className="tracking-widest leading-5 uppercase">
                  Avg. Distance
                </h3>
                <h1 className="mt-3 text-3xl uppercase">384,400 km</h1>
              </div>
              <div className="mt-8 text-center lg:text-left lg:ml-10">
                <h3 className="tracking-widest leading-5 uppercase">
                  est. travel time
                </h3>
                <h1 className="mt-3 text-3xl uppercase">3 days</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
