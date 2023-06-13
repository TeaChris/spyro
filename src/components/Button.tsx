'use client'

import { motion } from 'framer-motion'

const buttonVariants = {
  hover: {
    scale: 1.1,
    backgroundColor: '#ff4300',
    color: '#fff',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
  },
  tap: {
    scale: 0.9,
    backgroundColor: '#047857',
    color: '#fff',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
  },
}

interface ButtonProps {
  text: string
  className:string
}

const Button: React.FC<ButtonProps> = ({ text,className }) => {
  return (
    <motion.button
      className={className}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      {text}
    </motion.button>
  )
}

export default Button
