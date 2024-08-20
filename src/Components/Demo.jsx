import { IoHome } from "react-icons/io5";  
import { ImLocation2 } from "react-icons/im";  
import { AiFillDollarCircle } from "react-icons/ai";  
// Video import
import EstateVideo from "../Video/EstateVideo.mp4"

function Demo() {  
  return (  
    <div className="flex flex-col md:flex-row">  
      <div className="md:w-1/2 w-full h-[50vh] md:h-[100vh] sm:h-auto bg-gray-200 flex flex-col justify-center items-center">  
        <h1 className="font-bold text-3xl md:text-4xl text-gray-900 text-center mt-16 md:mt-32 sm:mt-44">  
          Real <span className="text-orange-700">Estate</span> Video  
        </h1> 
        <div className="mt-4 md:mt-8 sm:mt-10 w-full h-full flex justify-center items-center mb-36">  
         <div className="w-[90%] md:w-[80%] h-full">
         <video  
            className="w-full h-full"  
            controls  
            src={EstateVideo}  
          > 
          </video>  
         </div>
        </div>  
      </div>  
      <div className="md:w-1/2 w-full h-[50vh] md:h-[100vh] bg-orange-800 flex flex-col justify-center items-center">  
        <div className="text-white mx-auto text-center p-4 md:p-0">  
          <h1 className="font-bold text-xl md:text-2xl text-justify">My Real Estate</h1>  
          <p className="text-2xl md:text-4xl font-bold mt-5">Why Choose Our Properties?</p>  
          <p className="text-lg mt-5 flex items-center text-left">  
            <span className="text-black bg-white w-[50px] h-[50px] flex items-center justify-center rounded-full mr-3">  
              <IoHome />  
            </span>  
            Spacious and comfortable living spaces  
          </p>  
          <p className="text-lg mt-5 flex items-center text-left">  
            <span className="text-black bg-white w-[50px] h-[50px] flex items-center justify-center rounded-full mr-3">  
              <ImLocation2 />  
            </span>  
            Located in prime areas with excellent infrastructure  
          </p>  
          <p className="text-lg mt-5 flex items-center text-left">  
            <span className="text-black bg-white w-[50px] h-[50px] flex items-center justify-center rounded-full mr-3">  
              <AiFillDollarCircle />  
            </span>  
            Affordable prices and flexible payment plans  
          </p>  
        </div>  
      </div>  
    </div>  
  );  
}  

export default Demo;