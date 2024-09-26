import React from "react";

import AppWrap from "../../wrapper/AppWrap";

const Header = () => {
  return (
    <div className="flex flex-col w-full h-full items-center relative">
      <div className="text-[96px] font-extrabold bg-gradient-to-bl from-[#C167F6] to-[#5548C7] bg-clip-text text-transparent mt-20">
        Shop<span className="text-white">GPT</span>
      </div>
      <div className="text-[30px] font-light text-white">Shopping Reimagined with AI</div>
      <div className="text-[15px] font-light text-white opacity-50">Elevating your experience with AI precision</div>
      <a
        href={`#get started`}
        className="absolute bottom-10 cursor-pointer mt-2 rounded-full bg-[#313bac] text-white px-4 py-2 w-[200px] text-center text-[15px] font-bold"
      >
        Let’s Start Shopping!
      </a>
    </div>
  );
};

export default AppWrap(Header, "home");
