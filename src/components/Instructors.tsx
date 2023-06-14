'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { instructors, Instructors } from '../../data'

export default function Instructors() {
  return (
    <motion.section
      className="w-full h-fit lg:h-[35rem] py-8 mt-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-sm md:w-md lg:w-lg mx-auto h-full flex flex-col items-center gap-8 bg-transparent">
        <h4 className="text-3xl lg:text-4xl capitalize">Instructors</h4>
        <motion.div
          className="w-full h-fit grid grid-cols-2 lg:grid-cols-4 items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {instructors.map((instructor: Instructors) => {
            const { image, name, stack } = instructor
            return (
              <div key={name} className="flex flex-col items-center gap-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={image}
                    alt={name}
                    className="w-40 h-40 object-cover md:w-full md:h-full"
                  />
                </motion.div>
                <motion.h6
                  className="capitalize"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {name}
                </motion.h6>
                <motion.span
                  className="capitalize"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {stack}
                </motion.span>
              </div>
            )
          })}
        </motion.div>
      </div>

      {/* background */}
      <div className="w-60 h-16 bg-colorOrangeDark opacity-10 bottom-32 left-0 absolute -z-10"></div>
      <div className="w-[25rem] lg:w-[40rem] h-16 bg-colorOrangeDark opacity-10 bottom-4 left-0 absolute -z-10"></div>
    </motion.section>
  )
}
