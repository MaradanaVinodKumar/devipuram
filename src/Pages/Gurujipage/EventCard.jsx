import React from 'react';

const EventCard = ({ title, date, description, image }) => {
  return (
    <div className="bg-white shadow-md rounded overflow-hidden mb-4">
      {(image && typeof image !== "string") && (
        <img
          src={URL.createObjectURL(image)}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{new Date(date ?? new Date() ).toDateString()}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default EventCard;
