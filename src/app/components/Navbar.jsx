import React from 'react'
const classes = {
  NavContainer:'fixed z-[999]   w-full  flex  justify-center items-center p-4  ',  
  Navbar:'xl:w-[50%] w-[80%] bg-white h-12 mb-8 rounded-full flex justify-between items-center',
}

const Navbar = () => {
  return (
    <div className={classes.NavContainer}>
      <div className={classes.Navbar}></div>

    </div>
  )
}

export default Navbar