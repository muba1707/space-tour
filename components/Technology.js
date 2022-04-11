import Header from "./Header";

export default function Technology() {
  return (
    <div className="h-screen w-screen bg-technology-desktop py-6 pl-6 text-white overflow-scroll">
      <Header />
      <div className="w-full mt-20 pl-40">
        <div className="mt-40">
          <span className="font-bold text-gray-500">02</span>
          <span className="ml-4 text-white tracking-[3px] leading-5 uppercase">
            space launch 101
          </span>
        </div>

        <div className="mt-6 flex justify-between items-center w-full h-full gap-x-4">
          <div>
            <div className="h-20 w-20 bg-white text-black flex justify-center items-center rounded-full">
              1
            </div>
            <div className="h-20 w-20 bg-white text-black flex justify-center items-center rounded-full mt-2">
              2
            </div>
          </div>

          <div className="max-w-md">
            <div className="leading-5 tracking-widest">THE TERMINOLOGY…</div>

            <div className="text-5xl mt-3">LAUNCH VEHICLE</div>

            <div className="mt-5 text-lg">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </div>
          </div>

          <div className="max-w-[515px]  object-cover">
            <img
              src="/assets/technology/image-space-capsule-portrait.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
