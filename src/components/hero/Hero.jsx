import { motion } from 'framer-motion'
import './hero.scss'

const textVariants = {
    initial: {
        x: -500,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        }
    }
}

const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} initial='initial' animate='animate'>
                <motion.h2 variants={textVariants}>STAARAB CREATIONS</motion.h2>
                <motion.h1 variants={textVariants}>Web Development and UI Design</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                    <button variants={textVariants}>See the Latest Work</button>
                    <button variants={textVariants}>Contact Us</button>
                </motion.div>
                <motion.img variants={textVariants} animate='scrollButton' src='/scroll.png'/>
            </motion.div>
            <div className="slidingTextContainer">
                Turning Vision Into Reality With Code And Design
            </div>
            <div className="imageContainer">
                <img src='./hero.png' alt=''/>
            </div>
        </div>
    </div>
  )
}

export default Hero