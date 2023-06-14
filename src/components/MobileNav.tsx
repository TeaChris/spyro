import { ReactNode, Dispatch, SetStateAction } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Navlinks, navlinks } from '../../data'
import { motion } from 'framer-motion'
import { GrClose } from 'react-icons/gr'

type MobileNavProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, setIsOpen }) => {
  const pathname = usePathname()

  // open and close navigation
  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  // close navigation on link click
  const handleClose = () => {
    setIsOpen(false)
  }

  // framer variant
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '100%' },
  }

  return (
    <motion.div
      className="w-56 h-[25rem] py-8 px-8 flex flex-col items-start top-0 right-0 absolute bg-colorOrange shadow-sm shadow-black"
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
    >
      <button
        className="grid place-items-center bg-gray w-8 h-8 rounded-sm right-8 top-4 absolute"
        onClick={handleOpen}
      >
        <GrClose size={25} style={{ color: '#ff4300' }} />
      </button>
      <div className="flex flex-col items-start gap-8">
        <ul className="flex flex-col items-start gap-8 pt-16">
          {navlinks.map((links: Navlinks) => {
            const { id, name, path } = links
            const isActive = pathname.startsWith(path)
            return (
              <motion.li key={id} className="" variants={variants}>
                <Link
                  href={path}
                  className={`text-white text-lg font-bold capitalize text-gray hover:text-colorOragne duration-300 ease-in-out ${
                    isActive ? 'text-white' : ''
                  }`}
                  onClick={handleClose}
                >
                  {name}
                </Link>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </motion.div>
  )
}

export default MobileNav
