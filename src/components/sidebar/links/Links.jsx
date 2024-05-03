
const Links = () => {

  const items = [
    'Homepage',
    'Services',
    'Portfolio',
    'Contact',
    'About', 
  ]

  return (
    <div className='links'>{
      items.map((item, index) => {
        return (
          <a href={`#${item}`} key={index} className='item'>{item}</a>
        )
      })
    }</div>
  )
}

export default Links