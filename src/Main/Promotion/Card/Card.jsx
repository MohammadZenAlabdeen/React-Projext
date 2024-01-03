import React from 'react'
import './CardStyle.css'

const Card = ({img,title,info}) => {
    let x=100/info.length;
  return (
    <div className='CardDiv'>
        <img src={img}/>
        <div className='CardText'>
            <span>
            Promotion
            </span>
            <h1>
                {title}
            </h1>
            <button>
            View Packages
            </button>
        </div>
    </div>
  )
}

export default Card