import React from "react";

const eventData = [
  {
    id: 1,
    title: "Sri Lalitambika Navaratri 2025",
    date: "30 March 25",
    location: "Visakhapatnam",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F2b3aab135b374765b2e5b5958165ba0b%2F93d4b040785946e7a1b00504f32fc936",
  },
  {
    id: 2,
    title: "Annual Devi Mahotsavam",
    date: "30 March 25",
    location: "Visakhapatnam",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F2b3aab135b374765b2e5b5958165ba0b%2Fee126d435b15464fa309d231648609d5",
  },
  {
    id: 3,
    title: "Sri Lalitambika Navaratri 2025",
    date: "30 March 25",
    location: "Visakhapatnam",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F2b3aab135b374765b2e5b5958165ba0b%2F93d4b040785946e7a1b00504f32fc936",
  },
  {
    id: 4,
    title: "Annual Devi Mahotsavam",
    date: "30 March 25",
    location: "Visakhapatnam",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F2b3aab135b374765b2e5b5958165ba0b%2Fee126d435b15464fa309d231648609d5",
  },
];

export const Events = () => {
  return (
    <section className="flex flex-col items-start w-full px-[10%] max-xl:px-[6%] max-lg:px-4 max-sm:px-3 max-xs:px-2">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-medium leading-snug md:leading-[64px]">
        Discover Upcoming Events
      </h2>

      {/* Description and CTA */}
      <div className="flex justify-between items-center w-full mb-10 gap-5 
                      max-md:flex-col max-md:items-start max-md:mb-8 
                      max-sm:mb-6 max-sm:gap-4 max-xs:gap-3">
        <p className="text-2xl leading-9 text-black 
                      max-xl:text-xl max-xl:leading-8 
                      max-lg:text-lg max-md:leading-7 
                      max-sm:text-base max-sm:leading-6 
                      max-xs:text-sm">
          Enriching courses &amp; programs on Sri Vidya festivals, <br className="max-sm:hidden" />
          and enlightening spiritual retreats
        </p>
        <button className="px-8 py-3 h-14 text-xl font-medium border-2 border-slate-800 rounded-full text-slate-800 
                          hover:bg-[#46DE46] hover:text-[#0C3D3D] active:bg-[#46DE46] active:text-[#0C3D3D] 
                          active:border-none transition-all duration-300 active:scale-95 
                          max-xl:px-6 max-xl:py-2.5 max-xl:h-12 max-xl:text-lg 
                          max-lg:px-5 max-lg:text-base 
                          max-md:h-11 max-md:px-5 max-md:py-2 
                          max-sm:w-full max-sm:mt-2 max-sm:text-sm 
                          max-xs:h-10 max-xs:px-4">
  View All Events
</button>


      </div>

      {/* Grid of Events */}
      <div className="w-full mb-10 max-md:mb-8 max-sm:mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 
                        max-lg:gap-x-6 max-lg:gap-y-10 
                        max-md:gap-x-5 max-md:gap-y-8 
                        max-sm:gap-y-6 max-xs:gap-y-4">
          {eventData.map((event) => (
            <div key={event.id} className="w-full group cursor-pointer">
              {/* Image */}
              <div className="aspect-[1.57] w-full rounded-md overflow-hidden relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </div>

              {/* Description */}
              <div className="flex flex-col items-start py-6 px-5 sm:py-8 sm:px-6 bg-stone-100 mt-2 rounded-md 
                            max-lg:py-5 max-lg:px-4 
                            max-md:py-4 max-md:px-3 
                            max-sm:py-3 max-xs:px-2">
                <h3 className="text-2xl sm:text-3xl font-semibold text-black 
                              max-xl:text-xl 
                              max-lg:text-lg 
                              max-md:text-base 
                              max-sm:text-sm">
                  {event.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mt-4 text-base sm:text-lg text-gray-500 
                              max-xl:gap-x-6 max-xl:text-sm 
                              max-lg:gap-x-4 
                              max-md:gap-x-3 max-md:text-xs 
                              max-sm:gap-x-2 max-sm:mt-2">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F2b3aab135b374765b2e5b5958165ba0b%2F5e9928759bc24bcbbd050c054bb5569c"
                      alt="Calendar"
                      className="w-5 h-5 max-md:w-4 max-md:h-4 max-sm:w-3 max-sm:h-3"
                    />
                    <time>{event.date}</time>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/2b3aab135b374765b2e5b5958165ba0b/c06ed72efb8379147aafc8d0aae9d49c5729cee9?placeholderIfAbsent=true"
                      alt="Location"
                      className="w-5 h-5 max-md:w-4 max-md:h-4 max-sm:w-3 max-sm:h-3"
                    />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};