'use client' //we use cliente becasue we fetch data and use react hooks

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Nav = () => {
  const isUserLoggedIn = true; // is it login?

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href="/" className='flex gap-2 flex-center'> {/*This link will take us to the home page and will be shaerd acrross all web */}
        <Image 
            src={"/icons/logo.png"}
            alt="Logo"
            width={30}
            height={30}
            className='object-contain logo'
            />
            <p className='logo_text'>Promptopia</p> {/* This is the name of the company and will hide on small devices */}
      </Link>
      {/*Desktop Navigation*/ }
      <div className='sm:flex hidden'>
        {/*uses a condition to render depending on the user status */}
        {isUserLoggedIn ? ( 
          <div className='flex gap-3 md:gap-5'>
            <Link href={"/create-prompt"}
              className='black_btn'>
              Create Post
            </Link>
          </div>
        ):(
          <>
          </>
        )}
      </div>

    </nav>
  )
}

export default Nav