import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../context/firebase'; 
import React, { useEffect, useState } from 'react';
import { LoginUser, signInUser } from '../context/userContext';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);


    useEffect(() => {
  
      if (success) {
        setTimeout(() => {
          setSuccess(null);
        }, 2000); 
      }
  
    }, [success, error]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your login logic
    // alert(`Email: ${email}\nPassword: ${password}`);
    loginUser(email, password);
  };

  const loginUser=(email, password)=>{
    setLoading(true);
    setError(null);
    signInUser(email, password)
      .then((userCredential) => {
        // Login successful
        const user = userCredential?.user;
        setSuccess("User logged in successfully!");
        console.log("Logged in as:", user.email);
      })
      .catch((error) => {
        // Handle login error
        setError(error.message);
        console.error("Login error:", error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {loading && <div className="text-center mb-4"> Loin...</div>}
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {success && <div className="text-green-500 text-center mb-4">{success}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;

