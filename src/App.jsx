import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Header from './Components/Header';  
import Home from './Components/Home';  
import About from './Components/About';  
import Features from './Components/Features';  
import Sale from './Components/Sale';  
import Demo from './Components/Demo';  
import Services from './Components/Services';   
import Clients from './Components/Clients';  
import Contact from './Components/Contact';

function App() {  
  return (  
    <Router>  
      <div>  
        <Header />  
        <div className="min-h-screen">  
          <Routes>  
            <Route path="home" element={<Home />} />  
            <Route path="about us" element={<About />} />  
            <Route path="our features" element={<Features />} />  
            <Route path="on sale" element={<Sale />} />  
            <Route path="demo" element={<Demo />} />  
            <Route path="our services" element={<Services />} />  
            <Route path="our clients" element={<Clients />} /> 
            <Route path="/contact" element={<Contact />} />   
            <Route path="/" element={<Home />} />   
          </Routes>  
        </div>  
      </div>  
    </Router>  
  );  
}  

export default App;