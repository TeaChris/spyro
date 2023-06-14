'use client'

import Button from './Button'
import Navbar from './Navbar'

import { motion } from 'framer-motion'

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

export default function Header() {
  return (
    <header className="w-full h-[40rem] lg:h-[45rem] bg-[url('../images/header.jpeg')] bg-cover">
      <Navbar />
      <motion.div
        className="w-sm mx-auto md:w-md lg:w-lg mt-16 lg:mt-24 flex flex-col items-start gap-8 pt-0 lg:pt-12"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="w-full lg:w-[35rem] flex flex-col items-center lg:items-start gap-8"
          variants={item}
        >
          <h1 className="text-5xl lg:text-7xl font-orbitron font-bold first-letter:capitalize leading-relaxed">
            <span className="text-colorOrange">unleash</span> your inner athlete
          </h1>
        </motion.div>

        <motion.div className="w-full lg:w-[35rem] h-fit" variants={item}>
          <p className="text-lg">
            Get ready to sweat it out and achieve your fitness goals with our
            high-energy fitness classes! Our classes are designed to cater to
            all fitness levels and provide a fun and motivating environment to
            help you reach your peak performance.
          </p>
        </motion.div>
        <motion.div variants={item}>
          <Button
            text="start your free trial"
            className="w-fit h-fit p-4 bg-colorOrange first-letter:capitalize"
          />
        </motion.div>
      </motion.div>
    </header>
  )
}
