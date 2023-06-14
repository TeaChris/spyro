'use client'

import { motion } from 'framer-motion'
import Button from './Button'

export default function Hero() {
  return (
    <motion.section
      className="w-full h-fit lg:h-72 py-6 mt-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-sm h-fit lg:h-full mx-auto md:w-md lg:w-lg p-4 bg-colorOrange flex flex-col items-center gap-8 lg:flex lg:flex-row lg:justify-center">
        {/* 1 */}
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-4">
          <motion.h3
            className="text-2xl lg:text-3xl first-letter:capitalize"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Are you ready to change?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Challenge your strength. Stretch your body. Breathe easy. Our team
            of world-class instructors will empower
          </motion.p>
        </div>
        <div className="w-full lg:w-[40%]">
          <Button
            text="start your free trial"
            className="w-fit h-fit py-3 px-3 bg-transparent border border-white hover:bg-colorOrange duration-300 ease-in-out first-letter:capitalize"
          />
        </div>
      </div>
    </motion.section>
  )
}
