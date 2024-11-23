import React from 'react'
import Navbar from './components/Navbar'
import Landing from './pages/landing'

const classes={
  Main:'w-full h-screen bg-black',
}
const page = () => {
  return (
    <div className={classes.Main}>
      <Navbar/>
      <Landing/>
          </div>
  )
}

export default page