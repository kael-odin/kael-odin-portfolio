import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {Hero} from './components/Hero'
import Aboutme from './components/Aboutme'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <Aboutme/>
    {/* <SocialIcons/> */}
    </>
  )
}

export default App
