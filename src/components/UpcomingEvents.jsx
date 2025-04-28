import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const EventGrid = () => {
  // Sample data for the grid items
  const gridItems = [
    {
      id: 1,
      imageUrl: 'https://example.com/image1.jpg',
      name: 'Navaratri Celebrations',
      date: 'Oct 3-12, 2025',
      location: 'Devipuram Temple'
    },
    {
      id: 2,
      imageUrl: 'https://example.com/image2.jpg',
      name: 'Lalitha Sahasranama Archana',
      date: 'Every Friday',
      location: 'Main Shrine'
    },
    {
      id: 3,
      imageUrl: 'https://example.com/image3.jpg',
      name: 'Guru Purnima',
      date: 'Jul 13, 2025',
      location: 'Guru Peetham'
    },
    {
      id: 4,
      imageUrl: 'https://example.com/image4.jpg',
      name: 'Mahashivaratri',
      date: 'Feb 26, 2025',
      location: 'Shiva Temple'
    }
  ];

  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Upcoming Events at Devipuram</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the divine programs and celebrations happening at the sacred Devipuram temple.
            Join us in these spiritual gatherings to experience the blessings of the Goddess.
          </p>
        </div>

        {/* 2x2 Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {gridItems.map((item) => (
            <div key={item.id} className="group rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Image Section */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Info Section - Transparent Background */}
              <div className="p-6 bg-opacity-90 bg-white">
                {/* Name in one line */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.name}</h3>
                
                {/* Date and Location in columns */}
                <div className="flex justify-between text-gray-700">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-2 text-rose-600" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-rose-600" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventGrid;