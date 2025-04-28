"use client";
import React from "react";

import { Navbar, Navigation } from "./Navigation";

import Homepage from "./Homepage";

export const WLight = () => {
  return (
    <main className="flex overflow-x-hidden flex-col bg-white max-md:pb-24">
      <div className="flex flex-col self-end w-full max-w-[1940px] max-md:max-w-full">
        {/* <Navbar /> */}
        <Navigation />
      </div>
    </main>
  );
};

export default WLight;
