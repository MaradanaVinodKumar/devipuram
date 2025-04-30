import React, { useState } from 'react';
import { AMRITHANANDA_IMAGE } from '../../../Constants/Images';

const ImageWithQuoteCard = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div className="w-full px-4 sm:px-8 md:px-[10%] my-[5%]">
      <div className="flex flex-col sm:flex-row gap-12 sm:gap-16">

        {/* Left Column - Image with Overlay Card */}
        <div className="relative w-full sm:w-[722px]">
          <div className="w-full h-[500px] sm:h-[600px] md:h-[700px] rounded-xl shadow-lg">
            <img
              src={AMRITHANANDA_IMAGE}
              alt="Devipuram Temple"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Quote Card - Responsive Positioning */}
          <div
            className="bg-white p-6 sm:p-8 md:p-12 rounded-lg shadow-xl z-10 
                       w-full sm:w-[653px] 
                       mt-6 sm:mt-0 
                       sm:absolute"
            style={{
              right: '-120px',
              bottom: '-40px',
            }}
          >
            <blockquote className="text-gray-700 italic text-base sm:text-lg md:text-xl leading-relaxed tracking-wide">
              "Begin a transformative journey with Guruji's life and teachings, guiding seekers to spiritual light."
            </blockquote>
            <p className="mt-4 text-sm sm:text-base font-medium text-black tracking-wide text-right">
              Sri Amritananda Natha Saraswati
            </p>
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className="w-full sm:w-[705px] flex flex-col justify-start mt-4 sm:mt-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 leading-snug tracking-wide">
            Biography
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-10 leading-loose tracking-wider">
            Born in 1934 in Visakhapatnam, Sri Amritananda Natha Saraswati was a nuclear scientist by profession. 
            He completed his Ph.D. in Nuclear Physics and worked at institutions where he blended scientific knowledge with deep spiritual wisdom.
          </p>
          <button
            onClick={handleClick}
            className={`mt-6 sm:mt-8 border border-gray-400 font-medium py-3 px-6 rounded-3xl transition duration-300 self-start
              ${isClicked
                ? 'bg-[#46DE46] text-[#0C3D3D]'
                : 'bg-transparent text-black hover:bg-[#46DE46] hover:text-[#0C3D3D]'
              }
              w-full sm:w-auto`} 
          >
            Know more
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageWithQuoteCard;
