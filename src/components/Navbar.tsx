'use client'

import Link from 'next/link'
import { useState } from 'react'

import { VscMenu } from 'react-icons/vsc'

import { navlinks, Navlinks } from '../../data'
import Button from './Button'
import MobileNav from './MobileNav'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="w-full h-16 grid place-items-center bg-transparent">
      <div className="w-sm md:w-md lg:w-lg mx-auto flex items-center justify-between">
        {/* logo */}
        <div className="w-fit h-fit">
          <h1 className="text-3xl font-extrabold text-colorOrange">SPYRO</h1>
        </div>
        {/* links */}
        <ul className="hidden lg:flex items-center gap-12">
          {navlinks.map((link: Navlinks) => {
            const { id, name, path } = link
            return (
              <li key={id} className="">
                <Link
                  className="capitalize text-sm font-semibold transition tracking-wide hover:text-colorOrange"
                  href={path}
                >
                  {name}
                </Link>
              </li>
            )
          })}
        </ul>
        <div className="hidden lg:block">
          <Button text='Contact Us' className='w-36 capitalize relative bg-colorOrange text-white py-2 transform skew-x-12'/>
        </div>
        <button className="block lg:hidden" onClick={handleClick}>
          <VscMenu size={25} className="text-colorOrange" />
        </button>

        {/* mobile nav */}
      </div>
      <div className="block lg:hidden">
        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  )
}
