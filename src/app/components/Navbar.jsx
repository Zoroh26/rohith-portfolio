'use client';
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
const classes = {
  NavContainer:'fixed z-[999] w-full  flex  justify-center items-center p-8  ',  
  Navbar:'xl:w-[50%] sm:w-[90%] w-[95%] bg-`white/3 p-4 blur-backdrop mb-8 rounded-full flex justify-between items-center',
  logo:'w-8 h-8 bg-white rounded-full',
  links:'flex items-center gap-8 hidden  text-white  sm:flex text-lg font-semibold',
  menu:''
}
const links = [
 
  {name:'About',link:'/about'},
  {name:'Blog',link:'/blog'},
  {name:'Projects',link:'/projects'},
  {name:'Contact',link:'/contact'},]
const Navbar = () => {
  return (
  <div className={classes.NavContainer}>
      <div className={classes.Navbar}>
        <a href ='/'><div className={classes.logo}></div></a>
        <div className={classes.links}>
          {links.map((link,index)=>(
            <a href={link.link} key={index} className={classes.links}>{link.name}</a>
          ))}

        </div>
        <div className={classes.menu}><MenuIcon/></div>
        
      </div>

          </div>
  )
}

export default Navbar