import React from 'react';  
import ServicesData from '../EstateDatas/ServicesDatas';  

function Sale() {   

  return (  
    <div className="p-10 bg-gray-200 h-[100vh]">  
      <h1 className="text-5xl font-bold text--900 text-justify">Our <span className='text-orange-900'>Services</span></h1>  
      <p className="mt-4 text-gray-600 text-justify text-[18px]">  
        We offer many services for our clients, Here are some of our services:  
      </p>  

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">  
        {ServicesData.map(service => (  
          <div key={service.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-orange-700">  
            <img src={service.image} alt={`card-image-${service.id}`} className="w-full h-56 object-cover" />  
            <div className="p-4">  
              <h1 className='text-justify text-gray-900 text-2xl font-bold'>{service.title}</h1>  
              <p className='text-gray-700 text-justify mt-4'>{service.description}</p>  
              <button className="mt-7 bg-orange-700 text-white py-2 px-4 rounded-xl transition duration-200 hover:bg-orange-500">  
                Learn More  
              </button>  
            </div>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
}  

export default Sale;