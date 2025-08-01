import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='h-16 bg-gray-800 text-white flex items-center justify-between px-3'>
        <div className="logo font-bold text-3xl">
            <Link href="/"><li className='list-none'>BitLinks</li></Link>
        </div>
        <ul className='flex items-center justify-center gap-4 '>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/shorten"><li>Shorten</li></Link>
            <Link href="/contact"><li>Contact Us</li></Link>
            <li className='flex gap-2'>
                <Link href="/shorten"><button className='bg-gray-700 shadow-lg rounded-lg p-2 py-1 font-bold'>Try Now</button></Link>
                <Link href="/github"><button className='bg-gray-700 shadow-lg rounded-lg p-2 py-1 font-bold'>GitHub</button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
