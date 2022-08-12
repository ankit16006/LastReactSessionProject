
import './App.css';
import RegistrationFormReact from './Component/registration/RegistrationFormReact';
import {Routes, Route} from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';
import Success from './Component/Success';
import Tajmahal from './Content/Tajmahal';
import Footer from './footer/Footer';
import Charminar from './Content/Charminar';
import RedFort from './Content/RedFort';
import Login from './Component/login/Login';
import TableList from './tableList/TableList';


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
      <Route path="tlink" element={<Tajmahal />}/>
      <Route path="chlink" element={<Charminar/>}/>
      <Route path="redlink" element={<RedFort/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="tablelist" element={<TableList/>}/>
     </Routes>
   <Footer />

    </div>
  );
}

export default App;
