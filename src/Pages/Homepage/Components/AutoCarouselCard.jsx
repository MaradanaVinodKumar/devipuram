import React from 'react';
import { motion } from 'framer-motion';
import { SCROLL_IMAGE1, SCROLL_IMAGE2, SCROLL_IMAGE3, SCROLL_IMAGE4 } from '../../../Constants/Images';

const cards = [
  {
    title: 'Read & Reflect',
    description: 'Enjoy peaceful moments with a book and coffee.',
    image: SCROLL_IMAGE1
  },
  {
    title: 'Prayer & Beads',
    description: 'Experience calm with prayer and mala beads.',
    image: SCROLL_IMAGE2
  },
  {
    title: 'Festival of Lights',
    description: 'Celebrate traditions with light and devotion.',
    image: SCROLL_IMAGE3
  },
  {
    title: 'Temple Visit',
    description: 'Explore spiritual beauty at a peaceful temple.',
    image: SCROLL_IMAGE4
  },
  {
    title: 'Morning Ritual',
    description: 'Start your day with mindfulness and peace.',
    image: SCROLL_IMAGE1
  },
  {
    title: 'Evening Chanting',
    description: 'Find calm through the power of sound.',
    image: SCROLL_IMAGE2
  },
  {
    title: 'Sacred Gathering',
    description: 'Join a community of faith and love.',
    image: SCROLL_IMAGE3
  },
  {
    title: 'Divine Nature',
    description: 'Feel connected with the beauty around.',
    image: SCROLL_IMAGE4
  },
  {
    title: 'Peaceful Retreat',
    description: 'Take a break and recharge in silence.',
    image: SCROLL_IMAGE1
  },
  {
    title: 'Sacred Flames',
    description: 'Celebrate light and inner joy.',
    image: SCROLL_IMAGE2
  }
];

export default function AutoCarouselCard() {
  // Base dimensions for desktop
  const baseHeight = 536;
  const cardHeight = Math.round(baseHeight * 1.47); // ~788px
  const gap = 24;
  const cardWidth = 346;
  
  // Adjusted dimensions for tablet
  const tabletCardWidth = 280;
  const tabletCardHeight = Math.round(tabletCardWidth * 1.47); // ~412px
  
  // Adjusted dimensions for mobile
  const mobileCardWidth = 240;
  const mobileCardHeight = Math.round(mobileCardWidth * 1.47); // ~353px
  
  const totalCards = [...cards, ...cards];
  const containerWidth = (cardWidth + gap) * totalCards.length;
  const tabletContainerWidth = (tabletCardWidth + gap) * totalCards.length;
  const mobileContainerWidth = (mobileCardWidth + gap) * totalCards.length;

  return (
    <div className="w-full bg-white py-8 px-[10%] max-xl:px-[6%] max-lg:px-4 max-sm:px-3">
      <h2 className="text-2xl sm:text-5xl font-bold mb-10 text-left">
        Explore Upcoming Content
      </h2>
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6 max-md:gap-4"
          animate={{ 
            x: [0, -containerWidth / 2],
          }}
          transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
          style={{ width: `${containerWidth}px` }}
        >
          {totalCards.map((card, index) => (
            <div
              key={index}
              className={`flex-shrink-0 rounded-2xl shadow-lg overflow-hidden bg-white transition-transform duration-300 hover:scale-[1.02]
                w-[346px] h-[788px] 
                max-lg:w-[280px] max-lg:h-[412px]
                max-sm:w-[240px] max-sm:h-[353px]`}
            >
              <div className="w-full h-[72%] relative overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4 h-[28%] flex flex-col justify-center">
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{card.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{card.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}