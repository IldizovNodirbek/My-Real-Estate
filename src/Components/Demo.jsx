import { IoHome } from "react-icons/io5";
import { ImLocation2 } from "react-icons/im";
import { AiFillDollarCircle } from "react-icons/ai";
import EstateVideo from "../Video/EstateVideo.mp4";

function Demo() {
  return (
    <div className="flex flex-col md:flex-row" id="demo">
      {/* Video Section */}
      <div className="w-full md:w-1/2 bg-gray-200 flex flex-col justify-center items-center py-10 md:py-20 px-4">
        <h1 className="font-bold text-3xl sm:text-4xl text-gray-900 text-center mt-4 sm:mt-10">
          Real <span className="text-orange-700">Estate</span> Video
        </h1>
        <div className="mt-6 w-full max-w-[800px] aspect-video rounded-lg overflow-hidden shadow-md">
          <video
            className="w-full h-full object-cover"
            controls
            src={EstateVideo}
          ></video>
        </div>
      </div>

      {/* Info Section */}
      <div className="w-full md:w-1/2 bg-orange-800 flex flex-col justify-center items-center py-10 md:py-20 px-6">
        <div className="text-white text-center md:text-left max-w-xl">
          <h1 className="font-bold text-xl sm:text-2xl">My Real Estate</h1>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-5">
            Why Choose Our Properties?
          </p>

          <div className="mt-6 space-y-6">
            <div className="flex items-start text-left">
              <span className="text-black bg-white w-12 h-12 flex items-center justify-center rounded-full mr-4 shrink-0">
                <IoHome />
              </span>
              <p className="text-base sm:text-lg">
                Spacious and comfortable living spaces
              </p>
            </div>

            <div className="flex items-start text-left">
              <span className="text-black bg-white w-12 h-12 flex items-center justify-center rounded-full mr-4 shrink-0">
                <ImLocation2 />
              </span>
              <p className="text-base sm:text-lg">
                Located in prime areas with excellent infrastructure
              </p>
            </div>

            <div className="flex items-start text-left">
              <span className="text-black bg-white w-12 h-12 flex items-center justify-center rounded-full mr-4 shrink-0">
                <AiFillDollarCircle />
              </span>
              <p className="text-base sm:text-lg">
                Affordable prices and flexible payment plans
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;
