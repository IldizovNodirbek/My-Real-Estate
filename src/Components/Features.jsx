import FeatureProperties from "../EstateDatas/FeaturesDatas";

function Features() {
  return (  
    <div className="p-10 bg-gray-200 h-[100vh]" id="features">  
      <h1 className="text-5xl font-bold text-900 text-justify mt-10">Feature <span className='text-orange-900'>Properties</span></h1>  
      <p className="mt-4 text-gray-600 text-justify text-[18px]">Here are some of our featured properties:</p>  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">  
        {FeatureProperties.map(property => (  
          <div key={property.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">  
            <img src={property.image} alt={`card-image-${property.id}`} className="w-full h-48 object-cover" />  
            <div className="p-4">  
              <h2 className="font-semibold text-lg text-gray-900">{property.address}</h2>  
              <p className="text-gray-600">{property.details}</p>  
              <p className="font-bold text-xl mt-2 text-gray-700 text-[17px] font-serif">{property.price}</p>  
              <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-xl transition duration-200 hover:bg-orange-600">  
                View Details  
              </button>  
            </div>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
}

export default Features;
