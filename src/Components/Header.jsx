import React, { useState } from 'react';  
import { NavLink } from 'react-router-dom';  
import { RxHamburgerMenu } from "react-icons/rx";  
import { RiDeleteBack2Fill } from "react-icons/ri";  

function Header() {  
  const [isOpen, setIsOpen] = useState(false);  

  const toggleMenu = () => {  
    setIsOpen(prevState => !prevState);  
  };  

  return (  
    <div className="container mx-auto">  
      <header className='bg-white shadow-lg py-5 flex flex-col md:flex-row md:justify-between items-center px-5'>  
        <h1 className='text-3xl md:text-4xl font-sans text-orange-700'>My Real Estate</h1>  
        <nav className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} md:block`}>  
          <ul className='flex flex-col md:flex-row md:flex-nowrap space-y-2 md:space-y-0 md:space-x-6 text-[20px]'>  
            {['home', 'about us', 'our features', 'on sale', 'our services', 'demo', 'our clients'].map((item) => (  
              <li key={item}>  
                <NavLink   
                  to={item}   
                  className='relative text-gray-800 font-sans group'   
                  onClick={() => setIsOpen(false)}  
                >  
                  {item.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}  
                  <span className='absolute left-0 right-0 bottom-0 h-[2px] bg-red-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100'></span>  
                </NavLink>  
              </li>  
            ))}  
          </ul>  
        </nav>  
        <NavLink   
          to="/contact"   
          className='py-[10px] px-[20px] bg-orange-700 border border-transparent rounded-lg text-lg text-white hover:bg-white transition-transform duration-500 hover:scale-125 hover:text-black hover:border-orange-700'   
          onClick={() => setIsOpen(false)}  
        >  
          Contact Us  
        </NavLink> 
        <button onClick={toggleMenu} className="md:hidden text-gray-800">  
          {isOpen ? <RiDeleteBack2Fill size={24} /> : <RxHamburgerMenu size={24} />}  
        </button>  
      </header>  
    </div>  
  );  
}  

export default Header;