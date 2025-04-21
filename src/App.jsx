import React from 'react'
import NavBar from './Components/NavBar.jsx'
import Home from './Components/Home.jsx'
import AboutMe from './Components/AboutMe.jsx'
import './App.css'

function App() {

  return (
    <>
    <div className='section'>
      <NavBar/>
      <Home/>
    </div>
    <div className='section' >
      <AboutMe/>
      Hi
    </div>
    <div className='section'>
      port
    </div>
    <div className='section'>
      HI
    </div>
    </>
  )
}

export default App
