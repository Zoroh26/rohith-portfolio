'use client';

import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';

const classes = {
  NavContainer: 'fixed z-[100] w-full flex justify-center items-center p-2',
  Navbar: 'w-full 2xl:max-w-[1200px] p-4 xl:px-16 backdrop-blur-md  rounded-full flex justify-between items-center',
  logo: 'w-8 h-8 bg-white xl:ml-8  rounded-full ',
  logo2: 'w-8 h-8 bg-black rounded-full',
  links: 'flex items-center gap-3 hidden text-white sm:flex text-4 px-2',
  DrawerContents: 'flex flex-col',
  DrawerHead: 'flex justify-between items-center -mt-2 p-6 px-6',
  DrawerListLinks: 'flex flex-col items-center mt-32 justify-center px-[16px] gap-4 mt-8',
  DrawerCloseButton:'text-black  mb-4'
};
const navItems = [{name:'Blog',link:'/blog'},{name:'About',link:'/about'},{name:'Projects',link:'/projects'},{name:'Contact',link:'/contact'}];
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.NavContainer}>
      <div className={classes.Navbar}>
        <div className="flex items-center">
          <a href='/'><div className={classes.logo}></div></a>
          
        </div>
        <div className={classes.links}>
          {navItems.map((item,index) => (
            <div key={index} className='bg-slate-100  rounded-[50%]' >
              <div className='bg-black border h-[2.1rem] w-[6.5rem] rounded-[50%] flex justify-center items-center transition-transform ease-in-out hover:-translate-x-[2px] hover:-translate-y-[4px]'>
              <a href={item.link} className="text-white p-2  ">
                {item.name}
              </a>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handleDrawerToggle}
          className="block sm:hidden text-white"
        >
          <MenuIcon />
        </button>
      </div>
      <div
        className={`fixed inset-0 bg-opacity-50  z-50 delay-50 transition-transform  transform ${
          mobileOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        onClick={handleDrawerToggle}
      >
        <div
          className="w-full bg-slate-100  h-full p-4 transition-transform ease-in transform"
          onClick={(e) => e.stopPropagation()}
        >
          <div className={classes.DrawerContents}>
            <div className={classes.DrawerHead}>
              <div className={classes.logo2}></div>
          <button
            onClick={handleDrawerToggle}
            className={classes.DrawerCloseButton}>
            <CloseIcon className='mt-2'/>
          </button>
          </div>
          <Divider varient="middle" color='black' className='opacity-50'/>
          <div className={classes.DrawerListLinks}>
          {navItems.map((item,index) => (
           <div key={index} className='bg-slate-100  rounded-[50%]' >
           <div className='bg-zinc-900 border h-[2.1rem] w-[6.5rem] rounded-[50%] flex justify-center items-center transition-transform ease-in-out hover:-translate-x-[2px] hover:-translate-y-[3px]'>
           <a href={item.link} className="text-white p-2  ">
             {item.name}
           </a>
           </div>
         </div>
          ))}
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;