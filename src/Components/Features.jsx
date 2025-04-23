import FeatureProperties from "../EstateDatas/FeaturesDatas";

function Features() {
  return (
    <div
      className="px-4 sm:px-8 md:px-10 py-10 bg-gray-200 min-h-screen"
      id="features"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-justify mt-6 md:mt-10">
        Feature <span className="text-orange-900">Properties</span>
      </h1>

      <p className="mt-3 sm:mt-4 text-gray-600 text-justify text-base sm:text-[18px] max-w-3xl">
        Here are some of our featured properties:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {FeatureProperties.map((property) => (
          <div
            key={property.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-500 hover:scale-105"
          >
            <img
              src={property.image}
              alt={`card-image-${property.id}`}
              className="w-full h-48 sm:h-52 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg text-gray-900">
                {property.address}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                {property.details}
              </p>
              <p className="font-bold text-xl mt-2 text-gray-700 text-[17px] font-serif">
                {property.price}
              </p>
              <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded-xl transition duration-200 hover:bg-orange-600 w-full sm:w-auto">
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
