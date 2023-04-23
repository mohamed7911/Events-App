import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header>
      <div className="topNav">
        <div>
        <Image width={50} height={50} src="/images/logo_black.png" alt='logo'/>
        </div>
        <nav className='nav-links'>
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/about-us">About Us</Link>
        </nav>
      </div>
      <h1 className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>

    </header>
  )
}

export default Header