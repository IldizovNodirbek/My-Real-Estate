import React from "react";
import ClientsData from "../EstateDatas/ClientsDatas";

function Clients() {
  return (
    <div
      className="w-full bg-gray-100 py-16 px-4 sm:px-8 md:px-16"
      id="clients"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center">
          Our <span className="text-orange-900">Clients</span>
        </h1>
        <p className="mt-4 text-gray-600 text-[16px] sm:text-[18px] text-center max-w-2xl mx-auto">
          See what our clients have to say about us
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {ClientsData.map((client) => (
            <div
              key={client.id}
              className="bg-white rounded-xl shadow-md hover:shadow-orange-700 transition-shadow duration-300 p-6 flex flex-col items-center text-center"
            >
              <img
                src={client.image}
                alt={`client-${client.id}`}
                className="w-[100px] h-[100px] rounded-full object-cover mb-4"
              />
              <p className="text-gray-600 text-[16px] sm:text-[17px] font-sans leading-relaxed">
                “{client.feedback}”
              </p>
              <p className="text-gray-500 text-[15px] sm:text-[16px] font-medium mt-4">
                {client.name},{" "}
                <span className="text-gray-400">{client.role}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Clients;
