import React from "react";
import { Star } from "lucide-react";

export const ReviewSection = () => {
  return (
    <section className="w-full my-[3%] py-6">
      <div
        className="flex flex-col lg:flex-row justify-between items-center mx-[10%] gap-8 lg:gap-0"
        style={{
          fontFamily: '"Segoe UI", Roboto, sans-serif',
        }}
      >
        {/* Left Column - Unchanged */}
        <div className="flex flex-col items-center lg:items-start" style={{ width: "498px", maxWidth: "100%" }}>
          <div className="flex gap-2">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className="text-green-600 w-5 h-5 md:w-7 md:h-7 fill-green-600"
              />
            ))}
          </div>
          <p className="text-xl md:text-2xl text-gray-800 mt-2 text-center lg:text-left">
            50,000+ Verified 4.5-star reviews*
          </p>
        </div>

        {/* Right Column - Stacked under on mobile/tablet */}
        <div 
          className="flex flex-col items-center lg:items-start text-center lg:text-left italic text-xl md:text-2xl text-gray-700 leading-snug"
          style={{ width: "500px", maxWidth: "100%" }}
        >
          <span>Welcome to the official Website of Devipuram</span>
          <span>the Adobe of devi Sri Sri Sri Sahasrakshi!</span>
        </div>
      </div>
    </section>
  );
};