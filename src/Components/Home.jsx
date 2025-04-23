import React, { useState } from "react";
import photo1 from "../Images/photo-1.webp";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    if (inputValue.trim()) {
      setMessage("Your email has been submitted successfully!");
    } else {
      setMessage("Please enter your email address.");
    }

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div
      className="flex flex-col md:flex-row min-h-screen bg-gray-300"
      id="home"
    >
      {/* Text Section */}
      <div className="flex flex-col items-start justify-center w-full p-6 sm:p-10 md:w-1/2 md:order-1 md:justify-start md:pl-16 md:pr-10 mt-28 md:mt-0">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 mt-10 md:mt-36 ml-2 sm:ml-4 md:ml-0">
          Find Your <span className="text-orange-900">Dream Home</span>
        </h1>

        <p className="text-base sm:text-lg text-gray-600 mb-6 ml-2 sm:ml-4 md:ml-0 text-justify max-w-xl">
          Welcome to our real estate agency, where finding your dream home is
          our top priority. Our team of experienced agents is dedicated to
          providing exceptional service and helping you navigate the complex
          process of buying or selling a property.
        </p>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 ml-2 sm:ml-4 md:ml-0 w-full">
          <form
            onSubmit={handleButtonClick}
            className="flex flex-col sm:flex-row items-center w-full gap-4"
          >
            <input
              type="email"
              value={inputValue}
              onChange={handleInputChange}
              className="p-3 border border-gray-300 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-orange-500 w-full sm:w-auto flex-grow"
              placeholder="Your Email"
            />
            <button
              type="submit"
              className="py-4 px-8 font-semibold bg-orange-700 rounded-[30px] text-white hover:bg-orange-600 transition duration-300"
            >
              Get Started
            </button>
          </form>
        </div>

        {message && (
          <div className="mt-4 text-base sm:text-lg text-gray-800">
            {message}
          </div>
        )}
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center w-full md:w-1/2 md:order-2 p-4 sm:p-6 md:p-10">
        <img
          src={photo1}
          alt="Hero text"
          className="rounded-image object-cover max-w-full h-auto"
        />
      </div>
    </div>
  );
}

export default Home;
