"use client";
import React, { useState, useEffect, useRef } from "react";
import { HERO_VEDIO } from "../../../Constants/Images";

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slideInterval = useRef(null);

  const slides = [
    {
      title: "Lalithambika Navaratri 2025",
      description:
        "Immerse yourself in the divine worship of Lalithambika through Japa, Puja, & Sevas at Devipuram",
    },
    {
      title: "Experience Sacred Rituals",
      description:
        "Participate in traditional Navaratri Pujas and rejuvenate your spirit in the divine atmosphere.",
    },
    {
      title: "Learn Ancient Wisdom",
      description:
        "Enroll in special workshops and sessions to deepen your understanding of Sri Vidya practices.",
    },
    {
      title: "Celebrate Together",
      description:
        "Join a global community of devotees and celebrate Navaratri with devotion, love, and joy.",
    },
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    startSlideTimer();
    return () => stopSlideTimer();
  }, []);

  const startSlideTimer = () => {
    stopSlideTimer();
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
      setIsTransitioning(true);
    }, 4000);
  };

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };

  useEffect(() => {
    if (currentSlide === totalSlides) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentSlide, totalSlides]);

  const handleButtonClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <section className="relative w-full h-[968px] 
  max-2xl:h-[840px] 
  max-xl:h-[720px] 
  max-lg:h-[600px] 
  max-md:h-[520px] 
  max-sm:h-[440px] 
  max-w-[1920px] mx-auto overflow-hidden flex flex-col justify-center items-start px-20 py-24 text-white font-medium 
  max-2xl:px-16 max-xl:px-12 max-lg:px-10 max-md:px-6 max-sm:px-4 
  max-md:py-16 max-sm:py-12">



      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-10"
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
      >
        <source
          type="video/mp4"
          src= {HERO_VEDIO}
        />
      </video>

      {/* Text + Button container */}
      <div className="relative z-20 w-[870px] max-w-full overflow-hidden space-y-8">
        {/* Slide Wrapper */}
        <div
          className={`flex ${isTransitioning ? "transition-transform duration-700 ease-in-out" : ""}`}
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <div className="flex flex-col justify-between gap-6">
                <div>
                  <h1 className="text-[173px] leading-[0.6] font-extrabold max-2xl:text-[173px] max-xl:text-[64px] max-lg:text-[52px] max-md:text-[40px] max-sm:text-[32px] max-sm:leading-tight">
                    <span
                      style={{
                        fontFamily: "Peddana, -apple-system, Roboto, Helvetica, sans-serif",
                        fontWeight: 400,
                        color: "rgba(255,255,255,1)",
                      }}
                    >
                      {slide.title}
                    </span>
                  </h1>

                  <p className="text-[28px] leading-snug mt-4 max-2xl:text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px]">
                    {slide.description}
                  </p>
                </div>

                {/* "Know More" Button */}
                <button
                  onClick={handleButtonClick}
                  className={`flex items-center gap-3 px-7 py-3.5 text-[24px] rounded-full self-start mt-6 max-lg:text-lg max-md:text-base max-sm:text-sm max-md:px-5 max-sm:px-4 max-sm:py-2 transition-all duration-300 ${
                    isClicked
                      ? "bg-[#46DE46] text-[#0C3D3D]"
                      : "bg-white text-black hover:bg-[#46DE46] hover:text-[#0C3D3D]"
                  }`}
                >
                  <span>Know More</span>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/2b3aab135b374765b2e5b5958165ba0b/0f8ed93c419b3115c15f06f4efc97b1e83ef0b68?placeholderIfAbsent=true"
                    alt=""
                    className="w-[30px] max-sm:w-6 object-contain aspect-[2.43]"
                  />
                </button>
              </div>
            </div>
          ))}
          {/* Cloned first slide for smooth looping */}
          <div className="flex-shrink-0 w-full">
            <div className="flex flex-col justify-between gap-6">
              <div>
                <h1 className="text-[104px] leading-[1.1] font-extrabold max-2xl:text-[80px] max-xl:text-[64px] max-lg:text-[52px] max-md:text-[40px] max-sm:text-[32px] max-sm:leading-tight">
                  <span
                    style={{
                      fontFamily: "Peddana, -apple-system, Roboto, Helvetica, sans-serif",
                      fontWeight: 400,
                      color: "rgba(255,255,255,1)",
                    }}
                  >
                    {slides[0].title}
                  </span>
                </h1>

                <p className="text-[28px] leading-snug mt-4 max-2xl:text-[24px] max-xl:text-[20px] max-lg:text-[18px] max-md:text-[16px] max-sm:text-[14px]">
                  {slides[0].description}
                </p>
              </div>

              {/* "Know More" Button (duplicate) */}
              <button
                onClick={handleButtonClick}
                className={`flex items-center gap-3 px-7 py-3.5 text-[24px] rounded-full self-start mt-6 max-lg:text-lg max-md:text-base max-sm:text-sm max-md:px-5 max-sm:px-4 max-sm:py-2 transition-all duration-300 ${
                  isClicked
                    ? "bg-[#46DE46] text-[#0C3D3D]"
                    : "bg-white text-black hover:bg-[#46DE46] hover:text-[#0C3D3D]"
                }`}
              >
                <span>Know More</span>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/2b3aab135b374765b2e5b5958165ba0b/0f8ed93c419b3115c15f06f4efc97b1e83ef0b68?placeholderIfAbsent=true"
                  alt=""
                  className="w-[30px] max-sm:w-6 object-contain aspect-[2.43]"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
