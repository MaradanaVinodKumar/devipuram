import React, { useState } from 'react';
import { GURUJI_IMAGE } from '../../../Constants/Images';

const ImageWithQuoteCard = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <section className="w-full px-[5%] sm:px-[7%] md:px-[10%] my-16">
      <div
        className="flex flex-col lg:flex-row justify-between lg:items-center items-start gap-12 lg:gap-20 mx-auto"
        style={{ maxWidth: '1547px' }}
      >
        {/* Left Section: Image */}
        <div
          className="relative w-full max-w-[722px] h-auto"
          style={{ maxHeight: '740px' }}
        >
          <div className="overflow-hidden rounded-xl">
            <img
              src={GURUJI_IMAGE}
              alt="Devipuram Temple"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Section: Text */}
        <div
          className="flex flex-col justify-start pt-4 w-full"
          style={{ maxWidth: '705px', minHeight: '579px' }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-snug md:leading-[64px]">
            Biography
          </h2>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-2xl leading-relaxed md:leading-10 text-gray-800">
            Born in 1934 in Visakhapatnam, Sri Amritananda Natha Saraswati was a nuclear scientist by profession. 
            He completed his Ph.D. in Nuclear Physics and worked at various institutions. His unique blend of scientific knowledge and spiritual wisdom.
             Born in 1934 in Visakhapatnam, Sri Amritananda Natha Saraswati was a nuclear scientist by profession. 
            He completed his Ph.D. in Nuclear Physics and worked at various institutions. His unique blend of scientific knowledge and spiritual wisdom
          </p>
          <button
            onClick={handleClick}
            className={`mt-8 py-3 px-6 font-medium rounded-3xl transition duration-300 
              ${isClicked
                ? 'bg-[#46DE46] text-[#0C3D3D] border-none'
                : 'bg-transparent text-black border border-gray-400 hover:bg-[#46DE46] hover:text-[#0C3D3D]'} 
              w-full sm:w-auto xl:w-[263px] xl:h-[66px] xl:rounded-[52px] xl:text-[24px]`}
          >
            Know more
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageWithQuoteCard;
