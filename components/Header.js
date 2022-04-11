import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Header() {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);

  return (
    <header className="flex items-center justify-between w-full relative">
      <div className="w-[40px] h-[40px] lg:w-[55px] lg:h-[55px] cursor-pointer">
        <Image
          alt=""
          src="/assets/shared/logo.svg"
          width="100%"
          height="100%"
          onClick={() => router.push("/")}
        />
      </div>

      <div className="md:hidden cursor-pointer">
        <Image
          alt=""
          src="/assets/shared/icon-hamburger.svg"
          width={24}
          height={21}
          onClick={() => setToggle(true)}
        />
      </div>

      <div className="hidden md:block w-[450px] h-[96px] bg-[rgb(21,25,35)] absolute top-0 right-0 lg:top-[40px] lg:w-[830px] lg:backdrop-blur-md lg:bg-white/10">
        <ul className="flex items-center h-full lg:ml-[123px] text-white">
          <li
            className="ml-10 lg:ml-20 cursor-pointer"
            onClick={() => router.push("/")}
          >
            Home
          </li>
          <li
            className="ml-10 lg:ml-20 cursor-pointer"
            onClick={() => router.push("/planet")}
          >
            Destination
          </li>
          <li
            className="ml-10 lg:ml-20 cursor-pointer"
            onClick={() => router.push("/crew")}
          >
            crew
          </li>
          <li
            className="ml-10 lg:ml-20 cursor-pointer"
            onClick={() => router.push("/technology")}
          >
            Technology
          </li>
          <li
            className="ml-10 lg:ml-20 cursor-pointer"
            onClick={() => router.push("/register")}
          >
            Book Now
          </li>
        </ul>
      </div>
      <Sidebar toggle={toggle} onClose={() => setToggle(false)} />
    </header>
  );
}

export default Header;
