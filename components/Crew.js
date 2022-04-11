import Header from "./Header";
import Image from "next/image";

export default function Crew() {
  return (
    <div className="h-screen w-screen bg-crew-desktop p-6">
      <Header />
      <div className="text-center mt-10 lg:text-left lg:mt-40">
        <div>
          <span className="font-bold text-gray-500">02</span>
          <span className="ml-4 text-white tracking-[3px] leading-5">
            MEET YOUR CREW
          </span>
        </div>
        <div>
          <div>
            <div className="h-[223px] mb-4 w-full object-cover">
              <Image
                width="100%"
                height="100%"
                src="/assets/crew/image-douglas-hurley.png"
                alt=""
              />
            </div>

            <div className="flex justify-center space-y-5">
              <div className="flex space-x-4">
                <div className="h-4 w-4 rounded-full bg-white/40 hover:bg-white cursor-pointer"></div>
                <div className="h-4 w-4 rounded-full bg-white/40 hover:bg-white cursor-pointer"></div>
                <div className="h-4 w-4 rounded-full bg-white/40 hover:bg-white cursor-pointer"></div>
                <div className="h-4 w-4 rounded-full bg-white/40 hover:bg-white cursor-pointer"></div>
              </div>
            </div>
          </div>
          <div className="mt-10 text-[#D0D6F9] md:text-yellow-500">
            COMMANDER
          </div>
          <div className="mt-2 text-[2rem] text-white font-bold uppercase">
            Douglas Hurley
          </div>
          <div className="h-25 text-gray-400 mt-1">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </div>
        </div>
      </div>
    </div>
  );
}
