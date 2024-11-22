import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './pages/Landing'
const classes={
  Main:'w-full h-screen bg-zinc-900',
}
const page = () => {
  return (
    <div className={classes.Main}>
      <Navbar/>
          </div>
  )
}

export default page