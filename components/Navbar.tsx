import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='text-white flex items-center justify-between md:justify-around w-full p-12'>
            <h3 className='text-[24px] font-bold'>Business Name</h3>
            <ul className='hidden md:flex gap-6'>
                <li>Home</li>
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
            <div className="flex md:hidden">
                <Image src="/icons/hamburger-menu.svg" width={48} height={48} alt="Hamburger Menu" />
            </div>
        </nav>
    )
}

export default Navbar