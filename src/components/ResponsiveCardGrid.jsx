import React from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    alt: "Peaceful nature meditation",
    title: "Mindful Reading",
    description: "A cozy moment of reflection with books and candles."
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    alt: "Person meditating in nature",
    title: "Meditative Prayer",
    description: "Engage in spiritual calm with prayer beads."
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    alt: "Candlelight gathering",
    title: "Community Ritual",
    description: "A shared spiritual celebration through light."
  },
  {
    src: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    alt: "Ancient temple",
    title: "Sacred Architecture",
    description: "A place of worship surrounded by nature."
  }
];

export default function SpiritualTiles() {
  return (
    <div className="ml-[9%] mr-[6%] mt-[5%] mb-[5%] bg-[#fdf6e3] p-4">
      <h2 className="text-3xl font-bold mb-6">Spiritual Moments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-transparent rounded-xl overflow-hidden shadow-lg flex flex-col"
          >
            <div className="w-full h-[480px]">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-transparent text-black">
              <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
              <p className="text-sm">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}