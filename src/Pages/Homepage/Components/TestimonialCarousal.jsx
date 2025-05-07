import React, { useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    title: 'A Sacred Awakening',
    quote:
      'Attending the morning rituals transformed my inner world. I now feel connected to the Divine Mother in everything I do.',
    name: 'MAHALAKSHMI D.',
  },
  {
    title: 'Guided by Light',
    quote:
      'The teachings of Sri Vidya brought clarity and peace to my life. I walk with purpose, rooted in devotion.',
    name: 'ANAND RISHI',
  },
  {
    title: 'Inner Stillness, Outer Joy',
    quote:
      'Through daily practice and mantra chanting, I’ve found a calm that no chaos can shake.',
    name: 'SARASVATI P.',
  },
  {
    title: 'A Journey Inward',
    quote:
      'With every step into the temple, I leave behind the world and enter the presence of divine love.',
    name: 'OMKAR N.',
  },
  {
    title: 'The Mantra Changed My Life',
    quote:
      'Reciting the Lalita Sahasranama every dawn has unlocked energy and blessings beyond imagination.',
    name: 'DEEPA S.',
  },
];

const TestimonialCarousel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.offsetWidth * 0.33;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-[#f8f8f7] py-20 px-[10%]">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl md:text-5xl font-medium leading-snug md:leading-[64px]">
          Sacred Voices From the Path
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={() => scroll('left')}
            className="bg-white shadow p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronLeftIcon className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="bg-white shadow p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronRightIcon className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory space-x-[2vw] hide-scrollbar hideScrollBar"
      >
        {testimonials.map((item, idx) => (
  <div
    key={idx}
    className="flex-shrink-0 w-[85vw] sm:w-[55vw] md:w-[24vw] min-h-[27rem] bg-pink-50 p-6 rounded-2xl shadow-md snap-start"
  >
    <div className="text-yellow-500 text-2xl mb-4">★★★★★</div>
    <h3 className="font-semibold text-xl md:text-2xl text-black mb-3 leading-snug">
      {item.title}
    </h3>
    <p className="italic text-gray-700 text-base md:text-lg mb-6 leading-relaxed">
      "{item.quote}"
    </p>
    <p className="text-sm text-gray-500 font-semibold">{item.name}</p>
  </div>
))}

      </div>
    </section>
  );
};

export default TestimonialCarousel;
