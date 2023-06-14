'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import fit from '../images/fit.png'

export default function Fit() {
  return (
    <motion.section
      className="w-full h-[35rem] py-8 relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-sm md:w-md lg:w-lg mx-auto flex flex-col items-center gap-8">
        <motion.h4
          className="text-3xl lg:text-4xl capitalize"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          fit for your lifestyle
        </motion.h4>
        <div className="w-full lg:w-[60%] h-fit grid place-items-center">
          <motion.p
            className="text-sm text-center lg:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Wake up with a sunrise meditation, sweat it out with lunchtime HIIT,
            or unwind with an evening flow. You’ll find movement for every mood
            with classes sorted by time, style, and skill level.
          </motion.p>
        </div>

        {/* image */}
        <motion.div
          className="w-96 h-28 bg-colorOrange rounded-t-lg px-2 py-2 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Image src={fit} alt="bottom-1 left-1 absolute" />
        </motion.div>
      </div>

      {/* background */}
      <div className="w-60 h-16 bg-colorOrangeDark opacity-10 bottom-32 right-0 absolute -z-10"></div>
      <div className="w-[40rem] h-16 bg-colorOrangeDark opacity-10 bottom-4 right-0 absolute -z-10"></div>
    </motion.section>
  )
}
