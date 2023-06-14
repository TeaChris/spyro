'use client'

import Image from 'next/image'
import { useState } from 'react'
import { InView, useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import play from '../images/play.png'
import app from '../images/app.png'
import mobile from '../images/mobile.png'

export default function DownloadComponent() {
  const [isVisible, setIsVisible] = useState(false)
  const { ref, inView } = useInView()

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
    <InView as="section" onChange={handleInView} threshold={0.2}>
      <motion.div
        className="w-full h-fit lg:h-[30rem] py-8 bg-colorOrange mt-16"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <div
          ref={ref}
          className="w-sm mx-auto h-fit lg:h-full md:w-md lg:w-lg flex flex-col items-center gap-12 lg:flex lg:flex-row"
        >
          {/* left */}
          <motion.div
            className="w-full lg:w-1/2 h-fit flex flex-col items-start gap-5"
            variants={itemVariants}
          >
            <h3 className="first-letter:capitalize text-4xl lg:text-5xl leading-normal lg:leading-normal">
              download the most loved fitness app
            </h3>

            <p className="text-lg font-bold">
              Start your fitness journey with us. Join the cult!
            </p>

            {/* image */}
            <motion.div className="w-full flex items-center justify-between">
              <Image src={play} alt="" className="" />
              <Image src={app} alt="" className="" />
            </motion.div>
          </motion.div>

          {/* right */}
          <motion.div className="w-full lg:w-1/2" variants={itemVariants}>
            <Image src={mobile} alt="" className="" />
          </motion.div>
        </div>
      </motion.div>
    </InView>
  )
}
