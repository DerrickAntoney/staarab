import { useState } from 'react'
import { motion } from 'framer-motion'

import './sidebar.scss'
import Links from './links/Links'
import ToggleButton from './toggleButton/ToggleButton'

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  
  const variants = {
    open:{
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
        damping: 40,
        delay: 0.5,
        when: "beforeChildren"
      }
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        delay: 0.5,
        when: "beforeChildren"
      }
    }
  }
  return (
    <motion.div className='sidebar' animate={open ? 'open' : 'closed'}>
        <motion.div className='bg' variants={variants}>
            <Links/>
        </motion.div>
        <ToggleButton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar