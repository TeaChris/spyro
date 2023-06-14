'use client'

import { useState } from 'react'
import Image from 'next/image'
import { InView, useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { MdOutlineSendTimeExtension } from 'react-icons/md'
import { CiTimer } from 'react-icons/ci'
import { Classes, classes } from '../../data'
import Button from './Button'

export default function ClassesComponent() {
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
        className="w-full h-fit lg:h-[40rem] py-8 bg-black relative"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        <div
          ref={ref}
          className="w-sm md:w-md lg:w-lg mx-auto h-full flex flex-col items-center gap-8 bg-transparent"
        >
          <h4 className="text-3xl lg:text-4xl capitalize">classes</h4>
          <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-4">
            {classes.map((item: Classes) => {
              const {
                image,
                name,
                student,
                title,
                time,
                instructor,
                numberOfClasses,
                diff,
              } = item
              return (
                <motion.div
                  key={name}
                  className="lg:w-80 h-fit flex flex-col items-start gap-3"
                  variants={itemVariants}
                >
                  <div className="w-full h-60">
                    <div className="w-full h-28 bg-colorOrange rounded-t-lg px-2 py-2 relative">
                      <Image
                        src={image}
                        alt=""
                        className="w-full h-56 object-cover"
                      />
                    </div>
                  </div>

                  <div className="w-full flex items-center justify-between">
                    <div className="w-fit h-fit flex items-center gap-4">
                      <div className="w-3 aspect-square bg-colorOrange rounded-full"></div>
                      <h6 className="text-lg capitalize">{name}</h6>
                    </div>

                    <div className="flex items-center gap-2">
                      <MdOutlineSendTimeExtension />
                      <h6 className="text-lg capitalize">{student}</h6>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <h5 className="text-2xl capitalize">{title}</h5>
                    <div className="flex items-center gap-1">
                      <CiTimer />
                      <p className="text-sm">{time}H</p>
                    </div>
                  </div>

                  <div>
                    <p className="capitalize">Instructor: {instructor}</p>
                  </div>

                  <div className="flex flex-col items-start gap-3">
                    <p>No. of classes: {numberOfClasses}</p>
                    <p className="capitalize">Difficulty: {diff}</p>
                  </div>

                  <div className="w-full h-fit flex items-center justify-between">
                    <Button
                      text="learn more"
                      className="w-36 capitalize relative bg-colorOrange text-white py-2 transform skew-x-12"
                    />
                    <Button
                      text="start free trial"
                      className="w-40 capitalize relative transparent border border-colorOrange text-white py-2 transform skew-x-12"
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>
          <Button
            text="see all"
            className="w-36 capitalize relative bg-colorOrange text-white py-2 transform skew-x-12"
          />
        </div>

        {/* background */}
        <div className="w-60 h-16 bg-colorOrangeDark opacity-10 bottom-32 left-0 absolute -z-10"></div>
        <div className="w-[30rem] h-16 bg-colorOrangeDark opacity-10 bottom-4 left-0 absolute -z-10"></div>
      </motion.div>
    </InView>
  )
}
