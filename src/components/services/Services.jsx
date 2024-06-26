import { useRef } from 'react'
import './services.scss'
import {motion, useInView} from 'framer-motion'

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
}

const Services = () => {

  const ref = useRef()
  
  const isInView = useInView(ref, {margin: '-100px'})
  
  
  return (
    <motion.div className='services' variants={variants} initial='initial' 
    //whileInView='animate'
    ref={ref} animate={isInView && 'animate'}>
        <div className='textContainer'>
            <p>We focus on helping your brand grow
                <br/> and move forward</p>
            <hr/>
        </div>
        <motion.div className='titleContainer' variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1><motion.b whileHover={{color: 'orange'}}>Unique</motion.b> Ideas</h1>
            </div>
            <div className="title">
                <h1><motion.b whileHover={{color: 'orange'}}>For Your</motion.b> Business</h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className='listContainer' variants={variants}>
            <motion.div className="box" whileHover={{background: 'lightcyan', color:'black'}}>
                <h2>Branding</h2>
                <p>Our processes are designed to identify and project your brand identity. Your uniqueness should must out in order for people to pick your offering.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: 'lightcyan', color:'black'}}>
                <h2>Design</h2>
                <p>At design a lot is at stake and this is made apparent to our team. Customer needs must reign and come to the fore. Again your business needs must be met at targeted users' benefit.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: 'lightcyan', color:'black'}}>
                <h2>Development</h2>
                <p>Aligning with your vision and goals our esteemed developers will move mountains to bit our set schedules. All this is geared towards your first launch and user feedback.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: 'lightcyan', color:'black'}}>
                <h2>Marketing</h2>
                <p>Upon completion of development attention shifts to Search Engine Optimization. We have a great network of very good Ads expert. With your input we will engage to put the platform where the users needs it.</p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services