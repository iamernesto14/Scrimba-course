import React from "react";
import bgImage from '../assets/react.svg'
import { user } from "../Hooks/UserContext";

function Content() {
    const {count, handleClick} = user()
  return (
    <>
      <div className="px-6 pt-12 pb-24 text-white bg-slate-800">
        <h1 className="text-4xl mb-8 font-bold">Fun facts about React!</h1>
        <ul className="px-7 flex flex-col gap-3 list-disc marker:text-cyan-400">
          <li>Was first release in 2013</li>
          <li>Was originally created by Jordan Walker</li>
          <li>Has well over 200k stars on gitHub</li>
          <li>Is maintained by Meta</li>
          <li>Powers thousands on enterprise apps, including mobile apps</li>
        </ul>
        <div>
            <button className="p-2 border border-black mt-3 hover:bg-slate-950
         rounded-md" onClick={handleClick}>Count: {count}</button>
        </div>
      </div>
    </>
  );
}

export default Content;
