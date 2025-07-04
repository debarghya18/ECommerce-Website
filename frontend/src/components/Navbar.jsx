import React, { useState } from 'react'
import {assets} from '../assets/assets.js'
import { Link, NavLink } from 'react-router-dom'
const Navbar=()=>{
    const [visible,setVisible]=useState(false);
  return(
    <div className='flex items-center justify-between py5 font-medium'>
        <img src={assets.logo} className='w-36' alt=''/>
        <ul className='hidden sm:flex gap-5 text-sm text: gray-700'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg: gray-700 hidden'/>
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>Collection</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>About</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>Contact</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-6'>
            <img src={assets.search_icon} className='w-5 cursor-pointer' alt=''/>
            <div className='group relative'>
                <img src={assets.profile_icon} className='w-5 cursor-pointer' alt=''/>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flexcol gap-2 w-36 py-3 px-5 bg-slate-100 text: gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p><br></br>
                        <p className='cursor-pointer hover:text-black'>Orders</p><br></br>
                        <p className='cursor-pointer hover:text-black'>Log Out</p><br></br>
                    </div>
                </div>
            </div>
            <Link to='/cart' className='relative'>
                <img src={assets.cart_icon} className='w-5 min-w-5'/>
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 background-color: black text-white aspect-square rounded-full text-[8px]'>1</p>
            </Link>
            <img src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' onClick={()=>setVisible(true)}/>
        </div>
        {/*sidebar menu for small screen*/}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible? 'w-full':'w-0'}`}>
            <div className='flex flex-col text: gray-600'>
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 px-3 cursor-pointer'>
                    <img src={assets.dropdown_icon} className='h-4 rotate-180'/>
                    <p>Back</p>
                </div>
                <NavLink to='/' className='py-2 pl-6 border' onClick={()=>setVisible(false)}>Home</NavLink>
                <NavLink to='/collection' className='py-2 pl-6 border' onClick={()=>setVisible(false)}>Collection</NavLink>
                <NavLink to='/about' className='py-2 pl-6 border' onClick={()=>setVisible(false)}>About</NavLink>
                <NavLink to='/contact' className='py-2 pl-6 border' onClick={()=>setVisible(false)}>Contact</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar