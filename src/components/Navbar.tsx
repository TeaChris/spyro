import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { VscMenu } from 'react-icons/vsc'

import { navlinks, Navlinks } from '../../data'
import Button from './Button'
import MobileNav from './MobileNav'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.3,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <motion.nav
      className="w-full h-16 grid place-items-center bg-transparent"
      variants={container}
      initial="hidden"
      animate="visible"
    >
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
              <motion.li key={id} className="" variants={item}>
                <Link
                  className="capitalize text-sm font-semibold transition tracking-wide hover:text-colorOrange"
                  href={path}
                >
                  {name}
                </Link>
              </motion.li>
            )
          })}
        </ul>
        <div className="hidden lg:block">
          <motion.div variants={item}>
            <Button
              text="Contact Us"
              className="w-36 capitalize relative bg-colorOrange text-white py-2 transform skew-x-12"
            />
          </motion.div>
        </div>
        <motion.button
          className="block lg:hidden"
          onClick={handleClick}
          variants={item}
        >
          <VscMenu size={25} className="text-colorOrange" />
        </motion.button>

        {/* mobile nav */}
      </div>
      <div className="block lg:hidden">
        <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </motion.nav>
  )
}
