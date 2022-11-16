import React from 'react'
import SocialMedia from './SocialMedia'
import { motion } from "framer-motion"

const Hero = () => {
  return (
        <div className="hero">
            <motion.h5 animate={{x: 0}} initial={{x: -400}} transition={{ delay: 0.8 }}>Hello 😉, My name is</motion.h5>
            <motion.h2 animate={{x: 0}} initial={{x: -600}} transition={{ delay: 0.8 }}>Imam Rifai</motion.h2>
            <div className="row">
                <motion.div animate={{y: 0}} initial={{y: -700}} transition={{ delay: 1 }} className="col-satu">
                    <img src="assets/photo.png" alt="imam rifai" />
                </motion.div>
                <motion.div animate={{x: 0}} initial={{x: 700}} transition={{ delay: 1.3 }} className="col-dua">
                    <h3>Fullsatck Web Developer</h3>
                    <a href='/' className='contact_me'>Contact me 📧</a>
                    <SocialMedia />
                </motion.div>
            </div>
        </div>
  )
}

export default Hero