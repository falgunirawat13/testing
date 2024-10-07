import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token'); // Get the token from localStorage

    try {
      const response = await axios.post(
        'http://localhost:8000/api/auditor-qualifications/login',
        { email, password }, // Send email and password in the request body
        {
          headers: {
            'Authorization': `Bearer ${token}`, // Include the token in the Authorization header if necessary
            'Content-Type': 'application/json', // Using JSON to send data
          },
        }
      );

      // If the response is successful, handle it here
      console.log('Login successful:', response.data);
      toast.success('Login successful!'); // Show success message
    } catch (error) {
      console.error('Error during login:', error);
      setError('Failed to sign in. Please check your credentials.');
      toast.error('Failed to sign in!'); // Show error message
    }
  };

  return (
    <><ToastContainer /><div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
              <h2 className="text-2xl font-semibold text-center mb-6">Auditor Login</h2>

              {/* Error Message */}
              {error && (
                  <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                      {error}
                  </div>
              )}

              <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                          placeholder="Enter your email" />
                  </div>

                  <div className="mb-4">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                      <input
                          id="password"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                          placeholder="Enter your password" />
                  </div>

                  <button
                      type="submit"
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg"
                  >
                      Sign In
                  </button>
              </form>
          </div>
      </div></>
  );
};

export default SignIn;
