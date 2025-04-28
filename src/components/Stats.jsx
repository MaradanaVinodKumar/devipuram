import React from "react";

export const Stats = () => {
  return (
    <section className="w-full mt-28 mb-[5%] px-[10%] max-md:mt-12">
      <div className="grid grid-cols-4 gap-8 text-center max-lg:grid-cols-2 max-sm:grid-cols-1">
        {/* Stat 1 */}
        <div className="flex flex-col items-center">
          <h2 className="text-[36px] font-bold text-cyan-950 leading-none">35+</h2>
          <p className="mt-4 text-xl text-black">Years of Tradition</p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center">
          <h2 className="text-[36px] font-bold text-cyan-950 leading-none">10,000+</h2>
          <p className="mt-4 text-xl text-black">Annual Visitors</p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center">
          <h2 className="text-[36px] font-bold text-cyan-950 leading-none">108</h2>
          <p className="mt-4 text-xl text-black">Sacred Rituals</p>
        </div>

        {/* Stat 4 */}
        <div className="flex flex-col items-center">
          <h2 className="text-[36px] font-bold text-cyan-950 leading-none">108</h2>
          <p className="mt-4 text-xl text-black">Sevas Offered</p>
        </div>
      </div>
    </section>
  );
};
