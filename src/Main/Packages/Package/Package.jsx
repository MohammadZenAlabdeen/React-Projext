import React from 'react'
import './PackageStyle.css'
import star from './../../../assets/star_2.svg'

const Package = ({PackagesInfo}) => {
  return (
    PackagesInfo.map(element => {
        return  <div className='Package'>
        <div className='ImgContainer'>
            <img src={element.img}></img>
            <div className='ImgText'>
                <span>{element.date}</span>
                <span>{element.people}</span>
            </div>
        </div>
        <h1>
            {element.country}
        </h1>
        <p>
            {element.content}
        </p>
        <p>
        <span>
            {element.price}
        </span>
        <span>
        <img src={star}>
            </img>
            {element.rating}
        </span>
        </p>
    </div>
    })
   
  )
}

export default Package