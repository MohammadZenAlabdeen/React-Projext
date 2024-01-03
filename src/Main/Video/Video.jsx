import React from 'react'
import './VideoStyle.css'

const Video = ({title,button,VideoBg}) => {
  return (
    <section className='VideoSection'>
        <img src={VideoBg} id='VideoBg'></img>
        <div className='Container'>
            <div className='Inner'>
            <h1>
                {title}
            </h1>
            <div className='PlayButton'>
                <img src={button}></img>
            </div>
            </div>

        </div>
    </section>
  )
}

export default Video