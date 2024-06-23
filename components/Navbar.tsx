import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='text-white flex items-center justify-between md:justify-around w-full py-12 px-4'>
            <div className='md:w-1/6 flex justify-start'>
                <h3 className='text-[24px] font-bold'>Business Name</h3>
            </div>
            <ul className='hidden md:flex gap-6 md:w-1/6 justify-center'>
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
            <div className='md:w-1/6 md:flex justify-end hidden'>
                <Image src="/icons/language.svg" width={42} height={42} alt="Language" />
            </div>

            <div className="flex md:hidden">
                <Image src="/icons/hamburger-menu.svg" width={48} height={48} alt="Hamburger Menu" />
            </div>
        </nav>
    )
}

export default Navbar