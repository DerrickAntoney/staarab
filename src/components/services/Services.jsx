import './services.scss'
import {motion} from 'framer-motion'

const Services = () => {
  return (
    <motion.div className='services'>
        <motion.div className='textContainer'>
            <p>We focus on helping your brand grow
                <br/> and move forward</p>
            <hr/>
        </motion.div>
        <motion.div className='titleContainer'>
            <div className="title">
                <img src="/people.png" alt="" />
            </div>
        </motion.div>
        <motion.div className='listContainer'></motion.div>
    </motion.div>
  )
}

export default Services