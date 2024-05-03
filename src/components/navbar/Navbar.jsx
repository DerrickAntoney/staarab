import Sidebar from '../sidebar/Sidebar'
import './navbar.scss'
import {motion} from 'framer-motion'
 
const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar/>
       <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Osano Dev</motion.span>
        <div className="social">
          <a href="#"><img src='/youtube.png'/></a>
          <a href="#"><img src='/twitterx.png'/></a>
          <a href="#"><img src='/behance.png'/></a>
          <a href="#"><img src='/github.png'/></a>
          <a href="#"><img src='/linkedin.png'/></a>
        </div>
        </div> 
    </div>
  )
}

export default Navbar