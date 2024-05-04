import './portfolio.scss'
import {motion, useScroll} from 'framer-motion'

const items = [
    {
        id: 1,
        title: 'Crypto-tales',
        img: '/crypto-tales.png',
        desc: 'Crypto-tales provides insightful information on different crytocurrencies that exist world-wide. It capture their trends over the years and provide prices chart. Using being news API the platform capture latest news on various cryptos'
    },
    {
        id: 2,
        title: 'Socialmui',
        img: 'https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        desc: 'Crypto-tales provides insightful information on different crytocurrencies that exist world-wide. It capture their trends over the years and provide prices chart. Using being news API the platform capture latest news on various cryptos'
    },
    {
        id: 3,
        title: 'Next Admin dashboard',
        img: '/next-dashboard.png',
        desc: 'Crypto-tales provides insightful information on different crytocurrencies that exist world-wide. It capture their trends over the years and provide prices chart. Using being news API the platform capture latest news on various cryptos'
    },
    {
        id: 4,
        title: 'Flixx Movies',
        img: '/flixxmovies.png',
        desc: 'Crypto-tales provides insightful information on different crytocurrencies that exist world-wide. It capture their trends over the years and provide prices chart. Using being news API the platform capture latest news on various cryptos'
    },
]

const Single = ({item}) => {
    return (
        <section className='single'>
            {item.title}
        </section>
    )
}

const Portfolio = () => {

  const {scrollYProgress} = useScroll()
  return (
    <div className='portfolio'>
        <div className="portfolio">
            <h1>Featured Works</h1>
            <div className='progressBar'></div>
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