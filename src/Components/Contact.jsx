import React from 'react';  
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';  

const Contact = () => {  
  return (  
    <div className="container mx-auto p-5 bg-gray-100">  
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Contact Us</h1>  
      <p className="text-lg text-gray-600 mb-8 mx-auto max-w-md text-center">  
        If you have any questions or would like to schedule a consultation with one of our real estate experts, please don't hesitate to contact us.  
      </p>  
      <div className="flex flex-col md:flex-row md:space-x-10">    
        <div className="flex-1 mb-8 px-5">  
          <div className="mb-6 flex items-center">  
            <FaMapMarkerAlt size={24} className="text-orange-600" />  
            <span className="ml-2 text-gray-700">(123) 1234 Main St, Anytown USA 12345</span>  
          </div>  
          <div className="mb-6 flex items-center">  
            <FaPhoneAlt size={24} className="text-orange-600" />  
            <span className="ml-2 text-gray-700">(123) 456-7890</span>  
          </div>  
          <div className="mb-6 flex items-center">  
            <FaEnvelope size={24} className="text-orange-600" />  
            <span className="ml-2 text-gray-700">info@example.com</span>  
          </div>  
        </div>  
        <div className="flex-1 px-5">  
          <form className="space-y-4">  
            <div>  
              <label className="block text-gray-700 text-lg" htmlFor="name">Name</label>  
              <input type="text" id="name" className="border border-orange-500 rounded-lg w-full p-3" required />  
            </div>  
            <div>  
              <label className="block text-gray-700 text-lg" htmlFor="email">Email</label>  
              <input type="email" id="email" className="border border-orange-500 rounded-lg w-full p-3" required />  
            </div>  
            <div>  
              <label className="block text-gray-700 text-lg" htmlFor="phone">Phone</label>  
              <input type="number" id="phone" className="border border-orange-500 rounded-lg w-full p-3" required />  
            </div>  
            <div>  
              <label className="block text-gray-700 text-lg" htmlFor="message">Message</label>  
              <textarea id="message" className="border border-orange-500 rounded-lg w-full p-2" rows="5" required></textarea>  
            </div>  
            <button type="submit" className="bg-orange-800 hover:bg-orange-500 text-white text-lg font-bold py-3 px-7 rounded-lg w-full">  
              Send Message  
            </button>  
          </form>  
        </div>  
      </div>  
      <footer className="mt-20 bg-orange-700 px-3 py-6 text-white">  
        <div className="flex flex-col md:flex-row justify-center gap-10 mb-6">  
          <h2 className="text-2xl font-bold">Real Estate Company</h2>  
          <div className="space-x-4 text-[18px] text-center md:text-left">  
            <span className='hover:cursor-pointer hover:text-gray-400'>Home</span>  
            <span className='hover:cursor-pointer hover:text-gray-400'>Features</span>  
            <span className='hover:cursor-pointer hover:text-gray-400'>Clients</span>  
            <span className='hover:cursor-pointer hover:text-gray-400'>About Us</span>  
            <span className='hover:cursor-pointer hover:text-gray-400'>Contact Us</span>  
          </div>  
        </div>  
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-36 mb-6">  
          <div className="flex-1 text-center md:text-left">  
            <h3 className="text-[18px] font-bold">About Us</h3>  
            <p className="text-white text-justify mx-auto max-w-md mt-2">  
              Real Estate Company is a leading provider of real estate services, with a focus on delivering exceptional value to our clients. Our team of experts has deep industry knowledge and a proven track record of success.  
            </p>  
          </div>  
          <div className="flex-1 text-center md:text-left">  
            <h3 className="text-[18px] font-bold">Services</h3>  
            <ul className="mt-2">  
              <li className='hover:text-gray-800 hover:cursor-pointer'>Residential Real Estate</li>  
              <li className='hover:text-gray-800 hover:cursor-pointer'>Commercial Real Estate</li>  
              <li className='hover:text-gray-800 hover:cursor-pointer'>Property Management</li>  
              <li className='hover:text-gray-800 hover:cursor-pointer'>Real Estate Investing</li>  
            </ul>  
          </div>  
          <div className="flex-1 text-center md:text-left">  
            <h3 className="text-[18px] font-bold">Social Links</h3>  
            <ul className="mt-2">  
              <li className='hover:cursor-pointer hover:text-gray-800'>Facebook</li>  
              <li className='hover:cursor-pointer hover:text-gray-800'>Instagram</li>  
              <li className='hover:cursor-pointer hover:text-gray-800'>LinkedIn</li>  
            </ul>  
          </div>  
        </div>  
        <h1 className='text-center text-[18px]'> © 2024 Real Estate Company. All rights reserved.</h1>  
      </footer>  
    </div>  
  );  
};  

export default Contact;
