import React, { useState } from 'react';  
import photo1 from '../Images/photo-1.webp';  

function Home() {  
  const [inputValue, setInputValue] = useState('');  

  const handleInputChange = (e) => {  
    setInputValue(e.target.value);  
  };  

  const handleButtonClick = () => {  
    alert("Your email has been successfully submitted!");  
  };  

  return (  
    <div className="flex flex-col items-start justify-start h-screen bg-gray-300 md:flex-row md:justify-between">  
      <div className="flex flex-col items-start justify-center md:w-1/2 p-10 md:p-5">  
        <h1 className="text-5xl font-bold text-gray-800 mb-4 mt-36 ml-4 md:ml-28">Find Your <span className='text-orange-900'>Dream Home</span></h1>  
        <p className="text-lg text-gray-600 mb-6 ml-4 md:ml-28 text-justify max-w-xl">  
          Welcome to our real estate agency, where finding your dream home is our top priority. Our team of experienced agents is dedicated to providing exceptional service and helping you navigate the complex process of buying or selling a property.  
        </p>  
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 ml-4 md:ml-28">  
          <form onSubmit={handleButtonClick} className="flex items-center w-full">   
            <input  
              type="email"  
              value={inputValue}  
              onChange={handleInputChange}  
              className="p-3 border border-gray-300 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-orange-500 w-full"  
              placeholder="Your Email"  
            />  
            <button  
              type="submit"  
              className="py-4 px-8 font-semibold bg-orange-700 rounded-[30px] text-white hover:bg-orange-600 ml-4"  
            >  
              Get  Started  
            </button>   
          </form>   
        </div>  
      </div>  
      <div className='flex justify-center items-center w-full md:w-1/2'>  
        <img  
          src={photo1}   
          alt="Hero text"  
          className="rounded-image object-cover mt-20 mr-20 max-w-full h-auto md:max-w-xl md:h-auto"  
        />  
      </div>  
    </div>  
  );  
}  

export default Home;
