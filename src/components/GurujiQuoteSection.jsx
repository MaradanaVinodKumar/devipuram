import React, { useState } from 'react';
import { AMRITHANANDA_IMAGE } from '../Constants/Images';

const ImageWithQuoteCard = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div className="w-full px-[10%] my-[5%]">
      <div className="flex flex-col md:flex-row gap-16">
        {/* Left Column - Image with Overlay Card */}
        <div className="relative w-full md:w-[722px]">
          <div className="w-[621px] h-[700px] overflow-hidden rounded-xl shadow-lg">
            <img
              src={AMRITHANANDA_IMAGE}
              alt="Devipuram Temple"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quote Card */}
          <div
            className="absolute bg-white p-12 rounded-lg shadow-xl z-10"
            style={{
              width: '653px',
              height: '214px',
              right: '-160px',
              bottom: '-40px',
            }}
          >
            <blockquote className="text-gray-700 italic text-lg md:text-xl leading-relaxed tracking-wide">
              "Begin a transformative journey with Guruji's life and teachings, guiding seekers to spiritual light."
            </blockquote>
            <p className="mt-4 text-base font-medium text-black tracking-wide text-right">
              Sri Amritananda Natha Saraswati
            </p>
          </div>
        </div>

        {/* Right Column - Text Content */}
        <div className="w-full md:w-[705px] flex flex-col justify-start ml-52">
          <h2 className="text-5xl md:text-5xl font-bold text-gray-900 mb-12 leading-snug tracking-wide">
            Biography
          </h2>
          <p className="text-lg text-gray-600 mb-10 leading-loose tracking-wider">
            Born in 1934 in Visakhapatnam, Sri Amritananda Natha. Saraswati was a nuclear scientist by profession. He completed his Ph.D. in Nuclear Physics and worked at His unique blend of scientific knowledge and spiritual wisdom. Born in 1934 in Visakhapatnam, Sri Amritananda Natha. Saraswati was a nuclear scientist by profession. He completed his Ph.D. in Nuclear Physics and worked at His unique blend of scientific knowledge and spiritual wisdom
          </p>
          <button
            onClick={handleClick}
            className={`mt-8 border border-gray-400 font-medium py-3 px-6 rounded-3xl transition duration-300 self-start
              ${isClicked
                ? 'bg-[#46DE46] text-[#0C3D3D]'
                : 'bg-transparent text-black hover:bg-[#46DE46] hover:text-[#0C3D3D]'
              }`}
          >
            Know more
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageWithQuoteCard;
