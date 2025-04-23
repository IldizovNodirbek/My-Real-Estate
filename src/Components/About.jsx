import React from "react";
import photo2 from "../Images/photo-2.jpg";

function About() {
  return (
    <div
      className="flex flex-col md:flex-row min-h-screen items-center justify-center bg-gray-100"
      id="about"
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-auto md:h-[620px] bg-orange-800 flex justify-center items-center mt-32 md:mt-0 px-4 sm:px-10 py-10 md:py-0">
        <img
          className="rounded-image-2 w-full max-w-[90%] md:mt-20 object-cover"
          src={photo2}
          alt="hero-text-2"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 p-6 sm:p-10 text-justify">
        <h1 className="font-bold text-orange-900 text-4xl sm:text-5xl">
          About Us
        </h1>

        <p className="text-base sm:text-[20px] text-gray-600 mt-6 sm:mt-10">
          Welcome to my premier real estate agency, where our mission is to
          provide exceptional service and expertise to help our clients achieve
          their real estate goals. With years of experience in the industry, our
          team of dedicated professionals has built a reputation for excellence
          and integrity.
        </p>

        <p className="text-base sm:text-[20px] text-gray-600 mt-6 sm:mt-10">
          We are committed to staying up-to-date with the latest trends and
          technologies in the real estate market, and we use our knowledge and
          expertise to guide our clients through the buying and selling process
          with confidence.
        </p>
      </div>
    </div>
  );
}

export default About;
