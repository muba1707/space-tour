import React, { useState } from "react";

function Themeing() {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={`${
        toggle ? `bright` : `dark`
      } h-screen w-screen flex justify-center items-center bg-skin-background`}
    >
      <div className="w-[500px] h-[500px] bg-skin-container rounded-xl flex flex-col justify-center items-center">
        <button
          onClick={() => setToggle(!toggle)}
          className="bg-skin-background text-skin-base border border-slate-900 p-1 mb-10 rounded-full"
        >
          click me
        </button>
        <h1 className="text-center text-skin-text">THIS IS THE CONTAINER</h1>
      </div>
    </div>
  );
}

export default Themeing;
