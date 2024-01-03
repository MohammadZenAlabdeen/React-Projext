import React from 'react'
import './HeroStyle.css'

const Hero = ({image,title,font,color,fontSize}) => {
const style={
  color:`${color}`,
  fontFamily:`${font}`,
  fontSize:`${fontSize}`
}
  return (
    
    <div className='hero'>
        <img src={image}></img>
        <div className='title'>
        <h1 style={style}>{title}</h1>
        </div>

    </div>
    

    
  )
}

export default Hero