import React from "react";
import logo from "../assets/react.svg";

function Header() {
  return (
    <>
      <div className="flex justify-between items-center  p-6 bg-slate-900">
        <div className="flex gap-2 justify-left items-center">
          <div className="w-7">
            <img src={logo} alt="a logo of react" />
          </div>
          <p className="font-bold text-cyan-400 text-xl">ReactFacts</p>
        </div>

        <p className="text-white font-bold">React Course - Project 1</p>
      </div>
    </>
  );
}

export default Header;
