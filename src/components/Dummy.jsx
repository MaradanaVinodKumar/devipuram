import React from 'react';

const ImageQuoteTextSection = () => {
  return (
    <div className="px-[5%] md:px-[10%] py-6">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-[60px] md:gap-[120px]">
        
        {/* Image with Quote */}
        <div className="relative w-full md:w-[621px] h-[400px] md:h-[700px]">
          {/* Dummy Image Placeholder */}
          <div className="w-full h-full bg-gray-300 rounded-2xl flex items-center justify-center text-gray-500 text-lg">
            Image Placeholder
          </div>

          {/* Quote Card */}
          <div className="absolute bottom-0 right-0 translate-x-[5%] md:translate-x-[12.5%] translate-y-[10%] md:translate-y-1/4 
                          bg-white rounded-xl shadow-lg w-[90%] md:w-[653px] h-[150px] md:h-[214px] p-6 md:p-8 flex flex-col justify-center">
            <p className="text-gray-700 italic text-base md:text-xl">"The best view comes after the hardest climb."</p>
            <span className="block mt-2 md:mt-4 text-sm md:text-base text-gray-500">- Unknown</span>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-[705px] text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Embrace the Journey</h2>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            Every step you take, every mountain you climb brings you closer to a new perspective.
            Growth comes from overcoming challenges, and the beauty of life is found along the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageQuoteTextSection;
