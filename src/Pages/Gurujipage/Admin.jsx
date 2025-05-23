import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EventCard from './EventCard';
import { useAuth } from '../../context/authContext';

const EventsContent = () => {
  const [showModal, setShowModal] = useState(false);
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    image: null,
    description: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setEventData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Submitted:', eventData);
    setEventData({ title: '', date: '', image: null, description: '' });
    setShowModal(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Events</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-sm"
        >
          Add New Event
        </button>
      </div>

      <p>Here you can find information about upcoming and past events.</p>
      <ul>
        <li className="py-1">Upcoming Event 1 - Date</li>
        <li className="py-1">Past Event A - Date</li>
      </ul>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Add Event</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="title"
                placeholder="Event Title"
                value={eventData.title}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
              <input
                type="date"
                name="date"
                value={eventData.date}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="w-full"
              />
              <textarea
                name="description"
                placeholder="Event Description"
                value={eventData.description}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                rows="3"
                required
              />
              <div> 
                Preview Event Card :
              </div>
              <div style={{padding: '10px',backgroundColor:"#00000030",boxShadow:"inset 0 0 10px black", borderRadius: '10px'}}>
                <EventCard {...eventData} />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const CoursesContent = ({ onAddCourse }) => (
  <div>
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-semibold">Courses</h1>
      <button
        onClick={onAddCourse}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-sm"
      >
        Add New Course
      </button>
    </div>
    <p>Explore the courses we offer.</p>
    <ul>
      <li className="py-1">Course on Vedanta - Starts Soon</li>
      <li className="py-1">Yoga Beginners Course - Ongoing</li>
    </ul>
  </div>
);

const PoojasContent = ({ onAddPooja }) => (
  <div>
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-semibold">Poojas</h1>
      <button
        onClick={onAddPooja}
        className="bg-yellow-500 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded text-sm"
      >
        Add New Pooja
      </button>
    </div>
    <p>Learn about the pooja services available.</p>
    <ul>
      <li className="py-1">Daily Pooja Schedule</li>
      <li className="py-1">Special Pooja Booking</li>
    </ul>
  </div>
);

const App = () => {
  const [activeSection, setActiveSection] = useState('events');
  const navigate = useNavigate();
 const { isAuthenticated, logout } = useAuth();
  const handleLogout = () => {
    // Replace with your logout logic (e.g., authContext.logout())
    logout();
    console.log("Logging out...");
    navigate("/");
  };

  const handleAddEvent = () => console.log("Add Event button clicked.");
  const handleAddCourse = () => console.log("Add Course button clicked.");
  const handleAddPooja = () => console.log("Add Pooja button clicked.");

  const renderContent = () => {
    switch (activeSection) {
      case 'events':
        return <EventsContent onAddEvent={handleAddEvent} />;
      case 'courses':
        return <CoursesContent onAddCourse={handleAddCourse} />;
      case 'poojas':
        return <PoojasContent onAddPooja={handleAddPooja} />;
      default:
        return <EventsContent onAddEvent={handleAddEvent} />;
    }
  };

  const getLinkClassName = (sectionName) => {
    let baseClasses = "w-full text-left p-2 rounded hover:bg-gray-700 cursor-pointer block";
    if (activeSection === sectionName) {
      return `${baseClasses} bg-gray-600 font-semibold`;
    }
    return baseClasses;
  };

  return (
    <div className="flex" style={{ height: '90.7vh' }}>
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4 flex-shrink-0 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-6">Menu</h2>
          <ul>
            <li className="mb-3">
              <button
                onClick={() => setActiveSection('events')}
                className={getLinkClassName('events')}
              >
                Events
              </button>
            </li>
            <li className="mb-3">
              <button
                onClick={() => setActiveSection('courses')}
                className={getLinkClassName('courses')}
              >
                Courses
              </button>
            </li>
            <li className="mb-3">
              <button
                onClick={() => setActiveSection('poojas')}
                className={getLinkClassName('poojas')}
              >
                Poojas
              </button>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <button
            onClick={handleLogout}
            className="w-full text-left p-2 rounded hover:bg-red-600 bg-red-500 text-white"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-100 p-6 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
