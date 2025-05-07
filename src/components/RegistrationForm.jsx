// RegisterForm.js
import React, { useEffect, useRef, useState } from 'react';
import { s } from 'framer-motion/client';
import { CreateNewUser } from '../context/userContext';
import { firestore } from '../context/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {

    if (success) {
      setTimeout(() => {
        setSuccess(null);
      }, 2000); 
    }

  }, [success, error]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true)
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const checkEmailExists = async (email) => {
      const usersRef = collection(firestore, 'users'); // Change to your collection name
      const q = query(usersRef, where('email', '==', formData.email));
      const querySnapshot = await getDocs(q);
      return !querySnapshot.empty;
    }

    let data ={
      Name: formData.name,
      Email: formData.email,
      Password: formData.password,
    }
 
    CreateNewUser(data)
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        // alert("User registered successfully!");
        setSuccess("User registered successfully!");
    })
    .catch((error) => {
        console.error("Error adding document: ", error);

    })
    .finally(()=>{
      setLoading(false);
    })
  
   
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        {loading && <div className="text-center mb-4"> Registering...</div>}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {success && <div className="text-green-500 text-center mb-4">{success}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email Address"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
          </div>
          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm Password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-200 "
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
