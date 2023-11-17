// Login.js

import React, { useState } from "react";
import { getDiscordUserInfo } from "../libs/discord-users-info";

const Login = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  getDiscordUserInfo("742060351285362789").then((result) => console.log(result));

  const baseTextClass = darkMode ? 'text-gray-400' : 'text-gray-600';
  const buttonTextClass = darkMode ? 'text-gray-300' : 'text-gray-600';
  const bgColorClass = darkMode ? 'bg-gray-700' : 'bg-white';
  const borderColorClass = darkMode ? 'border-gray-700' : 'border-white';

  return (
    <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'}`}>
      <div className={`bg-${darkMode ? 'gray-900' : 'white'} p-8 rounded shadow-md w-96 ${darkMode ? 'dark' : ''}`} style={{ fontFamily: "'Satoshi', sans-serif" }}>
        <h2 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-gray-200' : 'text-gray-900'}`} style={{ fontFamily: "'Satoshi-Black', sans-serif" }}>
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="username" className={`block text-sm font-medium ${baseTextClass}`}>
              User Discord ID
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className={`mt-1 p-2 w-full border rounded-md outline-none ${bgColorClass} ${baseTextClass} ${borderColorClass}`}
              placeholder="Enter your User Discord ID"
              style={{ fontFamily: "'Satoshi-Light', sans-serif" }}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className={`block text-sm font-medium ${baseTextClass}`}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`mt-1 p-2 w-full border rounded-md outline-none ${bgColorClass} ${baseTextClass} ${borderColorClass}`}
              placeholder="Enter your password"
              style={{ fontFamily: "'Satoshi-Light', sans-serif" }}
            />
          </div>
          <button
            type="submit"
            className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 border-none ${darkMode ? 'dark' : ''}`}
            style={{ fontFamily: "'Satoshi-Black', sans-serif" }}
          >
            LogIn
          </button>
        </form>
        <div className="mt-4 flex items-center">
          <label htmlFor="darkMode" className={`text-sm ${buttonTextClass}`}>
            Dark Mode
          </label>
          <input
            type="checkbox"
            id="darkMode"
            checked={darkMode}
            onChange={toggleDarkMode}
            className="ml-2 form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
