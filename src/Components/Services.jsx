import React from "react";
import ServicesData from "../EstateDatas/ServicesDatas";

function Sale() {
  return (
    <div
      className="w-full bg-gray-100 py-16 px-4 sm:px-8 md:px-16"
      id="services"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center sm:text-left">
          Our <span className="text-orange-900">Services</span>
        </h1>
        <p className="mt-4 text-gray-600 text-[16px] sm:text-[18px] text-center sm:text-left max-w-2xl">
          We offer many services for our clients. Here are some of our best
          offerings:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {ServicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md hover:shadow-orange-700 transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <img
                src={service.image}
                alt={`card-image-${service.id}`}
                className="w-full h-56 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                  {service.title}
                </h2>
                <p className="text-gray-600 mt-3 text-sm sm:text-base">
                  {service.description}
                </p>
                <button className="mt-6 bg-orange-700 hover:bg-orange-500 text-white py-2 px-4 rounded-lg transition duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sale;
