import React from 'react';  
import photo2 from "../Images/photo-2.jpg";  

function About() {  
  return (  
    <div className='flex flex-col md:flex-row min-h-screen items-center justify-center h-auto bg-gray-100' id="about">  
      <div className='md:w-1/2 w-full h-[620px] bg-orange-800 flex justify-center items-center mt-[570px] md:mt-0'>   
        <img className='rounded-image-2 w-[90%] mt-20' src={photo2} alt="hero-text-2" />  
      </div>  
      <div className='md:w-1/2 w-full p-10 text-justify'>  
        <h1 className='font-bold text-orange-900 text-5xl'>About Us</h1>  
        <p className='text-[20px] text-gray-600 mt-10'>  
          Welcome to my premier real estate agency, where our mission is to provide exceptional service and expertise to help our clients achieve their real estate goals. With years of experience in the industry, our team of dedicated professionals has built a reputation for excellence and integrity.  
        </p>  
        <p className='text-[20px] text-gray-600 mt-10'>  
          We are committed to staying up-to-date with the latest trends and technologies in the real estate market, and we use our knowledge and expertise to guide our clients through the buying and selling process with confidence.  
        </p>  
      </div>  
    </div>  
  );  
}  

export default About;
