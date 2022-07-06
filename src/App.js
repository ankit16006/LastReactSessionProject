
import './App.css';
import RegistrationFormReact from './RegistrationFormReact';
import {Routes, Route} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Success from './Success';


function App() {
  return (
    <div className="App">
     {/* <RegistrationFormReact /> */}
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="register" element={<RegistrationFormReact />} />
      <Route path="success" element={<Success />} />
     </Routes>

    </div>
  );
}

export default App;
