'use client'

import { useState } from 'react'
import Image from 'next/image'
import { InView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

import twitter from '../images/stwitter.svg'
import face from '../images/sface.svg'
import insta from '../images/sinsta.svg'
import tic from '../images/stictok.svg'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  const handleInView = (inView: boolean) => {
    if (inView) {
      setIsVisible(true)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <InView as="footer" onChange={handleInView} threshold={0.2}>
      <motion.div
        className="w-full h-fit lg:h-96 py-8 bg-[url('../images/spyrofooter.png')] bg-cover"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <div className="w-sm mx-auto h-fit md:w-md lg:w-lg lg:h-fit flex flex-col items-center gap-20">
          {/* top */}
          <motion.div
            className="w-[90%] lg:w-[60%] flex flex-col items-center gap-6"
            variants={itemVariants}
          >
            <h1 className="text-3xl font-extrabold text-colorOrange">SPYRO</h1>
            <p className="text-sm text-center">
              Join us today and experience the transformative power of our
              fitness classes. Don`t wait to start your fitness journey. Take
              the first step towards a healthier, stronger you. Let`s sweat,
              have fun, and make fitness a way of life together!
            </p>
            {/* socials */}
            <motion.div
              className="flex items-center gap-2"
              variants={itemVariants}
            >
              <Image src={face} alt="" className="" />
              <Image src={twitter} alt="" className="" />
              <Image src={insta} alt="" className="" />
              <Image src={tic} alt="" className="" />
            </motion.div>
          </motion.div>

          {/* bottom */}
          <motion.div
            className="w-full flex flex-col items-center gap-5"
            variants={itemVariants}
          >
            <div className="w-full h-[0.15rem] bg-gray-400"></div>
            <span className="text-sm">SPYRO 2023. All rights reserved.</span>
          </motion.div>
        </div>
      </motion.div>
    </InView>
  )
}
