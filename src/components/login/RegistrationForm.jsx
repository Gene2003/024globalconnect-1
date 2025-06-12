import React from 'react';
import { User, KeyRound, Lock } from 'lucide-react';
import logoImage from "../../assets/024global_logo_200x200.png";
const RegistrationForm = () => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="w-full max-w-4xl bg-gray-900/80 rounded-lg shadow-xl overflow-hidden backdrop-blur-md border border-gray-700">
        <div className="bg-blue-900 text-white p-8 text-center">
          <h1 className="text-3xl font-bold">Welcome to 024GLOBALCONNECT!</h1>
          <p className="text-lg mt-2 opacity-90">Join our Team for Unlimited Opportunities! 🌟</p>
        </div>

        <div className="p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg overflow-hidden ring-2 ring-blue-400">
              <img
                src={logoImage}
                alt="Logo"
                className="w-20 h-20 rounded-full shadow-md"
              />
            </div>
            <h2 className="text-2xl font-semibold mt-4 text-blue-300">REGISTRATION DETAILS</h2>
          </div>

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-1">First Name</label>
                <div className="flex items-center bg-gray-800 border border-blue-500/50 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                  <User className="w-5 h-5 text-blue-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className="w-full bg-transparent focus:outline-none text-white"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-blue-200 mb-1">Last Name</label>
                <div className="flex items-center bg-gray-800 border border-blue-500/50 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                  <User className="w-5 h-5 text-blue-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className="w-full bg-transparent focus:outline-none text-white"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-200 mb-1">Username</label>
              <div className="flex items-center bg-gray-800 border border-blue-500/50 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                <User className="w-5 h-5 text-blue-400 mr-2" />
                <input
                  type="text"
                  placeholder="Choose username"
                  className="w-full bg-transparent focus:outline-none text-white"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-200 mb-1">Password</label>
              <div className="flex items-center bg-gray-800 border border-blue-500/50 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                <KeyRound className="w-5 h-5 text-blue-400 mr-2" />
                <input
                  type="password"
                  placeholder="Create password"
                  className="w-full bg-transparent focus:outline-none text-white"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-blue-200 mb-1">Confirm Password</label>
              <div className="flex items-center bg-gray-800 border border-blue-500/50 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-blue-400">
                <Lock className="w-5 h-5 text-blue-400 mr-2" />
                <input
                  type="password"
                  placeholder="Confirm password"
                  className="w-full bg-transparent focus:outline-none text-white"
                  required
                />
              </div>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 text-blue-500 focus:ring-blue-500 rounded border-blue-500 bg-gray-800"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-blue-200">
                I agree to the <a href="#" className="text-blue-400 hover:underline">terms and policies</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-600 text-white py-3 px-4 rounded-lg transition duration-200 font-medium shadow-lg"
            >
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
