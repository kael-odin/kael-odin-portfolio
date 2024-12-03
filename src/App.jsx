import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ContactMe from './pages/ContactMe';
import AbouteMe from './pages/AbouteMe';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Projects from './pages/Projects';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/contactme" element= {<ContactMe/>}/>
      <Route path="/aboutme" element= {<AbouteMe/>}/>
      <Route path="/projects" element= {<Projects/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;