import { BrowserRouter as Router } from 'react-router-dom';  
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
            <div id="home"><Home /></div>  
            <div id="about"><About/></div>  
            <div id="features"><Features/></div>  
            <div id="sale"><Sale /></div>  
            <div id="demo"><Demo /></div>  
            <div id="services"><Services/></div>  
            <div id="clients"><Clients/></div>  
            <div id="contact"><Contact/></div>  
        </div>  
      </div>  
    </Router>  
  );  
}  

export default App;
