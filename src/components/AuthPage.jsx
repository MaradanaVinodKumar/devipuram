import React, { useEffect, useState } from 'react';
import { RegisterUser, signInUser } from '../context/userContext';
import { collection, getDoc, query, where } from 'firebase/firestore';
import { firestore } from '../context/firebase';

function AuthPage() {
  // State to toggle between Login and Register views
  const [isLoginView, setIsLoginView] = useState(true);

  // Form state
 
  
//   const [name, setName] = useState(''); // For registration
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState(''); // For registration

  // Error/Success messages
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
    });

  const clearForm = () => {
    // setFormData.name('');
    // setFormData.email('');
    // setFormData.password('');
    // setFormData.confirmPassword('');
    // setError('');
    // setSuccessMessage('');
    setFormData({
        name: '',
        email: '', 
        password: '',
        confirmPassword: '',
    });
    setError('');
    setSuccessMessage('');
    }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleToggleView = () => {
    setIsLoginView(!isLoginView);
    clearForm(); // Clear form when switching views
  };

  useEffect(() => {

    if (successMessage || error){
      setTimeout(() => {
        setSuccessMessage(null);
        setError(null);
      }, 2000); 
    }

  }, [successMessage, error]);

const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);

    if (isLoginView) {
        if (!formData.email || !formData.password) {
            setError('Please enter both email and password.');
            return;
          }

          const loginUser=(email, password)=>{
            setLoading(true);
            setError(null);
            signInUser(formData.email, formData.password)
              .then((userCredential) => {
                // Login successful
                const user = userCredential?.user;
                setSuccessMessage("User logged in successfully!");
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

        loginUser(formData.email, formData.password);

    }
    else{

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        setError('Please fill in all fields.');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters long.');
        return;
      }

    const checkEmailExists = async (email) => {
      const usersRef = collection(firestore, 'users'); // Change to your collection name
      const q = query(usersRef, where('email', '==', formData.email));
      const querySnapshot = await getDoc(q);
      return !querySnapshot.empty;
    }

    // let data ={
    //   Name: formData.name,
    //   Email: formData.email,
    //   Password: formData.password,
    // }

     RegisterUser(formData.email, formData.password)
        .then((userCredential) => {
          // Registration successful
          const user = userCredential?.user;
          console.log("Registered as:", user?.email);
          setSuccessMessage("Registered as:", user?.email);
        }
        )
        .catch((error) => {
          console.log("Registration error:", error);
          // setError("Registration error:", error.response.error.message);
           setError(error.message);
           })
        .finally(()=>{
          setLoading(false);
        })
      
        }
      };

  const inputClasses = "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent";
  const buttonClasses = "w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline transition duration-150";

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {isLoginView ? 'Sign in to your account' : 'Create a new account'}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {!isLoginView && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required={!isLoginView}
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="John Doe"
                  />
                </div>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={FormData.email}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                //   autoComplete={isLoginView ? "current-password" : "new-password"}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="••••••••"
                />
              </div>
            </div>

            {!isLoginView && (
              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    id="confirm-password"
                    name="confirmPassword"
                    type="password"
                    autoComplete="new-password"
                    required={!isLoginView}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={inputClasses}
                    placeholder="••••••••"
                  />
                </div>
              </div>
            )}

            {error && (
              <p className="text-sm text-red-600 bg-red-100 p-3 rounded-md">{error}</p>
            )}
            {successMessage && (
              <p className="text-sm text-green-600 bg-green-100 p-3 rounded-md">{successMessage}</p>
            )}

            <div>
              <button
                type="submit"
                className={buttonClasses}
              >
                {isLoginView ? 'Sign in' : 'Create account'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={handleToggleView}
                className="font-medium text-blue-600 hover:text-blue-500 hover:underline"
              >
                {isLoginView ? 'Create a new account' : 'Already have an account? Sign in'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;