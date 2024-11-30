import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {Hero} from './components/Hero'
import Aboutme from './components/Aboutme'
import Projects from './components/projects'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Aboutme/>
      <Projects/>
    </>
  )
}

export default App
