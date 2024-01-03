import React from 'react'
import star from './../../../assets/star.svg'
import './ItemStyle.css'
import user from './../../../assets/user-avatar.svg'
import calender from './../../../assets/uil_calender.svg'

const Item = ({info}) => {
  return (
    info.map(element=>{
        return <div className='Item'>
            <div className='Images'>
            <img src={element.img}></img>
        <div className='Icon'>
            <img src={element.icon}>
            </img>
        </div>
            </div>
        
        <div className='Info'>
            <p>
                <span>
                    <img src={calender}></img>
                    {element.days}</span>
                <span><img src={user}></img>
                    {element.people}</span>
            </p>
            <div className='CountryRating'>
            <h1>
                {element.country}
            </h1>
            <div className='Rating'>
                <img src={star}></img>
                <img src={star}></img>
                <img src={star}></img>
                <img src={star}></img>
                <img src={star}></img>
            </div>
            </div>
        </div>
        <p>
            {element.description}
        </p>
        <button>
            {element.button}
        </button>
    </div>
    })

  )
}

export default Item