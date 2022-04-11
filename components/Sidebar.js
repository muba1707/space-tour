import Image from "next/image";
import ReactDOM from "react-dom";
import { useRouter } from "next/router";

function Sidebar({ toggle, onClose }) {
  const router = useRouter();
  if (!toggle) return null;
  return ReactDOM.createPortal(
    <>
      <div
        className={`block fixed top-0 bottom-0 left-[30%] right-0 bg-white/10 backdrop-blur-md ease-in`}
      >
        <div onClick={onClose} className="float-right pt-8 pr-8 cursor-pointer">
          <Image
            src="/assets/shared/icon-close.svg"
            alt=""
            width={30}
            height={30}
          />
        </div>
        <div className="p-8 mt-[20%]">
          <ul className="flex flex-col text-white space-y-12">
            <li onClick={() => router.push("/")} className="cursor-pointer">
              <span className="font-bold">01</span>
              <span className="ml-3 tracking-widest uppercase">Home</span>
            </li>
            <li
              onClick={() => router.push("/planet")}
              className="cursor-pointer"
            >
              <span className="font-bold">02</span>
              <span className="ml-3 tracking-widest uppercase">
                Destination
              </span>
            </li>
            <li onClick={() => router.push("/crew")} className="cursor-pointer">
              <span className="font-bold">03</span>
              <span className="ml-3 tracking-widest uppercase">crew</span>
            </li>
            <li
              onClick={() => router.push("/technology")}
              className="cursor-pointer"
            >
              <span className="font-bold">04</span>
              <span className="ml-3 tracking-widest uppercase">technology</span>
            </li>
            <li
              onClick={() => router.push("/register")}
              className="cursor-pointer"
            >
              <span className="ml-3 tracking-widest uppercase">book now</span>
            </li>
          </ul>
        </div>
      </div>
    </>,
    document.getElementById("sidebar-root")
  );
}

export default Sidebar;
