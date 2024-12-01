import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {Hero} from './components/Hero';
import Aboutme from './components/Aboutme';
import Projects from './components/projects';
import TechStack from './components/TechStack';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Aboutme/>
      <Projects/>
      <TechStack/>
      <Footer/>
    </>
  )
}

export default App
