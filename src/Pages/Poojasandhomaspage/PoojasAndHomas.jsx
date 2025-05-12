import React from 'react'
import EventCard from '../Gurujipage/EventCard';

const PoojasAndHomas = () => {
  return (
    <div>
      {events.map((event, index) => (
          <EventCard
            key={index}
            date={event.date}
            title={event.title}
            description={event.description}
            image={event.image}
          />
        ))}
    </div>
  )
}

export default PoojasAndHomas


const events = [
  {
    date: "2025-06-15",
    title: "Summer Music Festival",
    description: "Join us for a day full of live music, food trucks, and outdoor fun at the annual Summer Music Festival.",
    image: "https://example.com/images/summer-festival.jpg"
  },
  {
    date: "2025-07-04",
    title: "Independence Day Fireworks",
    description: "Celebrate Independence Day with a spectacular fireworks show and family-friendly activities.",
    image: "https://example.com/images/fireworks.jpg"
  },
  {
    date: "2025-08-21",
    title: "Tech Innovators Conference",
    description: "Network with tech leaders and explore the future of innovation at this annual tech conference.",
    image: "https://example.com/images/tech-conference.jpg"
  },
  {
    date: "2025-09-10",
    title: "Autumn Art Expo",
    description: "Experience a vibrant showcase of local artists and creators at the Autumn Art Expo.",
    image: "https://example.com/images/art-expo.jpg"
  },
  {
    date: "2025-10-31",
    title: "Halloween Haunted House",
    description: "Get ready for a spooky night filled with thrills, scares, and Halloween treats.",
    image: "https://example.com/images/haunted-house.jpg"
  }
];
