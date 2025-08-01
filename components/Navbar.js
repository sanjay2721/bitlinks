'use client'
import React,{ useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='h-16 bg-gray-800 text-white flex items-center justify-between px-3'>
        <div className="logo font-bold md:text-3xl">
            <Link href="/"><li className='list-none'>BitLinks</li></Link>
        </div>
        <ul className='hidden md:flex items-center gap-4 text-sm md:text-base'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/shorten"><li>Shorten</li></Link>
            <Link href="/contact"><li>Contact Us</li></Link>
            <li className='flex gap-2'>
                <Link href="/shorten"><button className='bg-gray-700 shadow-lg rounded-lg p-2 py-1 font-bold'>Try Now</button></Link>
                <Link href="/github"><button className='bg-gray-700 shadow-lg rounded-lg p-2 py-1 font-bold'>GitHub</button></Link>
            </li>
        </ul>
        {/* Mobile Options Button */}
      <div className="md:hidden relative">
        <button
          className="bg-gray-700 rounded px-3 py-1 text-sm"
          onClick={() => setShowMenu(!showMenu)}
        >
          <span className="text-2xl">☰</span>
        </button>

        {/* Mobile Menu Dropdown */}
        {showMenu && (
          <ul className="absolute right-0 mt-2 w-40 bg-gray-700 rounded-lg p-2 shadow-lg z-10">
            <li className="py-1 px-2 hover:bg-gray-600 rounded"><Link href="/">Home</Link></li>
            <li className="py-1 px-2 hover:bg-gray-600 rounded"><Link href="/about">About</Link></li>
            <li className="py-1 px-2 hover:bg-gray-600 rounded"><Link href="/shorten">Shorten</Link></li>
            <li className="py-1 px-2 hover:bg-gray-600 rounded"><Link href="/contact">Contact</Link></li>
            <li className="py-1 px-2 hover:bg-gray-600 rounded"><Link href="/shorten">Try Now</Link></li>
            <li className="py-1 px-2 hover:bg-gray-600 rounded"><Link href="/github">GitHub</Link></li>
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar
