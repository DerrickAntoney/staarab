import { useRef } from 'react'
import './portfolio.scss'
import {motion, useScroll, useSpring, useTransform} from 'framer-motion'

const items = [
    {
        id: 1,
        title: 'Crypto-tales',
        img: '/crypto-tales.png',
        desc: 'Crypto-tales provides insightful information on different crytocurrencies that exist world-wide. It capture their trends over the years and provide price charts. Using being news API the platform capture latest news on various cryptos.',
        url: 'https://crypto-tales.netlify.app/'
    },
    {
        id: 2,
        title: 'Socialmui',
        img: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        desc: "Socialmui provide much needed bonding among friends and families. It's a platform to those who want to get together online. Old friends can catch up here distance not withstanding. Features include, photo, text and video sharing.",
        url: 'https://socialmui.vercel.app/'
    },
    {
        id: 3,
        title: 'Next dashboard',
        img: '/next-dashboard.png',
        desc: 'Dashboards give detailed insight and aid informed decision making. This next admin provides detailed information about customers. Invoices can be created for customers. Other details include whether or not customer has made payments.',
        url: 'https://dashboardnextapp.vercel.app/'
    },
    {
        id: 4,
        title: 'Flixx Movies',
        img: '/flixxmovies.png',
        desc: 'Movies form an important part of indoor entertainment. Flixx movies provide search functionality to look for any movie ever produced. Whether Series or blockbuster movies can be querried. Its a minimal movie platform verify movie titles.',
        url: 'https://flixxmovies.vercel.app/'
    },
]

const Single = ({item}) => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target: ref,
        //offset: ['start start', 'end start']
      }
      )

    const y = useTransform(scrollYProgress, [0,1], [-100, 100])
    return (
        <section className='single'>
            <div className="container">
                <div className="wrapper">
                    <div ref={ref} className="imageContainer">
                      <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <a href={item.url} target='_blank'><button>See Demo</button></a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ['end end', 'start start']
  }
  )

   const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
   })

  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Featured Projects</h1>
            <motion.div style={{scaleX}} className='progressBar'></motion.div>
        </div>
        {
            items.map((item) => ( 
                <Single item={item} key={item.id}/>
            ))
        }
    </div>
  )
}

export default Portfolio