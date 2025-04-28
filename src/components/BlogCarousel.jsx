import React, { useState, useRef, useEffect } from 'react';

const BlogCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(2.75); // shows 2 full + 3/4 of 3rd
  const cardRef = useRef(null);
  const containerRef = useRef(null);

  const cards = [
    { title: "Guruji On Kalavahana", videoPlaceholder: "https://example.com/video1-placeholder.jpg" },
    { title: "Guruji On Siri Jyothi", videoPlaceholder: "https://example.com/video2-placeholder.jpg" },
    { title: "Livestream", videoPlaceholder: "https://example.com/video3-placeholder.jpg" },
    { title: "Divine Talk", videoPlaceholder: "https://example.com/video4-placeholder.jpg" },
    { title: "Daily Rituals", videoPlaceholder: "https://example.com/video5-placeholder.jpg" },
  ];

  const totalCards = cards.length;

  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setVisibleCards(2.75);
      } else if (width >= 1024) {
        setVisibleCards(2.25);
      } else if (width >= 768) {
        setVisibleCards(1.5);
      } else {
        setVisibleCards(1);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (cardRef.current) {
        setCardWidth(cardRef.current.offsetWidth + 24); // 24px = Tailwind's gap-6
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [visibleCards]);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, totalCards - Math.ceil(visibleCards)));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="px-[5%] md:px-[8%] xl:px-[10%] py-8 font-sans flex flex-col lg:flex-row gap-8">
      {/* Left Column */}
      <div className="lg:w-[30%]">
        <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-4">
          Explore The Blog
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed">
          The secret to being a morning person?<br />
          Finding out what works for you. Go<br />
          behind the scenes with these Amazing<br />
          Humans to see how starting the day with<br />
          a routine you feel good about makes all<br />
          the difference.
        </p>
      </div>

      {/* Right Column */}
      <div className="lg:w-[70%] relative" ref={containerRef}>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                ref={index === 0 ? cardRef : null}
                className="flex-shrink-0 w-[85vw] sm:w-[48vw] md:w-[33vw] xl:w-[calc(100%/2.75-16px)]"
              >
                <div className="relative pt-[56.25%] mb-4 bg-gray-100 rounded-lg overflow-hidden">
                  <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    poster={card.videoPlaceholder}
                    controls
                  >
                    <source src="" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white opacity-80" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.8L17.2 10 6.3 17.2V2.8z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 border-b border-gray-200 pb-4 md:pb-6">
                  {card.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-8 p-2 rounded-full z-10 ${
            currentIndex === 0 ? 'opacity-50 cursor-default' : 'hover:bg-gray-100'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          disabled={currentIndex >= totalCards - Math.ceil(visibleCards)}
          className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-8 p-2 rounded-full z-10 ${
            currentIndex >= totalCards - Math.ceil(visibleCards) ? 'opacity-50 cursor-default' : 'hover:bg-gray-100'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogCarousel;
