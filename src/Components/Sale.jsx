import SaleProperties from "../EstateDatas/SalesDatas";

function Sale() {
  return (
    <div
      className="px-4 sm:px-8 md:px-10 py-10 bg-gray-100 min-h-screen mt-[700px] md:mt-0"
      id="sale"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-justify mt-6 md:mt-10">
        On Sale <span className="text-orange-900">Properties</span>
      </h1>

      <p className="mt-3 sm:mt-4 text-gray-600 text-justify text-base sm:text-[18px] max-w-3xl">
        We offer a wide selection of on-sale properties that cater to different
        preferences and budgets. Here are some of our featured properties:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {SaleProperties.map((property) => (
          <div
            key={property.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-black"
          >
            <img
              src={property.image}
              alt={`card-image-${property.id}`}
              className="w-full h-56 sm:h-60 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg text-gray-900">
                {property.address}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                {property.details}
              </p>
              <p className="font-bold text-xl mt-5 text-gray-700 font-serif">
                <span className="line-through">{property.originalPrice}</span>{" "}
                On Sale Now: {property.salePrice}
              </p>
              <button className="mt-6 sm:mt-7 bg-orange-500 text-white py-2 px-4 rounded-xl transition duration-200 hover:bg-orange-600 w-full sm:w-auto">
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
