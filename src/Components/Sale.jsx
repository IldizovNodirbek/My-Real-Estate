import SaleProperties from "../EstateDatas/SalesDatas";

function Sale() {   

  return (  
    <div className="p-10 bg-gray-100 h-[100vh]">  
      <h1 className="text-5xl font-bold text--900 text-justify">On Sale <span className='text-orange-900'>Properties</span></h1>  
      <p className="mt-4 text-gray-600 text-justify text-[18px]">  
        We offer a wide selection of on-sale properties that cater to different preferences and budgets. Here are some of our featured properties:  
      </p>  
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">  
        {SaleProperties.map(property => (  
          <div key={property.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-black">  
            <img src={property.image} alt={`card-image-${property.id}`} className="w-full h-56 object-cover" />  
            <div className="p-4">  
              <h2 className="font-semibold text-lg text-gray-900">{property.address}</h2>  
              <p className="text-gray-600">{property.details}</p>  
              <p className="font-bold text-xl mt-5 text-gray-700 font-serif">  
                <span className='line-through'>{property.originalPrice}</span> On Sale Now: {property.salePrice}  
              </p>  
              <button className="mt-7 bg-orange-500 text-white py-2 px-4 rounded-xl transition duration-200 hover:bg-orange-600">  
                View Details  
              </button>  
            </div>  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
}  

export default Sale;