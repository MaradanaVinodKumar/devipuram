import React from 'react';
import { SRICHAKRA } from '../../../Constants/Images';

const SriChakraSection = () => {
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <section className="w-full bg-[#fff5f0] py-16 md:py-20 px-[10%]">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 xl:gap-24 w-full">
        
        {/* Text Column */}
        <div className="w-full max-w-[620px] text-black">
          <h2 className="text-4xl md:text-5xl font-medium leading-snug md:leading-[64px]">
            Sri Chakra
          </h2>
          <p className="mt-6 md:mt-8 text-lg md:text-2xl leading-relaxed md:leading-10 text-gray-800">
            The Sri Chakra consists of nine interlocking triangles that surround a central point (bindu). 
            The four upward-pointing triangles represent Shiva, while the five downward-pointing triangles 
            represent Shakti.
          </p>
          <p className="mt-6 md:mt-8 text-lg md:text-2xl leading-relaxed md:leading-10 text-gray-800">
            This sacred geometric pattern is considered one of the most powerful yantras in Hindu tantric tradition,
            representing the cosmic energies and the union of masculine and feminine divine principles.
          </p>
          <button 
            className={`px-8 py-3 text-xl font-medium rounded-full border ${
              isClicked 
                ? 'bg-[#46DE46] text-[#0C3D3D] border-[#46DE46]' 
                : 'bg-transparent text-black border-black'
            } hover:bg-[#46DE46] hover:text-[#0C3D3D] hover:border-[#46DE46] transition-all duration-300 ease-in-out`}
            onClick={() => setIsClicked(!isClicked)}
          >
            Know More
          </button>
        </div>

        {/* Image Column */}
        {/* Image Column */}
{/* Image Column */}
{/* Image Column */}
        <div className="w-full max-w-[620px] h-auto flex justify-center lg:justify-start">
          <div className="w-full aspect-square rounded-xl overflow-hidden bg-transparent custom-shadow">
            <img
              src={SRICHAKRA}
              alt="Sri Chakra Yantra"
              className="w-full h-full object-contain p-4"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/620x620/e5e7eb/374151?text=Sri+Chakra+Yantra";
              }}
            />
          </div>
        </div>



        
      </div>
    </section>
  );
};

export default SriChakraSection;