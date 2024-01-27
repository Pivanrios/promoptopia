'use client' //we use cliente becasue we fetch data and use react hooks

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'



const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false)

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href="/" className='flex gap-2 flex-center'> {/*This link will take us to the home page and will be shaerd acrross all web */}
        <Image 
            src={"/icons/peter.png"}
            alt="Logo"
            width={30}
            height={30}
            className='object-contain logo'
            />
            <p className='logo_text'>Lunche</p> {/* This is the name of the company and will hide on small devices */}
      </Link>
      {/*---------------------Desktop Navigation----------------------*/ }
      <div className='sm:flex hidden'>
        {/*uses a condition to render depending on the user status */}
          <div className='flex gap-3 md:gap-5'>
            <ul 
                className='flex gap-4 md:gap-5'>
              <Link href={"/menu"}>Menu</Link>
              <Link href={"/schedule"}>Schedule</Link>
              <Link href={"/about-us"}>About Us</Link>
            </ul>
          </div>
      </div>
      {/*-----------------------------Mobile navigation----------------------------- */}
      <div className='sm:hidden flex relative'>
        
          <div className='flex'>
            <Image
                src={"/icons/peter.png"}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
                onClick={()=>{setToggleDropdown((prev)=> !prev)}}/>
                {toggleDropdown && (
                  <div className='dropdown'>
                    <Link href={"/menu"}
                          className='dropdown_link'
                          onClick={()=>{setToggleDropdown(false)}}>
                      Menu
                    </Link>
                    <Link href={"/schedule"}
                          className='dropdown_link'
                          onClick={()=>{setToggleDropdown(false)}}>
                    Schedule
                    </Link>
                    <Link href={"/about-us"}
                          className='dropdown_link'
                          onClick={()=>{setToggleDropdown(false)}}>
                    About Us
                    </Link>
                    <button
                      type='button'
                      onClick={() => {
                        setToggleDropdown(false)
                        signOut();
                        }}
                      className='mt-5 w-full black_btn'>
                        Order Now
                    </button>
                  </div>
                )}
          </div>

      </div>

    </nav>
  )
}

export default Nav