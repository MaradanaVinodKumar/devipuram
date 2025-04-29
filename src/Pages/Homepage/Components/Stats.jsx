import React from "react";

export const Stats = () => {
  return (
    <section className="w-full mt-28 mb-[5%] px-[10%] max-md:mt-12">
      <div className="grid grid-cols-4 max-2xl:grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-2 gap-8 text-center">
        {/* Stat Block */}
        {[
          { value: "35+", label: "Years of Tradition" },
          { value: "10,000+", label: "Annual Visitors" },
          { value: "108", label: "Sacred Rituals" },
          { value: "108", label: "Sevas Offered" },
        ].map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="text-[36px] font-bold text-cyan-950 leading-none">
              {stat.value}
            </h2>
            <p className="mt-4 text-xl text-black">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
