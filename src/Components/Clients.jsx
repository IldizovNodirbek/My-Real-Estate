import React from 'react';  
import ClientsData from '../EstateDatas/ClientsDatas';
  
function Clients() {
  return (  
    <div className="p-10 bg-gray-100 h-[100vh] mt-[1000px] md:mt-0" id="clients">  
      <h1 className="text-4xl font-bold text-900 text-center mt-10">Our Clients</h1>  
      <p className="mt-4 text-gray-600 text-center text-[18px]">See what our clients have to say about us</p>  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">  
        {ClientsData.map(client => (  
          <div key={client.id} className="bg-white shadow-lg rounded-lg overflow-hidden">  
            <img src={client.image} alt={`card-image-${client.id}`} className="w-[100px] h-[100px] rounded-full object-cover mt-3 ml-3"/>  
            <div className="p-4">  
              <p className='text-gray-600 font-sans text-[18px] text-justify'>" {client.feedback} "</p>  
              <p className='text-gray-500 text-[17px] mt-5'>{client.name}, {client.role}</p>  
            </div>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
}


export default Clients;
